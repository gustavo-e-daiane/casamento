import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  template: `
    <div class="modal-header">
      <h5 class="modal-title text-center">{{name}}</h5>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">{{ description }}</div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default btn-link" (click)="activeModal.close('Close click')">Never mind</button>
      <div class="divider"></div>
      <button type="button" class="btn btn-danger btn-link" (click)="activeModal.close('Close click')">DELETE</button>
    </div>
  `
})
export class NgbdModalContent {
    @Input() name: string;
    @Input() description: string;

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
