import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
export default class toastevent extends NavigationMixin(LightningElement) {
    
    showToast() {
        const event = new ShowToastEvent({
            title: 'Success',
            message:
                'Order created Successfully',
        });
        this.dispatchEvent(event);
    }
}
