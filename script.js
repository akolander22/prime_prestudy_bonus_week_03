function math(x) {
    function mathTwo() {
        return x + 4
    } function mathThree() {
        return x * 2
    }
    return mathTwo() + mathThree() 
}
            
console.log(math(7));