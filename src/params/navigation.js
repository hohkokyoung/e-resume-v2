const validNavigations = [
    "education",
    "experience",
    "portfolio",
    "certification"
]

export function match(value) {
	return validNavigations.some(navigation => navigation == value);
}

