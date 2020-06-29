({
	decideRedirect : function(component, event, helper) {

		var action = component.get("c.redirectOnNotAuth");
        action.setCallback(this, function(response) {
            if (response.getState() === "SUCCESS" && component.isValid()) {
                component.set("v.SubmitButtonLabel", response.getReturnValue());
            } else {
                
            }
        });
        action.setParams({  ParLabel : "Hi"  });
		$A.enqueueAction(action);
        //component.set("v.SubmitButtonLabel",$A.get("$Label.c.testtest"));
	}
})