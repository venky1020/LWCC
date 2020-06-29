Coveo.$(function() {

    var searchSection = Coveo.$('#search-section');
    //var featuredContent = Coveo.$('#searchFeaturedContent');
    var recentContent = Coveo.$('#searchRecentContent');


    //---------------------------------
    //  Bindings for searchSection
    //---------------------------------
    searchSection.on(Coveo.InitializationEvents.afterComponentsInitialization, Coveo.$.proxy(Coveo.AthenaCustom.CommonEventBindings.handleAfterComponentsInit, this));

    //---------------------------------
    //  Bindings for recentContent
    //---------------------------------
    recentContent.on(Coveo.InitializationEvents.afterComponentsInitialization, function (e){
        Coveo.$('.coveo-interfaceEditor-bar:contains("AthenaKBRecentContent")').appendTo(recentContent.closest('.recent-column'));
    });
    recentContent.on(Coveo.QueryEvents.doneBuildingQuery, function (e, data){
        data.queryBuilder.sortCriteria = "DateDescending";
    });

    recentContent.on(Coveo.QueryEvents.preprocessResults, Coveo.$.proxy(Coveo.AthenaCustom.CommonEventBindings.handlePreprocessResults, this));
    recentContent.on(Coveo.ResultListEvents.newResultDisplayed, Coveo.$.proxy(Coveo.AthenaCustom.CommonEventBindings.handleNewResultsDisplayed, this));

    searchSection.coveo('initSearchbox', Coveo.context.user__usertype == 'Guest' ? '/KBSearch' : '/apex/AthenaKBSearch');

});
