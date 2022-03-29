import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-help-button',
  templateUrl: './help-button.component.html',
  styleUrls: ['./help-button.component.css']
})
export class HelpButtonComponent implements OnInit {
  routeList: Array<string|undefined>

  constructor(private modalService: BsModalService, public router: Router) {
    this.routeList = [];
    for (let route in router.config){
      if (router.config[route].path != ''){
        this.routeList.push(router.config[route].path)
      }
    }
   }

  ngOnInit(): void {
  }

  // function used to map a string to a TemplateRef and return it
  public map(type:string | undefined, choice:TemplateRef<any>, presets:TemplateRef<any>):TemplateRef<any> | undefined {
    switch(type) {
       case 'choice':
         return choice;
       case 'presets':
         return presets;
       default:
         return undefined;
    }
 }
  // function that opens a modal based on the templateString provided
  public openModal(templateString: string | undefined, choice:TemplateRef<any>, presets:TemplateRef<any>) {
    let modalRef = this.map(templateString, choice, presets)
    if (modalRef) this.modalService.show(modalRef);
    document.getElementById('btn1')?.focus()
  }

  // function that changes pages in the modal on button click
  public pageChange(page: number): void{
    let other_page;
    page == 1 ? other_page = 2 : other_page = 1;
    
    // hide displayed text
    document.getElementById('body' + page)!.hidden = false;
    document.getElementById('header' + page)!.hidden = false;

    // make hidden text appear
    document.getElementById('body' + other_page)!.hidden = true;
    document.getElementById('header' + other_page)!.hidden = true;
  }
}
