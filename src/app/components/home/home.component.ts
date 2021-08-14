import { Component, OnInit } from '@angular/core';
import {GistService} from '../../services/gist.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  GistList = [
    {

      username: "Hamza",
      projectCount: "12"
    },
    {

      username: "Nadeem",
      projectCount: "10"
    },
    {

      username: "Khan",
      projectCount: "8"
    },
    
  ]
  constructor(
    private srvc: GistService
  ) { }

  ngOnInit(): void {
  }

  getUserGist(username: string){
    this.srvc.getGistbyUsername(username).subscribe(
      resp=> {console.log('data', resp);
      },
      err => {console.error(err);
      }
    )
  }

}
