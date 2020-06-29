({
    doInit : function(component, event) {
        var action = component.get("c.retrieveMonitoredCasesList");
        action.setCallback(this, function(a) {
            var casesList = a.getReturnValue();
            if(!casesList[0].IsSubscriptionsNotFound && !casesList[0].IsNoRecordsReturned){
                casesList.forEach(function(entry) {
                    var description = entry.caseRecord.Description;
                    if (description.length > 200) {
                        entry.caseRecord.Description = description.substring(0, 197) + "...";
                    }else{
                        entry.caseRecord.Description = description;
                    }
                });
            }
            component.set("v.subscribed_cases", casesList); 
        });
        $A.enqueueAction(action);
    },
    
    navigateToMyComponent : function(component, event, helper) {
        var evt = $A.get("e.force:navigateToComponent");
        var selectedCaseId = event.currentTarget.getAttribute('name');
        evt.setParams({
            componentDef : "c:LightningCaseDetail",
            componentAttributes: {
                caseId : selectedCaseId,
                detailType : "New"
            }
        });
        evt.fire();
    }
})