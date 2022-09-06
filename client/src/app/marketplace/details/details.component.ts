import { Component, EventEmitter, Input, Output } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { Posting } from 'src/app/state/posting/posting.state';
import { UserFacade } from 'src/app/state/user/user.facade';
import { User } from 'src/app/state/user/user.state';
import { PostingDetailsService } from '../services/postingDetails.service';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.sass'],
})
export class DetailsComponent {
	public display$!: Observable<boolean>;

	@Input() details!: Posting | null;
	@Input() validatedUser!: User | null;
	@Output() deletePosting = new EventEmitter<number>()

	constructor(
		private postingModal: PostingDetailsService,
		public userFacade: UserFacade
	) {
		this.display$ = this.postingModal.watch();
	}

	edit() {

	}

	delete() {
		this.deletePosting.emit(this.details!.id)
	}

	close() {
		this.postingModal.close();
	}
}
