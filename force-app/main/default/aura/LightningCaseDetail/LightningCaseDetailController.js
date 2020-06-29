({
    doInit : function(component, event) {
        var escalationDetails = component.find("EscalationDetails");
        var creationDetails = component.find("CreationDetails");
        var surveyDetails = component.find("CSATDetails");
        if(component.get("v.detailType") == "Escalation"){
            $A.util.toggleClass(escalationDetails, "slds-show");
            $A.util.toggleClass(creationDetails, "slds-hide");
            $A.util.toggleClass(surveyDetails, "slds-hide");
            component.set("v.displayType", "Escalation Details");
            var action = component.get("c.returnCaseDetails");
            action.setParams({
                CaseId : component.get("v.caseId")
            });
            action.setCallback(this, function(a) {
                component.set("v.caseRecord", a.getReturnValue());
            });
            $A.enqueueAction(action);
        }else if(component.get("v.detailType") == "New"){
            $A.util.toggleClass(escalationDetails, "slds-hide");
            $A.util.toggleClass(creationDetails, "slds-show");
            $A.util.toggleClass(surveyDetails, "slds-hide");
            component.set("v.displayType", "Case Details");
            var action = component.get("c.returnCaseDetails");
            action.setParams({
                CaseId : component.get("v.caseId")
            });
            action.setCallback(this, function(a) {
                component.set("v.caseRecord", a.getReturnValue());
            });
            $A.enqueueAction(action);
        }else if(component.get("v.detailType") == "Survey"){
            $A.util.toggleClass(escalationDetails, "slds-hide");
            $A.util.toggleClass(creationDetails, "slds-hide");
            $A.util.toggleClass(surveyDetails, "slds-show");
            component.set("v.displayType", "Case Details");
            var action = component.get("c.returnCaseDetails");
            action.setParams({
                CaseId : component.get("v.caseId")
            });
            action.setCallback(this, function(a) {
                component.set("v.caseRecord", a.getReturnValue());
            });
            $A.enqueueAction(action);
        }
    }, 
    
    handleClick : function(cmp, event) {
        var ctarget = event.currentTarget;
    	var id_str = ctarget.dataset.record;
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
          "recordId": id_str,
          "slideDevName": "related"
        });
        navEvt.fire();
    }    
})