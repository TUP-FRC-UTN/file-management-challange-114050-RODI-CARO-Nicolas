import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FileItem, FileOwner, FileType  } from '../../models/file.item.model';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-item-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-item-form.component.html',
  styleUrls: ['./new-item-form.component.css'],
})
export class NewItemFormComponent {
  @Input() folders: FileItem[] = [];
  @Input() owners: FileOwner[] = [];
  @Output() newItem = new EventEmitter<FileItem>();

  name: string = '';
  creation: Date = new Date();
  type: FileType = FileType.FILE;
  folder?: string;
  selectedOwners: string[] = [];

  FileType = FileType; // Expose FileType enum to the template


  onSubmit(form: NgForm) {
    if (form.valid) {
      const newItem: FileItem = {
        id: this.generateId(), // Mock ID
        name: this.name,
        creation: this.creation,
        type: this.type,
        owners:  this.selectedOwners.map(ownerId => this.owners.find(owner => owner.name === ownerId) || {name: '', avatarUrl: ''}),
        parentId: this.folder
      };
      this.newItem.emit(newItem);
      form.reset();
    }
  }

  generateId(): string {
    // Implement ID generation logic
    return Math.random().toString(36).substring(2, 15);
  }

}
