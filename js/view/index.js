let bookCard = document.getElementsByClassName("book-card");

for (var i = 0 ; i < bookCard.length; i++) {
  bookCard[i].addEventListener('click' , redirectToBookDetail , false ) ; 
}

function redirectToBookDetail() {
  window.location.href = "https://mnaufalmuafa.github.io/vervays.github.io/bookdetail.html";
}