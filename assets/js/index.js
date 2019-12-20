'use strict';

class Messanger {
  constructor(user) {
    this._user = user;
  }

  get user() {
    return _user;
  }

}

class Chat {
  _messages = [];

  constructor(id, message) {
    this._id = id;
    this._messages = message;
  }

  render() {
    const messageList = document.getElementById('messageList');
    this._messages.forEach(message => {
      messageList.prepend(message.render());
    });

  }

  set message(value) {
    this._messages = value;
  }

  get message() {
    return this._messages;
  }
}

class Message {
  constructor(value, author, date) {
    this._value = value;
    this._author = author;
    this._date = date;
  }

  render() {
    const messageContainer = document.createElement('li');
    messageContainer.classList.add('messageContainer');

    const authorImg = document.createElement('img');
    authorImg.setAttribute('src', this._author.imgUrl);
    authorImg.setAttribute('alt', this._author.name + this._author.surname);
    messageContainer.appendChild(authorImg);

    const textMessage = document.createElement('p');
    textMessage.classList.add('textMessage');
    textMessage.innerText = this._value;
    messageContainer.appendChild(textMessage);

    const time = document.createElement('div');
    time.classList.add('timeMessage');
    time.innerText = +this._date.toLocaleString('en', {month: 'long'}) + ' ' +
                     this._date.getDate();
    messageContainer.appendChild(time);

    return messageContainer;
  }
}

class User {
  _name;
  _surname;
  _imgUrl;

  constructor(name, surname, imgUrl) {
    this._name = name;
    this._surname = surname;
    this._imgUrl = imgUrl;
  }

  get name() {
    return this._name;
  }

  get surname() {
    return this._surname;
  }

  get imgUrl() {
    return this._imgUrl;
  }
}

const iam = new User('Vladislav ', 'Polishchuk',
                     'https://images.unsplash.com/photo-1468872961186-1d26f74f3355?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80');

const VPMESSANGER = new Messanger(iam);

const chat = new Chat('1', []);
const sendButton = document.getElementById('sendMessage');
const inputField = document.getElementById('input');

sendButton.onclick = () => {
  const textMessage = inputField.value;
  const message = new Message(textMessage, VPMESSANGER._user, new Date());
  let mes = chat._messages;
  mes.push(message);
  chat.render();

};
