import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MediaService } from './services/media.service';

const mediaConstraints = {
  audio: true,
  video: true,
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  title = 'angularhttps';
   mediaGranted : boolean = false;


   constructor (private mediaService: MediaService){}


  ngOnInit(): void {
     
  }

    async requestMediaAccess(){

      this.mediaGranted = await this.mediaService.requestMediaAccess(mediaConstraints);

       if(this.mediaGranted){
          console.log('Media Access Granted to you ')
       }else {
        console.log('Media Access Denied to you ')
       }
   }


}
