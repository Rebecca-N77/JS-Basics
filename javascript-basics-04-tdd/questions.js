
const stringSize = (text) => {
    return text.length

}
const replaceCharacterE = (text) => {
    return text.replace("e", " ");
}
const concatString = (text1, text2) => {
    return text1.concat(text2);
}
const showChar5 = (text) => {
    return text.charAt(4);

}
const showChar9 = (text) => {
    return text.substring(0, 9);

}
const toCapitals = (text) => {
    return text.toUpperCase();

}
const toLowerCase = (text) => {
    return text.toLowerCase();

}
const removeSpaces = (text) => {
    return text.trim()
}

}
const IsString = (text) => {
    if (text.typeOf = String){
        return true
    } 

}

const getExtension = (text) => {
    return text.substring(text.lastIndexOf('.')+1, text.length+1);

}
const countSpaces = (text) => {
    return text.split(" ").length-1

}
const InverseString = (text) => {
    let t = text.split("");
    let e = t.reverse();
    let x = e.join("");
    return x;

}

const power = (x, y) => {
    return Math.pow(x, y);

}
const absoluteValue = (num) => {
    return Math.abs(num);

}
const absoluteValueArray = (array) => {
    return array.map(Math.abs);
}
const circleSurface = (radius) => {
    return Math.ceil(Math.PI*radius*radius);

}
const hypothenuse = (ab, ac) => {
    return Math.hypot(5, 8);

}
const BMI = (weight, height) => {
    let b = (weight / (height * height));
    return parseFloat(b.toFixed(2)); 

}

const createLanguagesArray = () => {
    return ["Html", "CSS", "Java", "PHP"];

}

const createNumbersArray = () => {
    return [0, 1, 2, 3, 4, 5]

}

const replaceElement = (languages) => {
    languages[2] = 'Javascript'
    return languages;

}

const addElement = (languages) => {
    languages.push("Ruby", "Python");
    return languages;

}

const addNumberElement = (numbers) => {
    numbers = [0, 1, 2, 3, 4, 5]
    numbers.unshift(-2, -1);
    return numbers;

}

const removeFirst = (languages) => {
    languages.shift();
    return languages;

}

const removeLast = (languages) => {
    languages.pop();
    return languages;

}

const convertStrToArr = (social_arr) => {
    return  social_arr.split(",");

}

const convertArrToStr = (languages) => {
    return languages.join(",");

}

const sortArr = (social_arr) => {
    social_arr.sort();
    return social_arr;

}

const invertArr = (social_arr) => {
    return social_arr.reverse();

}