// Search for a book in library shelves and stop once found.

let books = ["MATHS",'SCIENCE','HISTORY','ENGLISH'];

for(let book of books)
{
    if(book === "ENGLISH")
    {
        console.log("book found:" , book);
        break;
        
    }
    console.log("checking:",book);
    
}