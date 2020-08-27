import {DressImageLink} from './dressImageLink.interface';

export interface Dress {
  _id: string;
  name: string;
  price: number;
  links: DressImageLink[];
}
