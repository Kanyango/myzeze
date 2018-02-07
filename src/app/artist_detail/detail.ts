import { Component } from '@angular/core';

@Component({
  selector: 'artist-detail-component',
  templateUrl: './detail.html'
})
export class ArtistDetailComponent
{

  albums = [
            {'name': 'Kanabamba Kanashika',
            'tracks': [{'title': 'Kanakam vibaya'},
                       {'title': 'niko kwa chuom'},
                       {'title': 'We msee'},
                       {'title': 'Pass me a snack'},
                       {'title': 'Sponsor kanono'},
                       {'title': 'Niko kwa mama'}]}
          ]

}
