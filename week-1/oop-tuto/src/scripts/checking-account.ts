import { BankAccount } from "./bank-account";
import { AccountType } from "./enums";

export class CheckingAccount extends BankAccount {

    accountType: AccountType = AccountType.Checking;
    
    constructor(accountSettings: AccountSettings) {
    
    super(accountSettings);
    //Other code Here
    } 

    getAccountInfo() {

        return {

        };
    }

}