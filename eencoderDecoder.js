const sentence = "fola is a node chief"

function encoder(sentence){
    //method 1
//     return [...sentence].reduce((encodedString,letter) => {
//         if(letter === ' '){
//             return encodedString + "."
//         }

//         return encodedString + letter.charCodeAt(0).toString(2);
//     },'')

//method 2
// let encodedString = '';
// for(const letter of sentence){
//     if(letter === ' '){
//         encodedString += " . "
    
//     }else{
//         encodedString +=letter.charCodeAt(0).toString(2) + " "
//     }
// }
// return encodedString

//method 3
return Array.from(sentence).map((letter) => {
    if(letter === " "){
        return " . "
    }
    return letter.charCodeAt(0).toString(2)+ "-"
}).join(' ')
}

// console.log(encoder(sentence))

//decoder
const encodedString= encoder(sentence)
function decoder(binaryString){
 return binaryString.split(".").reduce((decodedString,chunk) => {
     const byteChunk = chunk.split("-").filter((byte)=> byte !== '').map((byte) => parseInt(byte , 2))

     return decodedString + String.fromCharCode(...byteChunk) + ' '
 },"").trim()
}

console.time("Start")
decoder(encodedString)
console.timeEnd("Start")

// console.time("Start")
// decoder(encodedString)
// console.timeEnd("Start")