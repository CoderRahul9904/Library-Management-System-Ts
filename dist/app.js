// interface
// interface Book {
//     title: string;
//     description: string;
//     imageUrl: string;
//   }
// interface UserInfoType{
//     [k: string]: FormDataEntryValue;
//     }
//util
// const books: Book[] = [
//   {
//     title: "RICH DAD POOR DAD",
//     description: "A groundbreaking personal finance book by Robert Kiyosaki that teaches the importance of financial education, investing, and entrepreneurship through the contrasting lessons from two 'dads' — one rich and one poor.",
//     imageUrl: '../public/FirstImage.jpg'
//   },
//   {
//     title: "THINK AND GROW RICH",
//     description: "Written by Napoleon Hill, this book is a timeless guide on how to build wealth and success by harnessing the power of thought and a burning desire to achieve your goals.",
//     imageUrl: '../public/ThinkAndGrowRich.jpg'
//   },
//   {
//     title: "ELON MUSK",
//     description: "A biography by Ashlee Vance that chronicles the life, vision, and innovative ventures of tech billionaire Elon Musk, covering his roles in Tesla, SpaceX, and beyond.",
//     imageUrl: '../public/ElonMusk.jpg'
//   },
//   {
//     title: "APJ ABDUL KALAM: WINGS OF FIRE",
//     description: "The inspiring autobiography of Dr. APJ Abdul Kalam, India's Missile Man and former President, detailing his journey from a humble background to becoming a visionary scientist and leader.",
//     imageUrl: '../public/ApjV2.jpg'
//   },
//   {
//     title: "THE 7 HABITS OF HIGHLY EFFECTIVE PEOPLE",
//     description: "Stephen R. Covey presents a holistic approach to personal and professional effectiveness through seven timeless habits that emphasize principles and character development.",
//     imageUrl: '../public/the7habbits.jpg'
//   },
//   {
//       title: "HOW TO TALK TO ANYONE",
//       description: "Leil Lowndes shares 92 easy and effective communication strategies to build confidence, charm, and social influence in both professional and personal settings.",
//       imageUrl: '../public/HowToTalk.jpg'
//   },
//   {
//     title: "THE ALCHEMIST",
//     description: "Paulo Coelho's international bestseller is a philosophical tale about a young shepherd's quest for his personal legend, filled with wisdom on following one's dreams and destiny.",
//     imageUrl: '../public/TheAlchemistV2.jpg'
//   },
//   {
//     title: "THE GOD OF SMALL THINGS",
//     description: "Arundhati Roy's Booker Prize-winning novel weaves a powerful narrative of family, love, and societal norms in the backdrop of Kerala, India, told with lyrical prose and depth.",
//     imageUrl: '../public/TheGodOfSmallThingsV2.jpg'
//   },
//   {
//     title: "TRAIN TO PAKISTAN",
//     description: "Khushwant Singh's historical novel explores the human impact of the 1947 Partition of India through the lens of a small village caught in the turmoil, blending fiction with history.",
//     imageUrl: '../public/TheTrainToPokV2.jpg'
//   },
//   {
//     title: "ATOMIC HABITS",
//     description: "James Clear offers a practical guide to building good habits and breaking bad ones, demonstrating how small, incremental changes can lead to significant personal growth over time.",
//     imageUrl: '../public/AtomicHabbitsV2.jpg'
//   }
// ];
// decorator
// function Autobind(_: any, _2: string | Symbol, descriptor: PropertyDescriptor): PropertyDescriptor{
//   const originalMethod=descriptor.value;
//   const adjustableDescriptor: PropertyDescriptor = {
//     configurable : true,
//     get(){
//         const boundFn = originalMethod.bind(this);
//         return boundFn;
//     }
//   }
//   return adjustableDescriptor;
// }
// HeaderComponent
// class Header{
//     templateElement: HTMLTemplateElement;
//     hostElement: HTMLElement;
//     searchBar: HTMLInputElement;
//     NotifyCountDiv: HTMLDivElement;
//     constructor(){
//         this.templateElement= document.getElementById('header-template')! as HTMLTemplateElement
//         this.hostElement= document.getElementById('Header')! as HTMLElement
//         const headerNode= document.importNode(this.templateElement.content,true)
//         this.NotifyCountDiv= headerNode.querySelector('.NumberOfUser')! as HTMLDivElement
//         console.log(this.NotifyCountDiv)
//         this.renderHeader(headerNode)
//         this.searchBar= this.attachSearchInput()
//     }
//     private attachSearchInput(){
//         const SearchBookEle=this.hostElement.querySelector('.SearchBook')! as HTMLInputElement
//         return SearchBookEle
//     }
//     public increaseNotifyCount(){
//       const Length=Modal.UserInfo.length
//       if(Length === 0){
//         this.NotifyCountDiv.classList.add('hidden')
//       }else{
//         this.NotifyCountDiv.classList.remove('hidden')
//         this.NotifyCountDiv.textContent=`${Length}`
//       }
//     }
//     private renderHeader(headerNode: DocumentFragment){
//         const notificationButton=headerNode.querySelector('.notifyButton')! as HTMLButtonElement
//         this.increaseNotifyCount()
//         notificationButton.addEventListener('click',this.onClickOnNotification)
//         this.hostElement.appendChild(headerNode)
//     }
//     @Autobind
//     private onClickOnNotification(){
//       const SendUserNotification= new IssuerDetails()
//       SendUserNotification.fillDetails()
//     }
// }
// showSingleBookComponents
// class showSingleBook extends Header{
//   templateElement: HTMLTemplateElement;
//   hostElement: HTMLElement;
//   constructor(){
//     super()
//     this.templateElement=document.getElementById('book-search-template')! as HTMLTemplateElement;
//     this.hostElement=document.getElementById('book-search')! as HTMLElement
//     this.searchBar.addEventListener('input',this.OnChangeOfSearch)
//   }
//   public open(){
//     this.hostElement.classList.remove('hidden')
//   }
//   public close(){
//     this.hostElement.classList.add('hidden')
//   }
//   @Autobind
//   private OnChangeOfSearch(){
//     this.hostElement.classList.remove('hidden')
//     this.hostElement.replaceChildren()
//     const SearchValue=((this.searchBar.value).trim()).toUpperCase()
//     console.log(SearchValue)
//     const SearchedBooks=books.filter((book) => book.title.trim().includes(SearchValue)) as Book[]
//     console.log(SearchedBooks)
//     this.renderSingleBook(SearchedBooks)
//   }
//   private renderSingleBook(Book: Book[]){
//     if(Book){
//       renderBooks.close()
//     }
//     const fragment = document.createDocumentFragment();
//     for(const book of Book){
//       if(book){
//       const SearchedBookNode=document.importNode(this.templateElement.content,true)
//       const img=SearchedBookNode.querySelector('.SearchedBookImg') as HTMLImageElement
//       img.src=book.imageUrl
//       const titleTd=SearchedBookNode.querySelector('.BookTitle') as HTMLTableCellElement
//       titleTd.textContent=book.title
//       const modalOpenButton = SearchedBookNode.querySelector('.open')! as HTMLButtonElement;
//       modalOpenButton.addEventListener('click', () => {
//         const modal = new Modal();
//         modal.open();
//       });
//       const descriptionTd=SearchedBookNode.querySelector('.BookDescription') as HTMLTableCellElement
//       descriptionTd.textContent=book.description
//       fragment.appendChild(SearchedBookNode)
//       }else{
//         return
//       }
//     }
//     this.hostElement.appendChild(fragment)
//     return
//   }
// }
// NotificationComponents
// class notification{
//     templateElement: HTMLTemplateElement;
//     hostElement: HTMLElement;
//     constructor(){
//         this.templateElement = document.getElementById('notification-template')! as HTMLTemplateElement
//         this.hostElement= document.getElementById('Notification')! as HTMLElement
//         this.renderNotification()
//     }
//     public renderNotification(){
//       const notificationNode = document.importNode(this.templateElement.content, true);
//       const issuerName= notificationNode.querySelector('.whoIssued')! as HTMLParagraphElement
//       const TargetUser=Modal.UserInfo.length-1
//       issuerName.textContent=`${Modal.UserInfo[TargetUser].firstName} ${Modal.UserInfo[TargetUser].lastName} issued a book.`
//       this.hostElement.appendChild(notificationNode)
//       setTimeout(() => {
//           this.hostElement.replaceChildren()
//       }, 2000);
//     }
// }
// // IssuerDetailsComponents
// class IssuerDetails {
//   templateElement: HTMLTemplateElement;
//   hostElement: HTMLElement;
//   closeButton: HTMLButtonElement;
//   initialRender: HTMLDivElement
//   constructor() {
//     this.templateElement = document.getElementById('IssuerInfo')! as HTMLTemplateElement;
//     this.hostElement = document.getElementById('IssuerDetails')! as HTMLElement;
//     this.closeButton = this.hostElement.querySelector('.closeNotification')! as HTMLButtonElement;
//     this.initialRender= document.getElementById('Details')! as HTMLDivElement
//     this.initialRender.querySelector('.CloseButton')?.addEventListener('click',this.workOfCloseButton.bind(this))
//   }
//   private workOfCloseButton(){
//     this.initialRender.classList.add('hidden')
//     renderBooks.open()
//   }
//   private formatDate(date: Date): string {
//     return date.toLocaleDateString(); 
//   }
//   private createIssuerInfo(listUser: UserInfoType): DocumentFragment {
//     const Issued_Date = new Date();
//     const Return_Date = new Date(Issued_Date);
//     Return_Date.setDate(Return_Date.getDate() + 15);
//     const IssuerInfoNode = document.importNode(this.templateElement.content, true);
//     const IssuerName = IssuerInfoNode.querySelector('.IssuerName')! as HTMLElement;
//     const IssuedDate = IssuerInfoNode.querySelector('.IssuedDate')! as HTMLSpanElement;
//     const ReturnDate = IssuerInfoNode.querySelector('.ReturnDate')! as HTMLSpanElement;
//     const IssuerEmail = IssuerInfoNode.querySelector('.Email')! as HTMLParagraphElement;
//     IssuerName.textContent = `${listUser.firstName} ${listUser.lastName} issued a book`;
//     IssuedDate.textContent = this.formatDate(Issued_Date);
//     ReturnDate.textContent = this.formatDate(Return_Date);
//     IssuerEmail.textContent = listUser.email! as string;
//     return IssuerInfoNode;
//   }
//   public fillDetails(): void {
//     renderBooks.close()
//     HeadersearchBarObj.close()
//     this.hostElement.replaceChildren(); 
//     this.initialRender.classList.remove('hidden')
//     const fragment = document.createDocumentFragment(); 
//     Modal.UserInfo.forEach(listUser => {
//       const userNode = this.createIssuerInfo(listUser);
//       fragment.appendChild(userNode);
//     });
//     this.hostElement.appendChild(fragment); 
//   }
// }
// DisplayBooks
// class displaybooks{
//     templateElement: HTMLTemplateElement;
//     hostElement: HTMLElement;
//     templateInitialStepBooks: HTMLTemplateElement;
//     constructor(){
//         this.templateElement=document.getElementById('books-template')! as HTMLTemplateElement
//         this.hostElement=document.getElementById('books')! as HTMLElement
//         this.templateInitialStepBooks= document.getElementById('books-initial-setup')! as HTMLTemplateElement
//         this.renderInitialLayout()
//         this.renderBooks()
//     }
//     public open(){
//       this.hostElement.classList.remove('hidden')
//     }
//     public close(){
//       this.hostElement.classList.add("hidden")
//     }
//     private renderBooks() {
//         const gridDiv = this.hostElement.firstElementChild as HTMLDivElement;
//         const fragment = document.createDocumentFragment();
//         for (const book of books) {
//           const booksContentNode = document.importNode(this.templateElement.content, true);
//           const img = booksContentNode.querySelector('.BookImage') as HTMLImageElement;
//           const modalOpenButton = booksContentNode.querySelector('.open')! as HTMLButtonElement;
//           if (img) {
//             img.src = book.imageUrl;
//           }
//           modalOpenButton.addEventListener('click', () => {
//             const modal = new Modal();
//             modal.open();
//           });
//           fragment.appendChild(booksContentNode);
//         }
//         gridDiv.appendChild(fragment);
//       }
//     private renderInitialLayout(){
//         const bookDivNode = document.importNode(this.templateInitialStepBooks.content, true);
//         this.hostElement.appendChild(bookDivNode);
//     }
// }
// Modal Folder
// class Modal{
//   templateElement: HTMLTemplateElement;
//   hostElement: HTMLElement;
//   public static UserInfo: UserInfoType[] = [];
//   constructor(){
//     this.templateElement=document.getElementById('modal-details')! as HTMLTemplateElement
//     this.hostElement=document.getElementById('modal')! as HTMLElement
//   }
//   public open(){
//     if(this.hostElement.classList.contains('hidden')){
//       this.hostElement.classList.remove('hidden')
//     }
//     const ModalNode=document.importNode(this.templateElement.content,true)
//     const closeModalButton= ModalNode.querySelector('.close')! as HTMLButtonElement
//     closeModalButton.addEventListener('click',(event) => this.close(event))
//     this.hostElement.appendChild(ModalNode)
//   }
//   @Autobind
//   public close(event: Event){
//     const form=document.getElementById('user-form') as HTMLFormElement
//     event.preventDefault()
//     const IssuerDetail= new FormData(form)
//     const User=Object.fromEntries(IssuerDetail.entries())
//     Modal.UserInfo.push(User)
//     HeadersearchBarObj.increaseNotifyCount()
//     const notify=new notification()
//     console.log(Modal.UserInfo)
//     this.hostElement.replaceChildren()
//     if(!(this.hostElement.classList.contains('hidden'))){
//       this.hostElement.classList.add('hidden')
//     }
//   }
// }
import { showSingleBook } from "./components/ShowSingleBook.js";
import { displaybooks } from "./components/DisplayBooks.js";
export const HeadersearchBarObj = new showSingleBook();
export const renderBooks = new displaybooks();
