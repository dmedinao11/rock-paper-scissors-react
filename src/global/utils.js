export class ScoreController {
	constructor() {
		this.lsKey = "score";
		this.score = Number.parseInt(localStorage.getItem(this.lsKey)) || 0;
	}

	increment() {
		++this.score;
		localStorage.setItem(this.lsKey, this.score.toString());
	}
}
