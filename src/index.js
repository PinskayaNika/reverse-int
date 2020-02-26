module.exports = function reverse (n) {
 var str1 = '';
  //var i;
  var str = '';
  if (String(n).substr(0, 1) == '-') {
  	str = String(n).substring(1, String(n).length);
  } else {
  	str = String(n);
  }
  //return str.length
  for (let i = 0; i < str.length; i++) {
  	if (String(n).substr(0, 1) == '-') {  
    	str1 = str1 + str.charAt(String(n).length - 2 - i);
  	} else {
    	str1 = str1 + str.charAt(String(n).length - 1 - i);
    //return str1;
  	}
  }
  return Number(str1);
}
