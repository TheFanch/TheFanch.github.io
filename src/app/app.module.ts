import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { PresentationComponent } from './component/presentation/presentation.component';
import { AboutComponent } from './component/about/about.component';
import { NetworkComponent } from './component/network/network.component';
import { HistoryComponent } from './component/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    PresentationComponent,
    AboutComponent,
    NetworkComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
