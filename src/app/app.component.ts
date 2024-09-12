import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from "./table/table.component";
import { FileFormComponent } from "./file-form/file-form.component";
import { FileItem } from '../models/file.item.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableComponent, FileFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'filemanagement';
  files : FileItem[] = [];
  isFormVisible = false;
  

  toggleForm(){
    this.isFormVisible = !this.isFormVisible;
  }

  handleNewFile(newFile : FileItem)
  {
    this.files.push(newFile);
  }

}

