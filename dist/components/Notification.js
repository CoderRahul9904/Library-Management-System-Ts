import { Modal } from "../modals/modal.js";
export class notification {
    constructor() {
        this.templateElement = document.getElementById('notification-template');
        this.hostElement = document.getElementById('Notification');
        this.renderNotification();
    }
    renderNotification() {
        const notificationNode = document.importNode(this.templateElement.content, true);
        const issuerName = notificationNode.querySelector('.whoIssued');
        const TargetUser = Modal.UserInfo.length - 1;
        issuerName.textContent = `${Modal.UserInfo[TargetUser].firstName} ${Modal.UserInfo[TargetUser].lastName} issued a book.`;
        this.hostElement.appendChild(notificationNode);
        setTimeout(() => {
            this.hostElement.replaceChildren();
        }, 2000);
    }
}
