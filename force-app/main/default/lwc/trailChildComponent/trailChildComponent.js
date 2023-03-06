import { LightningElement, api } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class TrailChildComponent extends NavigationMixin(LightningElement) {
   /* @api childRecord;
    handleOnClick(event){ 
        event.preventDefault();     //we dont default behaviour of event to bubble above DOM elements
        
        this[NavigationMixin.Navigate]({        //navigation mixin in action
            type: 'standard__recordPage',
            attributes: {
                recordId: this.childRecord.Id,     //navigates to this record page
                objectApiName: 'Product2',   
                actionName: 'view'
                    }
            }
        );
    }*/
}