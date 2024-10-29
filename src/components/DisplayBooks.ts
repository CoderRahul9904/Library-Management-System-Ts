import { books } from "../util/CollectionOfBooks";
import { Modal } from "../modals/modal";
export class displaybooks{
    templateElement: HTMLTemplateElement;
    hostElement: HTMLElement;
    templateInitialStepBooks: HTMLTemplateElement;
    
    constructor(){
        this.templateElement=document.getElementById('books-template')! as HTMLTemplateElement
        this.hostElement=document.getElementById('books')! as HTMLElement
        this.templateInitialStepBooks= document.getElementById('books-initial-setup')! as HTMLTemplateElement
        this.renderInitialLayout()
        this.renderBooks()
    }
    
    public open(){
      this.hostElement.classList.remove('hidden')
    }
    public close(){
      this.hostElement.classList.add("hidden")
    }
    
    private renderBooks() {
        const gridDiv = this.hostElement.firstElementChild as HTMLDivElement;
        const fragment = document.createDocumentFragment();
        for (const book of books) {
          const booksContentNode = document.importNode(this.templateElement.content, true);
          const img = booksContentNode.querySelector('.BookImage') as HTMLImageElement;
          const modalOpenButton = booksContentNode.querySelector('.open')! as HTMLButtonElement;
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

    private renderInitialLayout(){
        const bookDivNode = document.importNode(this.templateInitialStepBooks.content, true);
        this.hostElement.appendChild(bookDivNode);
    }
}