import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  template: `
    <div class="modal-header">
      <h5 class="modal-title text-center">{{padrinho.nome}}</h5>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">{{ padrinho.description }}</div>
    <div class="modal-footer">
      <button type="button" class="btn btn-success btn-link" (click)="activeModal.close('Close click')">Fechar</button>
    </div>
  `
})
export class NgbdModalContent {
    @Input() padrinho;
  constructor(public activeModal: NgbActiveModal) {}
}

// @Component({
//   selector: 'app-modal-component',
//   templateUrl: './modal.component.html'
// })
// export class NgbdModalComponent {
//   constructor(private modalService: NgbModal) {}

//   openODAL() {
//     const modalRef = this.modalService.open(NgbdModalContent);
//     modalRef.componentInstance.name = 'name';
//   }
// }
