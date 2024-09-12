import { Modal } from "../modals/modal.js";
export class notification{
    templateElement: HTMLTemplateElement;
    hostElement: HTMLElement;

    constructor(){
        this.templateElement = document.getElementById('notification-template')! as HTMLTemplateElement
        this.hostElement= document.getElementById('Notification')! as HTMLElement
        this.renderNotification()
    }
    
    public renderNotification(){
      const notificationNode = document.importNode(this.templateElement.content, true);
      const issuerName= notificationNode.querySelector('.whoIssued')! as HTMLParagraphElement
      const TargetUser=Modal.UserInfo.length-1
      issuerName.textContent=`${Modal.UserInfo[TargetUser].firstName} ${Modal.UserInfo[TargetUser].lastName} issued a book.`
      this.hostElement.appendChild(notificationNode)
      setTimeout(() => {
          this.hostElement.replaceChildren()
      }, 2000);
    }
}