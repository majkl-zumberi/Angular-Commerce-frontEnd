import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import Glide from '@glidejs/glide';
import {Dress} from '../../../core/model/dress.interface';
@Component({
  selector: 'app-dress-preview',
  templateUrl: './dress-preview.component.html',
  styleUrls: ['./dress-preview.component.scss']
})
export class DressPreviewComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('myDiv') divView: ElementRef;
  @Output()
  detailEvent: EventEmitter<string> = new EventEmitter();
  @Input()
  dress: Dress;
  glider: any;
  constructor() { }

  ngOnInit(): void {
    this.glider = null;
  }

  ngAfterViewInit(): void {
    console.log('sono in after view init');
    // const dressSelector = document.querySelector('.' + this.dress._id);
    const dressSelector = document.getElementById(this.dress._id);
    console.log(dressSelector);
    this.glider = new Glide(dressSelector).mount();
    this.glider.setActive();
  }

  emitDetail() {
    console.log(this.divView);
    this.divView.nativeElement.firstChild.childNodes.forEach(el => {
      if (el.className === 'glide__slide glide__slide--active' || el.className === 'glide__slide ng-star-inserted glide__slide--active') {
        console.log('trovato');
        console.log(el.firstChild.attributes.src.value);
        this.detailEvent.emit(el.firstChild.attributes.src.value);
      }
      console.log(el.className);
    });
  }

  ngOnDestroy(): void {
    console.log('distruggo');
    // this.glider.destroy();
  }
}
