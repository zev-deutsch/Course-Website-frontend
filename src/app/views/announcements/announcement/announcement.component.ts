import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GetAnnouncements} from '../../../models/announcements/getAnnouncements';
import {DataService} from '../../../models/data.service';
import {AuthService} from '../../../models/users/auth.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {
  @Input() announcement: GetAnnouncements;
  @Output() updateChanges: EventEmitter<any> = new EventEmitter();
  panelOpenState: boolean;

  constructor(private authService: AuthService, private dataService: DataService) {
  }

  ngOnInit() {
    this.checkIfRead();
  }

  markRead() {
    this.dataService.announcementRead(this.authService.isLoggedIn.id, this.announcement.announcementId).subscribe();
    this.updateChanges.emit();
  }

  checkIfRead() {
    // TODO make a call to check if announcement was read by current student + emit update change
    // TODO make a call to list all students who have read this announcement
  }

  updateAnnouncement(updatedBody) {
      this.dataService.updateAnnouncement(this.announcement.announcementId, this.authService.isLoggedIn.id, updatedBody).subscribe(() => this.updateChanges.emit());
      this.panelOpenState = false;
  }

  deleteAnnouncement() {
    this.dataService.deleteAnnouncement(this.announcement.announcementId).subscribe(() => this.updateChanges.emit());
    this.panelOpenState = false;
  }
}
