import dietHistory from "./dietHistory.js";

function total(nutrition, eaten) {
	return eaten
		.map(e => (e[nutrition] * e["grams_eaten"]) / 100.0)
		.reduce((a, b) => a + b, 0)
}

export default class Diet {

	static allDays() {
		return dietHistory.map(day => this.xx(day.date))
	}

	static xx(date) {
		const eaten = dietHistory
			.find(d => d.date == date)
			.meals
			.flatMap(meal => meal.eaten)

		return {
			date: date,
			kcal: total("kcal", eaten),
			fat_in_gram: total("fat_in_gram", eaten),
			protein_in_gram: total("protein_in_gram", eaten),
			fibre_in_gram: total("fibre_in_gram", eaten),
			carbohydrates_in_gram: total("carbohydrates_in_gram", eaten),
			sugar_in_gram: total("sugar_in_gram", eaten),
		}
	}
}