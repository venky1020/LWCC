Coveo.$(function() {

    var searchInterface = Coveo.$('#search');

    //Common Event bindings
    searchInterface.on(Coveo.InitializationEvents.afterComponentsInitialization, Coveo.$.proxy(Coveo.AthenaCustom.CommonEventBindings.handleAfterComponentsInit, this));
    searchInterface.on(Coveo.InitializationEvents.beforeInitialization, Coveo.$.proxy(Coveo.AthenaCustom.CommonEventBindings.handleBeforeInit, this));
    searchInterface.on(Coveo.QueryEvents.buildingQuery, Coveo.$.proxy(Coveo.AthenaCustom.CommonEventBindings.handleBuildingQuery, this));
    searchInterface.on(Coveo.QueryEvents.preprocessResults, Coveo.$.proxy(Coveo.AthenaCustom.CommonEventBindings.handlePreprocessResults, this));
    searchInterface.on(Coveo.ResultListEvents.newResultDisplayed, Coveo.$.proxy(Coveo.AthenaCustom.CommonEventBindings.handleNewResultsDisplayed, this));
    searchInterface.on(Coveo.QueryEvents.querySuccess, Coveo.$.proxy(Coveo.AthenaCustom.CommonEventBindings.handleQuerySuccess, this));
    searchInterface.on(Coveo.QueryEvents.queryError, Coveo.$.proxy(Coveo.AthenaCustom.CommonEventBindings.handleQueryError, this));

    //KBSearch Event bindings
    searchInterface.on(Coveo.InitializationEvents.afterComponentsInitialization, Coveo.$.proxy(Coveo.AthenaCustom.KBSearchEventBindings.handleAfterComponentsInit, this));
    searchInterface.on(Coveo.InitializationEvents.beforeInitialization, Coveo.$.proxy(Coveo.AthenaCustom.KBSearchEventBindings.handleBeforeInit, this));
    searchInterface.on(Coveo.QueryEvents.doneBuildingQuery, Coveo.$.proxy(Coveo.AthenaCustom.KBSearchEventBindings.handleDoneBuildingQuery, this));
    searchInterface.on(Coveo.AnalyticsEvents.changeAnalyticsCustomData, Coveo.$.proxy(Coveo.AthenaCustom.KBSearchEventBindings.handleChangeAnalyticsCustomData, this));

    // on any state change setting cookie for breadcrumb
    searchInterface.on('state:change', Coveo.$.proxy(Coveo.AthenaCustom.KBSearchEventBindings.handleStateChange, this));
    //searchInterface.on('state:change:t', Coveo.$.proxy(Coveo.AthenaCustom.KBSearchEventBindings.handleTabChange, this));

    searchInterface.on('click', '.coveo-facet-header-title', function (e) {
        console.log('facet-header has been clicked')
        var facet = Coveo.$(this).closest('.CoveoFacet').coveo();
        if(facet.element.classList.contains('coveo-facet-collapsed')) {
            facet.facetHeader.expandFacet();
        } else {
            facet.facetHeader.collapseFacet();
        }
    });





});