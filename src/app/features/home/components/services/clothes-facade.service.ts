import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClothesFacadeService {

  constructor(private router: Router) { }

  // tslint:disable-next-line:variable-name
  goToDetail(_id: string, currentImage: string) {
    this.router.navigateByUrl(`/home/detail/${_id}?img=${currentImage}`);
  }
}
