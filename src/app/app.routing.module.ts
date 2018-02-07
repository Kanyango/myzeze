import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { DashComponent } from './dash/dash';
import { MyArtistComponent } from './artists/artists';
import { ArtistDetailComponent } from './artist_detail/detail';
import { PlaylistsComponent } from './playlists/playlists';

const routes: Routes = [
        //{ path: '', redirectTo: 'home', pathMatch: 'full'},
        { path: 'login', component: LoginComponent},
        { path: 'dash', component: DashComponent},
        { path: 'artist', component: MyArtistComponent},
        { path: 'details', component: ArtistDetailComponent},
        { path: 'playlist', component: PlaylistsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
