import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import {AppComponent} from './app.component';
import {TreeComponent} from './tree/tree.component';
import {HttpModule} from '@angular/http';
import {TreeModule} from 'primeng/tree';
import {NodeService} from './node.service';
import {TreeDragDropService} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    BrowserAnimationsModule,
    HttpModule,
    TreeModule
  ],
  providers: [NodeService, TreeDragDropService],
  bootstrap: [AppComponent]
})
export class AppModule {}
