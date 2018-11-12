/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { MasterLoanGatewayTestModule } from '../../../../test.module';
import { CustomerFormDeleteDialogComponent } from 'app/entities/MasterLoanForms/customer-form/customer-form-delete-dialog.component';
import { CustomerFormService } from 'app/entities/MasterLoanForms/customer-form/customer-form.service';

describe('Component Tests', () => {
    describe('CustomerForm Management Delete Component', () => {
        let comp: CustomerFormDeleteDialogComponent;
        let fixture: ComponentFixture<CustomerFormDeleteDialogComponent>;
        let service: CustomerFormService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [MasterLoanGatewayTestModule],
                declarations: [CustomerFormDeleteDialogComponent]
            })
                .overrideTemplate(CustomerFormDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(CustomerFormDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CustomerFormService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
