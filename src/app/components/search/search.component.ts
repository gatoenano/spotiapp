import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  term:string;

  constructor(private _spotifyService:SpotifyService) { }

  ngOnInit() {
    this._spotifyService.initializeArtists();
  }

  searchByArtist(){
    if(this.term.length >= 3){
      this._spotifyService.getArtists(this.term).subscribe();
    } else if (this.term.length == 0) {
      console.log('zero');
      this._spotifyService.initializeArtists();
    }
  }
}
