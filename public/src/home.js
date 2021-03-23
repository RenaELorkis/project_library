// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  const totalBooks = books.length;
  return totalBooks;
}

function getTotalAccountsCount(accounts) {
  const totalAccounts = accounts.length;
  return totalAccounts;
}

function getBooksBorrowedCount(books) {
  let borrowed = books.filter(book => book.borrows[0].returned === false);
  const totalBorrowed = borrowed.length;
  return totalBorrowed;
}

function getMostCommonGenres(books) {
  const commonGenres = [];

  for (let book of books) {
    const genre = commonGenres.find(
      (currentGenre) => currentGenre.name === book.genre
    );
    if (genre) {
      genre.count++;
    } else {
      commonGenres.push({ name: book.genre, count: 1 });
    }
  }
  return topFive(commonGenres);
}

  function getMostPopularBooks(books) {
    let result = [];
    const borrows = books.reduce((acc, book) => {
      result.push({ name: book.title, count: book.borrows.length });
    }, []);
    return topFive(result);
  }

function getMostPopularAuthors(books, authors) {
    const popularAuthors = [];
    for (let author of authors) {
      const authorName = `${author.name.first} ${author.name.last}`;
      let count = 0;
      for (let book of books) {
        if (author.id === book.authorId) {
          count += book.borrows.length;
        }
      }
      const authorObject = { name: authorName, count: count };
      popularAuthors.push(authorObject);
    }
    return topFive(popularAuthors);
  }



// this is a helper function
// returns the top five items in the array
function topFive(array) {
  let result = array
    .sort((countA, countB) => (countA.count < countB.count ? 1 : -1))
    .slice(0, 5);

  return result;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
