// Filter tizimi:
const FilterInput1 = document.getElementById("filter__input1");
const FilterInput2 = document.getElementById("filter__input2");
const FilterBtn = document.getElementById("filter__btn");
const cards = document.querySelectorAll(".card");
const h1Element = document.querySelector('h1');
const h2Elements = document.querySelectorAll('h2');
const h2ElementFlex = document.getElementById("TitleNone");
const h2ElementEror = document.getElementById("notFound");
const body_title = document.getElementById("body_title");
const body_title2 = document.getElementById("body_title2");

FilterBtn.addEventListener('click', function(e) {
    e.preventDefault();
    h2ElementEror.style.display = 'none';
    body_title.style.display = 'flex';
    body_title2.style.display = 'flex';
    let min = FilterInput1.value.trim();
    let max = FilterInput2.value.trim();
    if (min === "" && max === "") {
        cards.forEach(card => {
            card.style.display = 'flex';
        });
        return;
    }
    min = parseInt(min || "-Infinity");
    max = parseInt(max || "Infinity");
    if (min > max)[min, max] = [max, min];
    let hasVisibleCards = false;
    cards.forEach(card => {
        const h3Text = card.querySelector('h3').textContent;
        const numberMatch = h3Text.match(/\d+/);
        const number = numberMatch ? parseInt(numberMatch[0]) : null;
        if ((number >= min) && (number <= max)) {
            card.style.display = 'flex';
            hasVisibleCards = true;
        } else {
            card.style.display = 'none';
        }
    });
    if (!hasVisibleCards) {
        h2ElementEror.style.display = 'flex';
        body_title.style.display = 'none';
        body_title2.style.display = 'none';
    }
});

// Search tizimi:
const searchInput = document.getElementById("search");
const titles = document.querySelectorAll("h1, h2");
const notFound = document.getElementById("notFound");
const searchTitle = document.getElementById("searchTitile");
const cardsSearch = document.querySelectorAll(".card");

searchInput.addEventListener("input", function() {
    let searchQuery = searchInput.value.toLowerCase();
    let found = false;

    titles.forEach(title => {
        title.style.display = "none";
    });

    cardsSearch.forEach(card => {
        let h3Text = card.querySelector("h3").textContent.toLowerCase();
        if (h3Text.includes(searchQuery) && searchQuery !== "") {
            card.style.display = "flex";
            found = true;
        } else {
            card.style.display = "none";
        }
    });

    if (searchQuery === "") {
        cardsSearch.forEach(card => {
            card.style.display = "flex";
        });
        titles.forEach(title => {
            title.style.display = "flex";
        });
        searchTitle.style.display = "none";
        notFound.style.display = "none";
    } else if (found) {
        searchTitle.style.display = "flex";
        notFound.style.display = "none";
    } else {
        searchTitle.style.display = "none";
        notFound.style.display = "flex";
    }
});

document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
});

// Massivlar bilan ishlash:
// N1:
function result1() {
    let inp1 = document.getElementById("input1").value.trim()
    let inp2 = document.getElementById("input1n2").value.trim()
    if (inp1 == "" && inp2 == "") {
        document.getElementById("result1").value = "Iltimos qiymatlarni qayta kiriting!"
        return
    }
    let arr1 = inp1.split(",");
    let arr2 = inp2.split(",");

    let result = arr1.filter(value => arr2.includes(value));

    document.getElementById("result1").value = result.join(", ");
}
document.getElementById("btn1").addEventListener("click", result1)

function clear1() {
    document.getElementById("input1").value = ""
    document.getElementById("input1n2").value = ""
    document.getElementById("result1").value = ""
}
document.getElementById("clear1").addEventListener("click", clear1)

// N2:
function result2() {
    let inp1 = document.getElementById("input2").value.trim();
    let inp2 = parseFloat(document.getElementById("input2n2").value.trim());

    if (inp1 == "" || isNaN(inp2)) {
        document.getElementById("result2").value = "Iltimos, qiymatlarni qayta kiriting!";
        return;
    }

    let arr = inp1.split(",").map(Number);
    let value = arr.map(num => num * inp2);

    document.getElementById("result2").value = value.join(", ");
}

document.getElementById("btn2").addEventListener("click", result2);

function clear2() {
    document.getElementById("input2").value = "";
    document.getElementById("input2n2").value = "";
    document.getElementById("result2").value = "";
}

document.getElementById("clear2").addEventListener("click", clear2);

// N3:
function result3() {
    let inp1 = document.getElementById("input3").value.trim();

    if (inp1 == "") {
        document.getElementById("result3").value = "Iltimos qiymatlarni qayta kiriting!";
        return;
    }

    let arr = inp1.split(",").map(Number);
    let result = arr.filter(num => num > 0).reduce((acc, num) => acc + num, 0);

    document.getElementById("result3").value = result;
}

document.getElementById("btn3").addEventListener("click", result3);

function clear3() {
    document.getElementById("input3").value = "";
    document.getElementById("result3").value = "";
}

document.getElementById("clear3").addEventListener("click", clear3);

// N4:
function result4() {
    let inp = document.getElementById("input4").value.trim();

    if (inp == "") {
        document.getElementById("result4").value = "Iltimos qiymatlarni qayta kiriting!";
        return;
    }

    let arr = inp.split(",").map(Number);
    let value = arr.filter(num => num != 0);
    let value2 = arr.length - value.length;

    let result = value.concat(Array(value2).fill(0));

    document.getElementById("result4").value = result.join(", ");
}

document.getElementById("btn4").addEventListener("click", result4);

function clear4() {
    document.getElementById("input4").value = "";
    document.getElementById("result4").value = "";
}

document.getElementById("clear4").addEventListener("click", clear4);

// N5:
function result5() {
    let inp = document.getElementById("input5").value.trim();

    if (inp == "") {
        document.getElementById("result5").value = "Iltimos qiymatlarni qayta kiriting!";
        return;
    }

    let arr = inp.split(",").map(Number);
    let count = {};

    arr.forEach(num => {
        if (count[num]) {
            count[num]++;
        } else {
            count[num] = 1;
        }
    });

    let result1 = 0;
    let result2 = null;

    for (let num in count) {
        if (count[num] > result1) {
            result1 = count[num];
            result2 = num;
        }
    }

    if (result2 !== null) {
        document.getElementById("result5").value = `Element: ${result2}, Son: ${result1}`;
    } else {
        document.getElementById("result5").value = "Natija topilmadi!";
    }
}

document.getElementById("btn5").addEventListener("click", result5);

function clear5() {
    document.getElementById("input5").value = "";
    document.getElementById("result5").value = "";
}

document.getElementById("clear5").addEventListener("click", clear5);

// N6:
function result6() {
    let inp = document.getElementById("input6").value.trim();

    if (inp == "") {
        document.getElementById("result6").value = "Iltimos qiymatlarni qayta kiriting!";
        return;
    }

    let value;
    try {
        value = JSON.parse(inp);
    } catch (e) {
        document.getElementById("result6").value = "Kiritilgan ma'lumotlar to'g'ri emas!";
        return;
    }

    let result = value.flat();

    document.getElementById("result6").value = result.join(", ");
}

document.getElementById("btn6").addEventListener("click", result6);

function clear6() {
    document.getElementById("input6").value = "";
    document.getElementById("result6").value = "";
}

document.getElementById("clear6").addEventListener("click", clear6);

// N7:
function result7() {
    let inp1 = document.getElementById("input7").value.trim();
    let inp2 = document.getElementById("input7n2").value.trim();

    if (inp1 === "" && inp2 === "") {
        document.getElementById("result7").value = "Iltimos qiymatlarni qayta kiriting!";
        return;
    }

    let arr1 = inp1.split(",").map(item => item.trim());
    let arr2 = inp2.split(",").map(item => item.trim());

    let number = [...new Set([...arr1, ...arr2])];

    document.getElementById("result7").value = number.join(", ");
}

document.getElementById("btn7").addEventListener("click", result7);

function clear7() {
    document.getElementById("input7").value = "";
    document.getElementById("input7n2").value = "";
    document.getElementById("result7").value = "";
}

document.getElementById("clear7").addEventListener("click", clear7);

// N8:
function result8() {
    let inp = document.getElementById("input8").value.trim();

    if (inp == "") {
        document.getElementById("result8").value = "Iltimos qiymatlarni qayta kiriting!";
        return;
    }

    let arr = inp.split(",").map(Number);

    let num1 = arr.filter(num => num % 2 === 0);
    let num2 = arr.filter(num => num % 2 !== 0);

    document.getElementById("result8").value = `Juft: ${num1.join(", ")}, Toq: ${num2.join(", ")}`;
}

document.getElementById("btn8").addEventListener("click", result8);

function clear8() {
    document.getElementById("input8").value = "";
    document.getElementById("result8").value = "";
}

document.getElementById("clear8").addEventListener("click", clear8);

// N9:
function result9() {
    let inp1 = document.getElementById("input9").value.trim();
    let inp2 = document.getElementById("input9n2").value.trim();

    if (inp1 == "" || inp2 == "") {
        document.getElementById("result9").value = "Iltimos qiymatlarni qayta kiriting!";
        return;
    }

    let arr = inp1.split(",").map(Number);
    let result = arr.includes(Number(inp2));

    document.getElementById("result9").value = result;
}

document.getElementById("btn9").addEventListener("click", result9);

function clear9() {
    document.getElementById("input9").value = "";
    document.getElementById("input9n2").value = "";
    document.getElementById("result9").value = "";
}

document.getElementById("clear9").addEventListener("click", clear9);

// N10:
function result10() {
    let inp = document.getElementById("input10").value.trim();

    if (inp == "") {
        document.getElementById("result10").value = "Iltimos qiymatlarni qayta kiriting!";
        return;
    }

    let arr = inp.split(",").map(Number);
    let maxElement = arr[0];
    let minElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
        if (arr[i] < minElement) {
            minElement = arr[i];
        }
    }

    document.getElementById("result10").value = `Eng katta: ${maxElement}, Eng kichik: ${minElement}`;
}
document.getElementById("btn10").addEventListener("click", result10);

function clear10() {
    document.getElementById("input10").value = "";
    document.getElementById("result10").value = "";
}

document.getElementById("clear10").addEventListener("click", clear10);

// ### Obyektlar bilan ishlash:
// N11:
function result11() {
    let inp = document.getElementById("input11").value.trim();

    if (inp == "") {
        document.getElementById("result11").value = "Iltimos obyektni kiriting!";
        return;
    }
    let obj;
    try {
        obj = JSON.parse(inp);
    } catch (e) {
        document.getElementById("result11").value = "Iltimos to'g'ri formatda kiriting!";
        return;
    }
    let value = Object.keys(obj).sort();
    let result = {};

    value.forEach(num => {
        result[num] = obj[num];
    });

    document.getElementById("result11").value = JSON.stringify(result);
}

document.getElementById("btn11").addEventListener("click", result11);

function clear11() {
    document.getElementById("input11").value = "";
    document.getElementById("result11").value = "";
}

document.getElementById("clear11").addEventListener("click", clear11);

// N12:
function result12() {
    let inp = document.getElementById("input12").value.trim();

    if (inp == "") {
        document.getElementById("result12").value = "Iltimos obyektni kiriting!";
        return;
    }

    let obj;
    try {
        obj = JSON.parse(inp);
    } catch (e) {
        document.getElementById("result12").value = "Iltimos to'g'ri formatda kiriting!";
        return;
    }
    let value = Object.keys(obj);
    let value2 = Object.values(obj);

    document.getElementById("result12").value = `Kalitlar: [${value.join(", ")}], Qiymatlar: [${value2.join(", ")}]`;
}

document.getElementById("btn12").addEventListener("click", result12);

function clear12() {
    document.getElementById("input12").value = "";
    document.getElementById("result12").value = "";
}

document.getElementById("clear12").addEventListener("click", clear12);

// N13:
function result13() {
    let inp1 = document.getElementById("input13").value.trim();
    let inp2 = document.getElementById("input13n2").value.trim();

    if (inp1 == "" || inp2 == "") {
        document.getElementById("result13").value = "Iltimos har ikkala obyektni kiriting!";
        return;
    }

    let objA, objB;
    try {
        objA = JSON.parse(inp1);
        objB = JSON.parse(inp2);
    } catch (e) {
        document.getElementById("result13").value = "Iltimos to'g'ri formatda kiriting!";
        return;
    }

    let mergedObj = {...objA, ...objB };

    document.getElementById("result13").value = JSON.stringify(mergedObj);
}

document.getElementById("btn13").addEventListener("click", result13);

function clear13() {
    document.getElementById("input13").value = "";
    document.getElementById("input13n2").value = "";
    document.getElementById("result13").value = "";
}

document.getElementById("clear13").addEventListener("click", clear13);

// N14:
function result14() {
    let inp = document.getElementById("input14").value.trim();

    if (inp == "") {
        document.getElementById("result14").value = "Iltimos obyektni kiriting!";
        return;
    }

    let obj;
    try {
        obj = JSON.parse(inp);
    } catch (e) {
        document.getElementById("result14").value = "Iltimos to'g'ri formatda kiriting!";
        return;
    }

    let total = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            total += obj[key];
        }
    }

    document.getElementById("result14").value = `Yig‘indi: ${total}`;
}

document.getElementById("btn14").addEventListener("click", result14);

function clear14() {
    document.getElementById("input14").value = "";
    document.getElementById("result14").value = "";
}

document.getElementById("clear14").addEventListener("click", clear14);

// N15:
function result15() {
    let inp = document.getElementById("input15").value.trim();
    let inp2 = document.getElementById("input15n2").value.trim();

    if (inp == "" || inp2 == "") {
        document.getElementById("result15").value = "Iltimos obyektni va yangi kalit nomini kiriting!";
        return;
    }

    let obj;
    try {
        obj = JSON.parse(inp);
    } catch (e) {
        document.getElementById("result15").value = "Iltimos to'g'ri formatda kiriting!";
        return;
    }

    if (obj.hasOwnProperty("oldKey")) {
        obj[inp2] = obj["oldKey"];
        delete obj["oldKey"];
    } else {
        document.getElementById("result15").value = "Kalit topilmadi!";
        return;
    }

    document.getElementById("result15").value = JSON.stringify(obj);
}

document.getElementById("btn15").addEventListener("click", result15);

function clear15() {
    document.getElementById("input15").value = "";
    document.getElementById("input15n2").value = "";
    document.getElementById("result15").value = "";
}

document.getElementById("clear15").addEventListener("click", clear15);

// N16:
function result16() {
    let inp = document.getElementById("input16").value.trim();
    let inp2 = document.getElementById("input16n2").value.trim();

    if (inp == "" || inp2 == "") {
        document.getElementById("result16").value = "Iltimos obyektni va olib tashlanadigan kalitni kiriting!";
        return;
    }

    let obj;
    try {
        obj = JSON.parse(inp);
    } catch (e) {
        document.getElementById("result16").value = "Iltimos to'g'ri formatda kiriting!";
        return;
    }

    let newObj = {...obj };
    delete newObj[inp2];

    document.getElementById("result16").value = JSON.stringify(newObj);
}

document.getElementById("btn16").addEventListener("click", result16);

function clear16() {
    document.getElementById("input16").value = "";
    document.getElementById("input16key").value = "";
    document.getElementById("result16").value = "";
}

document.getElementById("clear16").addEventListener("click", clear16);

// N17:
function result17() {
    let inp = document.getElementById("input17").value.trim();

    if (inp == "") {
        document.getElementById("result17").value = "Iltimos massivni kiriting!";
        return;
    }

    let arr;
    try {
        arr = JSON.parse(inp);
    } catch (e) {
        document.getElementById("result17").value = "Iltimos to'g'ri formatda kiriting!";
        return;
    }

    let result = {};
    arr.forEach(item => {
        if (result[item.key]) {
            result[item.key].push(item.value);
        } else {
            result[item.key] = [item.value];
        }
    });

    document.getElementById("result17").value = JSON.stringify(result);
}

document.getElementById("btn17").addEventListener("click", result17);

function clear17() {
    document.getElementById("input17").value = "";
    document.getElementById("result17").value = "";
}

document.getElementById("clear17").addEventListener("click", clear17);

// N18:
function result18() {
    let inp = document.getElementById("input18").value.trim();

    if (inp === "") {
        document.getElementById("result18").value = "Iltimos obyektni kiriting!";
        return;
    }

    let obj;
    try {
        obj = JSON.parse(inp);
    } catch (e) {
        document.getElementById("result18").value = "Iltimos to'g'ri formatda kiriting!";
        return;
    }

    let result = [];
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            result = result.concat(obj[key]);
        }
    }

    document.getElementById("result18").value = JSON.stringify(result);
}

document.getElementById("btn18").addEventListener("click", result18);

function clear18() {
    document.getElementById("input18").value = "";
    document.getElementById("result18").value = "";
}

document.getElementById("clear18").addEventListener("click", clear18);

// N19:
function result19() {
    let inp = document.getElementById("input19").value.trim();
    let inp2 = document.getElementById("input19n2").value.trim();

    if (inp === "" || inp2 === "") {
        document.getElementById("result19").value = "Iltimos ikkita massivni kiriting!";
        return;
    }

    let arr1, arr2;
    try {
        arr1 = JSON.parse(inp);
        arr2 = JSON.parse(inp2);
    } catch (e) {
        document.getElementById("result19").value = "Iltimos to'g'ri formatda kiriting!";
        return;
    }

    let result = arr1.filter(objA => arr2.some(objB => JSON.stringify(objA) === JSON.stringify(objB)));

    document.getElementById("result19").value = JSON.stringify(result);
}

document.getElementById("btn19").addEventListener("click", result19);

function clear19() {
    document.getElementById("input19").value = "";
    document.getElementById("input19n2").value = "";
    document.getElementById("result19").value = "";
}

document.getElementById("clear19").addEventListener("click", clear19);

// N20:
function getDepth(obj) {
    let depth = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            depth = Math.max(depth, getDepth(obj[key]));
        }
    }
    return depth + 1;
}

function result20() {
    let inp = document.getElementById("input20").value.trim();

    if (inp === "") {
        document.getElementById("result20").value = "Iltimos obyektni kiriting!";
        return;
    }

    let obj;
    try {
        obj = JSON.parse(inp);
    } catch (e) {
        document.getElementById("result20").value = "Iltimos to'g'ri formatda kiriting!";
        return;
    }

    let depth = getDepth(obj);

    document.getElementById("result20").value = depth;
}

document.getElementById("btn20").addEventListener("click", result20);

function clear20() {
    document.getElementById("input20").value = "";
    document.getElementById("result20").value = "";
}

document.getElementById("clear20").addEventListener("click", clear20);

// String bilan ishlash:
// N21:
function isPalindrome(str) {
    str = str.replace(/\s+/g, '').toLowerCase();
    return str === str.split('').reverse().join('');
}

function result21() {
    let inp = document.getElementById("input21").value.trim();

    if (inp === "") {
        document.getElementById("result21").value = "Iltimos so'z yoki jumlani kiriting!";
        return;
    }

    let palindromeCheck = isPalindrome(inp);

    document.getElementById("result21").value = palindromeCheck ? "Bu palindrom." : "Bu palindrom emas.";
}

document.getElementById("btn21").addEventListener("click", result21);

function clear21() {
    document.getElementById("input21").value = "";
    document.getElementById("result21").value = "";
}

document.getElementById("clear21").addEventListener("click", clear21);

// N22:
function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

function result22() {
    let inp = document.getElementById("input22").value.trim();

    if (inp === "") {
        document.getElementById("result22").value = "Iltimos jumla kiriting!";
        return;
    }

    let reversed = reverseWords(inp);

    document.getElementById("result22").value = reversed;
}

document.getElementById("btn22").addEventListener("click", result22);

function clear22() {
    document.getElementById("input22").value = "";
    document.getElementById("result22").value = "";
}

document.getElementById("clear22").addEventListener("click", clear22);

// N23:
function findLongestWord(str) {
    const words = str.split(' ');
    let longestWord = '';

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

function result23() {
    let inp = document.getElementById("input23").value.trim();

    if (inp === "") {
        document.getElementById("result23").value = "Iltimos jumla kiriting!";
        return;
    }

    let longestWord = findLongestWord(inp);

    document.getElementById("result23").value = longestWord;
}

document.getElementById("btn23").addEventListener("click", result23);

function clear23() {
    document.getElementById("input23").value = "";
    document.getElementById("result23").value = "";
}

document.getElementById("clear23").addEventListener("click", clear23);

// N24:
function duplicateCharacter(str, char) {
    return str.split('').map(c => c === char ? c + char : c).join('');
}

function result24() {
    let inp = document.getElementById("input24").value;
    let char = document.getElementById("charToDuplicate").value;

    if (inp === "" || char === "") {
        document.getElementById("result24").value = "Iltimos string va harfni kiriting!";
        return;
    }

    let duplicated = duplicateCharacter(inp, char);

    document.getElementById("result24").value = duplicated;
}

document.getElementById("btn24").addEventListener("click", result24);

function clear24() {
    document.getElementById("input24").value = "";
    document.getElementById("charToDuplicate").value = "";
    document.getElementById("result24").value = "";
}

document.getElementById("clear24").addEventListener("click", clear24);

// N25:
function removeNumbers(str) {
    return str.replace(/[0-9]/g, '');
}

function result25() {
    let inp = document.getElementById("input25").value;

    if (inp === "") {
        document.getElementById("result25").value = "Iltimos stringni kiriting!";
        return;
    }

    let cleanedString = removeNumbers(inp);

    document.getElementById("result25").value = cleanedString;
}

document.getElementById("btn25").addEventListener("click", result25);

function clear25() {
    document.getElementById("input25").value = "";
    document.getElementById("result25").value = "";
}

document.getElementById("clear25").addEventListener("click", clear25);