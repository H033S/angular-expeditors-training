class Renderer {

    constructor(
        private template: HTMLDivElement
    ) {}

    renderHtml(html: string): void {

        this.template.innerHTML = html;
    }

    renderError(message: string): void {

        this.template.innerHTML = `<br /><br /><div class="alert alert-danger">${message}</div>`;
    }
}