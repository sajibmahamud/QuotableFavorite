import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  authorForm: FormGroup
  count:number=0;
  name:string;
  bio:string
  constructor(
    private formBuilder: FormBuilder,
  ) {

  }

  ngOnInit() {
    this.createForm();
    this.show();
  }

  createForm() {
    this.authorForm = this.formBuilder.group({
      name: [, []],
      bio: [[]],
      showName: [[]],
      showBio: [[]],
    })
  }

add(){
  let Name=this.authorForm.controls.name.value;
  let Bio=this.authorForm.controls.bio.value;
  sessionStorage.setItem('Name', Name);
  sessionStorage.setItem('Bio', Bio);
  this.createForm();
}
remove(){
  sessionStorage.removeItem('Name');
  sessionStorage.removeItem('Bio');
  this.createForm();
}
show(){
  this.name=sessionStorage.getItem('Name');
  this.bio=sessionStorage.getItem('Bio');
  this.authorForm.controls.showName.setValue(this.name);
  this.authorForm.controls.showBio.setValue(this.bio);
}

}
