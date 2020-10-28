import { Shelf } from "./classes";
import { Category } from "./enums";
import { Book, LibMgrCallback } from "./intefaces";
import { BookOrUndefined, BookProperties } from "./types";

export function getAllBooks(): readonly Book[] {
    const books: ReadonlyArray<Book> = <const>[
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: true},
        { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.HTML, author: 'Andrea Chiarelli', available: true }
        ];

        return books;
}

export function logFirstAvailable(books: readonly any[] = getAllBooks()): void {
    // const numberOfBooks: number = books.length;
    const { length: numberOfBooks} = books;
    let title: string;

    for (const book of books) {
        if (book.available) {
            title = book.title;
            break;
        }
    }
    
    console.log(`Total number of books: ${numberOfBooks}`);
    console.log(`First available book: ${title}`);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    const books = getAllBooks();
    const titles: string[] = [];

    for (const book of books) {
        if (book.category === category) {
            titles.push(book.title);
        }
    }
    
    return titles;
}

export function logBookTitles(titles: string[]): void {
    titles.forEach((title: string ) => console.log(title));
}

export function getBookAuthorByIndex(index: number): [string, string] {
    const books = getAllBooks();
    const { title, author } = books[index]
    return [title, author];
}

export function calcTotalPages(): bigint {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 }, 
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 }, 
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];

    const result = data.reduce((acc: bigint, obj: any) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);

    return result;
}

export function createCustomerID(name: string, id: number): string {
    return `${name}-${id}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if (age) {
        console.log(`Customer age: ${age}`);
    }

    if (city) {
        console.log(`Customer city: ${city}`);
    }
}

export function getBookByID(id: number): BookOrUndefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

export function checkOutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Checking books for ${customer}`);

    const titles: string[] = [];

    bookIDs.forEach(id => {
        const book = getBookByID(id);
        if (book && book.available) {
            titles.push(book.title);
        }
    });

    return titles;
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
// function getTitles(...args: any[]): string[] {
export  function getTitles(...args: [string | boolean | number, boolean?]): string[] {
       const books = getAllBooks();
       if (args.length === 1) {
            const [arg] = args;

            if(typeof arg === 'string') {
                return books.filter(book => book.author === arg).map(book => book.title);
            } else if (typeof arg === 'boolean') {
                return books.filter(book => book.available === arg).map(book => book.title);
            }
       } else if (args.length === 2 ) {
           const [id, available] = args;

           if (typeof id === 'number' && typeof available === 'boolean') {
                return books.filter(book => book.available === available && book.id === id).map(book => book.title);
           }
       }
}

export function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('value should have been a string');
    }
}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return [...title].reverse().join('');
}

export function printBook(book: Book) {
    console.log(`${book.title} by ${book.author}`);
}

export function getBookProp(book: Book, prop: BookProperties): any {
    if (typeof book[prop] === 'function') {
        // return book[prop]['name'];
        return (book[prop] as Function).name;
    }
    return book[prop];
}

export function purge<T>(inventory: Array<T>): T[] {
    return inventory.slice(2);
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);

            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found');
            }
        } catch(error) {
            callback(error, null);
        }
    }, 2000);
}

export function logCategorySearch(error: Error, titles: string[]): void {
    if (error) {
        console.log(`Error message: ${error.message}`);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);

            if (titles.length > 0) {
                resolve(titles);
            } else {
                reject('No books found');
            }
        }, 2000);
    });
}

export async function logSearchResults(category: Category) {
    const result = await getBooksByCategoryPromise(category);
    console.log(result);
}