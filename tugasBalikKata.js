function balikKata(kata) {
    var data = kata;
    var res = '';
    for (let i = kata.length - 1; i >= 0; i--) {
        res = res + data[i];
    }
    return res;
}
console.log(balikKata("Niomic!"))    
console.log(balikKata("JavaScript"))  
console.log(balikKata("alohahola"))  
console.log(balikKata("Jawa_Barat"))  

