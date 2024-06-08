function palindrome(word){
let output = word.toLowerCase()
let wordToReverse = output.split('').reverse().join('')
if(wordToReverse == output){
    console.log('It is a palindrome')
} else {
    console.log('It is not a palindrome')
}
}

palindrome('radar')