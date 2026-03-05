let libraryData = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    rating: 4.8,
    isAvailable: true,
  },
];

let borrowRecords = [
  {
    user: "Jay",
    bookId: 1,
    borrowDate: "3/4/2026",
    returnDate: null,
  },
];

// ------------------ Book Management ------------------

//add book
function addBook(book) {
  const newBook = {
    id: randomId(),
    ...book,
  };
  libraryData.push(newBook);
  console.log("book added successfully.");
}

addBook({
  title: "The Power of Habit",
  author: "Charles Duhigg",
  rating: 4.7,
  isAvailable: true,
});

// view all books
function viewAllBooks() {
  console.log(libraryData);
}
viewAllBooks();

// remove book.
function removeBook(bookId) {
  const exists = libraryData.find((book) => book.id === bookId);

  if (!exists) {
    console.log("Book not found.");
    return;
  }

  libraryData = libraryData.filter((book) => book.id !== bookId);
  console.log("Book removed successfully.");
}
// removeBook(1);

// update rating
function updateRating(bookId, newRating) {
  const book = libraryData.find((book) => book.id === bookId);

  if (!book) {
    console.log("Book not found.");
    return;
  }
  book.rating = newRating;
  console.log("Rating updated successfully.");
}
updateRating(1, 4.9);
viewAllBooks();

// ------------------ Borrow System ------------------

function borrowBook(user, bookId) {
  const book = libraryData.find((book) => book.id === bookId);

  if (!book) {
    console.log("Book does not exist.");
    return;
  }

  if (!book.isAvailable) {
    console.log("Book is already borrowed.");
    return;
  }

  borrowRecords.push({
    user,
    bookId,
    borrowDate: new Date().toLocaleDateString(),
    returnDate: null,
  });
  book.isAvailable = false;

  console.log(`${user} borrowed book ${bookId}`);
}
borrowBook("Meet", 2);
viewAllBooks();

function viewAllBorrowRecord() {
  console.log(borrowRecords);
}
viewAllBorrowRecord();

function returnBook(user, bookId) {
  const record = borrowRecords.find(
    (r) => r.user === user && r.bookId === bookId && r.returnDate === null,
  );
  if (!record) {
    console.log("No active borrow record found.");
    return;
  }
  record.returnDate = new Date().toLocaleDateString();
  const book = libraryData.find((book) => book.id === bookId);

  if (book) {
    book.isAvailable = true;
  }
  console.log(`Book ${bookId} returned by ${user}`);
}
returnBook("Jay", 1);
viewAllBorrowRecord();
viewAllBooks();

function getAvailableBooks() {
  return libraryData.filter((book) => book.isAvailable);
}

function randomId() {
  return Math.floor(Math.random() * 10000) + 1;
}
