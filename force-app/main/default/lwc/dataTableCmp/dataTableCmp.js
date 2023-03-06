import { LightningElement } from 'lwc';
import GA from '@salesforce/apex/AccountGetRec.method_One';
const columns = [
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'Account Type', fieldName: 'Type' },
    { label: 'Account Industry', fieldName: 'Industry' },
    { label: 'Annual Revenue', fieldName: 'AnnualRevenue' }]

export default class DataTableCmp extends LightningElement {
    acclist=[];
    error;
    columns=columns;

    connectedCallback(){

    }
    handleClick(){
        GA()
        .then(result=>{
            this.acclist=data;
        })
        .catch(error=>{
            this.error=error;
        })


    }
}