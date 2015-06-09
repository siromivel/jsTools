// This is a function to alter the case of a string to the case specified in the "direction" parameter. For when CSS fails.

var caseChange = function(data, direction) {
    var target = document.querySelectorAll(data);
    var l1 = target.length;
    for (var i = 0; i < l1; i++) {
        var l2 = target[i].innerHTML.length;
        target[i].innerHTML = target[i].innerHTML.toLowerCase();
        switch(direction) {
            case "upcase":
                target[i].innerHTML = target[i].innerHTML.toUpperCase();
                break;
            case "downcase":
                break;
            case "first":
                target[i].innerHTML = target[i].innerHTML.slice(0,1).toUpperCase() + target[i].innerHTML.slice(1, target[i].innerHTML.length).toLowerCase();
                break;
            case "capitalize":
            case undefined:
                for (var j = 0; j < l2; j++) {
                    // Check whether or not any given character needs to be capitalized
                    if (j === 0 || target[i].innerHTML[j-1] === ' ' && j != target[i].innerHTML.length - 1) {
                        target[i].innerHTML = target[i].innerHTML.slice(0, j) + target[i].innerHTML[j].toUpperCase() + target[i].innerHTML.slice(j + 1);
                    }
                }
                break;
        }
    }
}
