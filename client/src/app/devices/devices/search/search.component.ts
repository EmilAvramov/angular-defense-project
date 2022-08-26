import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { server } from 'src/app/shared/variables/config';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnInit {
	constructor(private http: HttpClient, private fb: FormBuilder) {}

	searchForm = this.fb.group({
		query: [''],
	});

	get query() {
		return this.searchForm.get(['query']);
	}

	ngOnInit(): void {}

	onSubmit() {
		const { query } = this.searchForm.value;
		const headers = { 'content-type': 'application/json' };

		this.http
			.post(`${server}/device/list/search/?query=${query}`, {
				headers: headers,
				responseType: 'json',
			})
			.subscribe({
				next: (value) => console.log(value),
				error: (err) => console.log(err.message),
			});
	}
}