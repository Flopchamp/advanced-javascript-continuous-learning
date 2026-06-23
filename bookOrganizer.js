const books =[
  {title:"The River and the source",
  authorName:"Aloo harrison",
  releaseYear:1950
  },
  {title:"Rich Dad Poor Dad",
  authorName:"Mary Betty",
  releaseYear:1970
  },
  {title:"The river between",
  authorName:"Mitchel",
  releaseYear:1940
  }
]
function sortByYear(book1,book2){
  if(book1.releaseYear < book2.releaseYear){
    return -1;
  }
  if (book1.releaseYear > book2.releaseYear){
    return 1
  }
  if(book1.releaseYear === book2.releaseYear){
    return 0
  }

}
const filteredBooks = books.filter((book) => book.releaseYear <= 1950);
filteredBooks.sort(sortByYear);
 console.log("Books released in or before 1950, sorted by release year:");
filteredBooks.forEach((book) => {
  console.log(`${book.title} by ${book.authorName}, released in ${book.releaseYear}`);
});