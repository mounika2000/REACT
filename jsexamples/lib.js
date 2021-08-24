function forEach(elems, action) {
	for(var i = 0; i < elems.length; i++) {
		action(elems[i]);
	}
}

function filter(elems, predicate) {
    var result = [];
    forEach(elems, function (e) {
        if(predicate(e)) {
            result.push(e);
        }
    });
    return result;
}


