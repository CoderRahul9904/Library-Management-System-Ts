var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Autobind } from "../decorators/AutoBindDecorator.js";
import { HeadersearchBarObj } from "../app.js";
import { notification } from "../components/Notification.js";
export class Modal {
    constructor() {
        this.templateElement = document.getElementById('modal-details');
        this.hostElement = document.getElementById('modal');
    }
    open() {
        if (this.hostElement.classList.contains('hidden')) {
            this.hostElement.classList.remove('hidden');
        }
        const ModalNode = document.importNode(this.templateElement.content, true);
        const closeModalButton = ModalNode.querySelector('.close');
        closeModalButton.addEventListener('click', (event) => this.close(event));
        this.hostElement.appendChild(ModalNode);
    }
    close(event) {
        const form = document.getElementById('user-form');
        event.preventDefault();
        const IssuerDetail = new FormData(form);
        const User = Object.fromEntries(IssuerDetail.entries());
        Modal.UserInfo.push(User);
        HeadersearchBarObj.increaseNotifyCount();
        const notify = new notification();
        console.log(Modal.UserInfo);
        this.hostElement.replaceChildren();
        if (!(this.hostElement.classList.contains('hidden'))) {
            this.hostElement.classList.add('hidden');
        }
    }
}
Modal.UserInfo = [];
__decorate([
    Autobind
], Modal.prototype, "close", null);
