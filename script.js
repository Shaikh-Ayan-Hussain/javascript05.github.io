function Div(){
    const num1 = prompt("Enter Number For Division");
    const num2 = prompt("Enter Number For Division");
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