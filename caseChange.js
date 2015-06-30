var caseChange = function(data, direction) {
  var target = document.querySelectorAll(data);
  var l1 = target.length;
  for (var i = 0; i < l1; i++) {
    var l2 = target[i].innerHTML.length;
    target[i].innerHTML = target[i].innerHTML.replace(/^\s+/, '').toLowerCase();

    switch(direction) {
      //Entire string to uppercase.
      case "upcase":
        target[i].innerHTML = target[i].innerHTML.toUpperCase();
        break;
      //Entire string to lowercase.
      case "downcase":
        break;
      //Capitalize first letter of each word.
      case "first":
        target[i].innerHTML = target[i].innerHTML.slice(0, 1).toUpperCase() + target[i].innerHTML.slice(1);
        
        for (var j = 0; j < l2; j++) {
          // Check whether or not any given character needs to be capitalized.
          if (/[\.!?]/.test(target[i].innerHTML[j-1]) && j != target[i].innerHTML.length - 1) {
            target[i].innerHTML = target[i].innerHTML.slice(0, j + 1) + target[i].innerHTML[j + 1].toUpperCase() + target[i].innerHTML.slice(j + 2).toLowerCase();
          }
        }
        break;
      //Capitalize first letter of each sentence (default behavior).
      case "capitalize":
      case undefined:
        for (var j = 0; j < l2; j++) {
          // Check whether or not any given character needs to be capitalized.
          if (j === 0 || target[i].innerHTML[j-1] === ' ' && j != target[i].innerHTML.length - 1) {
            target[i].innerHTML = target[i].innerHTML.slice(0, j) + target[i].innerHTML[j].toUpperCase() + target[i].innerHTML.slice(j + 1);
          }
        }
        break;
    }
  }
}