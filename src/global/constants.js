import paper from "../images/icon-paper.svg";
import rock from "../images/icon-rock.svg";
import scissors from "../images/icon-scissors.svg";

export const buttons = [
	{
		img: rock,
		buttonClass: "rpsButton--rock",
		id: 0
	},
	{
		img: paper,
		buttonClass: "rpsButton--paper",
		id: 1
	},
	{
		img: scissors,
		buttonClass: "rpsButton--scissor",
		id: 2
	}
];

export const gameWinnerMap = {
	0: "2",
	1: "0",
	2: "1"
};
