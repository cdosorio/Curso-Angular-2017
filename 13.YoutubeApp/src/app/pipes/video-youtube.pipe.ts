import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'videoYoutube'
})
export class VideoYoutubePipe implements PipeTransform {

  constructor( private _domSanit:DomSanitizer){}

  transform(value: string): any {
    let url = "https://www.youtube.com/embed/";

    return this._domSanit.bypassSecurityTrustResourceUrl( url + value);
  }

}
