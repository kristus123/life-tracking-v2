import * as v from "./g100Values.js"

const dietHistory = [
	v.glass_of_milk(),
	v.havregryn(50),
	v.almond(20),
	v.mørk_sjokolade(20),


	v.first_price_kjøttdeig(200),
	v.rå_first_price_ris(64),


	v.gulrotbrød_fra_bakehuset(4*35),
	v.havregryn(50),
	v.almond(20),
	v.honning(5),

	v.gresk_yoghurt(100),
	v.norvegia_ost(50),
	v.glass_of_milk(),
]

function total(nutrition, eaten) {
	return eaten
		.map(e => (e[nutrition] * e["grams_eaten"]) / 100.0)
		.reduce((a, b) => a + b, 0)
}

export const Diet = {
	kcal: total("kcal", dietHistory),
	protein_in_gram: total("protein_in_gram", dietHistory),
	// fat_in_gram: total("fat_in_gram", dietHistory),
	// fibre_in_gram: total("fibre_in_gram", dietHistory),
	// carbohydrates_in_gram: total("carbohydrates_in_gram", dietHistory),
	// sugar_in_gram: total("sugar_in_gram", dietHistory),
}
