function elementReplace(sel) {
    var selector = sel.split(/(?=\.|#)/);
    var ssElementArray = [];

    if (selector.length === 1) {
        if (selector[0].match(/^[^\.#]/)) {
          ssElementArray = document.getElementsByTagName(selector[0]);
	    } else if (selector[0].charAt(0) === '.') {
	      ssElementArray = document.getElementsByClassName(selector[0].substr(1));
	    } else if (selector[0].charAt(0) === '#') {
	      ssElementArray = document.getElementById(selector[0].substr(1));
	    }
    } else {
        ssElementArray = document.querySelectorAll(sel);
    }

	var elementsLength = ssElementArray.length;

	for (var i = 0; i < elementsLength; i++) {
		ssElementArray[i].outerHTML = ssElementArray[i].outerHTML.replace(/<table|<tbody|<tr|<td+/g, '<div').replace(/<\/table|<\/tbody|<\/tr|<\/td+/g, '</div');
	}

	return ssElementArray;
}
