function creatBook(name, author, pages, publisher){
    const book = {
        bookName: name,
        bookAuthor: author,
        numberPages: pages,
        namePublisher: publisher,
        printBook: function(){
            console.log("Printing...")
        }
    }
    return book
};

const book1 = creatBook("Duna", "Frank Herbert", 673, "Aleph");
const book2 = creatBook("Misery", "Stephen King", 326, "Suma");
console.log(book1, book2);