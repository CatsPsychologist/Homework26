'use strict'
let user = {
    data: {
        a: 1,
        b: 2,
        c: 3,
        d: {
            a1: 1,
            b1: 2,
            c1: 3,
            d1: {
                a2: 3,
                b2: 3,
                c2: 3,
            }
        },
    }
}

// function deepFreeze(obj){
//     Object.freeze(obj)
//
//     for (let key in obj){
//         if(typeof(obj[key]) === 'object'){
//             // Object.freeze(deepFreeze(obj[key]))
//             // Object.freeze((obj[key]))
//             deepFreeze(obj[key])
//             console.log(obj[key])
//         }
//         else {
//             return 'no please';
//         }
//         // for (let key2 in obj[key]){
//         //     if(typeof(obj[key][key2]) === 'object'){
//         //         Object.freeze(obj[key][key2])
//         //         console.log(obj[key][key2])
//         //     }
//         //
//         // }
//     }
//
//     return obj;
// }

function deepFreeze(obj) {

    Object.freeze(obj)

    function frezzeIt(obj1) {
        for(let key in obj1) {
            if(typeof(obj1[key]) === 'object') {
                Object.freeze(obj1[key])
                frezzeIt(obj1[key]);
            } else {
                'sorry';
            }
        }
    }
    frezzeIt(obj);

    return obj;
}


deepFreeze(user)
console.log(user)
console.log(Object.isFrozen(user) === true)
console.log(user.data)
console.log(Object.isFrozen(user.data) === true)
console.log(user.data.d)
console.log(Object.isFrozen(user.data.d) === true)
console.log(user.data.d.d1)
console.log(Object.isFrozen(user.data.d.d1) === true)



// let userFreeze = Object.isFrozen(user)
//
// Object.freeze(userFreeze);
// console.log(Object.isFrozen(userFreeze) === true)
// Object.isFrozen(userFreeze);
// console.log(user)
