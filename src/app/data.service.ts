import { Data } from './data.model';


export class DataService {

  constructor() { }

  private collection:Data[] = [
    ];

  getCollection() {

        return this.collection;
    }

  addToCollection(item:Data) {

    if(this.collection.indexOf(item) !== -1){
        return
         }
    
    this.collection.unshift(item);
  }

}
