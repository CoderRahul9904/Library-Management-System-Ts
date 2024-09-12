import { Header } from "./Header.js";
import { Book } from "../interfaces/BookInterface.js";
import { Autobind } from "../decorators/AutoBindDecorator.js";
import { renderBooks} from "../app.js";
import { books } from "../util/CollectionOfBooks.js";
import { Modal } from "../modals/modal.js";
export class showSingleBook extends Header{
    templateElement: HTMLTemplateElement;
    hostElement: HTMLElement;
  
  
    constructor(){
      super()
      this.templateElement=document.getElementById('book-search-template')! as HTMLTemplateElement;
      this.hostElement=document.getElementById('book-search')! as HTMLElement
      
      this.searchBar.addEventListener('input',this.OnChangeOfSearch)
    }
    
    public open(){
      this.hostElement.classList.remove('hidden')
    }
  
    public close(){
      this.hostElement.classList.add('hidden')
    }
    @Autobind
    private OnChangeOfSearch(){
      this.hostElement.classList.remove('hidden')
      this.hostElement.replaceChildren()
      const SearchValue=((this.searchBar.value).trim()).toUpperCase()
      console.log(SearchValue)
      const SearchedBooks=books.filter((book) => book.title.trim().includes(SearchValue)) as Book[]
      console.log(SearchedBooks)
      this.renderSingleBook(SearchedBooks)
    }
  
  
    private renderSingleBook(Book: Book[]){
      if(Book){
        renderBooks.close()
      }
      const fragment = document.createDocumentFragment();
      for(const book of Book){
        if(book){
        const SearchedBookNode=document.importNode(this.templateElement.content,true)
        const img=SearchedBookNode.querySelector('.SearchedBookImg') as HTMLImageElement
        img.src=book.imageUrl
        const titleTd=SearchedBookNode.querySelector('.BookTitle') as HTMLTableCellElement
        titleTd.textContent=book.title
  
  
        const modalOpenButton = SearchedBookNode.querySelector('.open')! as HTMLButtonElement;
        modalOpenButton.addEventListener('click', () => {
          const modal = new Modal();
          modal.open();
        });
  
  
  
        const descriptionTd=SearchedBookNode.querySelector('.BookDescription') as HTMLTableCellElement
        descriptionTd.textContent=book.description
  
        fragment.appendChild(SearchedBookNode)
        }else{
          return
        }
      }
      this.hostElement.appendChild(fragment)
      return
    }
  }