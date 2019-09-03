import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list-component.html',
  styles: []
})
export class TodoListComponent implements OnInit {
  todos: any[];  
  private url = 'https://jsonplaceholder.typicode.com/todos';  
  
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.http.get(this.url)
    .subscribe((todos: any[]) => {  
      this.todos = todos;  
    }); 
  }

  getColor(status) { (2)
    switch (status) {
      case true:
        return '#00ff68';
      case false:
        return '#f44336';
    }
  }
}
