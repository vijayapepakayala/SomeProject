import {LightningElement} from 'lwc';
import login from '@salesforce/apex/LoginController.login';
import  NavigationMixin  from 'lightning/navigation';
export default class loginform extends NavigationMixin(LightningElement){
 
   username = '';
    password = '';
     handleLogin(){
    login({username: this.username, password: this.password})
      .then(result => {
    
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Home&Kitchen',
                actionName: 'view'
            },
        });
      })
      .catch(error => {
        // Handle login error
      });
  }

}
