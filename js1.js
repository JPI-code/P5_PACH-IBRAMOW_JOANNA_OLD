let liczba1 = 5;
let liczba2 = 2;

console.log (liczba1+liczba2); 
console.log ("wynik dodawania:", liczba1+liczba2);

let array = [7]
console.log(array); 
array.push(liczba1-liczba2);
console.log(array);
array.push(liczba1/liczba2);
array.unshift(liczba1*liczba2);

console.log (array);
console.log (array[3]+3);
for (let i=0; i<array.length; i=i+2){
    console.log(array[i]);
}
function pierwiastek(liczba) 
{let wynik = liczba**(1/2)
   return wynik 
}

console.log (pierwiastek(4));
console.log (pierwiastek(9));
console.log (pierwiastek(5));
