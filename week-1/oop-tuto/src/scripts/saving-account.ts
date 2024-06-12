import { BankAccount } from "./bank-account";
import { AccountType } from "./enums";
import { AccountSettings } from "./interfaces";

export class SavingAccount extends BankAccount {

    private _interestRate: number;
    accountType = AccountType.Savings;

    constructor(accountSettings: AccountSettings) {

        super(accountSettings);

        if(accountSettings.interestRate){
            this._interestRate = accountSettings.interestRate;
        }
        else{
            this._interestRate = 0;
        }
        setInterval( () => this.addInterest(), 60000);
    }


    addInterest(): void {
        
        this.balance = this.balance + (this.balance * (this._interestRate / 100));
    }

    deposit(amount: number): void {
        
        let newAmount = amount + (amount * (this._interestRate / 100));
        this.balance += newAmount;
    }

    getAccountInfo() {
        
        return {

        };
    }

}