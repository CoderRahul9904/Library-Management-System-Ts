import { UserInfoType  } from "../interfaces/UserInfoType.js";
import { renderBooks } from "../app.js";
import { HeadersearchBarObj } from "../app.js";
import { Modal } from "../modals/modal.js";
export class IssuerDetails {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLElement;
    closeButton: HTMLButtonElement;
    initialRender: HTMLDivElement
  
    constructor() {
      this.templateElement = document.getElementById('IssuerInfo')! as HTMLTemplateElement;
      this.hostElement = document.getElementById('IssuerDetails')! as HTMLElement;
      this.closeButton = this.hostElement.querySelector('.closeNotification')! as HTMLButtonElement;
      this.initialRender= document.getElementById('Details')! as HTMLDivElement
  
      this.initialRender.querySelector('.CloseButton')?.addEventListener('click',this.workOfCloseButton.bind(this))
    }
    
    private workOfCloseButton(){
      this.initialRender.classList.add('hidden')
      renderBooks.open()
    }
  
    private formatDate(date: Date): string {
      return date.toLocaleDateString(); 
    }
  
    private createIssuerInfo(listUser: UserInfoType): DocumentFragment {
      const Issued_Date = new Date();
      const Return_Date = new Date(Issued_Date);
      Return_Date.setDate(Return_Date.getDate() + 15);
  
      const IssuerInfoNode = document.importNode(this.templateElement.content, true);
  
      
      const IssuerName = IssuerInfoNode.querySelector('.IssuerName')! as HTMLElement;
      const IssuedDate = IssuerInfoNode.querySelector('.IssuedDate')! as HTMLSpanElement;
      const ReturnDate = IssuerInfoNode.querySelector('.ReturnDate')! as HTMLSpanElement;
      const IssuerEmail = IssuerInfoNode.querySelector('.Email')! as HTMLParagraphElement;
  
      
      IssuerName.textContent = `${listUser.firstName} ${listUser.lastName} issued a book`;
      IssuedDate.textContent = this.formatDate(Issued_Date);
      ReturnDate.textContent = this.formatDate(Return_Date);
      IssuerEmail.textContent = listUser.email! as string;
  
      return IssuerInfoNode;
    }
  
    public fillDetails(): void {
      renderBooks.close()
      HeadersearchBarObj.close()
      this.hostElement.replaceChildren(); 
      this.initialRender.classList.remove('hidden')
      const fragment = document.createDocumentFragment(); 
  
      Modal.UserInfo.forEach(listUser => {
        const userNode = this.createIssuerInfo(listUser);
        fragment.appendChild(userNode);
      });
  
      this.hostElement.appendChild(fragment); 
    }
  }
  