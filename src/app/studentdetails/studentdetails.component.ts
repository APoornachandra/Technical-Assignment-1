
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
students:any ;
  
  navigate: any;
  
  constructor(private user : UserService, private router: Router) { }

  ngOnInit(){
    this.user.getUsers().subscribe(res=>{
      this.students=res
      console.log(res);
    })
    
  }
  next(){
    this.router.navigate(['/graph']);
  }
  
}
