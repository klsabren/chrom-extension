// create functionality here


// create flags for the check boxes 
let flagCapital = false;
let flagNumber = false; 
let flagSpecial = false; 

// create arrays of letters, specials, and numbers 
const lettersArr = "abcdefghijklmnopqrstuvwxyz".split(""); 
const capitalsArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbersArr = "1234567890".split("");
const specialsArr = "!@#$%^&*()><.,:;".split("");

// add event listener for when user click on capital check box
const capitalCheck = document.querySelector("#capital");
capitalCheck.addEventListener('change', function() {
    if(this.checked) {
        console.log("capital is checked..."); 
        flagCapital = true;
        console.log(flagCapital);
    } else {
        console.log('Checkbox is not checked');
        flagCapital = false;
        console.log(flagCapital);
    }
});

// add event listener for when user click on number checkbox
const numberCheck = document.querySelector("#numbers");
numberCheck.addEventListener('change', function() {
    if(this.checked) {
        console.log("numbers is checked..."); 
        flagNumber = true;
        console.log(flagNumber);
    } else {
        console.log('Checkbox is not checked');
        flagNumber = false;
        console.log(flagNumber);
    }
});

// add event listener for when user click on special checkbox
const specialCheck = document.querySelector("#special");
specialCheck.addEventListener('change', function() {
    if(this.checked) {
        console.log("special is checked..."); 
        flagSpecial = true;
        console.log(flagSpecial);
    } else {
        console.log('Check is not checked');
        flagSpecial = false;
        console.log(flagSpecial);
    }
});

function generatePW(length) {
    // edge cases for when user input less than 6 or input nothing
    if (length === undefined) {
        return "Please input the lenght of password desired!"

    } else if (length < 6) {
        return "Please input the lenght to be greater than 6 for a stronger password security!"
    }

    const output = [];
    let tempOutput = []; 
    // if all 3 boxes checked
    if (flagCapital && flagNumber && flagSpecial) {
        let randomArr = []; 
        let oneSpecialOneNumberOneCapital = [];

        // generate at least one special and one number    
            // one Special
        const oneSpecial = []; 
        oneSpecial.push(specialsArr[Math.floor(Math.random() * specialsArr.length)]);
            // one Number
        const oneNumber = []; 
        oneNumber.push(numbersArr[Math.floor(Math.random() * numbersArr.length)]);
            // one Capital
        const oneCapital = []; 
        oneCapital.push(capitalsArr[Math.floor(Math.random() * capitalsArr.length)])

        // this is for after we have at least one special and one number;
        randomArr = randomArr.concat(lettersArr, capitalsArr, specialsArr, numbersArr); 
        for(let i = 0; i < length ; i++) {
            tempOutput.push(randomArr[Math.floor(Math.random() * randomArr.length)])
        }

        // randomize to output // this honestly only reduce the chances... not handling the case of when we randomize to same element
        oneSpecialOneNumberOneCapital = oneSpecialOneNumberOneCapital.concat(oneNumber, oneSpecial, oneCapital); 
        for (let i = 0; i < oneSpecialOneNumberOneCapital.length; i++) {
            tempOutput[Math.floor(Math.random() * tempOutput.length)] = oneSpecialOneNumberOneCapital[i]; 
        }
        return output.concat(tempOutput).join("");
    // if capital and number checked
    } else if (flagCapital && flagNumber) {
        let randomArr = []; 
        let oneNumberoneCapital = []; 
        // generate oneNumber and oneCapital
            // one Number
        const oneNumber = []; 
        oneNumber.push(numbersArr[Math.floor(Math.random() * numbersArr.length)]);
            // one Capital
        const oneCapital = []; 
        oneCapital.push(capitalsArr[Math.floor(Math.random() * capitalsArr.length)])

        randomArr = randomArr.concat(lettersArr, capitalsArr, numbersArr); 
        for(let i = 0; i < length ; i++) {
            tempOutput.push(randomArr[Math.floor(Math.random() * randomArr.length)])
        }

        oneNumberoneCapital = oneNumberoneCapital.concat(oneNumber, oneCapital); 
        for (let i = 0; i < oneNumberoneCapital.length; i++) {
            tempOutput[Math.floor(Math.random() * tempOutput.length)] = oneNumberoneCapital[i]; 
        }
        return output.concat(tempOutput).join("");
    // if capital and special checked
    } else if (flagCapital && flagSpecial){
        let randomArr = []; 
        let oneCapitaloneSpecial = []; 

        // generate at least one special and one number    
            // one Special
        const oneSpecial = []; 
        oneSpecial.push(specialsArr[Math.floor(Math.random() * specialsArr.length)]);
            // one Capital
        const oneCapital = []; 
        oneCapital.push(capitalsArr[Math.floor(Math.random() * capitalsArr.length)])

        randomArr = randomArr.concat(lettersArr, capitalsArr, specialsArr); 
        for(let i = 0; i < length ; i++) {
            tempOutput.push(randomArr[Math.floor(Math.random() * randomArr.length)])
        }

        oneCapitaloneSpecial = oneCapitaloneSpecial.concat(oneSpecial, oneCapital); 
        for (let i = 0; i < oneCapitaloneSpecial.length; i++) {
            tempOutput[Math.floor(Math.random() * tempOutput.length)] = oneCapitaloneSpecial[i]; 
        }
        return output.concat(tempOutput).join("");
    // if special and number checked
    } else if (flagSpecial && flagNumber){
        let randomArr = []; 
        let oneSpecialoneNumber = []; 

        // generate at least one special and one number    
            // one Special
        const oneSpecial = []; 
        oneSpecial.push(specialsArr[Math.floor(Math.random() * specialsArr.length)]);
            // one Number
        const oneNumber = []; 
        oneNumber.push(numbersArr[Math.floor(Math.random() * numbersArr.length)])


        randomArr = randomArr.concat(lettersArr, numbersArr, specialsArr); 
        for(let i = 0; i < length ; i++) {
            tempOutput.push(randomArr[Math.floor(Math.random() * randomArr.length)])
        }

        oneSpecialoneNumber = oneSpecialoneNumber.concat(oneSpecial, oneNumber); 
        for (let i = 0; i < oneSpecialoneNumber.length; i++) {
            tempOutput[Math.floor(Math.random() * tempOutput.length)] = oneSpecialoneNumber[i]; 
        }
        return output.concat(tempOutput).join("");
    // if capital only
    } else if (flagCapital) {
        let randomArr = []; 
        let capitalOnly = []; 

        const oneCapital = []; 
        oneCapital.push(capitalsArr[Math.floor(Math.random() * capitalsArr.length)])


        randomArr = randomArr.concat(lettersArr, capitalsArr); 
        for(let i = 0; i < length ; i++) {
            tempOutput.push(randomArr[Math.floor(Math.random() * randomArr.length)])
        }

        capitalOnly  = capitalOnly .concat(oneCapital); 
        for (let i = 0; i < capitalOnly .length; i++) {
            tempOutput[Math.floor(Math.random() * tempOutput.length)] = capitalOnly [i]; 
        }
        return output.concat(tempOutput).join("");
    // if number only
    } else if (flagNumber){
        let randomArr = []; 
        let numberOnly = []; 

        const oneNumber = []; 
        oneNumber.push(numbersArr[Math.floor(Math.random() * numbersArr.length)])


        randomArr = randomArr.concat(lettersArr, numbersArr); 
        for(let i = 0; i < length ; i++) {
            tempOutput.push(randomArr[Math.floor(Math.random() * randomArr.length)])
        }
    
        numberOnly  = numberOnly.concat(oneNumber); 
        for (let i = 0; i < numberOnly.length; i++) {
            tempOutput[Math.floor(Math.random() * tempOutput.length)] = numberOnly[i]; 
        }
        return output.concat(tempOutput).join("");
    // if special only
    } else if (flagSpecial){
        let randomArr = []; 
        let specialOnly = []; 

        const oneSpecial = []; 
        oneSpecial.push(specialsArr[Math.floor(Math.random() * specialsArr.length)])
        console.log(oneSpecial)

        randomArr = randomArr.concat(lettersArr, specialsArr); 
        for(let i = 0; i < length ; i++) {
            tempOutput.push(randomArr[Math.floor(Math.random() * randomArr.length)])
        }
        console.log(tempOutput)
        specialOnly = specialOnly.concat(oneSpecial); 
        for (let i = 0; i < specialOnly.length; i++) {
            tempOutput[Math.floor(Math.random() * tempOutput.length)] = specialOnly[i]; 
        }
        console.log(tempOutput)
        return output.concat(tempOutput).join("");
    // if nothing just generate the letter
    } else {
        for (let i = 0; i < length; i++){
            output.push(lettersArr[Math.floor(Math.random() * lettersArr.length)]);
        }
        return output.join(""); 
    }
}

// 1) extract user's desired password length
document.getElementById('generate').onclick = function(){
    let length = document.getElementById("length").value;
    alert(generatePW(length));
}

