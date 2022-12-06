import Store from './modules/store.js';
import UI from './modules/ui.js';
import { DateTime } from './modules/date.js';

class Book {
  constructor(title, author, id = Math.floor(Math.random() * 1000000)) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

// EVENT TO DISPLAY BOOKS
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// EVENT TO ADD A BOOK
document.querySelector('.bookForm').addEventListener('submit', (e) => {
  e.preventDefault();
  // get form values
  const titleInput = document.querySelector('.title').value;
  const authorInput = document.querySelector('.author').value;
  if (titleInput !== '' && authorInput !== '') {
    const book = new Book(titleInput, authorInput);
    UI.addBookToList(book);
    Store.addBook(book);
    UI.clearFields();
  } else {
    // eslint-disable-next-line no-alert
    alert('Please enter book tile and author');
  }
});
// EVENT DELETE
document.querySelector('.books').addEventListener('click', (e) => {
  if (e.target.className === 'delete') {
    const id = e.target.previousElementSibling.innerText;
    Store.removeBook(id);
    UI.deleteBook(e.target);
  }
});

const list = document.querySelector('.list-main');
const books = document.querySelector('.books');
const awesomeBooks = document.querySelector('.awesomeBooks');
const addNew = document.querySelector('.addNew');
const bookForm = document.querySelector('.bookForm');
const contact = document.querySelector('.contactUs');
const contactUs = document.querySelector('.contact');
const dateTime = document.querySelector('#dateTime');

window.addEventListener('DOMContentLoaded', () => {
  books.style.display = 'block';
  awesomeBooks.style.display = 'flex';
  bookForm.style.display = 'none';
  contactUs.style.display = 'none';
});

list.addEventListener('click', () => {
  books.style.display = 'block';
  awesomeBooks.style.display = 'flex';
  bookForm.style.display = 'none';
  contactUs.style.display = 'none';
});

addNew.addEventListener('click', () => {
  // addNew.classList.toggle('list1')
  bookForm.style.display = 'block';
  books.style.display = 'none';
  awesomeBooks.style.display = 'none';
  contactUs.style.display = 'none';
});

contact.addEventListener('click', () => {
  contactUs.style.display = 'flex';
  contactUs.innerHTML = `
    <div class=contactDiv>
      <h2>Contact Information</h2>
      <p>Do you have any questions or you just want to say <q>Hello</q>?
        You can reach out to us!</p>
      <ul>
        <li>Our e-mail: kngotho3@gmail.com</li>
        <li>Our phone number: +254707738725</li>
        <li>Our address: Nairobi, Nairobi, Kenya</li>
      </ul>
    </div>
    `;

  bookForm.style.display = 'none';
  awesomeBooks.style.display = 'none';
  books.style.display = 'none';
});

const currentTime = () => {
  const currentDateTime = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  dateTime.innerHTML = currentDateTime;
};
setInterval(currentTime, 500);