console.log('HELLO WORLD YAAAAAAAA');

console.log("CHRISTMAS THE SNOWS COMING DOWN CHRISTMAS IM WATCHING IT FAAAALL");

var obj = {
    name: 'John',
    age: 36
}


console.log(obj)

let Student = {
    name: 'Mash',
    idNum: 101062749,
    courses: ['awesome', 'fun']
}

console.log(Student.courses)
console.log(typeof(Student.idNum))

// LAB 1 COMP 3123

// capitalize the first letter of each word of a given string

let string = "the quick brown fox jumps over the lazy dog";
// we need value 0 because it will choose first letter :)
// split, to lowercase 
function capitalLetter(str){
    var array = [];

    str = str.toLowerCase();
    str = str.split(' ');

    for (var i = 0; i < str.length; i++ ){
    var sentence = str[i].charAt(0).toUpperCase()+str[i].slice(1);
    array.push(sentence);
    }
    // do the space between
    var finishSentence = array.join(" ");
    return finishSentence; 
}
console.log(capitalLetter("the quick brown fox jumps over the lazy dog"));


// exercise 2

// for loop to go through the numbers, if to see which is bigger 
// find the largest of three given integers


function findLarge(a, b, c){

    if (a >= b && a >= c){
        return a;
    }
    else if (b >= a && b >= c){
        return b;
    }
    else{
        return c;
    }
}

var largestNum = findLarge(10, 20,  33);

console.log(largestNum);


//exercise 3

// split slice join
// to move last three character to the start of a given string.
// The string length must be greater or equal to three.

function moveFront(str){
    
    if (str.length > 3){
        return str.slice(-3) + str.slice(0,-3);
    }
    return str;
}

var moveWord = moveFront("Cheesecake");

console.log(moveWord);

// can do like a choice menu thing
// if between this and this its this

function findAngle(angle){

    if (angle < 90){
        console.log("Acute Angle");
    }
    else if (angle === 90){
        console.log("Right Angle");
    }
    else if(angle == 180 ){
        console.log("Straight");
    }
    else{
        console.log("Obtuse")
    }
    return angle;
}

console.log(findAngle(170));

//  find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order.) 
//of a given array of positive integers


function findMax(sum){
    var array = [];
    // i realized i didnt need to do all of them 
}