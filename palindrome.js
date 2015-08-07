
 function chkpalindrome()
   {
    var temp,rev=0
    var no=parseInt(frm.t1.value)
    temp=no
    while(no>0)
      {
        rev=(rev*10)+(no%10)
        no=Math.floor(no/10)
      }  
     if(rev==temp)
       alert(temp +" Is Palindrome")
     else
     alert(temp + " Is Not Palindrome")
     
   }
 