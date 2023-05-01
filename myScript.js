
// function length(l) {
//     function breadth(b) {
//         console.log(l*b);
//     }
//     breadth(6);
// }
// length(5);

// var i = 0;
// function outerFun(params) {
//     function innerFun(params) {
//         i+=1;
//         console.log(i);
//     }
//     innerFun();
// }
// outerFun();
// outerFun();
// outerFun();
// outerFun();

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);