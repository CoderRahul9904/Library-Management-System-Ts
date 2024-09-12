var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Modal } from "../modals/modal.js";
import { Autobind } from "../decorators/AutoBindDecorator.js";
import { IssuerDetails } from "./IssuerDetails.js";
export class Header {
    constructor() {
        this.templateElement = document.getElementById('header-template');
        this.hostElement = document.getElementById('Header');
        const headerNode = document.importNode(this.templateElement.content, true);
        this.NotifyCountDiv = headerNode.querySelector('.NumberOfUser');
        console.log(this.NotifyCountDiv);
        this.renderHeader(headerNode);
        this.searchBar = this.attachSearchInput();
    }
    attachSearchInput() {
        const SearchBookEle = this.hostElement.querySelector('.SearchBook');
        return SearchBookEle;
    }
    increaseNotifyCount() {
        const Length = Modal.UserInfo.length;
        if (Length === 0) {
            this.NotifyCountDiv.classList.add('hidden');
        }
        else {
            this.NotifyCountDiv.classList.remove('hidden');
            this.NotifyCountDiv.textContent = `${Length}`;
        }
    }
    renderHeader(headerNode) {
        const notificationButton = headerNode.querySelector('.notifyButton');
        // const NotifyCountDiv= notificationButton.querySelector('.NumberOfUser')! as HTMLDivElement
        this.increaseNotifyCount();
        notificationButton.addEventListener('click', this.onClickOnNotification);
        this.hostElement.appendChild(headerNode);
    }
    onClickOnNotification() {
        const SendUserNotification = new IssuerDetails();
        SendUserNotification.fillDetails();
    }
}
__decorate([
    Autobind
], Header.prototype, "onClickOnNotification", null);
