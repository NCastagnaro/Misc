{
    function factorial(x){
        let total = 1;
        for(let i = x; i > 0; i--){
        total *=i; // total = total * x;
        }
        return total;
    }
    console.log(factorial(5));
    let food = "steak";
    console.log({food});
}
