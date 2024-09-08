import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FileItem, FileType } from '../../models/file.item.model';
import { OwnerBadgesComponent } from "../owner-badges/owner-badges.component";
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-table-view',
  standalone: true,
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css'],
  imports: [CommonModule, OwnerBadgesComponent, DatePipe],
})
export class TableViewComponent {
  @Input() fileItems: FileItem[] = [];
  @Output() deleteItems = new EventEmitter<FileItem[]>();


  selectedItems: FileItem[] = [];
  FileType = FileType; // Expose FileType enum to the template

  get sortedItems(): FileItem[] {
    return this.fileItems.sort((a, b) => {
      if (a.type === FileType.FOLDER && b.type === FileType.FILE) return -1;
      if (a.type === FileType.FILE && b.type === FileType.FOLDER) return 1;
      return a.name.localeCompare(b.name);
    });
  }


  onDelete() {
    this.deleteItems.emit(this.selectedItems);
  }

  onCheckboxChange(item: FileItem, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.onSelect(item, isChecked);
  }

  onSelect(item: FileItem, isSelected: boolean) {
    if (isSelected) {
      this.selectedItems.push(item);
    } else {
      this.selectedItems = this.selectedItems.filter(i => i !== item);
    }
  }


}
