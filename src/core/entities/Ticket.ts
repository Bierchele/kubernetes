export interface ITicket {
  id?: string;
  name: string;
  barcode: string;
}

export class Ticket implements ITicket {
  id?: string;
  name!: string;
  barcode!: string;
  constructor(name: string, barcode: string) {
    this.name = name;
    this.barcode = barcode;
  }
}
//okeeey lets go
