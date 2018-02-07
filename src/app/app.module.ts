import { BrowserModule } from '@angular/platform-browser';
import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule }   from '@angular/router';
import {SuiModule} from 'ng2-semantic-ui';

import { AppRoutingModule } from './app.routing.module';
import { DashComponent } from './dash/dash';
import { LoginComponent } from './login/login';
import { MyArtistComponent } from './artists/artists';
import { ArtistDetailComponent } from './artist_detail/detail';
import { PlaylistsComponent } from './playlists/playlists';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    MyArtistComponent,
    ArtistDetailComponent,
    PlaylistsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    SuiModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
