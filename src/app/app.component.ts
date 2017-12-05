import { Component, OnInit, AfterViewInit } from '@angular/core';
//import { data,column } from './app.data';
import { JsonHolderUsersColumn } from './app.data';
import * as $ from 'jquery';
import { DataService} from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';


constructor (private  dataService: DataService){
  
}
  ngAfterViewInit() {
    this.loadDataTable();
   //this.DeleteRow();
  // this.MultipleSelect();
   
  }

  ngOnInit() {
    //this.MultipleSelect();
  }
// DeleteRow(){
//   var table = $('#test').DataTable();
  
//      $('#test tbody').on( 'click', 'tr', function () {
//          if ( $(this).hasClass('selected') ) {
//              $(this).removeClass('selected');
//          }
//          else {
//              table.$('tr.selected').removeClass('selected');
//              $(this).addClass('selected');
//          }
//      } );
  
//      $('#button').click( function () {
//          table.row('.selected').remove().draw( false );
//      } );
// }

// MultipleSelect(){
//   var table = $('#test').DataTable();
  
//      $('#test tbody').on( 'click', 'tr', function () {
//          $(this).toggleClass('selected');
//      } );
  
//      $('#button').click( function () {
//          alert( table.rows('.selected').data().length +' row(s) selected' );
//      } );
 
// }
  loadDataTable() {
this.dataService.getData().subscribe((x: any) => {
  console.log(x);
  $('#test').DataTable({
    data: x.userslist,
    serverside:true,
    "processing": true,
//columns: column
   columns: JsonHolderUsersColumn
  });
});
}
}
