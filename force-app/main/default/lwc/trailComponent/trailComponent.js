import { LightningElement, wire } from 'lwc';
import getallrecords from '@salesforce/apex/SearchProducts.products3';
export default class TrailComponent extends LightningElement {
    @wire(getallrecords)wiredRecords;

}