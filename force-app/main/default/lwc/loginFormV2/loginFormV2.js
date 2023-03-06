import {LightningElement} from 'lwc';
import login from '@salesforce/apex/LoginController.login';
import  NavigationMixin  from 'lightning/navigation';

export default class LoginFormV2 extends NavigationMixin(LightningElement) {
    username = '';
    password = '';
    handleLogin(){
        login({username: this.username, password: this.password})
        .then(result => {
        
            this[NavigationMixin.Navigate]({
                type: 'standard__navItemPage',
                attributes: {
                    //objectApiName: 'Home&Kitchen',
                    //actionName: 'view'
                    apiName: 'Home_Kitchen'
                },
            });
        })
        .catch(error => {
            // Handle login error
        }
        );
    }
}