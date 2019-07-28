const caesar = function (strg, nbr) {
    let letters = strg.split('');
    let result = "";
    if(nbr > 26 || nbr < -26){
        nbr = nbr%26;
        console.log("nbr = " + nbr);
    }
    letters.forEach(function (letter) {
        let sglLetter = letter.charCodeAt(0);

        //only letters are convertet
        if (sglLetter > 64 && sglLetter < 122) {

            //uppercase modification > Z
            if (sglLetter >= 65 && sglLetter <= 90) {
                if (sglLetter + nbr > 90) {
                    sglLetter -= 26;
                }
            }

            //uppercase modification < A
            if (sglLetter >= 65 && sglLetter <= 90) {
                if (sglLetter + nbr < 65) {
                    sglLetter += 26;
                }
            }

            //lowercase modification > z
            if (sglLetter >= 97 && sglLetter <= 122) {
                if (sglLetter + nbr > 122) {
                    sglLetter -= 26;
                }
            }

            //lowercase modification < a
            if (sglLetter >= 97 && sglLetter <= 122) {
                if (sglLetter + nbr < 97) {
                    sglLetter += 26;
                }
            }

            console.log("letter =" + letter + " -> letterCode = " + sglLetter + " ->modifiziert um " + nbr + " -> " + String.fromCharCode(sglLetter + nbr));

            result += String.fromCharCode(sglLetter + nbr)

        } else {
            console.log("letter =" + letter + " ->nicht modifiziert = " + String.fromCharCode(sglLetter));

            result += String.fromCharCode(sglLetter);
        }


    });


    return result;
}

module.exports = caesar
