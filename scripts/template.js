function generateHTMLContent(book, bookIndex) {
  return `
    <div class="main-container">
      <h2>${book.name}</h2>
      <div class="separator"></div>
      <div class="img-container">
        <img class="book-img" src="./assets/img/book-img.png" alt="">
      </div>
      <div class="separator"></div>
      <div class="book-info-container">
        <div class="container-price-and-like">
          <div class="price-likes">
            <span>${book.price} EUR</span>
          </div>
          <div class="likes">
            <span id="like-count-${bookIndex}">${book.likes}</span>
            <img id="dis-like-button-${bookIndex}" onclick="toggleLike(${bookIndex})" src="./assets/icons/heart-icon.svg" alt="" ${book.liked ? 'class="d-none"' : ''}>
            <img id="like-button-${bookIndex}" onclick="toggleLike(${bookIndex})" src="./assets/icons/red-heart-icon.svg" alt="" ${!book.liked ? 'class="d-none"' : ''}>
          </div>
        </div>
        <div class="book-info">
          <table>
            <tbody>
              <tr>
                <td>Author</td>
                <td>:</td>
                <td>${book.author}</td>
              </tr>
              <tr>
                <td>Erscheinungsjahr</td>
                <td>:</td>
                <td>${book.publishedYear}</td>
              </tr>
              <tr>
                <td>Genre</td>
                <td>:</td>
                <td>${book.genre}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="separator"></div>
      <div id="comments-${bookIndex}" class="comments-container">
        ${generateHTMLComments(book)}
      </div>
      <div class="input-container">
        <input id="input-${bookIndex}" type="text" placeholder="Schreibe dein Kommentar ...">
        <img onclick="addNewComment(${bookIndex})" class="send-icon" src="./assets/icons/send.svg" alt="">
      </div>
    </div>
  `;
}


function generateHTMLComments(book) {
  let commentsHTML = '<h3>Kommentare:</h3><table>';

  for (let commentIndex = 0; commentIndex < book.comments.length; commentIndex++) {
    let comment = book.comments[commentIndex];
    commentsHTML += `
      <tr>
        <td>[${comment.name}]</td>
        <td>:</td>
        <td>${comment.comment}</td>
      </tr>
    `;
  }

  commentsHTML += '</table>';
  return commentsHTML;
}