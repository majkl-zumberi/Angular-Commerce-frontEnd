import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/main/home.component';
import {SharedModule} from '../../shared/shared.module';
import {ClothesFacadeService} from './components/services/clothes-facade.service';
import { ClotheDetailComponent } from './components/clothe-detail/clothe-detail.component';
import { ClotheComponent } from './components/clothe/clothe.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [HomeComponent, ClotheDetailComponent, ClotheComponent],
  providers: [ClothesFacadeService],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ]
})
export class HomeModule { }
