"use strict";
const books = [
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
class Header {
    constructor() {
        this.templateElement = document.getElementById('header-template');
        this.hostElement = document.getElementById('Header');
        this.renderHeader();
    }
    renderHeader() {
        const headerNode = document.importNode(this.templateElement.content, true);
        this.hostElement.appendChild(headerNode);
    }
}
class notification {
    constructor() {
        this.templateElement = document.getElementById('notification-template');
        this.hostElement = document.getElementById('Notification');
        this.renderNotification();
    }
    renderNotification() {
        const notificationNode = document.importNode(this.templateElement.content, true);
        this.hostElement.appendChild(notificationNode);
        setTimeout(() => {
            this.hostElement.removeChild(notificationNode);
        }, 2000);
    }
}
class displaybooks {
    constructor() {
        this.templateElement = document.getElementById('books-template');
        this.hostElement = document.getElementById('books');
        this.templateInitialStepBooks = document.getElementById('books-initial-setup');
        this.renderInitialLayout();
        this.renderBooks();
    }
    renderBooks() {
        const gridDiv = this.hostElement.firstElementChild;
        const fragment = document.createDocumentFragment();
        for (const book of books) {
            const booksContentNode = document.importNode(this.templateElement.content, true);
            const img = booksContentNode.querySelector('.BookImage');
            if (img) {
                img.src = book.imageUrl;
            }
            fragment.appendChild(booksContentNode);
        }
        gridDiv.appendChild(fragment);
    }
    renderInitialLayout() {
        const bookDivNode = document.importNode(this.templateInitialStepBooks.content, true);
        this.hostElement.appendChild(bookDivNode);
    }
}
const renderHeader = new Header();
const notify = new notification();
const renderBooks = new displaybooks();
