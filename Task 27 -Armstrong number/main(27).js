var c=0;
var a,temp;
var n=153;
while(n>0)
{
   a=n%10;
   n=n/10;
   c=c+(a*a*a);
}
if(temp===c){
   console.log("N is  an Armstrong number");
}
else{
   console.log("N is not an armstrong number");
}
