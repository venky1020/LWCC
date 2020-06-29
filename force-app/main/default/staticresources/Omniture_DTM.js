/**************************************************************************
JS file Name: Omniture_DTM.js.
Author: Sathish Rajalingam
Company: Informatica
Date: 01-October-2016
Purpose: Holds all the function required across the application for the Omniture DTM Reports.
Version: 1.0


Modificaiton History

Date      |  Modified by    |  Jira reference      |ChangesMade     

1/6/2017    Sathish Rajalingam      JIRA: KB-2129        UAT base URL update

***************************************************************************/


/*Global variable used across the application
 
*/
var isthisKBExternal = false;
var omnituredtmTriggeredControlName = "UnKnownControl";

if ((((document.location.toString()).toLowerCase()).indexOf("/search.informatica.com/") > -1) || (((document.location.toString()).toLowerCase()).indexOf("ttps://uat-informatica") > -1) || (((document.location.toString()).toLowerCase()).indexOf("ttps://kbpoc-informatica") > -1) || (((document.location.toString()).toLowerCase()).indexOf(".cs52.force.com/") > -1)) {
    isthisKBExternal = true;
} else {
    isthisKBExternal = false;
}

if (isthisKBExternal) {

    var isProd = false;

    if (document.location.href.indexOf('https://search.informatica.com') > -1) {
        isProd = true;
    }
    var digitalData = digitalData || {};
    digitalData.site = {
        isProduction: isProd,
        country: "go",
        language: "en",
        region: "na",
        name: "in"
    };
    var today = new Date();
    var month = today.getMonth();
    var day = today.getDate();
    var year = today.getFullYear();
    var hrs = today.getHours();
    var mins = today.getMinutes();
    var seconds = today.getSeconds();
    var offset = today.getTimezoneOffset();
    var timeOfDay = '';
    if (hrs > 12) {
        timeOfDay = 'PM';
    } else {
        timeOfDay = 'AM';
    }
    var timestamp = month + '/' + day + '/' + year + ' ' + hrs + ':' + mins + ':' + seconds + ' ' + timeOfDay + offset;
    digitalData.server = {
        date: timestamp
    };

}

//call to  set digitaldata varialbe not to tracked
function fnDisableDigitalDataTrack() {

    try {

        if (typeof digitalData != 'undefined') {

            digitalData.page = {
                trackPage: false
            };
        }

    } catch (ex) {
        console.log("Method : fnDisableDigitalDataTrack; Error :" + ex.description);
    }

}

//call to set the okta user id, when the user is authenticated.
function fnSetOKatUserID(parCurrentUserOKatUserID, parIsKBUserAuthenticated) {

    try {
        if (isthisKBExternal) {
            if (typeof digitalData != 'undefined') {
                if (parIsKBUserAuthenticated) {
                    digitalData.visitor = {
                        oktaUserId: parCurrentUserOKatUserID,
                        networkStatus: "logged in"
                    };

                } else {
                    digitalData.visitor = {
                        networkStatus: "anonymous"
                    };
                }

            }
        }
    } catch (ex) {
        console.log("Method : fnSetOKatUserID; Error :" + ex.description);
    }

}



//Called to hook the eventhandler for the search cotrols
function fnHookMethodToEvent() {
    try {
        if (typeof digitalData != 'undefined') {

            $('#search').on('deferredQuerySuccess', function (e, result) {
                var omnituredtmSearchKeyword = result.query.q;
                var omnituredtmTotalNumberOfResults = (fnGetTotalNumberofResults(result.results.totalCount)).toString();
                var omnituredtmPageNumber = (fnCalculatePageNumber(result.query.firstResult, result.query.numberOfResults, result.results.totalCount)).toString();
                var omnituredtmTabName = fnGetTabName(result.query.tab);
                var omnituredtmAllSelectedFilters = fnGetAllFilters(result.query.aq);

                if (typeof digitalData.search === 'undefined') {
                    //fnCaptureOnPageLoad(omnituredtmSearchKeyword, omnituredtmTotalNumberOfResults, omnituredtmPageNumber, omnituredtmAllSelectedFilters);
                    //fnSetOmniturePageDetails("search results", omnituredtmTabName);
                    fnCaptureAllOnPageLoad(omnituredtmSearchKeyword, omnituredtmTotalNumberOfResults, omnituredtmPageNumber, omnituredtmAllSelectedFilters, omnituredtmTabName, "page_view");
                } else
                    fnTriggerControlsMethod(omnituredtmSearchKeyword, omnituredtmTotalNumberOfResults, omnituredtmPageNumber, omnituredtmAllSelectedFilters, omnituredtmTabName);
            });

            //$('#search').on('buildingQuery', function(e, result) {
            //    console.clear();
            //    console.log("buildingQuery");
            //});

            //Assign event to capture the filter selection
            if ($("[class^='CoveoFacet']").length != 0) {
                $("[class^='CoveoFacet']").bind('change', function () {
                    if ($("[form^='coveo-dummy-form']").length != 0) {
                        omnituredtmTriggeredControlName = "FilterTriggered";
                    }
                });
            }

            //Assign event to capture the tab selection
            if ($("[class^='CoveoTab']").length != 0) {
                $("[class^='CoveoTab']").bind('click', function () {
                    omnituredtmTriggeredControlName = "TabTriggered";
                });
            }

            //Assign event to capture the seach button click
            if ($("[class*='CoveoSearchButton']").length != 0) {
                $("[class*='CoveoSearchButton']").bind('click', function () {
                    omnituredtmTriggeredControlName = "SearchButtonTriggered";
                });
            }

            //Assign event to capture the date slide changed
            if ($("[class='CoveoFacetSlider']").length != 0) {
                $("[class='CoveoFacetSlider']").bind('mouseup', function () {
                    omnituredtmTriggeredControlName = "DateSlideTriggered";
                });
            }

            //Assign event to capture the sort clicked
            if ($("[class='CoveoSort']").length != 0) {
                $("[class='CoveoSort']").bind('click', function () {
                    omnituredtmTriggeredControlName = "SortTriggered";
                });
            }

            //Assign event to capture the pagination clicked
            if ($("[class='CoveoPager']").length != 0) {
                $("[class='CoveoPager']").bind('click', function () {
                    omnituredtmTriggeredControlName = "Paginationtriggered";
                });
            }

            //Assign event to capture the breadcrumb clicked
            if ($("[class='CoveoBreadcrumb']").length != 0) {
                $("[class='CoveoBreadcrumb']").bind('click', function () {
                    omnituredtmTriggeredControlName = "BreadCrumbTriggered";
                });
            }
        }
    } catch (ex) {
        console.log("Method : fnHookMethodToEvent; Error :" + ex.description);
    }
}


//Called to trigger respective control event handler
function fnTriggerControlsMethod(parSearchKeyword, parTotalNumberOfResults, parPageNumber, parAllSelectedFilters, parTabName) {
    try {
        var eventType;
        if (typeof omnituredtmTriggeredControlName != 'undefined') {
            switch (omnituredtmTriggeredControlName) {
                case "FilterTriggered":
                    //alert('FilterTriggered');
                    //fnCaptureOnFilterCheckBoxClick(parSearchKeyword, parTotalNumberOfResults, parPageNumber, parAllSelectedFilters);
                    eventType = "search_refinement";
                    fnCaptureAllOnControlClick(parSearchKeyword, parTotalNumberOfResults, parPageNumber, parAllSelectedFilters, parTabName, eventType);
                    omnituredtmTriggeredControlName = "UnKnownControl";
                    break;
                case "TabTriggered":
                    //alert('TabTriggered');
                    //fnCaptureOnTabClick(parSearchKeyword, parTotalNumberOfResults, parPageNumber, parTabName);
                    eventType = "page_view";
                    fnCaptureAllOnControlClick(parSearchKeyword, parTotalNumberOfResults, parPageNumber, parAllSelectedFilters, parTabName, eventType);
                    omnituredtmTriggeredControlName = "UnKnownControl";
                    break;
                case "SearchButtonTriggered":
                    //alert('SearchButtonTriggered');
                    //fnCaptureOnSearchButtonClick(parSearchKeyword, parTotalNumberOfResults, parPageNumber);
                    eventType = "page_view";
                    fnCaptureAllOnControlClick(parSearchKeyword, parTotalNumberOfResults, parPageNumber, parAllSelectedFilters, parTabName, eventType);
                    omnituredtmTriggeredControlName = "UnKnownControl";
                    break;
                case "DateSlideTriggered":
                    //alert('DateSlideTriggered');
                    //fnCaptureOnFilterDateSlideChanged(parSearchKeyword, parTotalNumberOfResults, parPageNumber, parAllSelectedFilters);
                    eventType = "search_refinement";
                    fnCaptureAllOnControlClick(parSearchKeyword, parTotalNumberOfResults, parPageNumber, parAllSelectedFilters, parTabName, eventType);
                    omnituredtmTriggeredControlName = "UnKnownControl";
                    break;
                case "SortTriggered":
                    //alert('SortTriggered');
                    eventType = "page_view";
                    fnCaptureAllOnControlClick(parSearchKeyword, parTotalNumberOfResults, parPageNumber, parAllSelectedFilters, parTabName, eventType);
                    omnituredtmTriggeredControlName = "UnKnownControl";
                    break;
                case "BreadCrumbTriggered":
                    //alert('BreadCrumbTriggered');
                    eventType = "page_view";
                    fnCaptureAllOnControlClick(parSearchKeyword, parTotalNumberOfResults, parPageNumber, parAllSelectedFilters, parTabName, eventType);
                    omnituredtmTriggeredControlName = "UnKnownControl";
                    break;
                case "Paginationtriggered":
                    //alert('Paginationtriggered');
                    eventType = "page_view";
                    fnCaptureAllOnControlClick(parSearchKeyword, parTotalNumberOfResults, parPageNumber, parAllSelectedFilters, parTabName, eventType);
                    omnituredtmTriggeredControlName = "UnKnownControl";
                    break;
                case "UnKnownControl":
                    //alert('UnKnownControl');
                    //fnCaptureOnControlClick(parSearchKeyword, parTotalNumberOfResults, parPageNumber);
                    eventType = "page_view";
                    fnCaptureAllOnControlClick(parSearchKeyword, parTotalNumberOfResults, parPageNumber, parAllSelectedFilters, parTabName, eventType);
                    omnituredtmTriggeredControlName = "UnKnownControl";
                    break;
                default:
                    //alert('UnKnownControl');
                    //fnCaptureOnControlClick(parSearchKeyword, parTotalNumberOfResults, parPageNumber);
                    eventType = "page_view";
                    fnCaptureAllOnControlClick(parSearchKeyword, parTotalNumberOfResults, parPageNumber, parAllSelectedFilters, parTabName, eventType);
                    omnituredtmTriggeredControlName = "UnKnownControl";
                    break;
            }
        }

    } catch (e) {
        console.log("Method : fnTriggerControlsMethod; Error :" + e.description);
    }

}

//Called to Calculate the page number of search page
function fnCalculatePageNumber(parFirstResult, parNumberOfResultsPerPage, parTotalCount) {
    try {
        if (typeof parTotalCount != 'undefined') {
            if (parTotalCount != 0) {
                if (parFirstResult == 0) {
                    return 1;
                } else {
                    return ((parFirstResult / parNumberOfResultsPerPage) + 1);
                }
            } else {
                return 0;
            }
        } else {
            return 0;
        }

    } catch (ex) {
        console.log("Method : fnCalculatePageNumber; Error :" + ex.description);
    }
    return 0;
}

//Called to get the total number of results
function fnGetTotalNumberofResults(parTotalCount) {
    try {
        if (parTotalCount == 0) {
            return "zero";
        } else {
            return parTotalCount;
        }

    } catch (ex) {
        console.log("Method : fnGetTotalNumberofResults; Error :" + ex.description);
    }
    return parTotalCount;
}

//call to set all the search details like tabName, keyword and filters on page load
function fnCaptureOnPageLoad(parKeyword, parTotalNumberOfresults, parPageNumber, parAllFilters) {
    try {
        if (typeof digitalData != 'undefined') {
            digitalData.search = {
                keyword: (typeof parKeyword != 'undefined') ? parKeyword : "", // search entered by the user
                results: (typeof parTotalNumberOfresults != 'undefined') ? parTotalNumberOfresults : "", // number of the results, if zero result enter "zero" instead of "0"
                pagination: (typeof parPageNumber != 'undefined') ? parPageNumber : "" // current page number, for ex: 1, 2, 3, etc.               
            };

            if (typeof parAllFilters != 'undefined')
                digitalData.filters = parAllFilters;
        }
    } catch (ex) {
        console.log("Method : fnCaptureOnPageLoad; Error :" + ex.description);
    }
}

//call to set all the search details like tabName, keyword, visitor, server, site and filters on page load
function fnKBHomeCaptureAllOnPageLoad() {
    try {
        if (typeof analytics != 'undefined') {
            var omnitureVisitor = fnGetVisitorDetails();

            analytics.track({
                event: {
                    eventType: "page_view"
                },
                page: {
                    section: "kb",
                    subSection1: "home",
                    name: "home", // See the page names table
                    type: "network page"
                },
                site: {
                    isProduction: digitalData.site.isProduction,
                    country: digitalData.site.country,
                    language: digitalData.site.language,
                    region: digitalData.site.region,
                    name: digitalData.site.name
                },
                visitor: omnitureVisitor,
                server: {
                    date: digitalData.server.date
                }
            });


        }
    } catch (ex) {
        console.log("Method : fnCaptureAllOnPageLoad; Error :" + ex.description);
    }
}

//call to set page details
function fnSetOmniturePageDetails(parSubject, parTabName) {
    //alert(articleSubject+ articleID+ aticleTitle);
    try {
        if (typeof digitalData != 'undefined') {
            digitalData.page = {
                section: "kb",
                subSection1: parSubject,
                name: parTabName,
                type: "network page"
            };
        }
    } catch (ex) {
        console.log("Method : fnSetOmniturePageDetails; Error :" + ex.description);
    }
}

//Event hanlder for search button  click
function fnCaptureOnSearchButtonClick(parKeyword, parTotalNumberOfresults, parPageNumber) {
    try {
        if (typeof analytics != 'undefined') {
            analytics.track({
                event: {
                    eventType: "page_view"
                },
                search: {
                    keyword: (typeof parKeyword != 'undefined') ? parKeyword : "", // search entered by the user
                    results: (typeof parTotalNumberOfresults != 'undefined') ? parTotalNumberOfresults : "", // number of the results, if zero result enter "zero" instead of "0"
                    pagination: (typeof parPageNumber != 'undefined') ? parPageNumber : "" // current page number, for ex: 1, 2, 3, etc.
                }
            });
        }
    } catch (ex) {
        console.log("Method : fnCaptureOnSearchButtonClick; Error :" + ex.description);
    }
}

//Event hanlder for the  control  click
function fnCaptureOnControlClick(parKeyword, parTotalNumberOfresults, parPageNumber) {
    try {
        if (typeof analytics != 'undefined') {
            analytics.track({
                event: {
                    eventType: "page_view"
                },
                search: {
                    keyword: (typeof parKeyword != 'undefined') ? parKeyword : "", // search entered by the user
                    results: (typeof parTotalNumberOfresults != 'undefined') ? parTotalNumberOfresults : "", // number of the results, if zero result enter "zero" instead of "0"
                    pagination: (typeof parPageNumber != 'undefined') ? parPageNumber : "" // current page number, for ex: 1, 2, 3, etc.
                }
            });
        }
    } catch (ex) {
        console.log("Method : fnCaptureOnControlClick; Error :" + ex.description);
    }
}

//called to get the user details
function fnGetVisitorDetails() {
    var visitor = visitor || {};
    try {
        if (typeof digitalData != 'undefined') {
            if (typeof digitalData.visitor.oktaUserId != 'undefined') {
                visitor = {
                    networkStatus: digitalData.visitor.networkStatus,
                    oktaUserId: digitalData.visitor.oktaUserId
                };

            } else {
                visitor = {
                    networkStatus: digitalData.visitor.networkStatus
                };
            }
        }
    } catch (e) {
        console.log("Method : fnGetVisitorDetails; Error :" + e.description);
    }
    return visitor;
}



//call to set all the search details like tabName, keyword, visitor, server, site and filters on page load
function fnCaptureAllOnPageLoad(parKeyword, parTotalNumberOfresults, parPageNumber, parAllFilters, parTabName, parEventType) {
    try {
        if (typeof analytics != 'undefined') {
            var omnitureVisitor = fnGetVisitorDetails();
            if (typeof parAllFilters != 'undefined') {
                analytics.track({
                    event: {
                        eventType: parEventType
                    },
                    filters: parAllFilters,
                    page: {
                        section: "kb",
                        subSection1: "search results",
                        name: (typeof parTabName != 'undefined') ? parTabName : "", // See the page names table
                        type: "network page"
                    },
                    search: {
                        keyword: (typeof parKeyword != 'undefined') ? parKeyword : "", // search entered by the user
                        results: (typeof parTotalNumberOfresults != 'undefined') ? parTotalNumberOfresults : "", // number of the results, if zero result enter "zero" instead of "0"
                        pagination: (typeof parPageNumber != 'undefined') ? parPageNumber : "" // current page number, for ex: 1, 2, 3, etc.
                    },
                    site: {
                        isProduction: digitalData.site.isProduction,
                        country: digitalData.site.country,
                        language: digitalData.site.language,
                        region: digitalData.site.region,
                        name: digitalData.site.name
                    },
                    visitor: omnitureVisitor,
                    server: {
                        date: digitalData.server.date
                    }
                });

            } else {
                analytics.track({
                    event: {
                        eventType: parEventType
                    },
                    page: {
                        section: "kb",
                        subSection1: "search results",
                        name: (typeof parTabName != 'undefined') ? parTabName : "", // See the page names table
                        type: "network page"
                    },
                    search: {
                        keyword: (typeof parKeyword != 'undefined') ? parKeyword : "", // search entered by the user
                        results: (typeof parTotalNumberOfresults != 'undefined') ? parTotalNumberOfresults : "", // number of the results, if zero result enter "zero" instead of "0"
                        pagination: (typeof parPageNumber != 'undefined') ? parPageNumber : "" // current page number, for ex: 1, 2, 3, etc.
                    },
                    site: {
                        isProduction: digitalData.site.isProduction,
                        country: digitalData.site.country,
                        language: digitalData.site.language,
                        region: digitalData.site.region,
                        name: digitalData.site.name
                    },
                    visitor: omnitureVisitor,
                    server: {
                        date: digitalData.server.date
                    }
                });
            }

        }
    } catch (ex) {
        console.log("Method : fnCaptureAllOnPageLoad; Error :" + ex.description);
    }
}

//call to set all the search details like tabName, keyword and filters on click of the control
function fnCaptureAllOnControlClick(parKeyword, parTotalNumberOfresults, parPageNumber, parAllFilters, parTabName, parEventType) {
    try {
        if (typeof analytics != 'undefined') {

            if (typeof parAllFilters != 'undefined') {
                analytics.track({
                    event: {
                        eventType: parEventType
                    },
                    filters: parAllFilters,
                    page: {
                        section: "kb",
                        subSection1: "search results",
                        name: (typeof parTabName != 'undefined') ? parTabName : "", // See the page names table                    
                        type: "network page"
                    },
                    search: {
                        keyword: (typeof parKeyword != 'undefined') ? parKeyword : "", // search entered by the user
                        results: (typeof parTotalNumberOfresults != 'undefined') ? parTotalNumberOfresults : "", // number of the results, if zero result enter "zero" instead of "0"
                        pagination: (typeof parPageNumber != 'undefined') ? parPageNumber : "" // current page number, for ex: 1, 2, 3, etc.
                    }
                });

            } else {
                analytics.track({
                    event: {
                        eventType: parEventType
                    },
                    page: {
                        section: "kb",
                        subSection1: "search results",
                        name: (typeof parTabName != 'undefined') ? parTabName : "", // See the page names table                    
                        type: "network page"
                    },
                    search: {
                        keyword: (typeof parKeyword != 'undefined') ? parKeyword : "", // search entered by the user
                        results: (typeof parTotalNumberOfresults != 'undefined') ? parTotalNumberOfresults : "", // number of the results, if zero result enter "zero" instead of "0"
                        pagination: (typeof parPageNumber != 'undefined') ? parPageNumber : "" // current page number, for ex: 1, 2, 3, etc.
                    }
                });
            }

        }
    } catch (ex) {
        console.log("Method : fnCaptureAllOnControlClick; Error :" + ex.description);
    }
}

//Event hanlder for the tab control  click
function fnCaptureOnTabClick(parKeyword, parTotalNumberOfresults, parPageNumber, parTabName) {
    try {
        if (typeof analytics != 'undefined') {

            analytics.track({
                event: {
                    eventType: "page_view"
                },
                page: {
                    section: "kb",
                    subSection1: "search results",
                    name: (typeof parTabName != 'undefined') ? parTabName : "", // See the page names table                    
                    type: "network page"
                },
                search: {
                    // KB Search not able to distinguish between each interaction type
                    keyword: (typeof parKeyword != 'undefined') ? parKeyword : "", // search entered by the user
                    results: (typeof parTotalNumberOfresults != 'undefined') ? parTotalNumberOfresults : "", // number of the results, if zero result enter "zero" instead of "0"
                    pagination: (typeof parPageNumber != 'undefined') ? parPageNumber : "" // current page number, for ex: 1, 2, 3, etc.
                }
            });

        }
    } catch (ex) {
        console.log("Method : fnCaptureOnTabClick; Error :" + ex.description);

    }
}

//Event hanlder for the  Filter control  click
function fnCaptureOnFilterCheckBoxClick(parKeyword, parTotalNumberOfresults, parPageNumber, parAllFilters) {
    try {
        if (typeof analytics != 'undefined') {
            if (typeof parAllFilters != 'undefined') {
                analytics.track({
                    event: {
                        eventType: "page_view" // was supposed to be: "filter_change" KB Search not able to distinguish between each interaction type
                    },
                    filters: parAllFilters,
                    search: {
                        keyword: (typeof parKeyword != 'undefined') ? parKeyword : "", // search entered by the user
                        results: (typeof parTotalNumberOfresults != 'undefined') ? parTotalNumberOfresults : "", // number of the results, if zero result enter "zero" instead of "0"
                        pagination: (typeof parPageNumber != 'undefined') ? parPageNumber : "" // current page number, for ex: 1, 2, 3, etc.
                    }
                });
            }

        }
    } catch (ex) {
        console.log("Method : fnCaptureOnFilterCheckBoxClick; Error :" + ex.description);

    }
}

//Event hanlder for the  date slide control  click
function fnCaptureOnFilterDateSlideChanged(parKeyword, parTotalNumberOfresults, parPageNumber, parAllFilters) {
    try {
        if (typeof analytics != 'undefined') {
            if (typeof parAllFilters != 'undefined') {

                analytics.track({
                    event: {
                        eventType: "page_view" // was supposed to be: "filter_change" KB Search not able to distinguish between each interaction type
                    },
                    filters: parAllFilters,
                    search: {
                        keyword: (typeof parKeyword != 'undefined') ? parKeyword : "", // search entered by the user
                        results: (typeof parTotalNumberOfresults != 'undefined') ? parTotalNumberOfresults : "", // number of the results, if zero result enter "zero" instead of "0"
                        pagination: (typeof parPageNumber != 'undefined') ? parPageNumber : "" // current page number, for ex: 1, 2, 3, etc.
                    }
                });
            }

        }
    } catch (ex) {
        console.log("Method : fnCaptureOnFilterDateSlideChanged; Error :" + ex.description);
    }
}

//called to get all the filter details
function fnGetAllFilters(parSearchFilters) {
    var filters;
    //console.clear();
    //console.log("Filters: " + parSearchFilters);
    try {
        if (typeof parSearchFilters != 'undefined') {
            var searchquery = parSearchFilters.split("@sysdate");
            var searchquerywithoutsysdate = searchquery[0];
            searchquerywithoutsysdate = searchquerywithoutsysdate.replace(/[()]/gi, "");
            searchquerywithoutsysdate = searchquerywithoutsysdate.toString().trim();
            filters = [];
            //To check apart from Date filter any other filter present or not
            if (searchquerywithoutsysdate != "") {
                var filterarray = searchquerywithoutsysdate.split("@");

                for (var _i = 1; _i < filterarray.length; _i++) {

                    var filterGroupValues = filterarray[_i].split("==");
                    var groupName = filterGroupValues[0].toString().trim();
                    groupName = fnGetFilterGroupNmae(groupName);
                    for (var _j = 1; _j < filterGroupValues.length; _j++) {

                        var selectedFilterValues = filterGroupValues[_j].split(",");
                        //console.log("Group Nmme:" + groupName);
                        var options = [];
                        for (var _k = 0; _k < selectedFilterValues.length; _k++) {
                            var optionname = selectedFilterValues[_k].toString().trim();
                            optionname = optionname.indexOf("\"") > -1 ? optionname.substring(1, (optionname.length - 1)) : optionname;
                            options.push({
                                name: optionname,
                                status: "selected"
                            });
                            // console.log("Selected Filter Nmme:" + selectedFilterValues[_k].toString().trim());
                        }
                        filters.push({
                            group: groupName,
                            options: options
                        });
                    }
                }

            }

            //added specific to Date filters
            if (searchquery.length > 1) {
                var sysdateFilterValue = searchquery[1].toString().trim();
                sysdateFilterValue = sysdateFilterValue.replace(/[()=]/gi, "");
                //console.log("Group Nmme: sysdate");   
                //console.log("Selected Filter Nmme:" + searchquery[1].toString().trim());
                var sysdatefilterGroupName = "sysdate";
                sysdatefilterGroupName = fnGetFilterGroupNmae(sysdatefilterGroupName);
                var sysdateoptions = [{
                    name: sysdateFilterValue,
                    status: "selected"
                }];
                filters.push({
                    group: sysdatefilterGroupName,
                    options: sysdateoptions
                });
            }


        }


    } catch (e) {
        console.log("Method : fnGetAllFilters; Error :" + e.description);
    }
    return filters;
}

//called to get tab name 
function fnGetTabName(parTab) {
    var tabName = "";
    try {
        if (typeof parTab != 'undefined') {
            switch (parTab) {
                case "All":
                    tabName = "all content";
                    break;
                case "KB":
                    tabName = "knowledge base";
                    break;
                case "ProdDocs":
                    tabName = "product docs";
                    break;
                case "HowTo":
                    tabName = "how-to-library";
                    break;
                case "Blog":
                    tabName = "discussions and blogs";
                    break;
                case "SupportTV":
                    tabName = "support video";
                    break;
                case "Expert":
                    tabName = "expert assistant";
                    break;
                case "PAM":
                    tabName = "pam and eol";
                    break;
                case "Training":
                    tabName = "informatica university";
                    break;
                default:
                    tabName = parTab;
                    break;
            }
        }

    } catch (ex) {
        console.log("Method : fnGetTabName; Error :" + ex.description);
    }
    return tabName;
}

//called to get filter group name
function fnGetFilterGroupNmae(parFilterGroupName) {
    var filterGroupName = "";

    try {

        if (typeof parFilterGroupName != 'undefined') {
            switch (parFilterGroupName) {
                case "athenaproduct":
                    filterGroupName = "product";
                    break;
                case "athenaproductversion":
                    filterGroupName = "product version";
                    break;
                case "infakeywords":
                    filterGroupName = "keywords";
                    break;
                case "infaindustry":
                    filterGroupName = "industry";
                    break;
                case "athenatemplate":
                    filterGroupName = "template";
                    break;
                case "athenatabname":
                    filterGroupName = "source";
                    break;
                case "athenahotfix":
                    filterGroupName = "hotfix version";
                    break;
                case "athenacategory":
                    filterGroupName = "category";
                    break;
                case "athenalanguage":
                    filterGroupName = "language";
                    break;
                case "csitemtype":
                    filterGroupName = "content";
                    break;
                case "jivestatus":
                    filterGroupName = "status";
                    break;
                case "jivecategories":
                    filterGroupName = "categories";
                    break;
                case "author":
                    filterGroupName = "author";
                    break;
                case "trainingmethod":
                    filterGroupName = "training method";
                    break;
                case "sysdate":
                    filterGroupName = "date";
                    break;
                default:
                    filterGroupName = parFilterGroupName;
                    break;
            }
        }

    } catch (ex) {
        console.log("Method : fnGetFilterGroupNmae; Error :" + ex.description);
    }
    return filterGroupName;
}