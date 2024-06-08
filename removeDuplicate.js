function removeDuplicate(array) {
    if(Array.isArray(array)){
        let newArray = []
        let output = []
        for (let i of array){
            newArray.push(i);
        }

        output = newArray.filter((element, index) => {
          return newArray.indexOf(element) === index;
        });

        console.log(output)
    } else {
        console.log('false')
    }
}

removeDuplicate([4,2,4,4,5,])