interface Book {
    title: string;
    description: string;
    imageUrl: string;
  }
interface UserInfoType{
    // firstName: string;
    // lastName: string;
    // email: string;
    [k: string]: FormDataEntryValue;
    }

  const books: Book[] = [
    {
      title: "RICH DAD POOR DAD",
      description: "A groundbreaking personal finance book by Robert Kiyosaki that teaches the importance of financial education, investing, and entrepreneurship through the contrasting lessons from two 'dads' — one rich and one poor.",
      imageUrl: '../public/FirstImage.jpg'
    },
    {
      title: "THINK AND GROW RICH",
      description: "Written by Napoleon Hill, this book is a timeless guide on how to build wealth and success by harnessing the power of thought and a burning desire to achieve your goals.",
      imageUrl: '../public/ThinkAndGrowRich.jpg'
    },
    {
      title: "ELON MUSK",
      description: "A biography by Ashlee Vance that chronicles the life, vision, and innovative ventures of tech billionaire Elon Musk, covering his roles in Tesla, SpaceX, and beyond.",
      imageUrl: '../public/ElonMusk.jpg'
    },
    
    {
      title: "APJ ABDUL KALAM: WINGS OF FIRE",
      description: "The inspiring autobiography of Dr. APJ Abdul Kalam, India's Missile Man and former President, detailing his journey from a humble background to becoming a visionary scientist and leader.",
      imageUrl: '../public/ApjV2.jpg'
    },
    
    {
      title: "THE 7 HABITS OF HIGHLY EFFECTIVE PEOPLE",
      description: "Stephen R. Covey presents a holistic approach to personal and professional effectiveness through seven timeless habits that emphasize principles and character development.",
      imageUrl: '../public/the7habbits.jpg'
    },
    {
        title: "HOW TO TALK TO ANYONE",
        description: "Leil Lowndes shares 92 easy and effective communication strategies to build confidence, charm, and social influence in both professional and personal settings.",
        imageUrl: '../public/HowToTalk.jpg'
    },
    {
      title: "THE ALCHEMIST",
      description: "Paulo Coelho's international bestseller is a philosophical tale about a young shepherd's quest for his personal legend, filled with wisdom on following one's dreams and destiny.",
      imageUrl: '../public/TheAlchemistV2.jpg'
    },
    {
      title: "THE GOD OF SMALL THINGS",
      description: "Arundhati Roy's Booker Prize-winning novel weaves a powerful narrative of family, love, and societal norms in the backdrop of Kerala, India, told with lyrical prose and depth.",
      imageUrl: '../public/TheGodOfSmallThingsV2.jpg'
    },
    {
      title: "TRAIN TO PAKISTAN",
      description: "Khushwant Singh's historical novel explores the human impact of the 1947 Partition of India through the lens of a small village caught in the turmoil, blending fiction with history.",
      imageUrl: '../public/TheTrainToPokV2.jpg'
    },
    {
      title: "ATOMIC HABITS",
      description: "James Clear offers a practical guide to building good habits and breaking bad ones, demonstrating how small, incremental changes can lead to significant personal growth over time.",
      imageUrl: '../public/AtomicHabbitsV2.jpg'
    }
  ];
  


function Autobind(_: any, _2: string | Symbol, descriptor: PropertyDescriptor): PropertyDescriptor{
  const originalMethod=descriptor.value;
  const adjustableDescriptor: PropertyDescriptor = {
    configurable : true,
    get(){
        const boundFn = originalMethod.bind(this);
        return boundFn;
    }
  }
  return adjustableDescriptor;
}

class Header{
    templateElement: HTMLTemplateElement;
    hostElement: HTMLElement;
    searchBar: HTMLInputElement;

    constructor(){
        this.templateElement= document.getElementById('header-template')! as HTMLTemplateElement
        this.hostElement= document.getElementById('Header')! as HTMLElement
        this.renderHeader()
        this.searchBar= this.attachSearchInput()
    }
    private attachSearchInput(){
        const SearchBookEle=this.hostElement.querySelector('.SearchBook')! as HTMLInputElement
        return SearchBookEle
    }
    private renderHeader(){
        const headerNode= document.importNode(this.templateElement.content,true)
        this.hostElement.appendChild(headerNode)
    }
}


class showSingleBook extends Header{
  templateElement: HTMLTemplateElement;
  hostElement: HTMLElement;


  constructor(){
    super()
    this.templateElement=document.getElementById('book-search-template')! as HTMLTemplateElement;
    this.hostElement=document.getElementById('book-search')! as HTMLElement
    
    this.searchBar.addEventListener('input',this.OnChangeOfSearch)
  }

  @Autobind
  private OnChangeOfSearch(){
    this.hostElement.replaceChildren()
    const SearchValue=((this.searchBar.value).trim()).toUpperCase()
    console.log(SearchValue)
    const SearchedBooks=books.filter((book) => book.title.trim().includes(SearchValue)) as Book[]
    console.log(SearchedBooks)
    this.renderSingleBook(SearchedBooks)
  }


  private renderSingleBook(Book: Book[]){
    
    for(const book of Book){
      if(book){
      const SearchedBookNode=document.importNode(this.templateElement.content,true)
      const img=SearchedBookNode.querySelector('.SearchedBookImg') as HTMLImageElement
      img.src=book.imageUrl
      const titleTd=SearchedBookNode.querySelector('.BookTitle') as HTMLTableCellElement
      titleTd.textContent=book.title
      const descriptionTd=SearchedBookNode.querySelector('.BookDescription') as HTMLTableCellElement
      descriptionTd.textContent=book.description
      this.hostElement.appendChild(SearchedBookNode)
      }else{
        return
      }
    }
    return
  }
}

class notification{
    templateElement: HTMLTemplateElement;
    hostElement: HTMLElement;

    constructor(){
        this.templateElement = document.getElementById('notification-template')! as HTMLTemplateElement
        this.hostElement= document.getElementById('Notification')! as HTMLElement
        this.renderNotification()
    }
    
    private renderNotification(){
      const notificationNode = document.importNode(this.templateElement.content, true);
      console.log(notificationNode)
      const appendedNotification = this.hostElement.appendChild(notificationNode)
      console.log(appendedNotification)
      setTimeout(() => {
          if (appendedNotification && this.hostElement.contains(appendedNotification)) {
              this.hostElement.removeChild(appendedNotification);
          }else{
            console.log("error is here")
          }
      }, 2000);
    }
}
class IssuerDetails{
  templateElement: HTMLTemplateElement;
  hostElement: HTMLElement;

  constructor(){
    this.templateElement= document.getElementById('IssuerInfo')! as HTMLTemplateElement
    this.hostElement= document.getElementById('IssuerDetails')! as HTMLElement
  }

  public fillDetails(){
    const TargetUser=Modal.UserInfo.length-1
    const Issued_Date=new Date()
    const IssuerInfoNode= document.importNode(this.templateElement.content,true)
    const IssuerName= IssuerInfoNode.querySelector('.IssuerName')! as HTMLElement
    IssuerName.textContent=`${(Modal.UserInfo[TargetUser]).firstName} ${(Modal.UserInfo[TargetUser]).lastName} issued a book`
    const IssuedDate= IssuerInfoNode.querySelector('.IssuedDate')! as HTMLSpanElement
    IssuedDate.textContent=`${Issued_Date}`
    const ReturnDate= IssuerInfoNode.querySelector('.ReturnDate')! as HTMLSpanElement
    const IssuerEmail= IssuerInfoNode.querySelector('.Email')! as HTMLParagraphElement
    IssuerEmail.textContent=`${Modal.UserInfo[TargetUser].email}`
    this.hostElement.appendChild(IssuerInfoNode)
  }
}



class displaybooks{
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




class Modal{
  templateElement: HTMLTemplateElement;
  hostElement: HTMLElement;
  public static UserInfo: UserInfoType[] = [];

  constructor(){
    this.templateElement=document.getElementById('modal-details')! as HTMLTemplateElement
    this.hostElement=document.getElementById('modal')! as HTMLElement
  }
  
  public open(){
    if(this.hostElement.classList.contains('hidden')){
      this.hostElement.classList.remove('hidden')
    }
    const ModalNode=document.importNode(this.templateElement.content,true)
    const closeModalButton= ModalNode.querySelector('.close')! as HTMLButtonElement
    closeModalButton.addEventListener('click',(event) => this.close(event))
    this.hostElement.appendChild(ModalNode)
  }
  @Autobind
  public close(event: Event){
    const form=document.getElementById('user-form') as HTMLFormElement
    event.preventDefault()
    const IssuerDetail= new FormData(form)
    
    const User=Object.fromEntries(IssuerDetail.entries())
    Modal.UserInfo.push(User)
    // console.log(Modal.UserInfo)
    const test= new IssuerDetails()
    test.fillDetails()
    this.hostElement.replaceChildren()
    if(!(this.hostElement.classList.contains('hidden'))){
      this.hostElement.classList.add('hidden')
    }
  }
}

const searchBarObj= new showSingleBook()
const notify=new notification()
const renderBooks= new displaybooks()
