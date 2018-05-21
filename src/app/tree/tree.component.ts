import {Component, OnInit} from '@angular/core';
import {TreeNode} from 'primeng/api';
import {NodeService} from '../node.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  filesTree7: TreeNode[];
  filesTree8: TreeNode[];
  filesTree9: TreeNode[];

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
        this.nodeService.getFiles().then(files => this.filesTree7 = files);
    //    this.nodeService.getFiles().then(files => this.filesTree8 = files);
    //    this.nodeService.getFiles().then(files => this.filesTree9 = files);

    this.filesTree8 = [
      {
        label: "Backup",
        data: "Backup Folder",
        expandedIcon: "fa-folder-open",
        collapsedIcon: "fa-folder"
      }
    ];
    this.filesTree9 = [
      {
        label: "Backup",
        data: "Backup Folder",
        expandedIcon: "fa-folder-open",
        collapsedIcon: "fa-folder"
      }
    ];
  }

  onClick() {
//    this.filesTree7[0].
//    console.log(this.fi);
    confirm("Just Testing");
  }

}
