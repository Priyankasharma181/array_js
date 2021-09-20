var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
var max = numbers[0]
var sec = numbers[1]
for(i = 0;i < numbers.length; i++){
    if (numbers[i] > max){
        sec = max
        max = numbers[i]
    }else if (numbers[i]>sec){
        sec = numbers[i]    
    }
}console.log(sec); 