import { breakfast, lunch, dinner, supper, day, snack,} from "./models.js"
import * as v from "./g100Values.js"

const dietHistory = []
function _new(day) {
    if (!dietHistory.map(d => d.date).includes(day.date)) {
		console.log(day.date)
        dietHistory.push(day)
    } 
	else {
        throw new Error(`${day} already present in list`);
    }
}

_new(day("", [
	breakfast([
		v.glass_of_milk(),
		v.havregryn(50),
		v.almond(20),
		v.mørk_sjokolade(20),
	]),
	dinner([
		// v.stekt_prior_kylling_filet_økonomi_pakning_i_ovn(120),
		v.first_price_kjøttdeig(200),
		v.rå_first_price_ris(64),
	]),
	supper([
		v.gulrotbrød_fra_bakehuset(4*35),
		v.havregryn(50),
		v.almond(20),
		v.honning(5),
		v.gresk_yoghurt(100),
		v.norvegia_ost(50),
		v.glass_of_milk(),
	]),
	snack([
	]),
]))

export default dietHistory.reverse()
