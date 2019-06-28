import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { comments } from '../shared/data/comments.data';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  public comments:Array<any>;

  userName: string="";


  cadena2 = 'aaa aaa aaa';

  cadena = 'Esto es un literal.';
   numero = 25895.396;
   personas = [
     {
       id: '1',
       nombre: 'Albert',
       apellidos: 'García Carros'
     },
     {
       id: '2',
       nombre: 'Susana',
       apellidos: 'Montes Gómez'
     },
     {
       id: '3',
       nombre: 'Carmen',
       apellidos: 'Galeote Fernández'
     }
   ];

  /*
  comments: Array<any> = [
    {
      id: 1,
      name: 'Katy',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in cursus leo',
      fecha: '25/06/2019'
    },
    {
      id: 2,
      name: 'Luke',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in cursus leo',
      fecha: '25/06/2019'
    },
    {
      id: 3,
      name: 'Han',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in cursus leo',
      fecha: '25/06/2019'
    },
    {
      id: 4,
      name: 'Leia',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in cursus leo',
      fecha: '25/06/2019'
    }
  ];
*/
  commentTrackerFunction(index: number, comment: any) {
    return comment.id;
  }

  fecha2 = Date.now();

  fecha:string;

  constructor() {
    moment.locale('es');
    this.fecha = moment().format('LLL');

    this.comments=comments;

  }

  /*
  addComment(event:any, formulario:any):void {

    event.preventDefault();

// newName.value, newComment.value

    this.comments.push({
      name: formulario[0].value,
      fecha: this.fecha,
      comment: formulario[1].value,
      id: this.comments.length + 1
    });

    //formulario[0].value="";
    formulario.reset();

  }
*/

addComment(event:any, formulario:any):void {

  event.preventDefault();

  let comentario = {
    name: formulario[0].value,
    fecha: this.fecha,
    comment: formulario[1].value,
    id: this.comments.length + 1
  }

  formulario.reset();

  this.comments = [
    {
      id: 1,
      name: 'Katy',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in cursus leo',
      fecha: '25/06/2019'
    },
    {
      id: 2,
      name: 'Luke',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in cursus leo',
      fecha: '25/06/2019'
    },
    {
      id: 3,
      name: 'Han',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in cursus leo',
      fecha: '25/06/2019'
    },
    {
      id: 4,
      name: 'Leia',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in cursus leo',
      fecha: '25/06/2019'
    }, comentario
  ];

}
  ngOnInit() {
    //this.date = moment();
  }

}
