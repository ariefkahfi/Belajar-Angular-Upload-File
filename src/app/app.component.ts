import { Component } from '@angular/core';
import {UploadService} from "./upload.service";

@Component({
  selector: 'app-root',
  template : `
    <h2>Upload App</h2>
    
    <div>
      <form>
        <div>
          <label for="file">File to upload</label>
          <input type="file" id="file" [(ngModel)]="file" (change)="onChange($event)" name="fileName"/>
        </div>
      </form>
    </div>
  `
})
export class AppComponent {
  private file : any;

  constructor(private uploadService :UploadService){}

  onChange(event){
    let file = event.target.files[0];
    this.uploadService.uploadFile(file);
    console.log(this.file);
  }
}
