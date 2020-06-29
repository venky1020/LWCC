/*
        Name:          	AthenaCustomJS
        @Author:	Cove Professional Support (JF)
        @Created Date:
        @Description:	Common Script resource used in search
Change History
***********************************************************************************************************************************************
    ModifiedBy      JIRA #     Date          Requested By    Description                                                                Tag
***********************************************************************************************************************************************
    Sathish         KB-2209    12/12/2017    Pattabhi        Coveo Package upgrade                                                      T01

    Sathish         KB-2231    20/05/2018    Pattabhi        Content Recently Visisted                                                  T02

    Sathish         KB-2235    20/04/2018    Pattabhi        Addind Okta ID Custom Dimension                                            T03
*/

Coveo.AthenaCustom = Coveo.AthenaCustom || (Coveo.AthenaCustom = {});

Coveo.AthenaCustom.previousQuery = '';

Coveo.AthenaCustom.CommonEventBindings = {
    handleAfterComponentsInit: function(e) {
        var placeholder = Coveo.$('.CoveoSearchbox').attr('placeholder');

        Coveo.$('.CoveoSearchbox .magic-box-input input').attr('placeholder', placeholder);

        var defaultUpdateSuggestions = Coveo.MagicBox.SuggestionsManager.prototype.updateSuggestions;
        Coveo.MagicBox.SuggestionsManager.prototype.updateSuggestions = function (suggestions) {
            var _self = this;
            defaultUpdateSuggestions.call(_self, suggestions);
            Coveo.$(_self.element).parent().toggleClass('magic-box-hasSuggestion', suggestions.length > 0);
        }



        // Fix for quickview when we have folding document
        // HACK FOR JIRA SEARCHAPI-488 (coveo internal jira)
        // Remove this whole block when it's no longer needed
        Coveo.$('.CoveoSearchInterface').on('preprocessResults preprocessMoreResults', function(e, args) {
            args.results.results.forEach(function(r) {
                r.raw.urihash = r.raw.sysurihash;
                r.raw.source = r.raw.syssource;
                r.raw.collection = r.raw.syscollection;
                r.raw.date = r.raw.sysdate;
                r.raw.mailbox = r.raw.sysmailbox;
                r.raw.filetype = r.raw.sysfiletype;
                r.childResults.forEach(function (z) {
                    z.raw.urihash = z.raw.sysurihash;
                    z.raw.source = z.raw.syssource;
                    z.raw.collection = z.raw.syscollection;
                    z.raw.date = z.raw.sysdate;
                    z.raw.mailbox = z.raw.sysmailbox;
                });
            });
        });
    },
    handleBeforeInit: function (e){
        if(sforce && sforce.console && sforce.console.isInConsole()){
            Coveo.$('.kbHeaderSection').addClass('hidden');
            Coveo.$("#search").addClass('noKbHeader');
        }

        // Add custom option on facet to autoCollapse during first initialization.
        Coveo.Facet.options.autoCollapseFacet = Coveo.ComponentOptions.buildBooleanOption({ defaultValue: false });
        var defaultBuildFacetContent = Coveo.Facet.prototype.buildFacetContent;
        Coveo.Facet.prototype.buildFacetContent = function () {
            var self = this;
            defaultBuildFacetContent.call(self);
            if(self.options.autoCollapseFacet){
                self.facetHeader.collapseFacet();
            }
        };
    },
    handleBuildingQuery: function (e, data) {
        data.queryBuilder.fieldsToExclude = ['allfieldvalues', 'infainternalnotes' ];
    },
    handlePreprocessResults: function (e, data){
        Coveo._.each(data.results.results, function (r, idx) {
            var infa_docType = r.raw.infadocumenttype ? r.raw.infadocumenttype : '';
            var infa_permissionType = r.raw.infapermissiontype ? r.raw.infapermissiontype.toLowerCase() : '';
            var infa_moderationStatus = r.raw.infamoderationstatus ? r.raw.infamoderationstatus : '';
            if(r.raw.connectortype == 'SharePoint') {
                //IsUserAuthenticated == true means the logged user is not a guest user thus we are on Internal KB page
                var re = /(kb(?:-?test)?(?:crawl)?.informatica.com)/gi
                r.clickUri = Coveo.SFContext.IsUserAuthenticated == 'true' && Coveo.SFContext.UserType == 'Standard' && Coveo.SFContext.Current_Page != 'AthenaPanelForCases' ?
                                r.clickUri.replace(re, Coveo.SFContext.KBInternalHost).replace('https', 'http') :
                                    ((infa_permissionType=='internal' || (infa_permissionType == 'public' && infa_moderationStatus!=0)) ?
                                        r.clickUri.replace(re, Coveo.SFContext.KBInternalHost).replace('https', 'http') :
                                        r.clickUri.replace(re, Coveo.SFContext.KBExternalHost));
                r.ClickUri = r.clickUri;
                r.PrintableUri = r.printableUri = r.clickUri;

            }
            if(/(\bKB\b|\bIPSKB\b|\bPAMEOL\b|\bSupportTV\b|\bExpertAssistant\b)/i.test(infa_docType)) {
                //r.hasHtmlVersion = true;
                r.clickUri = (data.query.q ? (r.clickUri + '?myk=' + data.query.q) : r.clickUri);
                // temporary hack to fix KB Title ...
                r.title = (r.title =='Login' ? (r.raw.infakbtitle ? r.raw.infakbtitle : r.title) : r.title);
            }
            r.raw.infarating = (r.raw.infakbrating ? r.raw.infakbrating : r.raw.infarating);
            r.raw.athenaauthor = (r.raw.athenaauthor ? r.raw.athenaauthor : r.raw.sysauthor);
        });
    },
    handleNewResultsDisplayed: function (e, data){
        if(/(\bpdf\b|\bxls\b|\btxt\b|\bhtml\b|\bzip\b|\bxml\b|\bcs\w+\b)/i.test(data.result.raw.sysfiletype)){
            Coveo.$(data.item).find('.CoveoIcon').removeClass('coveo-icon').addClass('athena-kb-icon');
        }
	
		if(data.result.raw.sysfiletype === 'html'){		
            Coveo.$(data.item).find('.CoveoQuickview').hide();
        }

        Coveo.$(data.item).find('.CoveoIcon').addClass(data.result.raw.infadocumenttype ? data.result.raw.infadocumenttype : '');
	},
    handleQuerySuccess: function (e, data) {
        if (data.results.exception && (data.results.exception.code == 'InvalidSyntax' || data.results.exception.code == 'InvalidExactPhrase')) {
            if(Coveo.AthenaCustom.previousQuery != data.query.q){
                var noQuerySyntaxQuery = '<@- ' + data.queryBuilder.expression.build().replace(/(<@-|-@>)/g, '') + ' -@>';
                Coveo.AthenaCustom.previousQuery = noQuerySyntaxQuery;
                setTimeout(function(){
                    Coveo.$("#search").coveo('state', 'q', noQuerySyntaxQuery);
                    Coveo.$('#search').coveo('executeQuery');
                }, 0);
                    
            }
        } else {
            Coveo.AthenaCustom.previousQuery = '';
        }
    },
    handleQueryError: function (e, data) {
        if (data.error.type == 'InvalidQueryExpressionException') {
            if(Coveo.AthenaCustom.previousQuery != data.query.q){
                
                var noQuerySyntaxQuery = '<@- ' + data.queryBuilder.expression.build().replace(/(<@-|-@>)/g, '') + ' -@>';
                Coveo.AthenaCustom.previousQuery = noQuerySyntaxQuery;
                setTimeout(function(){
                    Coveo.$("#search").coveo('state', 'q', noQuerySyntaxQuery);
                    Coveo.$('#search').coveo('executeQuery');
                }, 0);
            }
        } else {
            Coveo.AthenaCustom.previousQuery = '';
        }
    }
}
Coveo.AthenaCustom.KBSearchEventBindings = {
    handleAfterComponentsInit: function(e) {

    },
    handleBeforeInit: function (e, data){

        // Always open click URI in new tab by default.
        var preferences = new Coveo.LocalStorageUtils(Coveo.ResultsPreferences.ID);
        var prefObj = preferences.load() || {} ;
        prefObj.alwaysOpenInNewWindow = true;
        preferences.save(prefObj);

        var originalLeave = $.fn.popover.Constructor.prototype.leave;
        Coveo.$.fn.popover.Constructor.prototype.leave = function(obj) {
            var self = obj instanceof this.constructor ?
                obj : Coveo.$(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)
            var container, timeout;

            originalLeave.call(this, obj);

            if (obj.currentTarget) {
                container = Coveo.$(obj.currentTarget).siblings('.popover')
                timeout = self.timeout;
                container.one('mouseenter', function() {
                    //We entered the actual popover ï¿½ call off the dogs
                    clearTimeout(timeout);
                    //Let's monitor popover content instead
                    container.one('mouseleave', function() {
                        Coveo.$.fn.popover.Constructor.prototype.leave.call(self, self);
                    });
                });
            }
        };

        // Fix quickview
        var defaultWriteToIFrame = Coveo.QuickviewDocument.prototype.writeToIFrame;
        Coveo.QuickviewDocument.prototype.writeToIFrame = function (iframe, content) {
            var toWrite = content;

            if (typeof content == "object") {
                toWrite = content.getElementsByTagName("html")[0].outerHTML;
            }
            toWrite = toWrite.replace(/kb(test)?crawl.informatica.com/gi, Coveo.SFContext.KBExternalHost);

            defaultWriteToIFrame.call(this, iframe, toWrite);
        };

        // add a trigger newResultDisplayed event when clicking on show more (ResultFolding)
        // this will allow us to keep the same logic for Athena custom icon
        var defaultAutoCreateComponentsInsideResult = Coveo.ResultFolding.prototype.autoCreateComponentsInsideResult;
        Coveo.ResultFolding.prototype.autoCreateComponentsInsideResult = function (element, result) {
            var _self = this;
            defaultAutoCreateComponentsInsideResult.call(_self, element, result);

            var args = {
                result: result,
                item: element
            };
            Coveo.$(_self.element).trigger(Coveo.ResultListEvents.newResultDisplayed, args);
        }

        var defaultTabHandleClick = Coveo.Tab.prototype.handleClick;
        Coveo.Tab.prototype.handleClick = function (e){
            if(this.options.id === "PAM" && !Coveo.SFContext.IsOktaUserAuthenticated && Coveo.SFContext.IsUserAuthenticated !== "true"){
                //do nothing
                e.preventDefault();
            } else {
                defaultTabHandleClick.call(this, e);
            }
        }
    },
    handleStateChange: function (e, data) {
        document.cookie = "CoveoSearchUrl=" + window.location.href;
    },
    //------------------------------------------------------------------------------<T01>
    //handleTabChange: function (e, data) {
     handleTabChange: function (data) {
    //------------------------------------------------------------------------------</T01>

    },
    handleDoneBuildingQuery: function (e, data) {
        data.queryBuilder.searchHub = (Coveo.SFContext.IsUserAuthenticated == 'false' ?
                                        (Coveo.SFContext.IsOktaUserAuthenticated ? 'AthenaKBSearchPublicAuthenticated' : data.queryBuilder.searchHub) :
                                        data.queryBuilder.searchHub);

    },
    handleChangeAnalyticsCustomData: function (e, data) {
        data.originLevel1 = (Coveo.SFContext.IsUserAuthenticated == 'false' ?
                                        (Coveo.SFContext.IsOktaUserAuthenticated ? 'AthenaKBSearchPublicAuthenticated' : data.originLevel1) :
                                        data.originLevel1);
        if(Coveo.SFContext.OktaUserEmail){
          data.metaObject.OktaUserEmail = Coveo.SFContext.OktaUserEmail;
        }
        //------------------------------------------------------------------------------<T03>
        if(Coveo.SFContext.OktaUserID){
          data.metaObject.OktaUserID = Coveo.SFContext.OktaUserID;
        }
        //------------------------------------------------------------------------------</T03>

    }
}
Coveo.AthenaCustom.KBHomeEventBindings = {
}
Coveo.AthenaCustom.PanelForCasesEventBindings = {
    handleBeforeInit: function (e){

    },
    handleAfterComponentsInit: function (e){
        var attachedResultsTab = Coveo.$('.CoveoAttachedResultsTab');
        if(attachedResultsTab.parent('.CustomBoxPopup').length > 0) {
            //------------------------------------------------------------------------------<T01>
            //Coveo.BoxCurrentTab.prototype.handleTabChange = function (e, args) {
            Coveo.BoxCurrentTab.prototype.handleTabChange = function (args) {
            //------------------------------------------------------------------------------</T01>
                var _this = this;
                var selectedTabId = args.value;
                if (Coveo.Utils.isNonEmptyString(selectedTabId)) {
                    Coveo.$(_this.root).find(Coveo.Component.computeSelectorForType(Coveo.Tab.ID)).each(function (index, elem) {
                        var tab = Coveo.Component.get(elem, Coveo.Tab);
                        if (tab.options.id == selectedTabId && selectedTabId != 'AttachedResults' && selectedTabId != "UserAction") {
                            if (_this.searchInterface.isNewDesign()) {
                                _this.nearestBoxSidePanel.setTitle(Coveo.$(tab.element).text());
                            }
                            else {
                                _this.nearestBoxSidePanel.setTitle(Coveo.$(Coveo.$(tab.element).html()));
                            }
                            _this.nearestBoxSidePanel.close();
                        }
                    });
                }
            };
        }

        Coveo.$('.athena-current-tab').on('click', function (e){
            var tab = Coveo.$(this).data('id');
            var firstTab = Coveo.$('.CoveoTab').first().data('id');
            tab = (tab && tab != 'AttachedResults' ? tab : firstTab);
            Coveo.$('.athena-current-tab').addClass('coveo-selected');
            Coveo.$('.athena-user-action-tab').removeClass('coveo-selected');
            Coveo.$('#search').coveo('state', 't', tab);
            Coveo.$('#search').coveo('executeQuery');
        });

        Coveo.$('.CoveoUserActions').closest('.CoveoBoxPopup').on('onPopupOpen', function (e){
            Coveo.$('#search').coveo('state', 't', 'UserAction');
            Coveo.$('.athena-user-action-tab').addClass('coveo-selected');
            Coveo.$('.athena-current-tab').removeClass('coveo-selected');
            Coveo.$('.athena-attached-results-tab').removeClass('coveo-selected');
        });
    },
    handleTabChangeState: function (e, data) {
        if (data.value != 'AttachedResults' && data.value != 'UserAction') { Coveo.$('.athena-current-tab').data('id', data.value); }
        Coveo.$('.athena-current-tab').toggleClass('coveo-selected', data.value != 'AttachedResults' && data.value != 'UserAction');
        Coveo.$('.athena-attached-results-tab').toggleClass('coveo-selected', data.value == 'AttachedResults');
        Coveo.$('.athena-user-action-tab').removeClass('coveo-selected');

    }
}
Coveo.AthenaCustom.CaseCreationEventBindings = {
    handleBeforeInit: function (e){
        var defaultPicklistUpdateValues = Coveo.Picklist.prototype.updateValues;
        var defaultBuildLabel = Coveo.Field.prototype.buildLabel;
        var defaultHandleFieldChange = Coveo.Field.prototype.handleFieldChange;

        Coveo.Picklist.prototype.updateValues = function () {
            var self = this;
            defaultPicklistUpdateValues.call(self);
            if(self.options.caseField == 'Priority'){
                self.options.values = self.picklistValues ? Coveo._.without(self.picklistValues[self.options.caseField], 'Medium', 'SR') : [];
            }
        };

        Coveo.Field.options.enableFeedbackChars = Coveo.ComponentOptions.buildBooleanOption({ defaultValue: false });
        Coveo.Field.options.maxFeedbackChars = Coveo.ComponentOptions.buildNumberOption({ defaultValue: 100, min: 100 });
        Coveo.Field.prototype.buildLabel = function () {
            var self = this;
            defaultBuildLabel.call(self);
            if(self.options.isRequired && !self.requiredIndicator){
                self.requiredIndicator = Coveo.$('<span class="coveo-case-creation-required-indicator"></span>');
                self.requiredIndicator.appendTo(self.label);
            }
            if(self.options.enableFeedbackChars && !self.feedbackChars){
                self.feedbackChars = Coveo.$('<span class="coveo-case-creation-feedback-chars"></span>');
                self.feedbackChars.html(self.options.maxFeedbackChars + ' characters remaining');
                self.feedbackChars.appendTo(self.label);
            }
        };

        Coveo.Field.prototype.handleFieldChange = function () {
            var self = this;
            defaultHandleFieldChange.call(self);
            if(self.options.enableFeedbackChars){
                var currlength = Coveo.$(self.element).find(".coveo-case-field-input").val().length;
                var remaining = self.options.maxFeedbackChars - currlength;
                if(remaining < 0) {
                    self.setInvalid();
                    //self.feedbackChars.html('0 characters remaining');
                }
                self.feedbackChars.html(remaining + ' characters remaining');
            }
        }
    },
    handleDoneBuildingQuery: function (e,data) {
        //Workaround to fix IE Issue.
        if (Coveo.DeviceUtils.getDeviceName()=='IE' && data.queryBuilder.expression.build() == "$sort(criteria: relevancy)") {
               data.cancel = true;
        }

    },
	handleChangeAnalyticsCustomData: function(e, args) {
		Coveo.$('*[data-title="Subject"].coveo-filled').length > 0 ? args.metaObject.c_casesubject = Coveo.$('*[data-title="Subject"].coveo-filled .coveo-case-creation-input.coveo-case-field-input')[0].value : args.metaObject.c_casesubject = "";
		Coveo.$('*[data-title="Error Message"].coveo-filled').length > 0 ? args.metaObject.c_caseerrormessage = Coveo.$('*[data-title="Error Message"].coveo-filled .coveo-case-creation-input.coveo-case-field-input')[0].value : args.metaObject.c_caseerrormessage = "";
		Coveo.$('*[data-title="Description"].coveo-filled').length > 0 ? args.metaObject.c_casedescription = Coveo.$('*[data-title="Description"].coveo-filled .coveo-case-creation-input.coveo-case-field-input')[0].value : args.metaObject.c_casedescription = "";
	}
}


//-------------------------------------------------------------------------------<T02>
//this is the first function called to hook the eventhandler for the result items.
//for the content visited feature
//Event handler for Click event hooked to all the reuslt link
//Event handler for newResultDisplayed event hooked to show more replies link
function fnDisplayVisitedContentDetails() {
    try {
        $('#search').on('deferredQuerySuccess', function(e, result) {

            //Assign event to capture the click
            if ($("[class^='CoveoResultLink']").length != 0) {
                $("[class^='CoveoResultLink']").bind('click', fnContentVistedInsertOrUpdateData);
            }

            var elements = $('.CustomContentVisited');

            for (var k = 0; k < elements.length; k++) {
                if ($(elements[k]).attr('data-customContentURL').length > 0) {
                    var itemURL = $(elements[k]).attr('data-customContentURL').trim().toString().toLowerCase();
                    //itemURL = itemURL.split(/[?#]/)[0];
                    fnGetVisitedContentDetails(itemURL, elements[k], $.cookie("coveo_visitorId"));
                }
            }
        });

        $('.CoveoResultList').on('newResultDisplayed', fnDisplayVisitedContentDetailsForShowMore);

    } catch (err) {
        console.log('fnDisplayVisitedContentDetails : ' + err.message);
    }
}

//This fucntion will fill the data with visted date and time for all the reuslt items from local store
function fnGetVisitedContentDetails(parContentURL, parCurrentElement, parCurrentCoveoVisitorID) {
    try {

        if ($(parCurrentElement).attr('data-isChildContent').trim().toString().toLowerCase() == 'true') {
            return;
        }
        var mylocalstorage = window.localStorage;
        if (mylocalstorage.getItem("KBSearchContentVisited") === null) {

        } else {
            var varContentVisitedArray = JSON.parse(mylocalstorage.getItem('KBSearchContentVisited'));
            var varParseddata = fnContentVisitedGetVisitedDataByID(varContentVisitedArray, parContentURL)
            if (varParseddata != null) {
                var d = new Date(varParseddata.TimeStamp);
                $(parCurrentElement).text("You last visited this page on " + fnContentVistedgetCustomMonth(d) + " " + fnContentVistedgetCustomDate(d) + ", " + d.getFullYear());
                $(parCurrentElement).css({
                    display: 'block',
                    color: '#BCC3CA'
                });
            }
        }

    } catch (err) {
        console.log('fnGetVisitedContentDetails : ' + err.message);
    } finally {

    }
}

//This function will only be called when the show more replies link is clicked 
//this is very specific to jive content for now. It will get applied to others
//if the folding feature is used in other template as well.
function fnDisplayVisitedContentDetailsForShowMore(e, args) {
    try {

        if ($(args.item).attr('class').indexOf('coveo-result-folding-child-result') > -1) {
            //console.log('fnDisplayVisitedContentDetailsForShowMore -Its show more event');

            var elementsCoveoResultLink = $(args.item).find('.CoveoResultLink');
            $(elementsCoveoResultLink).bind('click', fnContentVistedInsertOrUpdateData);
        } else {
            //console.log('fnDisplayVisitedContentDetailsForShowMore -Its not show more event');
        }

    } catch (err) {
        console.log('fnDisplayVisitedContentDetailsForShowMore : ' + err.message);
    } finally {

    }
}


//This fucntion will be called, when the result link is clicked.
//It will update the currently clicked link details and its time stamp to the 
//local store. 
function fnContentVistedInsertOrUpdateData() {
    try {
        console.log('fnContentVistedInsertOrUpdateData called');
        var varcustomContentURL = "";
        var mylocalstorage = window.localStorage;
        var elements = $($(this)[0]).closest('.CoveoResult').find('.CustomContentVisited');
        if (elements.length > 0) {

            if ($(elements[0]).attr('data-customContentURL').length > 0) {
                varcustomContentURL = $(elements[0]).attr('data-customContentURL').trim().toString().toLowerCase();
            }


        }

        var currentTimeStamp = new Date();
        var currentTimeStampString = fnContentVistedgetMonth(currentTimeStamp) + '/' + fnContentVistedgetDate(currentTimeStamp) + '/' + currentTimeStamp.getFullYear() + ' ' + fnContentVistedgetHours(currentTimeStamp) + ':' + fnContentVistedgetMinutes(currentTimeStamp) + ':' + fnContentVistedgetSeconds(currentTimeStamp);
        var varCurrentLocalUserID = $.cookie("coveo_visitorId").trim().toString().toLowerCase();

        if (varcustomContentURL.length <= 0 || varcustomContentURL.length <= 0) {
            return;
        }



        //check key is present or not in local storage.
        if (mylocalstorage.getItem("KBSearchContentVisited") === null) {

            var varContentVisitedArray = [{
                UserLocalID: varCurrentLocalUserID,
                ContentURL: varcustomContentURL,
                TimeStamp: currentTimeStampString
            }];
            mylocalstorage.setItem('KBSearchContentVisited', JSON.stringify(varContentVisitedArray));
        } else {

            var oldestTimeStamp = currentTimeStamp;
            var oldestTiemStampIndex = 0;
            var hasMatch = false;
            var varContentVisitedArray = JSON.parse(mylocalstorage.getItem('KBSearchContentVisited'));

            if (varContentVisitedArray.length > 100) {

                for (var index = 0; index < varContentVisitedArray.length; ++index) {

                    var contentVistedDetails = varContentVisitedArray[index];

                    if ((new Date(contentVistedDetails.TimeStamp)) < oldestTimeStamp) {

                        oldestTimeStamp = contentVistedDetails.TimeStamp;
                        oldestTiemStampIndex = index;
                    }
                }

                varContentVisitedArray.splice(oldestTiemStampIndex, 1);

            }



            for (var index = 0; index < varContentVisitedArray.length; ++index) {

                var contentVistedDetails = varContentVisitedArray[index];

                if (contentVistedDetails.ContentURL == varcustomContentURL) {
                    hasMatch = true;
                    varContentVisitedArray[index].TimeStamp = currentTimeStampString;
                    break;
                }
            }

            if (!hasMatch) {
                var varCurrentClickDetials = {
                    UserLocalID: varCurrentLocalUserID,
                    ContentURL: varcustomContentURL,
                    TimeStamp: currentTimeStampString
                };
                varContentVisitedArray[varContentVisitedArray.length] = varCurrentClickDetials
            }

            window.localStorage.setItem('KBSearchContentVisited', JSON.stringify(varContentVisitedArray));

        }


    } catch (err) {
        console.log('fnContentVistedInsertOrUpdateData : ' + err.message);
    }
}

//fuction to convert the month string to two digit string
function fnContentVistedgetMonth(pardate) {
    try {
        var month = pardate.getMonth() + 1;
        return month < 10 ? '0' + month : '' + month;
    } catch (err) {
        console.log('fnContentVistedgetMonth : ' + err.message);
    }
}

//fuction to convert the date string to two digit string
function fnContentVistedgetDate(pardate) {
    try {
        var date = pardate.getDate();
        return date < 10 ? '0' + date : '' + date;
    } catch (err) {
        console.log('fnContentVistedgetDate : ' + err.message);
    }
}

//fuction to convert the hours string to two digit string
function fnContentVistedgetHours(pardate) {
    try {
        var hours = pardate.getHours();
        return hours < 10 ? '0' + hours : '' + hours;
    } catch (err) {
        console.log('fnContentVistedgetHours : ' + err.message);
    }
}

//fuction to convert the minutes string to two digit string
function fnContentVistedgetMinutes(pardate) {
    try {
        var minutes = pardate.getMinutes();
        return minutes < 10 ? '0' + minutes : '' + minutes;
    } catch (err) {
        console.log('fnContentVistedgetMinutes : ' + err.message);
    }
}

//fuction to convert the seconds string to two digit string
function fnContentVistedgetSeconds(pardate) {
    try {
        var seconds = pardate.getSeconds();
        return seconds < 10 ? '0' + seconds : '' + seconds;
    } catch (err) {
        console.log('fnContentVistedgetSeconds : ' + err.message);
    }
}

//fuction to convert the month to custom format
function fnContentVistedgetCustomMonth(pardate) {
    try {
        var months = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        return months[pardate.getMonth()];

    } catch (err) {
        console.log('fnContentVistedgetCustomMonth : ' + err.message);
    }
}



//fuction to convert the date to custom format
function fnContentVistedgetCustomDate(pardate) {
    try {
        var onlydate = pardate.getDate();

        return onlydate;

    } catch (err) {
        console.log('fnContentVistedgetCustomDate : ' + err.message);
    }
}

//fuction gets the content details from local store using its id and returns it to 
//the caller.
function fnContentVisitedGetVisitedDataByID(parContentVisitedArray, parURL) {
    try {
        var hasMatch = false;

        for (var index = 0; index < parContentVisitedArray.length; ++index) {

            var contentVistedDetails = parContentVisitedArray[index];

            if (contentVistedDetails.ContentURL == parURL) {
                hasMatch = true;
                return contentVistedDetails;
            }
        }
    } catch (err) {
        console.log('fnContentVisitedGetVisitedDataByID : ' + err.message);
    } finally {
        if (!hasMatch) {
            return null;
        }
    }
}
//-------------------------------------------------------------------------------<T02>