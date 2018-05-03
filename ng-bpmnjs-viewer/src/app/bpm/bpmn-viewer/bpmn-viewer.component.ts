
import { Component, OnInit } from '@angular/core';

import Viewer from 'bpmn-js/lib/Viewer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromPromise';

@Component({
  selector: 'bpmn-viewer',
  templateUrl: './bpmn-viewer.component.html',
  styleUrls: ['./bpmn-viewer.component.scss']
})
export class BpmnViewerComponent implements OnInit {

  bpmnViewer: any;

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.bpmnViewer = new Viewer({
      container: '#bpmn-viewer'
    });

    this.loadOrderProcess().subscribe(bpmn => {
      this.bpmnViewer.importXML(bpmn, (error) => {

        if (error) {
          console.error('ERROR: ', error);
        } else {
          let canvas = this.bpmnViewer.get('canvas');
          let overlays = this.bpmnViewer.get('overlays');

          // zoom to fit full viewport
          canvas.zoom('fit-viewport');          
        }

      });
    });
  }

  /** MOCK ;-) */
  loadOrderProcess() : Observable<string> {
    return Observable.fromPromise(new Promise((resolve, reject) => {
      let xhr=new XMLHttpRequest();
      xhr.onload=function(){
          resolve(xhr.responseText);
      }
      xhr.open("GET","assets/bestelleingang.bpmn");
      xhr.send();  
    }));
  }

}
