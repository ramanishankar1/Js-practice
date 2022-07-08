var number=153;
var reverse=0;
while(number>0)
{
    var remainder=number%10;
    reverse=reverse*10+remainder;
    number= parseInt (number/10);
    
}
console.log("Reverse number",+reverse);