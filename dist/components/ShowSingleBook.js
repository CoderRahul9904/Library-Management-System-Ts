var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Header } from "./Header.js";
import { Autobind } from "../decorators/AutoBindDecorator.js";
import { renderBooks } from "../app.js";
import { books } from "../util/CollectionOfBooks.js";
import { Modal } from "../modals/modal.js";
export class showSingleBook extends Header {
    constructor() {
        super();
        this.templateElement = document.getElementById('book-search-template');
        this.hostElement = document.getElementById('book-search');
        this.searchBar.addEventListener('input', this.OnChangeOfSearch);
    }
    open() {
        this.hostElement.classList.remove('hidden');
    }
    close() {
        this.hostElement.classList.add('hidden');
    }
    OnChangeOfSearch() {
        this.hostElement.classList.remove('hidden');
        this.hostElement.replaceChildren();
        const SearchValue = ((this.searchBar.value).trim()).toUpperCase();
        console.log(SearchValue);
        const SearchedBooks = books.filter((book) => book.title.trim().includes(SearchValue));
        console.log(SearchedBooks);
        this.renderSingleBook(SearchedBooks);
    }
    renderSingleBook(Book) {
        if (Book) {
            renderBooks.close();
        }
        const fragment = document.createDocumentFragment();
        for (const book of Book) {
            if (book) {
                const SearchedBookNode = document.importNode(this.templateElement.content, true);
                const img = SearchedBookNode.querySelector('.SearchedBookImg');
                img.src = book.imageUrl;
                const titleTd = SearchedBookNode.querySelector('.BookTitle');
                titleTd.textContent = book.title;
                const modalOpenButton = SearchedBookNode.querySelector('.open');
                modalOpenButton.addEventListener('click', () => {
                    const modal = new Modal();
                    modal.open();
                });
                const descriptionTd = SearchedBookNode.querySelector('.BookDescription');
                descriptionTd.textContent = book.description;
                fragment.appendChild(SearchedBookNode);
            }
            else {
                return;
            }
        }
        this.hostElement.appendChild(fragment);
        return;
    }
}
__decorate([
    Autobind
], showSingleBook.prototype, "OnChangeOfSearch", null);
