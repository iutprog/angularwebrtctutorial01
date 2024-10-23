import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaService {


  private stream :  MediaStream | null=null ;
  
  constructor() { }

     async requestMediaAccess( constraints: MediaStreamConstraints): Promise<boolean>{

       try{

         this.stream = await await navigator.mediaDevices.getUserMedia(constraints);
         return true ; //  permission is granted
       }catch(err){
        console.error('Access to media devices denied' , err);
        return false;
       }
     }

}
