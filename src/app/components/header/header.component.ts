import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pageTitle='Header Page';
  constructor() { }

  nameList:DemoModel[]=[{
    name:'Sobin',
    children:[
      {
        name:'Arun',
      },
      {
        name:'Jibin',
      },
      {
        name:'Manoj'
      }
    ]
  }];

  ngOnInit(): void {
  }





  

}


export class DemoModel{
  name?:string;
  children?:DemoModel[]=[];
}
