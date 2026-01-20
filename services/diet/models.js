export function meal(name, eaten) {
    return {
		name: name,
		eaten: eaten,
	}
}

export function breakfast(eaten) {
    return meal("breakfast", eaten)
}
	

export function lunch(eaten) {
    return meal("lunch", eaten)
}

export function dinner(eaten) {
    return meal("dinner", eaten)
}
	

export function supper(eaten) {
    return meal("supper", eaten)
}


export function snack(eaten) {
    return meal("snack", eaten)
}


export function day(date, meals) {
	return {
		date: date,
		meals: meals
	}
}


