// Write a program to console the sum of odd numbers and sum of even numbers from a given list.

var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
var sum_even = 0
var sum_odd = 0
for(var i = 0; i<elements.length;i++){
    if (elements[i]%2 === 0){
        sum_even = sum_even+elements[i]
    }else{
        sum_odd = sum_odd+elements[i]
    }
}console.log(sum_even,"is sum of even num to given list");
console.log(sum_odd,"is sum of odd num to given num");


