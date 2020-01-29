import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppChatComponent } from './app-chat/app-chat.component';
import { NavigationComponent } from './navigation/navigation.component';
import {Router, RouterModule, Routes} from "@angular/router";
import { NoteComponent } from './note/note.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

const appRoutes :Routes = [
  {
    path: 'Chats',
    component: AppChatComponent
  },
  {
    path:'',
    component: AppChatComponent,
    pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AppChatComponent,
    NavigationComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
