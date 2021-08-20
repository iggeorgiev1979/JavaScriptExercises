function passwordValidator(password){
    
    function isLetter(char){
        return char.toLowerCase() != char.toUpperCase()
    }

    function checkLength(text){
        return text.length >= 6 && text.length <= 10;
    }

    let lengthMessage;
    let digitMessage;
    let digitCounter = 0;
    let digitAndLettersMessage;

    if(!checkLength(password)){
        lengthMessage = "Password must be between 6 and 10 characters";
    }

    for (let index = 0; index < password.length; index++){
        let char = password[index];
        if (!isLetter(char) && isNaN(char)){
            digitAndLettersMessage = "Password must consist only of letters and digits";
        }
        if (digitCounter < 2){
            if(!isNaN(char)){
                digitCounter += 1
            }
        }
    }
    if(digitCounter < 2){
        digitMessage = "Password must have at least 2 digits";
    }
    if(!lengthMessage && !digitMessage && !digitAndLettersMessage){
        console.log("Password is valid");
    }else{
        if(lengthMessage){
            console.log(lengthMessage);
        }
        if(digitAndLettersMessage){
            console.log(digitAndLettersMessage);
        }
        if(digitMessage){
            console.log(digitMessage);
        }
        
    }
}
passwordValidator('Pa$s$s')