import { LightningElement } from 'lwc';
import { NavigationMixin} from 'lightning/navigation';
export default class Imperative extends NavigationMixin (LightningElement){
  
    Select_product = 'Home & kitchen'
  OnchangeHandler(event){
    this.Select_product = event.target.value
    this[NavigationMixin.Navigate]({
        type:'standard__webPage',
        attributes:{
                // objectApiName: 'Product2',
                // actionName: 'new'
                url:'https://oscaritsolutions-fe-dev-ed.develop.lightning.force.com/lightning/o/Product2/new?count=2&nooverride=1&useRecordTypeCheck=1&navigationLocation=LIST_VIEW&uid=167272669821696056&backgroundContext=%2Flightning%2Fo%2FProduct2%2Flist%3FfilterName%3DRecent&recordTypeId=0122w0000007V3DAAU'
            }
        })
  }
}