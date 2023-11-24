import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../modal/modal.component';

@Component({
  selector: 'app-card-pardinhos',
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() padrinho;

  constructor(private modalService: NgbModal) {}
  ngOnInit() {
console.log(this.padrinho);
  }
  openModal() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.padrinho = this.padrinho;
  }
}
