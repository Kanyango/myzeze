import { Component } from '@angular/core';

@Component({
  selector: 'artist-component',
  templateUrl: './artists.html'
})
export class MyArtistComponent {

  all_artists = [{'name': 'Dada dama',
                 'genre': 'Inspirational Gospel',
                 'photo': 'assets/images/jenny.jpg'},
                 {'name': 'Mwajuma',
                  'genre': 'Taarab',
                  'photo': 'assets/images/lindsay.png'},
                  {'name': 'Zuriel',
                   'genre': 'Nursery Rhymes',
                   'photo': 'assets/images/veronika.jpg'}
               ]
  artists = [
             {'name': 'Fadhili', 'photo': 'assets/images/daniel.jpg'},
             {'name': 'Rehema', 'photo': 'assets/images/helen.jpg'},
             {'name': 'Baraka', 'photo': 'assets/images/elliot.jpg'},
             {'name': 'Amani', 'photo': 'assets/images/matthew.png'},
             {'name': 'Faraja', 'photo': 'assets/images/kristy.png'}
           ]
}
