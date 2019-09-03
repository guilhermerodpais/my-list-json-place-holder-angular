import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-department-list',
  templateUrl: './posts-list-component.html',
  styles: []
})
export class PostListComponent implements OnInit {


  posts: any[];  
  panelOpenState = false;
  private url = 'https://jsonplaceholder.typicode.com/posts';  
  
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.http.get(this.url)
    .subscribe((posts: any[]) => {  
      this.posts = posts;  
    }); 
  }

}
