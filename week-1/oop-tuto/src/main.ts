import { getAccountList } from "./scripts/account-list";
import { BankAccount } from "./scripts/bank-account";

class Main {
	
	private bankAccountList: BankAccount[] = getAccountList();

	start(template:HTMLElement): void{
		
		const html = `
		<h2>Acount List Information</h2>
		<ul>
			${this.renderAccountList()}
		</ul>
		`;

		template.innerHTML = html;
	}

	renderAccountList(): string {
		
		return this.bankAccountList
		.map(acc => `
			<li>
				<a href="#">Account Id: ${acc.id}</a>
				<span>Account Title: ${acc.title}</span>
				<span>Account Balance: ${acc.balance}</span>
			</li>
			`
		)
		.join(' ');
	}
}

const templateView = document.getElementById("output");

if(templateView){

	const main = new Main();
	main.start(templateView as HTMLDivElement);
}
else {
	console.log('ERROR: Template View is Null')
}