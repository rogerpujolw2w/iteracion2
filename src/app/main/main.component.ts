import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  title = 'Loose in the sky!';
  imgUrl = '././assets/sky.jpg';
  imgDesc = 'Loose in the sky!';
  blogDesc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in cursus leo, a gravida mi. Duis id tellus risus. Aliquam id convallis magna. Nam egestas mauris non neque dapibus, quis congue enim mollis. Curabitur consequat, lacus sed malesuada mollis, nunc lectus luctus ex, vitae iaculis eros dui quis eros. Morbi facilisis sapien at dolor pharetra egestas. Aenean tempus placerat venenatis. Fusce dictum felis ut ex tempus, lobortis ullamcorper massa sagittis. Etiam tempus in lorem nec vehicula. Mauris sed euismod augue.';


  constructor() { }

  ngOnInit() {
  }

}
