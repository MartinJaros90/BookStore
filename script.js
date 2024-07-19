function loadBooksFromLocalStorage() {
  let storedBooks = localStorage.getItem('booksData');
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
}


function saveBooksToLocalStorage() {
  localStorage.setItem('booksData', JSON.stringify(books));
}


function renderBooks() {
  let card = document.getElementById('book-card');
  card.innerHTML = '';

  for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
    let book = books[bookIndex];
    card.innerHTML += generateHTMLContent(book, bookIndex);
  }
}


function addNewComment(bookIndex) {
  let input = document.getElementById(`input-${bookIndex}`);
  if (input.value) {
    let newComment = {
      name: "Du",
      comment: input.value
    };
    books[bookIndex].comments.push(newComment);
    saveBooksToLocalStorage();
    renderBooks();
    input.value = '';
  }
}


function toggleLike(bookIndex) {
  let book = books[bookIndex];

  if (book.liked) {
    book.likes -= 1;
    book.liked = false;
  } else {
    book.likes += 1;
    book.liked = true;
  }

  saveBooksToLocalStorage();
  renderBooks(); 
}


function updateLikeCount(bookIndex) {
  let likeCountElement = document.getElementById(`like-count-${bookIndex}`);
  likeCountElement.textContent = books[bookIndex].likes;
}


function init() {
  loadBooksFromLocalStorage();
  renderBooks();
}