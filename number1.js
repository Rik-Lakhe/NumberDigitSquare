var numb=prompt("helo from 2"),number=Number(numb);for(temp=0,temp2=0;number>=1;)temp=number%10,console.log(temp),temp2+=Math.pow(temp,2),number/=10,number=parseInt(number);document.write("<h1>result form number1.js = "+temp2+"</h1>");