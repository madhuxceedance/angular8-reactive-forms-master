import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { PersonService } from './person.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-authorize-person',
  templateUrl: './authorize-person.component.html',
  styleUrls: ['./authorize-person.component.css']
})
export class AuthorizePersonComponent implements OnInit {
  displayedColumns = ['name', 'phoneNumber', 'email','buttons'];
  dataSource = new MatTableDataSource();
  constructor(private dataService: PersonService, private _router: Router) { }

  ngOnInit() {
    this.refreshData()
  }

  refreshData() {
    this.dataService.getUsers().subscribe(
      data => {
       //debugger;
        this.dataSource.data = data;
      }
    );
  }

  onDelete(id) {
    this.dataService.deletePerson(id).subscribe(
      () => {
        console.log(`Person deleted successfully`);
        this.refreshData();
      }
      
    )
    
   // alert(id);
  }

  addNewContact() {
    this._router.navigateByUrl('/ContactDetail'); 
  }
}

