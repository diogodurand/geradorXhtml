import {Injectable} from '@angular/core';
import {TreeNode} from 'primeng/api';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor(private http: Http) {}

  getFiles() {
    return this.http.get('http://localhost:3000/db')
      .toPromise()
      .then(res => <TreeNode[]>res.json().componentes);
  }
}
