import { Diet } from './Diet.js';
import { Macrogoals } from './MacroGoals.js';


console.log("current diet")
console.log("\n")
for (const [key, value] of Object.entries(Diet)) {
	console.log(key)
	console.log("\t" + value.toFixed(2))
}

console.log("----------")
console.log("\n")
console.log("Macro Goals")
console.log("\n")
for (const [key, value] of Object.entries(Macrogoals)) {
	console.log(key)
	console.log("\t" + value.toFixed(2))
}
