import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialog } from './confirm.component';

describe('ConfirmDialog', () => {
	let component: ConfirmDialog;
	let fixture: ComponentFixture<ConfirmDialog>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ConfirmDialog],
      providers: [
        {provide: MatDialogRef, useValue: {}},
    ]
		}).compileComponents();

		fixture = TestBed.createComponent(ConfirmDialog);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
