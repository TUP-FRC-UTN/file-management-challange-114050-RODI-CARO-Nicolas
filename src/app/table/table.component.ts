import { Component, Input } from '@angular/core';
import { FileItem } from '../../models/file.item.model';
import { FileType } from '../../models/file.item.model';
import { CommonModule } from '@angular/common';
import { FILE_LIST } from '../../data/file.storage';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  
  @Input() fileItems : FileItem[] = [];

  ngOnInit(): void {
    this.loadFileItems();
  }

  loadFileItems(){
    const folders = FILE_LIST.filter(item => item.type === FileType.FOLDER)
    .sort( (a, b)=> a.name.localeCompare(b.name) );

    const files = FILE_LIST.filter(item => item.type === FileType.FILE)
    .sort( (a, b) => a.name.localeCompare(b.name) );

    this.fileItems = [...folders, ...files];




  }


}
