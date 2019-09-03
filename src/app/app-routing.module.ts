import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumListComponent } from './albuns-list/album-list.component';
import { PostListComponent } from './posts-list/posts-list.component';
import { TodoListComponent } from './todos-list/todo-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'albuns', component: AlbumListComponent },
  { path: 'posts',   component: PostListComponent },
  { path: 'todos',   component: TodoListComponent },
  { path: '**',   component: PageNotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AlbumListComponent,
                                  PostListComponent,
                                  TodoListComponent,
                                  PageNotFoundComponent,]