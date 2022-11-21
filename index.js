function writeCards(names, event) {
console.log("names", names)
let newArray = []
for (let i=0; i < names.length; i++) {
    // `Thank you,${names[i]}, for the wonderful event gift!`
    newArray.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!`)
} 
return newArray 
}
function countDown(n) {
    for (let i=n; i >= 0; i--) {
        console.log(i); 
    }  
}

    // [
    //     "Thank you, Taylor, for the wonderful birthday gift!",
    //     "Thank you, Treble, for the wonderful birthday gift!",
    //     "Thank you, Nina, for the wonderful birthday gift!",
    // ]
 