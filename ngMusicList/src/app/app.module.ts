import { SongService } from './services/song.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongComponent } from './components/raid/song.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SortDirective } from './directive/sort.directive';
import { FilterByYearPipe } from './pipe/filter-by-year.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    SortDirective,
    FilterByYearPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [SongService],
  bootstrap: [AppComponent]
})
export class AppModule { }
