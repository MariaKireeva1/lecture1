const obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
}

function convert(object) {
	let newObj = {};

	for (key in object) {
		if (typeof (object[key]) == 'object') {
			for (i in object[key]) {
				newObj[i] = object[key][i];
			}
		} else {
			newObj[key] = object[key]
		}
	}

	return newObj;
}
console.log(convert(obj));




