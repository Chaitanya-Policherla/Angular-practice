import { Component, ViewChild, ViewContainerRef, TemplateRef, ViewRef, AfterViewInit, ViewChildren } from '@angular/core';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'testApp';
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
  @ViewChild('t1', {read: TemplateRef}) t1: TemplateRef<null>;
  @ViewChild('t2', {read: TemplateRef}) t2: TemplateRef<null>;

  view1: ViewRef;
  view2: ViewRef;

  ngAfterViewInit(){
    this.view1 = this.t1.createEmbeddedView(null);
    this.view2 = this.t2.createEmbeddedView(null);
  }

  show(type: string){
    const view = type === 't1' ? this.view1 : this.view2;
    this.vc.detach();
    this.vc.insert(view);
  }
}
