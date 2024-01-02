import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit{


  @Input() itens: any;


  constructor(
    private router: Router,
    public activeModal: NgbActiveModal
  ){}

  ngOnInit() {
    window.scroll(0,0) 
  }

}
