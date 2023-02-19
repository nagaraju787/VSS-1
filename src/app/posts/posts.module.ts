import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './get-posts/posts.component';
import { postReducers } from './postState/post.reducers';
import { StoreModule } from '@ngrx/store';
import { POSTS_STATE_NAME } from './postState/post.selectors';
import { AddPostsComponent } from './add-posts/add-posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PostsComponent,
    AddPostsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(POSTS_STATE_NAME, postReducers),
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[PostsComponent,AddPostsComponent]
})
export class PostsModule { }
