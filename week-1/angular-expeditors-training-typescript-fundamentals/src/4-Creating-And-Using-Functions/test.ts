class Ball {

    diameter!: number; // Definite Assignment Assertion
    createdDate?: Date // Optional Value
    make: string;      // Normal Field need to be initialized using ctor.

    constructor(make: string) {
        this.make = make;
    }
}


class Table {

    _numberOfRows: number = 0;

    get numberOfRows(): number{
        return this._numberOfRows;
    }

    set numberOfRows(value: number) {
        this._numberOfRows = value;
    }
}