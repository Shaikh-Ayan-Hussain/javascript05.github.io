function Div(){
    const num1 = prompt("Enter Num1 For Division");
    const num2 = prompt("Enter Num2 For Division");
    const  result = num1/num2;
    // console.log(result);
    if(result == Infinity){
        console.clear();
        console.log("Math Error");
    }
    else{
        console.clear();
        console.log(result);
    }
}