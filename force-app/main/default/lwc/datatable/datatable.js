import { LightningElement,api,wire } from 'lwc';
import promethod from '@salesforce/apex/productdetails.promethod'
const Coloumns= [
    {label:'Product Brand', fieldName :"Name"},
    {label:'Product Code', fieldName :"ProductCode"},
    {label:'Type of Products', fieldName :"Type_OF_Products__c"},    
]
export default class Datatable extends LightningElement {
    @api Productdetails
    @api Cols = Coloumns
    SelectedData=''
    Changehandler(event){
        this.SelectedData=event.target.value
    }
    @wire (promethod,{names:'$SelectedData'})
    profunc(data,error){
        if(data){
            this.Productdetails=data
        }else if(error){
            console.error(error)
        }
    }
    
   
}