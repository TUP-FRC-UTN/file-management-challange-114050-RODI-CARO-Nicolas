import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileItem, FileType } from '../models/file.item.model';
import { FILE_LIST, OWNERS } from '../data/file.storage';
import { TableViewComponent } from "./table-view/table-view.component";
import { NewItemFormComponent } from './new-item-form/new-item-form.component';
import { ModalComponent } from './modal/modal.component';
import { ActionDropdownComponent } from './action-dropdown/action-dropdown.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ActionDropdownComponent, RouterOutlet, TableViewComponent, NewItemFormComponent, ModalComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  fileItems: FileItem[] = FILE_LIST;
  title = 'file-management';
  folders = this.fileItems.filter(item => item.type === FileType.FOLDER);
  owners = OWNERS;
  showNewItemForm = false;
  showModal = false;
  modalMessage = '';
  itemsToDelete : FileItem[] = [];

  handleNewItem(newItem: FileItem) {
    this.fileItems.push(newItem);
    this.showNewItemForm = false;
  }

  handleDelete(selectedItems: FileItem[]) {
    if (selectedItems.length > 1) {
      this.itemsToDelete = selectedItems;
      this.modalMessage = `Are you sure you want to delete ${selectedItems.length} items?`;
      this.showModal = true;
    } else if (selectedItems.length === 1) {
      this.fileItems = this.fileItems.filter(item => !selectedItems.includes(item));
    }
  }

  
  confirmDelete() {
    this.fileItems = this.fileItems.filter(item => !this.itemsToDelete.includes(item));
    this.showModal = false;
  }

  cancelDelete() {
    this.itemsToDelete = [];
    this.showModal = false;
  }



}
