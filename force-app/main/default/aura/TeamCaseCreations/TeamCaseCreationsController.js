({
    doInit : function(component, event) {
        var action = component.get("c.retrieveNewCasesList");
        action.setCallback(this, function(a) {
            try{
                var casesList = a.getReturnValue();
                casesList.forEach(function(entry) {
                    var description = entry.caseRecord.Description;
                    if (description.length > 200) {
                        entry.caseRecord.Description = description.substring(0, 197) + "...";
                    }else{
                        entry.caseRecord.Description = description;
                    }
                });
                component.set("v.subscribed_cases", casesList);
            }catch(err) {
                
            }
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