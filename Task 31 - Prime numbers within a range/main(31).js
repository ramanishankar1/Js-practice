number=prompt("Enter the number");
for(i=2;i<=number;i++)
{

if((i%2!==0)&&(i%3!==0)&&(i%5!==0)&&(i%7!==0))

{
   console.log("It is  a prime number",+i);
}

else if(i==2 || i==3 || i==5 || i==7){
   
   console.log("It is  a prime number",+i);
}
}