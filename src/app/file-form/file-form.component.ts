import { Component, EventEmitter, Output} from '@angular/core';
import { FileItem, FileType } from '../../models/file.item.model';
import { OWNERS } from '../../data/file.storage';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-file-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './file-form.component.html',
  styleUrl: './file-form.component.css'
})
export class FileFormComponent {
  @Output() newFile = new EventEmitter<FileItem>();
  isFormVisible = false;

  fileTypes = Object.values(FileType).filter(type => !isNaN(Number(type)));
  owners = OWNERS;



  onSubmit(form : NgForm){
    if(form.valid){
      const newFile : FileItem = {
        id: Math.random().toString(36).substring(2, 9),
        name: form.value.name,
        creation: new Date(form.value.date),
        type: form.value.fileType,
        owners: form.value.owners || [],
        parentId: form.value.parentId || undefined
      };
      this.newFile.emit(newFile);
      form.reset();
      this.isFormVisible = false;
    }
  }



}
