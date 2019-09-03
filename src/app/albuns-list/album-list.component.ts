import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list-component.html',
  styles: []
})
export class AlbumListComponent implements OnInit {
  albuns: any[];  
  private url = 'https://jsonplaceholder.typicode.com/albums';  
  
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.http.get(this.url)
    .subscribe((albuns: any[]) => {  
      this.albuns = albuns;  
    }); 
  }
}
