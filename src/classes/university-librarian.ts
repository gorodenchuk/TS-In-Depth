import { sealed, logger, writable, logParameter, logMethod, format } from '../decorators';
import * as intefaces from './../intefaces'

@sealed('UniversityLibrarian')
@logger
class UniversityLibrarian implements intefaces.Librarian {
    @format() name: string;
    email: string;
    department: string;

    @logMethod
    assistCustomer(@logParameter custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }

    @writable(true)
    assistFaculty() {
        console.log(`Assisting faculty`);
    }

    @writable(false)
    teachCommunity() {
        console.log(`Teaching community`);
    }
}

export {UniversityLibrarian}