import { Component } from '@angular/core';

@Component({
  selector: 'playlist-component',
  templateUrl: './playlists.html'
})
export class PlaylistsComponent
{
  playlists = [{'name': 'Harusi',
                'tracks': [
                            {'title': 'Unajua - Gilad'},
                            {'title': 'Sema Milele - Gilad'},
                            {'title': 'Sura Yako - Sauti Sol'},
                            {'title': 'Unconditionaly Bae'}

              ]}]
}
