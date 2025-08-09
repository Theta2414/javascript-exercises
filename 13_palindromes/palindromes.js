const palindromes = function (str) {
    //option 2
    const letters = {
        a: "text",
        b: "text",
        c: "text",
        d: "text",
        e: "text",
        f: "text",
        g: "text",
        h: "text",
        i: "text",
        k: "text",
        l: "text",
        m: "text",
        n: "text",
        o: "text",
        p: "text",
        q: "text",
        r: "text",
        s: "text",
        t: "text",
        u: "text",
        v: "text",
        w: "text",
        s: "text",
        y: "text",
        z: "text",
        0: "text",
        1: "text",
        2: "text",
        3: "text",
        4: "text",
        5: "text",
        6: "text",
        7: "text",
        8: "text",
        9: "text"
    };
    
    //Option 1
    // state = true;
    // let strArr1 = str.split(" ").join("").split(",").join("").split(".").join("").split("!").join("").split("").map(item => item.toLowerCase());
    // for (let i = 0; i < strArr1.length; i++) {
    //     if (strArr1[i] === strArr1[strArr1.length - i - 1]) {
    //         state = true;
    //     } else {
    //         return false;
    //     }
    // }
    // return state;

    //option 2
    state = true;
    let newStr = "";
    //Check for all the characters in the string, add to new string if it is text
    for (let i = 0; i < str.length; i++) {
        if (letters[str[i].toLowerCase()] === "text") {
            newStr += str[i].toLowerCase();
        }
    }
    return newStr === newStr.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
