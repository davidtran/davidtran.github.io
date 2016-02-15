import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {NgFor} from 'angular2/common';
import {enableProdMode} from 'angular2/core';

enableProdMode();

@Component({
	selector: 'app',
	template: `
		<table>
			<tr *ngFor="#row of grid">
				<td *ngFor="#name of row">
					{{name}}
				</td>
			</tr>
		</table>
	`,
	directives: [NgFor]
})
export class AppCmp {
	private grid: any;
	private gridWidth = 30;
	private gridHeight = 500;
	private interval = 50;
	private changePerInterval = 10000;
	private names = ['Joe', 'Michael', 'David', 'Jones', 'Phil', 'Johnson', 'Janes', 'Anna', 'Hugo', 'Lina', 'Scotte', 'Nam', 'Tran',
									'Bill', 'Mark', 'Rihanna', 'Justin', 'Bieber', 'James', 'Cameron', 'Peter', 'Anderson', 'Ronaldo', 'Scholes', 'Giggs',
									'Lee', 'Cedric', 'Young', 'Zim', 'Hue', 'Zac', 'Jonas', 'Miley', 'Thomas', 'September', 'Green', 'Red', 'Rose', 'Pink'];

	constructor() {
		this.grid = this.initializeGrid();
		this.beginDataChanges();
	}

	initializeGrid() {
		var grid = [];
		for (var row = 0; row < this.gridHeight; row++) {
			grid[row] = [];
			for (var column = 0; column < this.gridWidth; column++) {
				grid[row].push(this.getRandomName());
			}
		}
		return grid;
	}

	getRandomNumber(maxBound) {
		return Math.floor(Math.random() * maxBound);
	}

	getRandomName() {
		var i = this.getRandomNumber(this.names.length);
		return this.names[i];
	}

	beginDataChanges() {
		setInterval(() => {
			this.grid = this.initializeGrid();
		}, this.interval);
	}
}

bootstrap(AppCmp);