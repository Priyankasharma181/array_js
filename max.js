var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
var max = numbers[0]
for (i = 0; i<numbers.length;i++){
    if (max>numbers[i]){
        max = numbers[i]
    }
}console.log(max);

