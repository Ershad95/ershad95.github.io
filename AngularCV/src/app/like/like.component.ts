import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  constructor() { }

  @Input() likeState:boolean=false;

  ngOnInit(): void {
    
  }

  like(){
    this.likeState = !this.likeState;
  }

}
