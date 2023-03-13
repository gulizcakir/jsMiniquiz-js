'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
let negative = 0
let positive = 0
let zero = 0
let counter = 0

function plusMinus(arr) {
    // Write your code here

    for (let i=0; i<100;i++)
    {
        if(arr[i]<0)
        { 
            negative+=1
            counter+=1
        }
        
        if(arr[i]>0)
        { 
            positive+=1
            counter+=1
        }
        
        if(arr[i]==0)
        { 
            zero+=1
            counter+=1
        }
              
    }
   let p=positive/counter
   let n=negative/counter
   let z=zero/counter
   console.log(p.toFixed(6))
   console.log(n.toFixed(6))
   console.log(z.toFixed(6))
   counter=0
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
