

function reverse_string(str)
{
  var stri = "";
var alen = str.length;
for (var i = alen ; i > 0 ; i--)
  {
    stri += str.charAt(i-1)
  }
  return stri;
  }
  function palindrome(str){return (str == reverse_string(str));

document.getElementById('reversestr').value=reverse_string(str);
}
/*
function palindrome(str){return (str == reverse_string(str));
}
function palindrome_check(){var str = document.getElementById('inputstr').value;
if(str!=""){document.getElementById('reversestr').value=reverse_string(str);document.getElementById('ispalin').value=palindrome(str);return true;}else alert ('Enter String');
}



