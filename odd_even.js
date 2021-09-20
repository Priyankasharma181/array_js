// Write a program to count how many odd numbers are there and how many even numbers are there in a given list.

var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var odd = []
for (var i = 0;i<elements.length;i++){
    if (elements[i]%2 !== 0){
        odd.push(elements[i])
    }
}console.log(odd);
console.log(odd.length)