var Coveo = Coveo || (Coveo = {});
Coveo.PS = {};

//----------------------------------------------------------------------------
// Rating
// options :
//    - rating : rating (default:0)
//    - numstars : number of stars for rating (default:5)
//    - field : set rating based on custom field
//----------------------------------------------------------------------------
Coveo.PS.Rating = (function (_super) {

    __extends(Rating, _super);

    function Rating(element, options, bindings, result) {
        _super.call(this, element, Rating.ID, bindings);
        var _this = this;
        this.element = element;
        this.options = options;
        this.bindings = bindings;
        this.result = result;
        this.options = Coveo.ComponentOptions.initComponentOptions(element, Rating, options);
        var rating = this.options.field ? parseInt(Coveo.Utils.getFieldValue(this.result, this.options.field)) : this.options.rating;
        this.renderComponent(rating);

    }

    Rating.prototype.renderComponent = function (rating) {
        var i, ref;
        for (i = 1, ref = this.options.numStars; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
            this.renderStars(i <= rating, i);
        }
    };
    Rating.prototype.renderStars = function (isChecked, value) {
        var _this = this;
        var star = Coveo.$(_this.element).find('i[rating-value="' + value + '"]');

        if (star.length == 0) {
            star = Coveo.$("<i class='fa'></i>").appendTo(_this.element);
            star.attr("rating-value", value);
        }
        star.toggleClass("fa-star-o", !isChecked);
        star.toggleClass("fa-star", isChecked);
    };

    Rating.ID = 'Rating';
    Rating.options = {
        rating: Coveo.ComponentOptions.buildNumberOption({defaultValue: 0}),
        numStars: Coveo.ComponentOptions.buildNumberOption({defaultValue: 5}),
        field: Coveo.ComponentOptions.buildStringOption()
    };
    return Rating;
})(Coveo.Component);

//----------------------------------------------------------------------------
// EmailAsLink
// The purpose of the component is to add a quick action in the Coveo Insight Panel.
//----------------------------------------------------------------------------
Coveo.PS.EmailAsLink = (function (_super) {

    __extends(EmailAsLink, _super);

    function EmailAsLink(element, options, bindings, result) {
        _super.call(this, element, EmailAsLink.ID, bindings);
        var _this = this;
        this.element = element;
        this.options = options;
        this.bindings = bindings;
        this.result = result;
        this.options = Coveo.ComponentOptions.initComponentOptions(element, EmailAsLink, options);
        if(this.options.emailTemplate == null) {
            this.options.emailTemplate = new Coveo.Template(Coveo._.template('<div class="CoveoEmailSubject">Your Subject</div><div class="CoveoEmailMessage">Your Message</div>'));
        }
    }

    EmailAsLink.prototype.getTitle = function () {
        var _this = this;
        var customData = {
            articleID: _this.result.raw.sfkbid,
            caseNumber: Coveo.casenumber,
            resultUriHash: _this.result.raw.sysurihash
        };
        var emailContent = Coveo.$(this.options.emailTemplate.instantiateToElement(this.result));
        var menuDiv = Coveo.$('<div class="coveo-box-attachEmail-view-in-menu"><span class="coveo-icon ' +
                              _this.options.icon + '"></span><span class="coveo-caption">' +
                              _this.options.title + '</span></div>');
        menuDiv.click(function() {
            var resultdiv = Coveo.$('<div></div>');
            resultdiv.append(emailContent);
            var subject = Coveo.$('.CoveoEmailSubject',resultdiv).html();
            var message = Coveo.$('.CoveoEmailMessage',resultdiv).html();
            var from = Coveo.$('.CoveoEmailFrom',resultdiv).html();
            var to = Coveo.$('.CoveoEmailTo',resultdiv).html();
            var cc = Coveo.$('.CoveoEmailCc',resultdiv).html();
            var bcc = Coveo.$('.CoveoEmailBcc',resultdiv).html();
			
			Coveo.$(this).closest('.coveo-result-cell').find('.CoveoBoxAttachToCase').coveo('attach');

            var analytics = Coveo.$('.CoveoAnalytics').coveo();
            var customEventCause = { name: 'caseEmail', type: 'case' };
            analytics.client.logCustomEvent(customEventCause, customData, _this.element);

            var emailFieldsObj = {
                subject: {value: subject},
                body: { value: message, format:'richtext', insertType: 'replace'}
            };
            if(from){ emailFieldsObj.from = {value: from}; }
            if(to){ emailFieldsObj.to = {value: to}; }
            if(cc){ emailFieldsObj.cc = {value: cc}; }
            if(bcc){ emailFieldsObj.bcc = {value: bcc}; }

            Sfdc.canvas.publisher.publish({
                name: 'publisher.selectAction',
                payload: { actionName: 'Case.Email'}
            });
            Sfdc.canvas.publisher.publish({
                name: 'publisher.setActionInputValues',
                payload: {
                    actionName: 'Case.Email',
                    emailFields: emailFieldsObj
                }
            });
        });
        return menuDiv.get(0);
    };
	EmailAsLink.ID = 'EmailAsLink';
    EmailAsLink.options = {
        emailTemplate: Coveo.ComponentOptions.buildTemplateOption({
            selectorAttr: 'data-template-selector',
            idAttr: 'data-template-id'
        }),
        icon: Coveo.ComponentOptions.buildStringOption(),
        title: Coveo.ComponentOptions.buildStringOption({default: "Email"})
    }
    return EmailAsLink;

})(Coveo.Component);

//----------------------------------------------------------------------------
// CustomNoResult Component
// The purpose of the component is to add a quick action in the Coveo Insight Panel.
//----------------------------------------------------------------------------
Coveo.PS.CustomNoResults = (function (_super) {

    __extends(CustomNoResults, _super);

    function CustomNoResults(element, options, bindings) {
        _super.call(this, element, CustomNoResults.ID, bindings);
        var _this = this;
        this.element = element;
        this.options = options;
        this.bindings = bindings;
        this.options = Coveo.ComponentOptions.initComponentOptions(element, CustomNoResults, options);
        if(this.options.noResultsTemplate == null) {
            this.options.noResultsTemplate = new Coveo.Template(Coveo._.template('<div>Your No Result Custom Msg</div>'));
        }

        Coveo.$(this.root).on(Coveo.QueryEvents.noResults, Coveo.$.proxy(this.handleNoResults, this));
        Coveo.$(this.root).on(Coveo.QueryEvents.querySuccess, Coveo.$.proxy(this.handleQuerySuccess, this));
    }


    CustomNoResults.prototype.handleQuerySuccess = function (e, data) {
        var _this = this;
        if(data.results.totalCount > 0){
            _this.options.noResultsContainer.innerHTML = '';
            Coveo.$(_this.root).removeClass("showing-custom-no-results");
        }
    };

    CustomNoResults.prototype.handleNoResults = function (e, data) {
        var _this = this;
        _this.options.noResultsContainer.innerHTML = '';
        Coveo.$(_this.root).addClass("showing-custom-no-results");
        _this.renderComponent(data);

    };
    CustomNoResults.prototype.renderComponent = function (data){
        var _this = this;
        var initOptions = _this.searchInterface.options;
        var noResultElement = _this.options.noResultsTemplate.instantiateToElement(data);

        var initParameters = {
            options: initOptions,
            bindings: _this.getBindings(),
            result: data
        };

        if (noResultElement != null) {
            _this.options.noResultsContainer.appendChild(noResultElement);
            Coveo.CoveoJQuery.automaticallyCreateComponentsInside(noResultElement, initParameters);
        }

    }
    CustomNoResults.ID = 'CustomNoResults';
    CustomNoResults.options = {
        noResultsContainer: Coveo.ComponentOptions.buildChildHtmlElementOption({ defaultFunction: function (element) { return Coveo.$('<div/>').appendTo(element).get(0); } }),
        noResultsTemplate: Coveo.ComponentOptions.buildTemplateOption({
            selectorAttr: 'data-template-selector',
            idAttr: 'data-template-id'
        })

    }
    return CustomNoResults;

})(Coveo.Component);

Coveo.CoveoJQuery.registerAutoCreateComponent(Coveo.PS.Rating);
Coveo.CoveoJQuery.registerAutoCreateComponent(Coveo.PS.EmailAsLink);
Coveo.CoveoJQuery.registerAutoCreateComponent(Coveo.PS.CustomNoResults);
