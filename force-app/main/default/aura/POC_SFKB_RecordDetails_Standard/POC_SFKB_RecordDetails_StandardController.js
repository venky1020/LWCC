({
	doInit: function(component, event, helper) {
		//component.set("v.recordId", "005G00000024zRPIAY");
		component.find("recordLoader").reloadRecord(true);
	},
	recordUpdated: function(component, event, helper) {

		//var changeType = event.getParams().changeType;

		//if (changeType === "ERROR") { /* handle error; do this first! */ } else if (changeType === "LOADED") { /* handle record load */ } else if (changeType === "REMOVED") { /* handle record removal */ } else if (changeType === "CHANGED") { /* handle record change */ }

		var varinputRecordId = component.get("v.vinputRecordId");
		component.set("v.recordId", varinputRecordId);
		component.find("recordLoader").reloadRecord(true);
	}
})