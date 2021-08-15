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
  forkedIds : any
  forkedFlag : any
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

  // Getting user's file name and getting filetype based on name
  UserFileName(user:any)
  {
    var filename = Object.keys(user.files)[0]
    this.filenames = user.files[filename];
    // console.log(this.filenames.length());
    // console.log(Object.keys(this.filenames).length);
    return(this.filenames.type);
  }

  // Getting file code.
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

   // Getting file code.
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


    // Getting user's avatar url and intializing in variable which will be passed as a src in img tag. 
  setAvatar(user: any)
  {

    this.Avatar_Url = user.owner.avatar_url

    
  }

  // Passing forkUrl in service and get back Ids attach to the fork address 
  forkedBy(user:any){
    this.forkedUrl = user.forks_url
    // console.log(this.forkedUrl);
    

    this.srvc.getForks(this.forkedUrl).subscribe(
      resp => {
        this.forkedIds = resp;
        console.log(resp);
        

        if(Object.keys(resp).length==0)
        {
          this.forkedFlag = false;
        }
        
      },
      err => console.error(err)
      
    )
  }

}
