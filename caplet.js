
function myFunction()
 {
    var str = document.getElementById("myText").value;
    var res = str.charAt(2);
    document.getElementById("demo").innerHTML = res.toUpperCase();
}
