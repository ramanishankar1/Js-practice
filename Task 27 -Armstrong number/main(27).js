var number=153;
var temp;
temp=number;
var flag=0;
while(temp>0){
   flag=flag+1;
   var lastdigit=temp%10;
   lastdigit=temp-lastdigit;
   temp=temp/10;
}
temp=number;
sum=0;
while(temp>0){
   var lastdigit=temp%10;
   lastdigit=temp-lastdigit;
   temp=temp/10;

var individualultiplication=1;

for(i=0;i<=flag;i++)
   individualultiplication=individualultiplication*lastdigit   

}
sum=sum+individualultiplication;
if(number==sum){
   console.log("It is an armstrong number");
}
else{
   console.log("It is not an armstrong number");
}

