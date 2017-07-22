import { DataService } from './data.service';
import { Data } from './data.model';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services';
  collectable:Data[] = [];
  dataitem:Data;

// calling the service function to add the data into the array
  onAddToCollection() {

    this.dataService.addToCollection(this.dataitem);
  }

//called the service here
 constructor(private dataService:DataService) {

 }
  ngOnInit() {
    
  //getting all the array items from service to app component collectable

   this.collectable=this.dataService.getCollection();
  }
}
