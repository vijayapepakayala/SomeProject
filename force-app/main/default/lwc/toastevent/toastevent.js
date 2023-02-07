import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
export default class toastevent extends NavigationMixin(LightningElement) {
   
   handleOnClick(event){ 
    event.preventDefault();     //we dont default behaviour of event to bubble above DOM elements
    
    this[NavigationMixin.Navigate]({
        type: 'standard__objectPage',
        attributes: {
            objectApiName: 'Order',
            actionName: 'new'
        }
        
    });
    }

showToast() {
    const event = new ShowToastEvent({
        title: 'Success',
        message:
            'Enter your Adress',
    });
    this.dispatchEvent(event);
 }
}