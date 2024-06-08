function limitByLength(words) {
    if (words.length < 100){
        console.log(words)
    } else {
        let output = words.substring(0, 100)
        console.log(output + "...")
    }
}

limitByLength('the words i speak to you are of good and not of ggkj. evil and will leand youn hkjbsc hhbnskj,bbhjbsvhlK')