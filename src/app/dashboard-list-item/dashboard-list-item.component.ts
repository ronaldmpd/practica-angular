import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../shared/model/user';


@Component({
  selector: 'pa-dashboard-list-item',
  templateUrl: './dashboard-list-item.component.html',
  styleUrls: ['./dashboard-list-item.component.scss']
})
export class DashboardListItemComponent implements OnInit {
  @Input()
  userParam: User;

  @Input()
  defaultPictureURL: string;

  @Output()
  onSelect: EventEmitter<User> = new EventEmitter<User>();


  constructor() { }

  ngOnInit() {
  }

  onClick(user: User){
    this.onSelect.emit(user);
  }

}
