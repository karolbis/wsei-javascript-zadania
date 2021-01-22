//Zadanie 1
let num5 = 15,
    num6 = 6;

if(num5 > num6){
console.log(num5);
} else {
  console.log(num6);
}
//Zadanie 2

let n1 = 2,
    n2 = 4,
    n3 = 5;

if(n1>n2 && n1>n3){
  console.log(n1 + ' jest najwieksze');
}else if(n2>n1 && n2>n3){
  console.log(n2 + ' jest najwieksze');
}else if(n3>n1 && n3>n2){
console.log(n3 + ' jest najwieksze');
}

//Zadanie 3

var x;
for (x = 0; x < 10; x++) {
console.log("Lubię JavaScript");
}

//Zadanie 4
let result = 0;
for (let i=1; i <=10; i++){
  result +=i;
}
console.log(result);

//Zadanie 5
var n = 5;
for(i=0; i<n; i++){
  if(i%2){
    console.log(i + " parzysta");
  }else{
    console.log(i + " nieparzysta");
  }
}

//Zadanie 6
for(let i=0; i<5; i++){
for(let j=0; j<5; j++){
    
      console.log("i= " + i + ", j= " + j);
    }
}

//Zadanie 7
for(let i = 0; i <=100; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log(`${i}FizzBuzz`);
  }else if (i % 3 === 0){
    console.log(`${i} Fizz`);
  }else if (i % 5 === 0){
    console.log(`${i} Buzz`);
    } else {
      console.log(`${i}`);
    }
  }
//Zadanie 8

let star = 5;
let result = '';

for(let i = 1; i <= star; i++){
  for(let j = 0; j < i; j++){
    result += "*";
  }
  console.log(result);
  result = ""
}
