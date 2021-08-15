import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GistService {

  uri = 'https://api.github.com/users';
  constructor(private http: HttpClient) { }


  getGistbyUsername(username: any){
    
    // console.log((`${this.uri}/${username}/gists`))
    return this.http.get(`${this.uri}/${username}/gists`)
  }

  getCode(Codeurl : any)
  {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    
    return this.http.get(`${Codeurl}`, { headers, responseType: 'text'})
  }

}
