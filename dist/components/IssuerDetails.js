import { renderBooks } from "../app.js";
import { HeadersearchBarObj } from "../app.js";
import { Modal } from "../modals/modal.js";
export class IssuerDetails {
    constructor() {
        var _a;
        this.templateElement = document.getElementById('IssuerInfo');
        this.hostElement = document.getElementById('IssuerDetails');
        this.closeButton = this.hostElement.querySelector('.closeNotification');
        this.initialRender = document.getElementById('Details');
        (_a = this.initialRender.querySelector('.CloseButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.workOfCloseButton.bind(this));
    }
    workOfCloseButton() {
        this.initialRender.classList.add('hidden');
        renderBooks.open();
    }
    formatDate(date) {
        return date.toLocaleDateString();
    }
    createIssuerInfo(listUser) {
        const Issued_Date = new Date();
        const Return_Date = new Date(Issued_Date);
        Return_Date.setDate(Return_Date.getDate() + 15);
        const IssuerInfoNode = document.importNode(this.templateElement.content, true);
        const IssuerName = IssuerInfoNode.querySelector('.IssuerName');
        const IssuedDate = IssuerInfoNode.querySelector('.IssuedDate');
        const ReturnDate = IssuerInfoNode.querySelector('.ReturnDate');
        const IssuerEmail = IssuerInfoNode.querySelector('.Email');
        IssuerName.textContent = `${listUser.firstName} ${listUser.lastName} issued a book`;
        IssuedDate.textContent = this.formatDate(Issued_Date);
        ReturnDate.textContent = this.formatDate(Return_Date);
        IssuerEmail.textContent = listUser.email;
        return IssuerInfoNode;
    }
    fillDetails() {
        renderBooks.close();
        HeadersearchBarObj.close();
        this.hostElement.replaceChildren();
        this.initialRender.classList.remove('hidden');
        const fragment = document.createDocumentFragment();
        Modal.UserInfo.forEach(listUser => {
            const userNode = this.createIssuerInfo(listUser);
            fragment.appendChild(userNode);
        });
        this.hostElement.appendChild(fragment);
    }
}
