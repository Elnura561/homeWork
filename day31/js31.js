// самый керекти ереже важный оширме
let v = 5,s=3
let sum, mines, dibisible, mod;
sum = v + s;;
mines = v - s;
dibisible = v/s;
mod = v % s
// let v = 5 
// let s=3 осылай жазугада болады
v++; //v=v+1=5+1
console.log("v++=" + v);
v--;//v=v-1=5-1
console.log("v--=" + v);

console.log("v + s =" + sum);
console.log("v-s =" + mines);
console.log("v/s=" + dibisible);
console.log("v % s=" + mod);
//lert('v+s=' + sum + '\n' + 'v-s=' + mines + "v/s"+ dibisible);
v+=5 //v=v+5
v-=3 //v=v-3
v/=2 //v=v/2
v*=3 //v=v*3
v%=3 //v=v%3

//var num = prompt("введите число для квадрат:")
//alert("enter squar" + (num*=num))
var num1 = prompt("ведите число1")-0;
var num2 = prompt('ведите число2')-0;

alert('aydan:'+num1*num2 +'perimeter:' + (num1+num2)*2);
