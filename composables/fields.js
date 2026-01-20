export const unit = (nutrition) => {
    return useState("unit" + nutrition, () => nutrition.includes("_in_gram") ? 'g ' + nutrition.replace("_in_gram", "") : ' ' + nutrition)
}