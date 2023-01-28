import { LightningElement } from 'lwc';
import { NavigationMixin} from 'lightning/navigation';
export default class Imperativeonorder extends NavigationMixin(LightningElement) {
    
    Slect__product1= 'Electricals';
    OnChangehandler1(event){
        this.Slect__product1 = event.target.value
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'https://oscaritsolutions-fe-dev-ed.develop.lightning.force.com/lightning/o/Product2/new?count=3&nooverride=1&useRecordTypeCheck=1&navigationLocation=LIST_VIEW&uid=167265434732712192&backgroundContext=%2Flightning%2Fo%2FProduct2%2Flist%3FfilterName%3DRecent&recordTypeId=0122w0000007V3NAAU'
               
            }
            
        })
    }
    
    
}