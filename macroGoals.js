export const myWeight = 80
const age = 26

export const neededCalories = 2200

// https://reference.medscape.com/calculator/846/mifflin-st-jeor-equation#
export const maintainence = Math.round(((10*myWeight) + (6.25*190) - (5*age) + 5) * 1.7)

export const neededFatInGram = (neededCalories * 0.40) / 9

export const neededProteinInGram = myWeight * 1.6

export const neededCarbohydratesInGram =
    ((neededCalories - (neededFatInGram * 9)) - (neededProteinInGram * 4)) / 4

export const neededFiberInGram = (neededCalories / 1000) * 14

export const neededSugarInGram = 0.1 * (neededCalories / 4)
