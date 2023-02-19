import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from 'src/app/store/appstore.state';
import { post } from '../postModels/post.model';
import { loadPosts } from '../postState/post.actions';
import { getposts } from '../postState/post.selectors';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
   posts$!:Observable<post[]>
   addpost:boolean=false;
   id:any;
   
  constructor(private store:Store<appState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
this.posts$=this.store.select(getposts)
  
  }
  addPost(){
   this.addpost=true;
  }

editPost(id:any){
  this.addpost=true;
  this.id=id;
}
}
