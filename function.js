function reverse(sortedArr1,Indices){
    const sortedArr1 = [...arr];
    Indices.forEach(idx => {
        if(idx < sortedArr1.length){
            sortedArr1[idx] = sortedArr1[idx].split('').reverse().join('');
        }
    })
    sortedArr1.sort()
    return sortedArr1
}
let sortedArr1 = ["Black", "Orange", "Red", "White"]
let Indices = [2,3]
let results = reverse(arr,Indices);
console.log(results);
let m = str.indexOf("Orange")
console.log(m)

//2
function checkIf(arr4){
    for (let c =0; c<arr4.length; c++){
        if(arr4[c]>0){
            arr4[c]="positive"
        }
        else if (arr4[c]<0){
            arr4[c]="negative"
        }
        else(arr4[c] ="zero"
        )
        }
    
    return arr4
}
const arr4 = [22,-5,55,-6,77,-8,65]
console.log(checkIf(arr4))

//3
 let arrayOfstr = [  
    {"id":"387865",
    "name": "Mary muthoni",
     "salary": 60000
     },

    {"id":"839022",
     "name":"Ann wangechi",
     "salary":55000
     },

     {"id":"675439",
     "name":"Joan mwangi",
     "salary":34100    
    },

     {"id":"34567",
     "name":"George omondi",
    "salary":23456
    }
  ]
 let sortedArrayOfstr = arrayOfstr.sort(
     (salary1,salary2) => (salary1.salary< salary2.salary)? -1 :(salary1.salary2>salary2.salary)?
    1:0)
    console.log(sortedArrayOfstr)

//4
function multiplication(numbers){
    numbers.forEach(number =>
        {console.log(number*2)})
}  
let numbers = [32,56,77,5,64]
multiplication(numbers)

//5
function array(arr){
    for(let x = 0; x<4 && x<arr.length; x++){
        arr[x] +=5
    }
    console.log(arr)
}

const arr = [22,43,55,21,67,88,95,16];
array(arr);



