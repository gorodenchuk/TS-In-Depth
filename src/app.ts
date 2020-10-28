import { ReferenceItem, UniversityLibrarian, RefBook, Shelf } from "./classes";
import { Category } from "./enums";
import { logFirstAvailable, getAllBooks, logBookTitles, getBookTitlesByCategory, getBookAuthorByIndex, calcTotalPages, createCustomerID, createCustomer, getBookByID, checkOutBooks, getTitles, bookTitleTransform, printBook, getBookProp, logCategorySearch, getBooksByCategory, getBooksByCategoryPromise, logSearchResults } from "./functions";
import { Book, Logger, Author, Librarian, Magazine } from "./intefaces";
import { PersonBook, BookRequiredFields, UpdatedBook, СreateCustomerFunctionType } from "./types";
// import type {UniversityLibrarian} from './classes/university-librarian';
import { purge } from './functions';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

//===================================================

// // // Task 02.01
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));

// const result = getBookAuthorByIndex(1);
// console.log(result);

// const result_2 = calcTotalPages();
// console.log(result_2);

// // Task 03.01
// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);
// let idGenerator: (name: string, id: number) => string
//                  = (name: string, id: number) => '${name} - ${id}';

// idGenerator = createCustomerID;
// console.log(idGenerator('Boris', 20))

// // Task 03.02
// createCustomer('Anna');
// createCustomer('Anna', 30);
// createCustomer('Anna', 30, 'Kyiv');

// console.log(getBookTitlesByCategory(undefined));
// logFirstAvailable();

// console.log(getBookByID(1));

// const myBooks = checkOutBooks('Anna', 1, 2, 3, 4);
// console.log(myBooks);

// // Task 03.03
// const checkedOutBooks = getTitles(true);
// console.log(checkedOutBooks);

// // Task 03.04
// let result = bookTitleTransform('JavaScript');
// console.log(result);
// result = bookTitleTransform(100);
// console.log(result);

// // Task 04.01
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     // additional fields
//     // year: 2015,
//     // copies: 3
//     pages: 200,
//     // markDamaged(reason: string) {
//     //     console.log(`Damage: ${reason}`);
//     // },
//     markDamaged: (reason: string) => {
//         console.log(`Damage: ${reason}`);
//     }
// };

// printBook(myBook);
// myBook.markDamaged('missing back cover');

// // Task 04.02
// let logDamage: Logger ;
// logDamage = (reason: string) => console.log(`Damage: ${reason}`);
// logDamage('missing back cover');

// // Task 04.03
// let favoriteAuthor: Author = {
//     email: 'anna@example.com',
//     name: 'Anna',
//     numBooksPu/blished: 10
// }

// let favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@example.com',
//     department: 'Fiction',
//     assistCustomer: (name: string) => console.log(`Assist ${name}`)  
// }

// // Task 04.04
// const offer: any = {
//     book: {
//     title: 'Essential TypeScript'   
//     }
// };

// console.log(offer);
// console.log(offer.magazine?.());

// // Task 04.05
// console.log(getBookProp(getAllBooks()[0], 'title')); 

// // Task 05.01
// const ref: ReferenceItem = new ReferenceItem('Title', 2020);
// console.log(ref);
// ref.printItem();

// ref.publisher = "Supper Publisher";
// console.log(ref.publisher); 


// // Task 05.02
// const refBook: RefBook = new RefBook('WorldPedia', 2001, 3);
// console.log(refBook); 
// refBook.printItem();

// // Task 05.03
// refBook.printCitation();

// // Task 05.04
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');

// // Task 05.05
// const personBook: PersonBook = {
//     id: 1,
//     author: 'Anna',
//     available: false,
//     category: Category.CSS,
//     email: 'boris@example.com',
//     name: 'Boris',
//     title: 'Boris Title',
//     markDamaged: null,
//     pages: 1000
// }

// // Task 06.05
// let flag = true;
// if (flag) {
//     import('./classes').then(module => {
//         const reader = new module.Reader();
//         console.log(reader);
//     });
// } else {
//     console.log('No Data');
// }


// Task 07.01
// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];
// const books = purge<Book>(inventory);
// console.log(books);
// const numbers = purge([1, 2, 3, 4]);
// console.log(numbers);

// Task 07.02
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// const book: Book = bookShelf.getFirst();
// console.log(book.title);

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];
// const magazinesShelf: Shelf<Magazine> = new Shelf<Magazine>();
// magazines.forEach(mag => magazinesShelf.add(mag));
// const mag: Magazine = magazinesShelf.getFirst();
// console.log(mag.title);

// Task 07.03
// magazinesShelf.printTitles();
// const magazine = magazinesShelf.find('Five Points');
// console.log(magazine);

// Task 07.04
// const Book: BookRequiredFields = {
//     id: 1,
//     author: 'Anna',
//     title: 'Unkown Title',
//     available: false,
//     category: Category.CSS,
//     markDamaged: (p: string) => console.log(p),
//     pages: 1000
// };

// const uBook: UpdatedBook = {
//     id: 1,
//     author: 'Boris'
// }

// const params: Parameters<СreateCustomerFunctionType> = ['Anna'];
// createCustomer(...params);

// Task 08.01
// const l = new UniversityLibrarian();
// console.log(l)

// Task 08.02
// const fLibrarian = new UniversityLibrarian();
// console.log(fLibrarian)
// fLibrarian.name = 'Anna';
// fLibrarian.assistCustomer('Boris');
// fLibrarian['printLibrarian']();

// Task 08.03
// fLibrarian.assistFaculty = null;
// fLibrarian.teachCommunity = null;

// Task 08.04
// const e = new RefBook('No Title', 2020, 10);
// e.printItem();

// Task 08.05
// const fLibrarian = new UniversityLibrarian();
// console.log(fLibrarian)
// fLibrarian.name = 'Anna';
// fLibrarian.assistCustomer('Boris');

// Task 08.06
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// console.log(fLibrarian.name);
// fLibrarian.assistCustomer('Boris');

// Task 08.07
// const e = new RefBook('No Title', 2020, 10);
// e.copies = -10;
// console.log(e);

// Task 09.01
// console.log('Begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// Task 09.02
// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return titles.length;
//     })
//     .then(numbersOfBooks => console.log(numbersOfBooks))
//     .catch(console.log);

// getBooksByCategoryPromise(Category.Software)
//     .then(console.log)
//     .catch(console.log);
// console.log('End');

// Task 09.03
// console.log('Begin');
// logSearchResults(Category.JavaScript);
// logSearchResults(Category.Software)
//     .catch(console.log);
// console.log('End');
