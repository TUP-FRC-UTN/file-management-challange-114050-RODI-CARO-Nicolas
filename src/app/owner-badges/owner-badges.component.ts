import { Component, Input } from '@angular/core';
import { FileOwner } from '../../models/file.item.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-owner-badges',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './owner-badges.component.html',
  styleUrls: ['./owner-badges.component.css'],
})
export class OwnerBadgesComponent {
  @Input() owners: FileOwner[] = [];

  get displayedOwners(): FileOwner[] {
    return this.owners.slice(0, 3);
  }

  get remainingOwnersCount(): number {
    return this.owners.length > 3 ? this.owners.length - 3 : 0;
  }
}
