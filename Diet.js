import * as v from "./g100Values.js"

const dietHistory = [

	// frokost
	v.milk(300),
	v.havregryn(50),
	v.gule_epler(100), 
	v.eldorado_frosne_bringebær(30),
	// v.mørk_sjokolade(20),

	// lunsj
	v.first_price_kjøttdeig(200),
	v.eldorado_frossen_brokkoli(40),
	v.rå_first_price_ris(100),
	v.eldorado_ananas_blikkboks(50),

	// middag
	v.first_price_kjøttdeig(200),
	v.eldorado_frossen_brokkoli(40),
	v.rå_first_price_ris(100),
	v.eldorado_ananas_blikkboks(50),

	// kvelds 1
	v.milk(300),
	v.honning(10),
	v.havregryn(50),
	v.gresk_yoghurt(100),
	v.eldorado_frossen_mango(50),

	// kvelds 2
	v.gulrotbrød_fra_bakehuset(5*35),
	v.gule_epler(100),
	v.norvegia_ost(20),
]

function total(nutrition, eaten) {
	return eaten
		.map(e => (e[nutrition] * e["grams_eaten"]) / 100.0)
		.reduce((a, b) => a + b, 0)
}

export const Diet = {
	kcal: total("kcal", dietHistory),
	protein_in_gram: total("protein_in_gram", dietHistory),
	fat_in_gram: total("fat_in_gram", dietHistory),
	fibre_in_gram: total("fibre_in_gram", dietHistory),
	carbohydrates_in_gram: total("carbohydrates_in_gram", dietHistory),
	sugar_in_gram: total("sugar_in_gram", dietHistory),
}
