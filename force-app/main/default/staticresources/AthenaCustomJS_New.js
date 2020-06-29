Coveo.AthenaCustom = Coveo.AthenaCustom || (Coveo.AthenaCustom = {});

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
        if (data.results.exception && data.results.exception.code == 'InvalidSyntax') {
            Coveo.$("#search").coveo('state', 'q', '<@- ' + data.queryBuilder.expression.build().replace(/(<@-|-@>)/g, '') + ' -@>');
            Coveo.$('#search').coveo('executeQuery');
        }
    },
    handleNoResults: function (e, data) {
        if (data.results.exception && data.results.exception.code == 'InvalidSyntax') {
            //data.queryBuilder.enableQuerySyntax = false;
            Coveo.$("#search").coveo('state', 'q', '<@- ' + data.queryBuilder.expression.build().replace(/(<@-|-@>)/g, '') + ' -@>');
            data.retryTheQuery = true;
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
                    //We entered the actual popover � call off the dogs
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
    handleTabChange: function (e, data) {

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
            Coveo.BoxCurrentTab.prototype.handleTabChange = function (e, args) {
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
   }
}