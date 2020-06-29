import { LightningElement, api, wire, track } from 'lwc';
import getKB  from '@salesforce/apex/DeleteKB.getKB'; 

export default class KBUtilitybar extends LightningElement {

@api comptitle;
@track payload = '';
@track error = '';
@wire(getKB) kbrecords;
        //Handles the error
        handleError(event){
            //Error is coming in the event.detail.error
            this.error = JSON.stringify(event.detail.error);
        }
        //Handles the message/payload from streaming api
        handleMessage(event){
            //Message is coming in event.detail.payload
            this.payload = this.payload + JSON.stringify(event.detail.payload);
        }

}