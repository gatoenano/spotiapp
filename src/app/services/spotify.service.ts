import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists:Array<string>;
  artist:any;
  artistTopTracks:Array<string>;
  searchArtistsUrl:string = 'https://api.spotify.com/v1/search';
  searchArtistUrl:string = 'https://api.spotify.com/v1/artists';

  constructor( private _http:Http) { }

  // returns a list of artists based on searching
  getArtists(term:string) {
    let query = `?q=${term}&type=artist`;
    let urlQuery = this.searchArtistsUrl + query;

    return this._http.get(urlQuery)
      .map(res=> {
        this.artists = res.json().artists.items;
        return this.artists;
      });
  }
  // returns the artist details
  getArtist(id:string) {
    let query = `/${id}`;
    let urlQuery = this.searchArtistUrl + query;

    return this._http.get(urlQuery)
      .map(res=> {
        this.artist = res.json();
        console.log('this.artist: ', this.artist);
        return this.artist;
      });
  }
  // returns the top tracks of an artist
  getArtistTopTracks(id:string) {
    let query = `/${id}/top-tracks?country=US`;
    let urlQuery = this.searchArtistUrl + query;

    return this._http.get(urlQuery)
      .map(res=> {
        this.artistTopTracks = res.json().tracks;
        return this.artistTopTracks;
      });
  }
  // clears the searching
  initializeArtists() {
    return this.artists = [];
  }
}
