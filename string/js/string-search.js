///  Start  ///
/// The match() method returns an array containing the results of matching a string against a string (or a regular expression).
var textMatch = "I am an Engineer eng";
// var textMatch = "I am an ineer ";
// let varMatch = textMatch.match("Eng");
// let varMatch = textMatch.match(/Eng/);
// let varMatch = textMatch.match(/Eng/g);
let varMatch = textMatch.match(/Eng/gi);

document.getElementById("displayMatch").innerHTML = varMatch;
///  end  ///

///  Start  ///
/// The search() method searches a string for a string (or a regular expression) and returns the position of the match:
var textSearch = "I am an Engineer";
// let varSearch = textSearch.search(Eng);
let varSearch = textSearch.search("Eng");
document.getElementById("displaySearch").innerHTML = varSearch;
///  end  ///

///  Start  ///
/// The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
/// JavaScript counts positions from zero. 0 is the first position in a string, 1 is the second, 2 is the third, ...
let text = "My name is Mosfequr Rahamn";
let varIndexOf = text.indexOf("ahamn");
document.getElementById("displayIndexOf").innerHTML = varIndexOf;
///  end  ///
