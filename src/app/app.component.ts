import { Component } from '@angular/core';
//We are not using {} in this import of arrayWords because in that we have wrote export default
import arrayWords from "../utils/words";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';
  words = '';
  limit = 10;

  handleSlideChange(newLimit: number){
    this.limit = newLimit;
  }

  generate(){
    this.words = arrayWords.slice(0, this.limit).join(" ");
  }

}
