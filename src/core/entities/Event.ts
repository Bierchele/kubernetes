import { ITicket } from './Ticket';

export interface IEvent {
  id?: string;
  title: string;
  date: Date;
  tickets?: ITicket[];
  deleted: boolean;
  streetName: string;
  streetNumber: number;
  postalcode: string;
  city: string;
  country: string | undefined;
}

export class TioEvent implements IEvent {
  id?: string;
  title: string;
  date: Date;
  tickets?: ITicket[];
  deleted: boolean;
  streetName: string;
  streetNumber: number;
  postalcode: string;
  city: string;
  country: string | undefined;
  constructor(
    id: string,
    title: string,
    date: Date,
    streetName: string,
    streetNumber: number,
    postalcode: string,
    city: string,
    country: string | undefined,
  ) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.deleted = false;
    this.streetName = streetName;
    this.streetNumber = streetNumber;
    this.postalcode = postalcode;
    this.city = city;
    this.country = country;
  }
}
