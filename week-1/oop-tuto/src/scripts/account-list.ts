import { BankAccount } from "./bank-account"
import { CheckingAccount } from "./checking-account"
import { SavingAccount } from "./saving-account"


export function getAccountList(): BankAccount[] {

    return [

        new SavingAccount( {
                id: 1, 
                title: `John Doe`,
                balance: 25.00,
                interestRate: 2.5
            }),

        new CheckingAccount({
            id: 2,
            title: `John Asseq`,
            balance: 1_000_000
        })
    ];
}