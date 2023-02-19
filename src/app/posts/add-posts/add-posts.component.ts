import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/store/appstore.state';
import { post } from '../postModels/post.model';
import { addPost, loadPosts } from '../postState/post.actions';
import { getposts, updatepost } from '../postState/post.selectors';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.scss']
})
export class AddPostsComponent implements OnInit {
  postForm!:FormGroup;
  @Input() id:any;
  button:boolean=true;
  constructor(private Fb:FormBuilder,private store:Store<appState>) { }

  ngOnInit(): void {
    this.postForm=this.Fb.group({
      title:["",[Validators.required]],
      description:["",[Validators.required]]
    })
  this.store.select(updatepost,{id:this.id}).subscribe((post)=>{
    this.button=false;
    this.postForm=this.Fb.group({
      title:[post.title,[Validators.required]],
      description:[post.description,[Validators.required]]
    })
  })
  }
titleValidation():any {
  if(this.postForm.get("title")?.touched&&this.postForm.get("title")?.invalid){
    return "Please Enter Title"
  }
}
descriptionValidation():any {
  if(this.postForm.get("description")?.touched&&this.postForm.get("description")?.invalid){
    return "Please Enter description"
  }
} 
addPost(){
  console.log(this.postForm.value);
  let post:post={
    title:this.postForm.value.title,
    description:this.postForm.value.description
  }
  this.store.dispatch(addPost({post}));
}
update(){

}
}
