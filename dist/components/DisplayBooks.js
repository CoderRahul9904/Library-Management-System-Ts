import { books } from "../util/CollectionOfBooks.js";
import { Modal } from "../modals/modal.js";
export class displaybooks {
    constructor() {
        this.templateElement = document.getElementById('books-template');
        this.hostElement = document.getElementById('books');
        this.templateInitialStepBooks = document.getElementById('books-initial-setup');
        this.renderInitialLayout();
        this.renderBooks();
    }
    open() {
        this.hostElement.classList.remove('hidden');
    }
    close() {
        this.hostElement.classList.add("hidden");
    }
    renderBooks() {
        const gridDiv = this.hostElement.firstElementChild;
        const fragment = document.createDocumentFragment();
        for (const book of books) {
            const booksContentNode = document.importNode(this.templateElement.content, true);
            const img = booksContentNode.querySelector('.BookImage');
            const modalOpenButton = booksContentNode.querySelector('.open');
            if (img) {
                img.src = book.imageUrl;
            }
            modalOpenButton.addEventListener('click', () => {
                const modal = new Modal();
                modal.open();
            });
            fragment.appendChild(booksContentNode);
        }
        gridDiv.appendChild(fragment);
    }
    renderInitialLayout() {
        const bookDivNode = document.importNode(this.templateInitialStepBooks.content, true);
        this.hostElement.appendChild(bookDivNode);
    }
}
