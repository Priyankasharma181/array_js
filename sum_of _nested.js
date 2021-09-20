var marks = [ [78, 76, 94, 86, 88], [91, 71, 98, 65, 76], [95, 45, 78, 52, 49] ]
var i =0
var sum = 0
for(var i = 0; i<marks.length; i++){
    var j = 0
    for(var j = 0; j<marks[i].length; j++){
        sum = sum+marks[i][j]
    }
}console.log(sum);
