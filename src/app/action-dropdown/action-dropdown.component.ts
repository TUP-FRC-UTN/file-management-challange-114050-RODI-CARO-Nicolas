import { Component, Output, EventEmitter } from '@angular/core';
import { FileItem } from '../../models/file.item.model';

@Component({
  selector: 'app-action-dropdown',
  standalone: true,
  templateUrl: './action-dropdown.component.html',
  styleUrls: ['./action-dropdown.component.css'],
})
export class ActionDropdownComponent {

  @Output() deleteItems = new EventEmitter<FileItem[]>();
  @Output() showNewItemForm = new EventEmitter<void>();

  onDelete() {
    const selectedItems: FileItem[] = []; // Placeholder for actual selected items logic
    this.deleteItems.emit(selectedItems);

  }

  onNew() {
    this.showNewItemForm.emit();
  }
}
