const textArea = document.querySelector(".decoder");
const result = document.querySelector(".result_message");
const crypt = document.querySelector(".crypt");
const decrypt = document.querySelector(".decrypt");
const copy = document.querySelector(".copy");
const warnings = document.querySelector(".no_message_warnings");
const image = document.querySelector(".no_message_image");
const modal = document.querySelector(".modal");

let firstCrypt = true;

function encrypter(text){
    let crypted = text;

    if(crypted.length > 0){
        
        let i = 0
        let firstPart;
        let secondPart;

        while (i < crypted.length) {
            switch (crypted[i]) {
                case "a":
                    firstPart = crypted.slice(0, i);
                    secondPart = crypted.slice(i + 1);
                    crypted = firstPart + "ai" + secondPart;
                    i += 2;
                    break;
                case "e":
                    firstPart = crypted.slice(0, i);
                    secondPart = crypted.slice(i + 1);
                    crypted = firstPart + "enter" + secondPart;
                    i += 5;
                    break;
                case "i":
                    firstPart = crypted.slice(0, i);
                    secondPart = crypted.slice(i + 1);
                    crypted = firstPart + "imes" + secondPart;
                    i += 4;
                    break;
                case "o":
                    firstPart = crypted.slice(0, i);
                    secondPart = crypted.slice(i + 1);
                    crypted = firstPart + "ober" + secondPart;
                    i += 4;
                    break;
                case "u":
                    firstPart = crypted.slice(0, i);
                    secondPart = crypted.slice(i + 1);
                    crypted = firstPart + "ufat" + secondPart;
                    i += 4;
                    break;
                default:
                    i++;
                    break;
            }
        }

        result.innerHTML = crypted;
        
        if(firstCrypt){
            firstCrypt = false;
            result.style.display = "block";
            warnings.style.display = "none";
            image.style.display = "none";
            copy.style.display = "inline-block";
        }
    }
}

function decrypter(text){
    
    let crypted = text;

    if (crypted.length > 0){
        
        let i = 0
        let firstPart;
        let secondPart;

        while (i < crypted.length) {
            if(crypted.slice(i).startsWith("ai")){
                firstPart = crypted.slice(0, i);
                secondPart = crypted.slice(i + 2);
                crypted = firstPart + "a" + secondPart;
            }
            else if(crypted.slice(i).startsWith("enter")){
                firstPart = crypted.slice(0, i);
                secondPart = crypted.slice(i + 5);
                crypted = firstPart + "e" + secondPart;            
            }
            else if(crypted.slice(i).startsWith("imes")){
                firstPart = crypted.slice(0, i);
                secondPart = crypted.slice(i + 4);
                crypted = firstPart + "i" + secondPart;                        
            }
            else if(crypted.slice(i).startsWith("ober")){
                firstPart = crypted.slice(0, i);
                secondPart = crypted.slice(i + 4);
                crypted = firstPart + "o" + secondPart;            
            }
            else if(crypted.slice(i).startsWith("ufat")){
                firstPart = crypted.slice(0, i);
                secondPart = crypted.slice(i + 4);
                crypted = firstPart + "u" + secondPart;            
            }

            i++;
        }

        result.innerHTML = crypted;
        
        if(firstCrypt){
            firstCrypt = false;
            result.style.display = "block";
            warnings.style.display = "none";
            image.style.display = "none";
            copy.style.display = "inline-block";
        }
    }
}

crypt.addEventListener("click",() => {
    encrypter(textArea.value);
})

decrypt.addEventListener("click",() => {
    decrypter(textArea.value);
}) 

copy.addEventListener("click", () => {
    let textToCopy = result.innerHTML;
    const textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    modal.style.visibility = "visible";
    setTimeout(() => modal.style.visibility = "hidden", 3000);
});