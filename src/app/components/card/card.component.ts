import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../modal/modal.component';

@Component({
  selector: 'app-card-pardinhos',
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() name: string;
  @Input() category: string;
  @Input() description: string;

  constructor(private modalService: NgbModal) {}

  openModal() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = this.name;
    modalRef.componentInstance.description = this.description;
  }
}
