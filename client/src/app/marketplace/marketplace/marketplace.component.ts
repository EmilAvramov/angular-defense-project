import { Component } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { Device } from 'src/app/state/device/device.state';
import { PostingFacade } from 'src/app/state/posting/posting.facade';
import { Posting, PostingPayload } from 'src/app/state/posting/posting.state';
import { UserAuth } from 'src/app/state/user/user.state';

@Component({
	selector: 'app-marketplace',
	templateUrl: './marketplace.component.html',
	styleUrls: ['./marketplace.component.sass'],
})
export class MarketplaceComponent {
	public limit: number = 100;
	public offset: number = 0;

	public postings!: Posting[] | null;
	public postingDetails!: Posting | null;
	public devices!: Device[] | null;
	public deviceDetails!: Device | null;
	public user!: UserAuth | null;

	constructor(public modal: ModalService, private postingFacade: PostingFacade) {
		this.postingFacade.postingData$.subscribe({
			next: (data: Posting[] | null) => (this.postings = data),
			error: (err: string | null) => console.log(err),
		});
		this.postingFacade.postingDetails$.subscribe({
			next: (data: Posting | null) => (this.postingDetails = data),
			error: (err: string | null) => console.log(err),
		});
		this.postingFacade.devicesData$.subscribe({
			next: (data: Device[] | null) => (this.devices = data),
			error: (err: string | null) => console.log(err),
		});
		this.postingFacade.deviceDetails$.subscribe({
			next: (data: Device | null) => (this.deviceDetails = data),
			error: (err: string | null) => console.log(err),
		});
		this.postingFacade.userData$.subscribe({
			next: (data: UserAuth | null) => (this.user = data),
			error: (err: string | null) => console.log(err),
		});
		console.log(this.postings)
	}

	openModal(): void {
		this.modal.open();
	}

	searchPostings(query: string): void {
		this.limit = 100;
		this.postingFacade.queryPostings(query, this.limit, this.offset);
	}

	loadMorePostings(): void {
		this.limit += 100;
		this.postingFacade.loadMorePostings(this.limit, this.offset);
	}

	searchDevices(query: string): void {
		this.postingFacade.queryDevices(query, 10);
	}

	createPosting(data: PostingPayload) {}
}
