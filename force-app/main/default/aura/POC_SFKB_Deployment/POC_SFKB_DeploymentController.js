({
    doInit: function(component, event, helper) {},
    createCustomField: function(component, event, helper) {
        //var changeType = event.getParams().changeType;

        //if (changeType === "ERROR") { /* handle error; do this first! */ } else if (changeType === "LOADED") { /* handle record load */ } else if (changeType === "REMOVED") { /* handle record removal */ } else if (changeType === "CHANGED") { /* handle record change */ }

        var varCanExecuteCustomField = false;

        var action = component.get("c.createCustomModifiedObject");
        action.setCallback(this, function(response) {
            if (response.getState() === "SUCCESS" && component.isValid()) {
                component.set(
                    "v.message",
                    response.getReturnValue()
                );
                varCanExecuteCustomField = true;
            } else {}
        });
        //  action.setParams({ ParRecordID: sParameterName[1] });    

        function fnInProgressCounter(execCount) {
            try {
                component.set(
                    "v.countno",
                    "WorkInProgress on Creating Custom Field : " + (execCount).toString()
                );
                if ((execCount < 120) && (varCanExecuteCustomField == false)) {
                    execCount = execCount + 1;
                    window.setTimeout(function() { fnInProgressCounter(execCount); }, 1000);
                }
            } catch (exThree) {}
        }
        fnInProgressCounter(0);

        $A.enqueueAction(action);

    },


    updateCustomModifiedFieldLevelSecurityDMLClient: function(component, event, helper) {
        //var changeType = event.getParams().changeType;

        //if (changeType === "ERROR") { /* handle error; do this first! */ } else if (changeType === "LOADED") { /* handle record load */ } else if (changeType === "REMOVED") { /* handle record removal */ } else if (changeType === "CHANGED") { /* handle record change */ }

        var varCanExecuteCustomField = false;

        var action = component.get("c.updateCustomFieldLevelSecurityByDML");
        action.setCallback(this, function(response) {
            if (response.getState() === "SUCCESS" && component.isValid()) {
                component.set(
                    "v.message",
                    response.getReturnValue()
                );
                varCanExecuteCustomField = true;
            } else {}
        });
        //  action.setParams({ ParRecordID: sParameterName[1] });    

        function fnInProgressCounter(execCount) {
            try {
                component.set(
                    "v.countno",
                    "WorkInProgress on Setting Permission Custom Field : " + (execCount).toString()
                );
                if ((execCount < 1120) && (varCanExecuteCustomField == false)) {
                    execCount = execCount + 1;
                    window.setTimeout(function() { fnInProgressCounter(execCount); }, 1000);
                }
            } catch (exThree) {}
        }
        fnInProgressCounter(0);

        $A.enqueueAction(action);

    },

    deleteCustomFieldAPIClient: function(component, event, helper) {
        //var changeType = event.getParams().changeType;

        //if (changeType === "ERROR") { /* handle error; do this first! */ } else if (changeType === "LOADED") { /* handle record load */ } else if (changeType === "REMOVED") { /* handle record removal */ } else if (changeType === "CHANGED") { /* handle record change */ }

        var varCanExecuteCustomField = false;

        var action = component.get("c.deleteCustomFieldByAPI");
        action.setCallback(this, function(response) {
            if (response.getState() === "SUCCESS" && component.isValid()) {
                component.set(
                    "v.message",
                    response.getReturnValue()
                );
                varCanExecuteCustomField = true;
            } else {}
        });
        //  action.setParams({ ParRecordID: sParameterName[1] });    

        function fnInProgressCounter(execCount) {
            try {
                component.set(
                    "v.countno",
                    "WorkInProgress on deleting Custom Field : " + (execCount).toString()
                );
                if ((execCount < 120) && (varCanExecuteCustomField == false)) {
                    execCount = execCount + 1;
                    window.setTimeout(function() { fnInProgressCounter(execCount); }, 1000);
                }
            } catch (exThree) {}
        }
        fnInProgressCounter(0);

        $A.enqueueAction(action);

    },

    publishAllDraftArticleByDMLClient: function(component, event, helper) {
        //var changeType = event.getParams().changeType;

        //if (changeType === "ERROR") { /* handle error; do this first! */ } else if (changeType === "LOADED") { /* handle record load */ } else if (changeType === "REMOVED") { /* handle record removal */ } else if (changeType === "CHANGED") { /* handle record change */ }

        var varCanExecute = false;
        var varFinalStop = false;
        var varTotalRecordProcessedCount = "0";

        var varDMLCallCount = 0;
        var varDMLCallLength = 1000;

        function fnTriggerClientCall(component, event, helper, execCount) {
            varCanExecute = false;
            var action = component.get("c.publishAllDraftArticleByDML");

            action.setParams({ parCount: varTotalRecordProcessedCount });

            action.setCallback(this, function(response) {
                if (response.getState() === "SUCCESS" && component.isValid()) {
                    component.set(
                        "v.message",
                        response.getReturnValue()
                    );
                    varTotalRecordProcessedCount = (response.getReturnValue()).split('|')[1];
                    varCanExecute = true;
                    if ((response.getReturnValue()).indexOf('$Completed') > -1) {
                        varFinalStop = true;
                    } else {

                    }
                } else {}
            });

            fnCustomPooling(component, event, helper, execCount);

            $A.enqueueAction(action);

        }

        function fnCustomPooling(component, event, helper, execCount) {
            try {
                component.set(
                    "v.countno",
                    "WorkInProgress on publishing all draft KB articles : " + (execCount).toString()
                );
                if (varCanExecute) {
                    varDMLCallCount++;
                    if ((varDMLCallCount < varDMLCallLength) && varFinalStop == false) {
                        fnTriggerClientCall(component, event, helper, 0);
                    }

                } else if ((execCount < 120) && (varCanExecute == false)) {
                    execCount = execCount + 1;
                    window.setTimeout(function() { fnCustomPooling(component, event, helper, execCount); }, 1000);
                }
            } catch (exThree) {}
        }

        fnTriggerClientCall(component, event, helper, 0);

    },
    archiveAllPublishedArticleByDMLClient: function(component, event, helper) {
        //var changeType = event.getParams().changeType;

        //if (changeType === "ERROR") { /* handle error; do this first! */ } else if (changeType === "LOADED") { /* handle record load */ } else if (changeType === "REMOVED") { /* handle record removal */ } else if (changeType === "CHANGED") { /* handle record change */ }

        var varCanExecute = false;
        var varFinalStop = false;
        var varTotalRecordProcessedCount = "0";

        var varDMLCallCount = 0;
        var varDMLCallLength = 1000;

        function fnTriggerClientCall(component, event, helper, execCount) {
            varCanExecute = false;
            var action = component.get("c.archiveAllPublishedArticleByDML");

            action.setParams({ parCount: varTotalRecordProcessedCount });

            action.setCallback(this, function(response) {
                if (response.getState() === "SUCCESS" && component.isValid()) {
                    component.set(
                        "v.message",
                        response.getReturnValue()
                    );
                    varTotalRecordProcessedCount = (response.getReturnValue()).split('|')[1];
                    varCanExecute = true;
                    if ((response.getReturnValue()).indexOf('$Completed') > -1) {
                        varFinalStop = true;
                    } else {

                    }
                } else {}
            });

            fnCustomPooling(component, event, helper, execCount);

            $A.enqueueAction(action);

        }

        function fnCustomPooling(component, event, helper, execCount) {
            try {
                component.set(
                    "v.countno",
                    "WorkInProgress on archiving all published KB articles : " + (execCount).toString()
                );
                if (varCanExecute) {
                    varDMLCallCount++;
                    if ((varDMLCallCount < varDMLCallLength) && varFinalStop == false) {
                        fnTriggerClientCall(component, event, helper, 0);
                    }

                } else if ((execCount < 120) && (varCanExecute == false)) {
                    execCount = execCount + 1;
                    window.setTimeout(function() { fnCustomPooling(component, event, helper, execCount); }, 1000);
                }
            } catch (exThree) {}
        }

        fnTriggerClientCall(component, event, helper, 0);

    },
    deleteAllArchivedArticleByDMLClient: function(component, event, helper) {
        //var changeType = event.getParams().changeType;

        //if (changeType === "ERROR") { /* handle error; do this first! */ } else if (changeType === "LOADED") { /* handle record load */ } else if (changeType === "REMOVED") { /* handle record removal */ } else if (changeType === "CHANGED") { /* handle record change */ }

        var varCanExecute = false;
        var varFinalStop = false;
        var varTotalRecordProcessedCount = "0";

        var varDMLCallCount = 0;
        var varDMLCallLength = 1000;

        function fnTriggerClientCall(component, event, helper, execCount) {
            varCanExecute = false;
            var action = component.get("c.deleteAllArchivedArticleByDML");

            action.setParams({ parCount: varTotalRecordProcessedCount });

            action.setCallback(this, function(response) {
                if (response.getState() === "SUCCESS" && component.isValid()) {
                    component.set(
                        "v.message",
                        response.getReturnValue()
                    );
                    varTotalRecordProcessedCount = (response.getReturnValue()).split('|')[1];
                    varCanExecute = true;
                    if ((response.getReturnValue()).indexOf('$Completed') > -1) {
                        varFinalStop = true;
                    } else {

                    }
                } else {}
            });

            fnCustomPooling(component, event, helper, execCount);

            $A.enqueueAction(action);

        }

        function fnCustomPooling(component, event, helper, execCount) {
            try {
                component.set(
                    "v.countno",
                    "WorkInProgress on deleting all archived KB articles : " + (execCount).toString()
                );
                if (varCanExecute) {
                    varDMLCallCount++;
                    if ((varDMLCallCount < varDMLCallLength) && varFinalStop == false) {
                        fnTriggerClientCall(component, event, helper, 0);
                    }

                } else if ((execCount < 120) && (varCanExecute == false)) {
                    execCount = execCount + 1;
                    window.setTimeout(function() { fnCustomPooling(component, event, helper, execCount); }, 1000);
                }
            } catch (exThree) {}
        }

        fnTriggerClientCall(component, event, helper, 0);

    },
    createLayoutForArticleDMLClient: function(component, event, helper) {
        //var changeType = event.getParams().changeType;

        //if (changeType === "ERROR") { /* handle error; do this first! */ } else if (changeType === "LOADED") { /* handle record load */ } else if (changeType === "REMOVED") { /* handle record removal */ } else if (changeType === "CHANGED") { /* handle record change */ }

        var varCanExecute = false;
        var varFinalStop = false;
        var varTotalRecordProcessedCount = "0";

        var varDMLCallCount = 0;
        var varDMLCallLength = 1000;

        function fnTriggerClientCall(component, event, helper, execCount) {
            varCanExecute = false;
            var action = component.get("c.createLayoutForArticleDMLClient");

            action.setParams({ parCount: varTotalRecordProcessedCount });

            action.setCallback(this, function(response) {
                if (response.getState() === "SUCCESS" && component.isValid()) {
                    component.set(
                        "v.message",
                        response.getReturnValue()
                    );
                    varTotalRecordProcessedCount = (response.getReturnValue()).split('|')[1];
                    varCanExecute = true;
                    varFinalStop = true;
                    if ((response.getReturnValue()).indexOf('$Completed') > -1) {
                        varFinalStop = true;
                    } else {

                    }
                } else {}
            });

            fnCustomPooling(component, event, helper, execCount);

            $A.enqueueAction(action);

        }

        function fnCustomPooling(component, event, helper, execCount) {
            try {
                component.set(
                    "v.countno",
                    "WorkInProgress on creatinh layout : " + (execCount).toString()
                );
                if (varCanExecute) {
                    varDMLCallCount++;
                    if ((varDMLCallCount < varDMLCallLength) && varFinalStop == false) {
                        fnTriggerClientCall(component, event, helper, 0);
                    }

                } else if ((execCount < 120) && (varCanExecute == false)) {
                    execCount = execCount + 1;
                    window.setTimeout(function() { fnCustomPooling(component, event, helper, execCount); }, 1000);
                }
            } catch (exThree) {}
        }

        fnTriggerClientCall(component, event, helper, 0);

    }




});