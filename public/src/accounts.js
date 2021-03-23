// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => {
    const lastA = accountA.name.last.toLowerCase();
    const lastB = accountB.name.last.toLowerCase();
    return lastA >= lastB ? 1 : -1;
  })
}
    function getTotalNumberOfBorrows(account, books) {
      let total = 0;
      let {id} = account;
      books.forEach(book => {
        book.borrows.forEach((borrow) => {
          if (id === borrow.id) {
            total++;
          }
        });
      });
    
      return total;
    }
 
function getBooksPossessedByAccount(account, books, authors) {
  const borrowedBooks = [];

  books.forEach((book) => {
    let bookBorrows = book.borrows;

    bookBorrows.forEach((borrow) => {
      if (borrow.id === account.id && !borrow.returned) {
        borrowedBooks.push(book);
      }
    });
  });

  let result = borrowedBooks.map((book) => {
    return { ...book, author: getAuthor(book, authors) };
  });

  return result;
}

// this is a helper function
// returns autor object
function getAuthor(book, authors) {
  const author = authors.find((author) => author.id === book.authorId);
  return author;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
