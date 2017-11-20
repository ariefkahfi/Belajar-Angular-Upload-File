


import {Injectable} from "@angular/core";
import {
  HttpClient, HttpEventType, HttpHeaders, HttpProgressEvent, HttpRequest,
  HttpResponse
} from "@angular/common/http";

@Injectable()
export class UploadService{
  constructor (private http : HttpClient){

  }

  uploadFile(data : any){

      let formData = new FormData();
      formData.append('fileName',data);


      let httpFile = new HttpRequest("POST","http://localhost/file-upload/back-end/upload.php",formData,{reportProgress: true , responseType: "text"});
      this.http.request(httpFile)
        .subscribe(next=>{
          if(next.type === HttpEventType.UploadProgress){
            console.log('uploading...');
            let progress = (<any>next);

            let onProgress = (progress.loaded / progress.total * 100);

            console.log(onProgress.toFixed(2) + " %");

          }else if (next.type === HttpEventType.Response){
            console.log('uploading complete');
          }
        }, (error)=>{
          console.log(error);
        } , ()=>{
          console.log('Request Complete');
        });
  }
}
