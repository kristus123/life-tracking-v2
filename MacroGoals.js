const age = 27
const myWeight = 78

const neededCalories = 3100
const maintainence = Math.round(((10*myWeight) + (6.25*190) - (5*age) + 5) * 1.7) // https://reference.medscape.com/calculator/846/mifflin-st-jeor-equation#
const neededProteinInGram = myWeight * 1.7



export const Macrogoals = {
	neededCalories,
	maintainence,
	neededProteinInGram,
}
