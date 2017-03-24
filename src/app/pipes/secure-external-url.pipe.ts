import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'secureExternalUrl'
})
export class SecureExternalUrlPipe implements PipeTransform {

  constructor( private _domSanitizer:DomSanitizer){}
  // angular security url protocol
  transform(value:string, url:string):any {
    return this._domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
