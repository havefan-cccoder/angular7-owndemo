import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tablist',
  templateUrl: './tablist.component.html',
  styleUrls: ['./tablist.component.less']
})
export class TablistComponent implements OnInit {

  @Input() tabList: any;
  constructor() { }

  ngOnInit() {
  }

}
