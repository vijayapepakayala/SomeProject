import { LightningElement } from 'lwc';
import fetchAccounts from '@salesforce/apex/AccountController.fetchAccounts';
import { NavigationMixin } from 'lightning/navigation';
 
const columns = [   
    { label: 'Name', fieldName: 'Name' },
    { label: 'Industry', fieldName: 'Industry' },
    { type: "button", typeAttributes: {
        label: 'View',
        name: 'view',
        title: 'View',
        disabled: { fieldName: 'Is_Active__c' },
        value: 'view',
        iconPosition: 'left'
    } },
    { type: "button", typeAttributes: {
        label: 'Edit',
        name: 'edit',
        title: 'Edit',
        disabled: { fieldName: 'Is_Active__c' },
        value: 'edit',
        iconPosition: 'left'
    } }
];

export default class Example extends NavigationMixin( LightningElement ) {
     
    accounts;
    error;
    columns = columns;
 
    handleKeyChange( event ) {
         
        const searchKey = event.target.value;
 
        if ( searchKey ) {
 
            fetchAccounts( { searchKey } )   
            .then(result => {
 
                this.accounts = result;
 
            })
            .catch(error => {
 
                this.error = error;
 
            });
 
        } else
        this.accounts = undefined;
 
    }

    handleRowAction( event ) {

        const actionName = event.detail.action.name;
        const row = event.detail.row;
        console.log( 'Action is ' + actionName );
        console.log( 'Record id is ' + row.Id );

        switch ( actionName ) {
            case 'view':
                this[ NavigationMixin.Navigate ]( {
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: row.Id,
                        actionName: 'view'
                    }
                } );
                break;
            case 'edit':
                this[ NavigationMixin.Navigate ]( {
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: row.Id,
                        objectApiName: 'Account',
                        actionName: 'edit'
                    }
                });
                break;
            default:
        }

    }

}