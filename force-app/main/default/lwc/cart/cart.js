import { LightningElement,wire, track } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import PRODUCT_OBJECT from '@salesforce/schema/Product2';
import { getRecords } from 'lightning/uiRecordApi';

export default class Cart extends LightningElement {
  objectInfo;
    products;

    @wire(getRecords, {
        objectApiName: PRODUCT_OBJECT,
        fields: ['Name', 'Description__c', 'Price__c']
    })products;

    // wiredProducts({ error, data }) {
    //     if (data) {
    //         this.products = data;
    //         this.error = undefined;
    //     } else if (error) {
    //         this.error = error;
    //         this.products = undefined;
    //     }
    // }

    addToCart(){
        // Get the product id from the event
        const productId = event.currentTarget.dataset.productId;

        // Add the product to the cart (not implemented in this example)

        // Show a notification that the product was added to the cart
        const event = new CustomEvent('productadded', {
            detail: productId 
        });
        this.dispatchEvent(event);
    }
}