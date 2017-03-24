import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkImg'
})
export class CheckImgPipe implements PipeTransform {

  noImage:string = "assets/img/noimage.png"
  // returns a default image if not exists
  transform(value:any, position:number):string {
    if(!value) {
      return this.noImage;
    }
    return (value.length > 0) ? value[position].url : this.noImage;
  }

}
