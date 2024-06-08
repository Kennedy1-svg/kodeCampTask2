const places = [
  "Alpha",
  "Bravo",
  "Charlie",
  "Delta",
  "Echo",
  "Foxtrot",
  "Golf",
  "Hotel",
  "India",
  "Julliet"
];

function linearSearch(word) {
    let check = places.find((s) => {
        return s == word
    })
    if (check){
        console.log('Yes, the string exists in the array')
    }else {
        console.log("No, the string does not exist in the array");
    }
}

linearSearch("Echo");