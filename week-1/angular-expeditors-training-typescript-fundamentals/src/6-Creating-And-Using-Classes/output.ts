import {FoodProduct, getProducts, Product} from "../lib";

class ProductOutput {

    products: Product[] = [];
    form = this.getElement('#form');
    output = this.getElement('#output');

    constructor() {
        this.form.addEventListener('click', event => this.submitForm(event));
    }

    private getElement(selector: string) : HTMLElement {
        return document.querySelector(selector) as HTMLElement;
    }

    private getFormElement(selector: string) : HTMLFormElement {
        return this.getElement(selector) as HTMLFormElement;
    }

    private submitForm(event: Event) {

        const target = event.target as HTMLElement;
        if(target.tagName.toUpperCase() === 'BUTTON'){
            if(target.innerText.toUpperCase() === 'SUBMIT'){

                const id = +this.getElement('div.form-wrapper').id;
                const name = this.getFormElement('#product-name');
                const icon = this.getFormElement('#product-icon');

                const product = new FoodProduct( id, name.value, icon.value);
                if(product.validate()){

                    const index = this.products.findIndex(p => p.id === id);
                    this.products[index] = product;
                    this.output.innerHTML = this.layoutProducts();
                    this.hideForm();
                }
            }
        }
    }

    private layoutProducts() {

        const items = this.products.map( product => {

            const {id, name, icon} = product;
            const productHtml = `
                <span class="card-id">#${id}</span>
                <i class="card-icon ${icon} fa-lg"></i>
                <span class="card-name">${name}</span>
                <span class="button is-pulled-right" id="${id}">Edit</span>
            `;

            return `
                <li>
                    <div class="card" id="${id}">
                        <div class="card-content">
                            <div class="content">
                                ${productHtml}
                            </div>
                        </div>
                    </div>
                </li>
            `;
        });

        return `<ul>${items.join('')}</ul>`;
    }

    private hideForm() {
        this.form?.classList.add('is-hidden');
    }

    async updateOutput(id: string){

        this.products = await getProducts();
        const html = this.layoutProducts();

        if(this.output && html){

            this.output.innerHTML = html;
            this.output.addEventListener('click', event => {

                const node = event.target as HTMLElement;
                if(node.id){
                    this.showForm(+node.id);
                }
            })
        }
    }

    private showForm(id: number) {

        this.getElement('.notification').classList.add('is-hidden');

        const product = this.getProduct(id);
        if(product){

            this.getElement('.form-wrapper').id = id.toString();
            this.getFormElement("#product-name").value = product.name;
            this.getFormElement("#product-icon").value = product.icon;
            this.form.classList.remove('is-hidden');
        }
    }

    private getProduct(id: number): Product | null{

        const products = this.products.filter((product) => product.id === id);
        if (products.length) {
            return products[0];
        }
        return null;
    }
}

export default new ProductOutput();
