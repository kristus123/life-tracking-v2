import * as v from "./g100Values.js"

const d = [

	// frokost
	v.milk(300),
	v.honning(10),
	v.gresk_yoghurt(50),
	v.almond(10),
	v.havregryn(40),
	v.gule_epler(100), 
	v.syltetøy(40),
	v.eldorado_frosne_bringebær(30),

	// lunsj og middag
	v.first_price_kjøttdeig(150 * 2),
	v.eldorado_frossen_brokkoli(100 * 2),
	v.rå_first_price_ris(90 * 2),
	v.ananas(100 * 2),

	// kvelds
	v.gulrotbrød_fra_bakehuset(4*35),
	v.gule_epler(100),
	v.norvegia_ost(100),

	// kvelds
	v.milk(300),
	v.honning(10),
	v.syltetøy(40),
	v.havregryn(40),
	v.gresk_yoghurt(50),
	v.eldorado_frosne_bringebær(30),
	v.almond(10),
]

function total(nutrition, eaten) {
	return eaten
		.map(e => (e[nutrition] * e["grams_eaten"]) / 100.0)
		.reduce((a, b) => a + b, 0)
}

export const Diet = {
	kcal: total("kcal", d),
	protein_in_gram: total("protein_in_gram", d),
	fat_in_gram: total("fat_in_gram", d),
	fibre_in_gram: total("fibre_in_gram", d),
	carbohydrates_in_gram: total("carbohydrates_in_gram", d),
	sugar_in_gram: total("sugar_in_gram", d),
}
