Coveo.$(function() {
    var searchInterface = Coveo.$('#search');

    //Common Event bindings
    searchInterface.on(Coveo.InitializationEvents.afterComponentsInitialization, Coveo.$.proxy(Coveo.AthenaCustom.CommonEventBindings.handleAfterComponentsInit, this));
    searchInterface.on(Coveo.InitializationEvents.beforeInitialization, Coveo.$.proxy(Coveo.AthenaCustom.CommonEventBindings.handleBeforeInit, this));
    searchInterface.on(Coveo.QueryEvents.buildingQuery, Coveo.$.proxy(Coveo.AthenaCustom.CommonEventBindings.handleBuildingQuery, this));
    searchInterface.on(Coveo.QueryEvents.preprocessResults, Coveo.$.proxy(Coveo.AthenaCustom.CommonEventBindings.handlePreprocessResults, this));
    searchInterface.on(Coveo.ResultListEvents.newResultDisplayed, Coveo.$.proxy(Coveo.AthenaCustom.CommonEventBindings.handleNewResultsDisplayed, this));

    //PanelForCases Event bindings
    searchInterface.on(Coveo.InitializationEvents.afterComponentsInitialization, Coveo.$.proxy(Coveo.AthenaCustom.PanelForCasesEventBindings.handleAfterComponentsInit, this));
    searchInterface.on(Coveo.InitializationEvents.beforeInitialization, Coveo.$.proxy(Coveo.AthenaCustom.PanelForCasesEventBindings.handleBeforeInit, this));
    searchInterface.on('state:change:t', Coveo.$.proxy(Coveo.AthenaCustom.PanelForCasesEventBindings.handleTabChangeState, this));
});
