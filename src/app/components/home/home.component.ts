import { Component, OnInit } from '@angular/core';
import {GistService} from '../../services/gist.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  UserGist: any
  filenames : any
  codeFiles: any
  Avatar_Url : any
  forkedUrl : any
  constructor(
    private srvc: GistService
  ) { }

  ngOnInit(): void {
  }

  //Getting user data from services based on username
  getUserGist(username: string){
    this.srvc.getGistbyUsername(username).subscribe(
      resp=> {
        this.UserGist = resp;
        // console.log(this.UserGist.files);
        // console.log(Object.keys(this.UserGist[0].files)[0]);
        // this.filenames = (Object.keys(this.UserGist.files)[0])
        // console.log(this.filename);
        // this.UserFiles()
        
      },
      err => {console.error(err);
      }
    )
  }

  UserFileName(user:any)
  {
    var filename = Object.keys(user.files)[0]
    this.filenames = user.files[filename];
    // console.log(this.filenames.length());
    // console.log(Object.keys(this.filenames).length);
    return(this.filenames.type);
  }

  UserCode(user:any){
 
    var filename = Object.keys(user.files)[0]
    this.filenames = user.files[filename];
    this.srvc.getCode(this.filenames.raw_url).subscribe(
        resp => {
            console.log(resp);
        },
        err=> console.error(err)
        
      )

  }

  openFunc(user:any){
    
    var filename = Object.keys(user.files)[0]
    this.filenames = user.files[filename];
    this.srvc.getCode(this.filenames.raw_url).subscribe(
        resp => {
            this.codeFiles = resp;
            
            
        },
        err=> console.error(err)
        
      )
      console.log(this.filenames.raw_url);
            
  }

  setAvatar(user: any)
  {

    this.Avatar_Url = user.owner.avatar_url

    
  }

  forkedBy(user:any){
    this.forkedBy = user.forks_url
  }

}
