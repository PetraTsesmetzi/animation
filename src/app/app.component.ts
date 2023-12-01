import { Component } from '@angular/core';
import { trigger,state,style ,animate,transition } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations:[
  trigger('divState',[
    state('normal',style({
      'background-color':'crimson',
      transform:'translateX(0)'
    })),
    state('highlighted', style({
      'background-color':'lightsteelblue',
      transform:'translateX(100px)'
    })),
    // transition('normal=>highlighted',animate(800)),
    // transition('highlighted=>normal',animate(800))
    transition('normal<=>highlighted',animate(800)),
  
  ]),

  trigger('wildState',[
    state('normal',style({
      'background-color':'lightsteelblue',
      transform:'translateX(0)scale(1)'
    })),
    state('highlighted', style({
      'background-color':'crimson',
      transform:'translateX(100px)scale(1)'
    })),
    state('shrunken', style({
      'background-color':'green',
      transform:'translateX(0) scale(0.5)'
    })),
  
    transition('normal=>highlighted',animate(300)),
    transition('highlighted=>normal',animate(800)),
    transition('shrunken<=>*',[
      style({
        'background-color': 'orange'
      }),
      animate(10000,style({
        borderRadius:'50px'
      })),
      animate(3000)
    ])
  
  ])

  ]
})
export class AppComponent {
  state="normal";
  wildState='normal';
  list = ['Milk', 'Sugar', 'Bread'];

    onAnimate(){
      this.state=='normal'?this.state='highlighted':this.state='normal';
      this.wildState=='normal'?this.wildState='highlighted':this.wildState='normal';
    }
    onSchrink(){
      this.wildState='shrunken';
    }

    onAdd(item) {
      this.list.push(item);
    }
}
