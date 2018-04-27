import { Component, OnInit } from '@angular/core';

import Viewer from 'bpmn-js/lib/Viewer';

@Component({
  selector: 'bpmn-viewer',
  templateUrl: './bpmn-viewer.component.html',
  styleUrls: ['./bpmn-viewer.component.scss']
})
export class BpmnViewerComponent implements OnInit {

  bpmnViewer: any;

  constructor() {

  }

  ngOnInit() {

    console.log('Viewer = ', Viewer);

    this.bpmnViewer = new Viewer({
      container: '#viewer'
    });
  }

}
