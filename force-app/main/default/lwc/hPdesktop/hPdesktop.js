import { LightningElement } from 'lwc';
import { NavigationMixin} from 'lightning/navigation';
export default class HPdesktop extends NavigationMixin (LightningElement){
  
    Select_product = 'HP DESKTOPS'
    OnchangeHandler(event){
     this.Select_product = event.target.value
     this[NavigationMixin.Navigate]({
         type:'standard__webPage',
         attributes:{
                 // objectApiName: 'Product2',
                 // actionName: 'new'
                 url:'https://oscaritsolutions-fe-dev-ed.develop.lightning.force.com/lightning/r/Product2/01t2w00000DF03PAAT/view'
             }
         })
  }
 }
