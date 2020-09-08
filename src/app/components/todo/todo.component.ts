import {
  Component
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
// import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  name = 'mubark';
  url = '';
  isstrike = false;
  selectedIndex: number;


 


  todolist = [
    'Buy milk', 'Call electrician', 'Pay rent'

  ];

  constructor(private http: HttpClient) {

  }






  ngOnInit(): void {

  }



 

  
  strike1(index: number) {
    this.isstrike = !this.isstrike;
    this.selectedIndex = index;
  }

  add(d) {
    this.todolist.push(d);
  }
  delete(z) {
    this.todolist.splice(z, 1);
  }
  onSelectFile(e) {

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      this.url = e.target.result as string;
    };
  }

  

}
