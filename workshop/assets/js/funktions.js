/**
 * Titel of this script
 * @desc addiert Zahlen
 * @package 1.0.0.0
 * @since 2019/11/04
 * @author Frank
 * ...
 */



function add(a,b) {
    return a+b;
}


function add2(a,b,c) {
    // ES5: using default operator for default values
    var _a = a || 0;
    var _b = b || 0;
    var _c = c || 0;
    
    if (typeof(_a)==='number' && typeof(_b)==='number' && typeof(_c)==='number') {
        return _a+_b+_c;
    }
    else {
        return NaN;
    }
        
}


function add3(a,b,c) {
    // ES5: using default operator for default values
    var _a = a || 0;
    var _b = b || 0;
    var _c = c || 0;
    
    if (typeof(_a)!=='number') return NaN 
    if (typeof(_b)!=='number') return NaN 
    if (typeof(_c)!=='number') return NaN 
    
    return _a+_b+_c;
            
}



console.clear();
var x = add2(1,2,4);
console.log(x);

// scopes:
// ES5: var (function scope)
// ES6: let (control scope)
// ES6: const (constants)
function fn(){
    let d =42;
    
    for (let i=0; i<10; i+=1){
              
    }
    console.log(i);
    console.log(d);
        
    // attention: hoisting!
    let newvar = 108;
}

fn ();
console.log(d);