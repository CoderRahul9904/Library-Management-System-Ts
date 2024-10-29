import { Modal } from "../modals/modal";
import { Autobind } from "../decorators/AutoBindDecorator";
import { IssuerDetails } from "./IssuerDetails";

export class Header{
    templateElement: HTMLTemplateElement;
    hostElement: HTMLElement;
    searchBar: HTMLInputElement;
    NotifyCountDiv: HTMLDivElement;

    constructor(){
        this.templateElement= document.getElementById('header-template')! as HTMLTemplateElement
        this.hostElement= document.getElementById('Header')! as HTMLElement
        const headerNode= document.importNode(this.templateElement.content,true)
        this.NotifyCountDiv= headerNode.querySelector('.NumberOfUser')! as HTMLDivElement
        this.renderHeader(headerNode)
        this.searchBar= this.attachSearchInput()
    }
    private attachSearchInput(){
        const SearchBookEle=this.hostElement.querySelector('.SearchBook')! as HTMLInputElement
        return SearchBookEle
    }
    public increaseNotifyCount(){
      const Length=Modal.UserInfo.length
      if(Length === 0){
        this.NotifyCountDiv.classList.add('hidden')
      }else{
        this.NotifyCountDiv.classList.remove('hidden')
        this.NotifyCountDiv.textContent=`${Length}`
      }
    }
    private renderHeader(headerNode: DocumentFragment){
        
        const notificationButton=headerNode.querySelector('.notifyButton')! as HTMLButtonElement
        // const NotifyCountDiv= notificationButton.querySelector('.NumberOfUser')! as HTMLDivElement
        this.increaseNotifyCount()
        notificationButton.addEventListener('click',this.onClickOnNotification)
        this.hostElement.appendChild(headerNode)
    }
    @Autobind
    private onClickOnNotification(){
      const SendUserNotification= new IssuerDetails()
      SendUserNotification.fillDetails()
    }
}