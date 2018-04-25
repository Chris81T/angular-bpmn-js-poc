# angular-bpmn-js-poc
Includes two projects: A plain javascript working one and a not working angular 5 project


## plain-bpmnjs-sample
Is a working sample, that instantiate via constructor a new viewer to show a sample process.

```javascript

        ...

        var bpmnViewer = new BpmnJS({
           container: '#viewer'
        });
        
        ...

```

## ng-bpmnjs-viewer
This project is inspired by https://github.com/narve/angular-bpmn (the project is using an older 0.3.x version of bpmn-js) and during runtime following error occurs:

```
AppComponent.html:1 ERROR TypeError: bpmn_js_1.Viewer is not a constructor
    at BpmnViewerComponent.ngOnInit (bpmn-viewer.component.ts:20)
    at checkAndUpdateDirectiveInline (core.js:12411)
    at checkAndUpdateNodeInline (core.js:13935)
    at checkAndUpdateNode (core.js:13878)
    at debugCheckAndUpdateNode (core.js:14771)
    at debugCheckDirectivesFn (core.js:14712)
    at Object.eval [as updateDirectives] (AppComponent.html:8)
    at Object.debugUpdateDirectives [as updateDirectives] (core.js:14697)
    at checkAndUpdateView (core.js:13844)
    at callViewAction (core.js:14195)
```

Code:

```typescript
    
    ...
    
    ngOnInit() {
        this.bpmnViewer = new Viewer({
            container: '#viewer'
        });
    }
  
    ...
  
```


In both projects the bpmn-js 1.2.1 version is used.
