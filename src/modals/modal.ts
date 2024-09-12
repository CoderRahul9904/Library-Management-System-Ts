import { UserInfoType } from "../interfaces/UserInfoType.js";
import { Autobind } from "../decorators/AutoBindDecorator.js";
import { HeadersearchBarObj } from "../app.js";
import { notification } from "../components/Notification.js";
export class Modal{
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
      HeadersearchBarObj.increaseNotifyCount()
      const notify=new notification()
      console.log(Modal.UserInfo)
      this.hostElement.replaceChildren()
      if(!(this.hostElement.classList.contains('hidden'))){
        this.hostElement.classList.add('hidden')
      }
    }
  }