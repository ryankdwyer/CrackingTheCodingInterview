function AnimalShelter () {
	this.cats = null;
	this.dogs = null;
}

function Animal (data) {
	this.data = data;
	this.time = new Date();
	this.next = null;
}

AnimalShelter.prototype.enqueueCat = function (animal) {
	var current = this.cats;
	if (current === null) {
		this.cats = animal;
	} else {
		while (current.next !== null) {
			current = current.next;
		}
		if (current.next === null) {
			current.next = animal;
		}
	}
};

AnimalShelter.prototype.enqueueDog = function (animal) {
	var current = this.dogs;
	if (current === null) {
		this.dogs = animal;
	} else {
		while (current.next !== null) {
			current = current.next;
		}
		if (current.next === null) {
			current.next = animal;
		}
	}
};

AnimalShelter.prototype.dequeue = function (animal) {
	var cat = this.cats.time;
	var dog = this.dogs.time;
	if (cat > dog) {
		this.cats = this.cats.next;
		return cat;
	} else {
		this.dogs = this.dogs.next;
		return dog;
	}
};