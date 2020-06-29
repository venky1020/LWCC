import { LightningElement, api, track } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import DeleteKBarticle  from '@salesforce/apex/DeleteKB.DeleteKBarticle';


export default class deleteKBApex extends NavigationMixin(LightningElement) {
    // Flexipage provides recordId and objectApiName
    @api recordId;
    @api objectApiName;
    
    @track error;      
        
        deleteRecord(){
            console.log(this.recordId);
            DeleteKBarticle({ recordid: this.recordId })
            .then(result => {
                if(result != 'undefined' && result == 'Article Successfully Deleted'){
                    console.log('entered delete if');
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Record deleted',
                        variant: 'success'
                    })
                )
                } else {
                    console.log('entered else delete if');
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Access Denied',
                            message: 'You can only your own draft articles',
                            variant: 'error'
                        })
                    )

                };
                // Navigate to a record home page after
                // the record is deleted, such as to the
                // contact home page
                this[NavigationMixin.Navigate]({
                    type: 'standard__objectPage',
                    attributes: {
                        objectApiName: 'Knowledge__kav',
                        actionName: 'home',
                    },
                });
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error deleting record',
                        message: error.body.message,
                        variant: 'error'
                    })
                );
            });
    }
        
            
}