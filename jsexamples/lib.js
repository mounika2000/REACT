// HOF
function forEach(elems, action) {
	for(var i = 0; i < elems.length; i++) {
		action(elems[i]);
	}
}

// HOF
function filter(elems, predicate) {
    var result = [];
    forEach(elems, function (e) {
        if(predicate(e)) {
            result.push(e);
        }
    });
    return result;
}

// HOF
function map(elems, transformFn) {
    var result = [];
    forEach(elems, function (e) {
       result.push(transformFn(e));
    });
    return result;
}

