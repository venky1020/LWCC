({
    doInit : function(component, event) {
        var action = component.get("c.retrieveCSATList");
        action.setCallback(this, function(a) {
            component.set("v.recordsList", a.getReturnValue());
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
                detailType : "Survey"
            }
        });
        evt.fire();
    }
})