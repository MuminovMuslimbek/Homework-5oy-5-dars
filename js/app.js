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

// Majburiy masalalar:
// N1:
function resultMandatory1() {
    let input1 = document.getElementById("inputNumMandatory1").value.trim();
    if (input1 == "") {
        document.getElementById("resultMandatory1").value = "Iltimos ismingizni qayta kiriting!"
        return
    }
    let everyWords = input1.split(" ")
    let result = everyWords.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
    document.getElementById("resultMandatory1").value = result
}
document.getElementById("btn1Mandatory").addEventListener("click", resultMandatory1)

function clearFildesNum1() {
    document.getElementById("inputNumMandatory1").value = ""
    document.getElementById("resultMandatory1").value = ""
}
document.getElementById("clear1").addEventListener("click", clearFildesNum1)

// N2:
function resultMandatory2() {
    let input2 = document.getElementById("inputNumMandatory2").value.trim()
    if (input2 == "") {
        document.getElementById("resultMandatory2").value = "Iltimos qiymatingizni qayta kiriting!"
        return
    }
    let result = input2.split("").reverse().join("")
    document.getElementById("resultMandatory2").value = result
}
document.getElementById("btn2Mandatory").addEventListener("click", resultMandatory2)

function clearFildesNum2() {
    document.getElementById("inputNumMandatory2").value = ""
    document.getElementById("resultMandatory2").value = ""
}
document.getElementById("clear2").addEventListener("click", clearFildesNum2)

// N3:
function resultMandatory3() {
    let input = document.getElementById("inputNumMandatory3").value.trim();
    if (input == "" || isNaN(input.split(",").join(''))) {
        document.getElementById("resultMandatory3").value = "Iltimos sonlarni qayta kiriting!";
        return;
    }
    let numbers = input.split(",").map(Number)
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    let result = sum / numbers.length;
    document.getElementById("resultMandatory3").value = result
}
document.getElementById("btn3Mandatory").addEventListener("click", resultMandatory3)

function clearFildesNum3() {
    document.getElementById("inputNumMandatory3").value = ""
    document.getElementById("resultMandatory3").value = ""
}
document.getElementById("clear3").addEventListener("click", clearFildesNum3)

// N4:
function resultMandatory4() {
    let input = document.getElementById("inputNumMandatory4").value
    if (input == "") {
        document.getElementById("resultMandatory4").value = "Iltimos so'larni qayta kiriting!"
        return
    }
    let value = input.split(",")
    let sum = []
    for (let i = 0; i < value.length; i++) {
        sum.push(value[i].length)
    }
    let result = sum.join(",")
    document.getElementById("resultMandatory4").value = result

}
document.getElementById("btn4Mandatory").addEventListener("click", resultMandatory4)

function clearFildesNum4() {
    document.getElementById("inputNumMandatory4").value = ""
    document.getElementById("resultMandatory4").value = ""
}
document.getElementById("clear4").addEventListener("click", clearFildesNum4)

// N5:
function resultMandatory5() {
    let input = document.getElementById("inputNumMandatory5").value
    if (input == "" || isNaN(input.split(",").join(""))) {
        document.getElementById("resultMandatory5").value = "Iltimos sonlarni qayta kiriting!"
        return
    }
    let numbers = input.split(",").map(Number)
    let sum = 0
    let result1 = numbers.filter(function(e) {
        let num = e % 2 == 1
        return num += sum
    })
    let result2 = result1.join(",")
    document.getElementById("resultMandatory5").value = result2
}
document.getElementById("btn5Mandatory").addEventListener("click", resultMandatory5)

function clearFildesNum5() {
    document.getElementById("inputNumMandatory5").value = ""
    document.getElementById("resultMandatory5").value = ""
}
document.getElementById("clear5").addEventListener("click", clearFildesNum5)

// N6:
function resultMandatory6() {
    let input1 = document.getElementById("inputNumMandatory6$1").value.trim();
    let input2 = document.getElementById("inputNumMandatory6$2").value.trim();

    if (input1 == "" || input2 == "") {
        document.getElementById("resultMandatory6").value = "Iltimos qiymatlarni qayta kiriting!"
        return
    }
    let [name, lastname] = input1.split(",");
    let [age, year] = input2.split(",");

    let result = {
        name: name || "Noma'lum",
        lastname: lastname || "Noma'lum",
        age: age || "Noma'lum",
        year: year || "Noma'lum"
    };

    document.getElementById("resultMandatory6").value =
        `name: ${result.name}, lastname: ${result.lastname}, age: ${result.age}, year: ${result.year}`;
}

document.getElementById("btn6Mandatory").addEventListener("click", resultMandatory6);

function clearFildesNum6() {
    document.getElementById("inputNumMandatory6$1").value = "";
    document.getElementById("inputNumMandatory6$2").value = "";
    document.getElementById("resultMandatory6").value = "";
}

document.getElementById("clear6").addEventListener("click", clearFildesNum6);

// N7:
function resultMandatory7() {
    let input = document.getElementById("inputNumMandatory7").value
    if (input == "") {
        document.getElementById("resultMandatory7").value = "Iltimos qiymatni qayta kiriting!"
        return
    }
    let result = input.split(",").map(e => e.trim()).join(", ")
    document.getElementById("resultMandatory7").value = result

}
document.getElementById("btn7Mandatory").addEventListener("click", resultMandatory7)

function clearFildesNum7() {
    document.getElementById("inputNumMandatory7").value = ""
    document.getElementById("resultMandatory7").value = ""
}
document.getElementById("clear7").addEventListener("click", clearFildesNum7)

// N8:
function resultMandatory8() {
    let input1 = document.getElementById("inputNumMandatory8$1").value.trim();
    let input2 = document.getElementById("inputNumMandatory8$2").value.trim();
    if (input1 == "" || input2 == "") {
        document.getElementById("resultMandatory8").value = "Iltimos qiymatlarni qayta kiriting!"
        return
    }
    let [name, lastname] = input1.split(",");
    let [age, year] = input2.split(",");

    let object = {
        name: name || "Noma'lum",
        lastname: lastname || "Noma'lum",
        age: age || "Noma'lum",
        year: year || "Noma'lum"
    };
    let result = Object.values(object).join(", ")

    document.getElementById("resultMandatory8").value = result;
}

document.getElementById("btn8Mandatory").addEventListener("click", resultMandatory8);

function clearFildesNum8() {
    document.getElementById("inputNumMandatory8$1").value = "";
    document.getElementById("inputNumMandatory8$2").value = "";
    document.getElementById("resultMandatory8").value = "";
}

document.getElementById("clear8").addEventListener("click", clearFildesNum8);

// N9:
function resultMandatory9() {
    let input = document.getElementById("inputNumMandatory9").value.trim();

    if (input == "" || isNaN(input.split(",").join(""))) {
        document.getElementById("resultMandatory9").value = "Iltimos sonlarni qayta kiriting!";
        return;
    }

    let numbers = input.split(",").map(Number);

    let smallest = numbers[0];
    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    let result = {
        min: smallest,
        max: largest
    };

    document.getElementById("resultMandatory9").value = `Min:${result.min}, Max:${result.max}`;
}

document.getElementById("btn9Mandatory").addEventListener("click", resultMandatory9);

function clearFildesNum9() {
    document.getElementById("inputNumMandatory9").value = "";
    document.getElementById("resultMandatory9").value = "";
}

document.getElementById("clear9").addEventListener("click", clearFildesNum9);

// N10:
function resultMandatory10() {
    let input = document.getElementById("inputNumMandatory10").value.trim();

    if (input == "") {
        document.getElementById("resultMandatory10").value = "Iltimos qiymatni qayta kiriting!";
        return;
    }
    let vowel = "aeuioAEIOU"
    let count = 0
    for (const arr of input) {
        if (vowel.includes(arr)) {
            count++
        }
    }

    document.getElementById("resultMandatory10").value = `Unli harflar soni:${count}`;
}

document.getElementById("btn10Mandatory").addEventListener("click", resultMandatory10);

function clearFildesNum10() {
    document.getElementById("inputNumMandatory10").value = "";
    document.getElementById("resultMandatory10").value = "";
}

document.getElementById("clear10").addEventListener("click", clearFildesNum10);

// N11:
function resultMandatory11() {
    let input = document.getElementById("inputNumMandatory11").value.trim();
    if (input == "" || isNaN(input.split(",").join(''))) {
        document.getElementById("resultMandatory11").value = "Iltimos sonlarni qayta kiriting!";
        return;
    }
    let numbers = input.split(",").map(Number)
    let result = numbers.map(num => num + 2).join(",")
    document.getElementById("resultMandatory11").value = result
}
document.getElementById("btn11Mandatory").addEventListener("click", resultMandatory11)

function clearFildesNum11() {
    document.getElementById("inputNumMandatory11").value = ""
    document.getElementById("resultMandatory11").value = ""
}
document.getElementById("clear11").addEventListener("click", clearFildesNum11)

// N12:
function resultMandatory12() {
    let input = document.getElementById("inputNumMandatory12").value.trim();

    if (input === "") {
        document.getElementById("resultMandatory12").value = "Iltimos qiymatni qayta kiriting!";
        return;
    }

    let words = input.split(",");
    let longestWord = "";
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    document.getElementById("resultMandatory12").value = longestWord;
}

document.getElementById("btn12Mandatory").addEventListener("click", resultMandatory12);

function clearFildesNum12() {
    document.getElementById("inputNumMandatory12").value = "";
    document.getElementById("resultMandatory12").value = "";
}

document.getElementById("clear12").addEventListener("click", clearFildesNum12);

// N13:
function resultMandatory13() {
    let input = document.getElementById("inputNumMandatory13").value.trim();

    if (input == "") {
        document.getElementById("resultMandatory13").value = "Iltimos raqamlarni qayta kiriting!";
        return;
    }
    let numbers = input.split(",").map(num => parseFloat(num.trim()));
    let sum = 0;
    let count = numbers.length;
    for (let number of numbers) {
        sum += number;
    }
    let average = sum / count;
    let result = numbers.filter(number => number > average);
    document.getElementById("resultMandatory13").value = result.join(", ");
}

document.getElementById("btn13Mandatory").addEventListener("click", resultMandatory13);

function clearFildesNum13() {
    document.getElementById("inputNumMandatory13").value = "";
    document.getElementById("resultMandatory13").value = "";
}

document.getElementById("clear13").addEventListener("click", clearFildesNum13);

// N14:
function resultMandatory14() {
    let input = document.getElementById("inputNumMandatory14").value.trim();

    if (input == "") {
        document.getElementById("resultMandatory14").value = "Iltimos raqamlarni qayta kiriting!";
        return;
    }
    let value = input.split(" ").map(arr => arr.slice(1, -2))
    let result = value.join(" ")
    document.getElementById("resultMandatory14").value = result;
}

document.getElementById("btn14Mandatory").addEventListener("click", resultMandatory14);

function clearFildesNum14() {
    document.getElementById("inputNumMandatory14").value = "";
    document.getElementById("resultMandatory14").value = "";
}

document.getElementById("clear14").addEventListener("click", clearFildesNum14);

// N15:
function resultMandatory15() {
    let input = document.getElementById("inputNumMandatory15").value.trim();

    if (input == "" || isNaN(input.split(",").join(''))) {
        document.getElementById("resultMandatory15").value = "Iltimos raqamlarni qayta kiriting!";
        return;
    }
    let numbers = input.split(",").map(num => parseFloat(num.trim() * 2))
    let count = 0
    for (const arr of numbers) {
        count += arr
    }
    let result = count
    document.getElementById("resultMandatory15").value = result;
}

document.getElementById("btn15Mandatory").addEventListener("click", resultMandatory15);

function clearFildesNum15() {
    document.getElementById("inputNumMandatory15").value = "";
    document.getElementById("resultMandatory15").value = "";
}

document.getElementById("clear15").addEventListener("click", clearFildesNum15);

// N16:
function resultMandatory16() {
    let input = document.getElementById("inputNumMandatory16").value.trim();

    if (input == "") {
        document.getElementById("resultMandatory16").value = "Iltimos raqamlarni qayta kiriting!";
        return;
    }
    let result = input.split(",").reverse()
    document.getElementById("resultMandatory16").value = result;
}

document.getElementById("btn16Mandatory").addEventListener("click", resultMandatory16);

function clearFildesNum16() {
    document.getElementById("inputNumMandatory16").value = "";
    document.getElementById("resultMandatory16").value = "";
}

document.getElementById("clear16").addEventListener("click", clearFildesNum16);

// N17:
function resultMandatory17() {
    let input = document.getElementById("inputNumMandatory17").value.trim();

    if (input == "") {
        document.getElementById("resultMandatory17").value = "Iltimos raqamlarni qayta kiriting!";
        return;
    }
    let result = input.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    document.getElementById("resultMandatory17").value = result;
}

document.getElementById("btn17Mandatory").addEventListener("click", resultMandatory17);

function clearFildesNum17() {
    document.getElementById("inputNumMandatory17").value = "";
    document.getElementById("resultMandatory17").value = "";
}

document.getElementById("clear17").addEventListener("click", clearFildesNum17);

// N18:
function resultMandatory18() {
    let input = document.getElementById("inputNumMandatory18").value.trim();

    if (input === "" || isNaN(input.split(",").join(''))) {
        document.getElementById("resultMandatory18").value = "Iltimos, yoshlarni qayta kiriting!";
        return;
    }
    let ageArray = input.split(",").map(age => parseInt(age.trim())).filter(Number.isFinite);
    let ageObjects = ageArray.map(age => ({ age }));
    let result = ageObjects.filter(obj => obj.age >= 18);

    document.getElementById("resultMandatory18").value =
        result.length > 0 ?
        `18 yoshdan katta yoshlar: ${result.map(obj => obj.age).join(", ")}` :
        "18 yoshdan katta kiritilgan yosh yo'q.";
}

document.getElementById("btn18Mandatory").addEventListener("click", resultMandatory18);

function clearFildesNum18() {
    document.getElementById("inputNumMandatory18").value = "";
    document.getElementById("resultMandatory18").value = "";
}

document.getElementById("clear18").addEventListener("click", clearFildesNum18);

// N19:
function resultMandatory19() {
    let input1 = document.getElementById("inputNumMandatory19$1").value.trim().toLowerCase();
    let input2 = document.getElementById("inputNumMandatory19$2").value.trim();
    if (input1 == "") {
        document.getElementById("resultMandatory19").value = "Iltimos qiymatni qayta kiriting!";
        return;
    }
    if (input2 == "") {
        document.getElementById("resultMandatory19").value = "Iltimos ko'p martda qaytarilgan elementni kiritishingizni so`raymiz!"
        return;
    }
    let input2Ar = input2.split(" ")
    let count = input1.split("").filter(el => input2Ar.includes(el)).length
    let result = count
    document.getElementById("resultMandatory19").value = result;
}

document.getElementById("btn19Mandatory").addEventListener("click", resultMandatory19);

function clearFildesNum19() {
    document.getElementById("inputNumMandatory19$1").value = "";
    document.getElementById("inputNumMandatory19$2").value = "";
    document.getElementById("resultMandatory19").value = "";
}

document.getElementById("clear19").addEventListener("click", clearFildesNum19);

// N20:
function resultMandatory20() {
    let input1 = document.getElementById("inputNumMandatory20$1").value.trim().toLowerCase().split("");
    let input2 = document.getElementById("inputNumMandatory20$2").value.trim().toLowerCase().split("");
    if (input1 == "" || input2 == "") {
        document.getElementById("resultMandatory20").value = "Iltimos qiymatlarni qayta kiriting!";
        return;
    }
    let count = input1.filter(el => input2.includes(el))
    let result = count.join("")
    document.getElementById("resultMandatory20").value = result;
}

document.getElementById("btn20Mandatory").addEventListener("click", resultMandatory20);

function clearFildesNum20() {
    document.getElementById("inputNumMandatory20$1").value = "";
    document.getElementById("inputNumMandatory20$2").value = "";
    document.getElementById("resultMandatory20").value = "";
}

document.getElementById("clear20").addEventListener("click", clearFildesNum20);

// Ixtiyoriy masalalar:
// Ushbu masalalarni bajarish ixtiyoriy. (ixtiyoriy ishlansa ball qoshib beriladi - 15 ball)     ekan :)
// N1:
function resultOptional1() {
    let input = document.getElementById("inputNumOptional1").value.trim().toLowerCase().split("");
    if (input == "") {
        document.getElementById("resultOptional1").value = "Iltimos qiymatlarni qayta kiriting!";
        return;
    }
    let value = {}
    let count = 0
    let mostMeetEl = ''
    for (const el of input) {
        value[el] = (value[el] || 0) + 1
        if (value[el] > count) {
            count = value[el]
            mostMeetEl = el
        }
    }
    document.getElementById("resultOptional1").value = `Eng ko'p uchragan harf: '${mostMeetEl}' (${count} marta)`;
}

document.getElementById("btn1Optional").addEventListener("click", resultOptional1);

function clearFildesNum1Optional() {
    document.getElementById("inputNumOptional1").value = "";
    document.getElementById("resultOptional1").value = "";
}

document.getElementById("clear1Optional").addEventListener("click", clearFildesNum1Optional);

// N2:
function resultOptional2() {
    let input1 = document.getElementById("inputNumOptional2$1").value.trim().toLowerCase().split("");
    let input2 = document.getElementById("inputNumOptional2$2").value.trim().toLowerCase().split("");
    if (input1 == "" || input2 == "") {
        document.getElementById("resultOptional2").value = "Iltimos qiymatlarni qayta kiriting!";
        return;
    }
    let value = input1.filter(el => input2.includes(el))
    let result = value.length > 0 ? value : "O'xshash element topilmadi!"
    document.getElementById("resultOptional2").value = result;
}
document.getElementById("btn2Optional").addEventListener("click", resultOptional2);

function clearFildesNum2Optional() {
    document.getElementById("inputNumOptional2$1").value = "";
    document.getElementById("inputNumOptional2$2").value = "";
    document.getElementById("resultOptional2").value = "";
}

document.getElementById("clear2Optional").addEventListener("click", clearFildesNum2Optional);

// N3:
function resultOptional3() {
    let input = document.getElementById("inputNumOptional3").value.trim();

    if (input == "") {
        document.getElementById("resultOptional3").value = "Iltimos, qiymatni qayta kiriting!";
        return;
    }

    let value = input.split(";").map(item => {
        let [name, age] = item.trim().split(",");
        return { name: name.trim(), age: Number(age.trim()) };
    });

    let sortValue = value.sort((a, b) => a.age - b.age);
    let result = sortValue.map(student => `${student.name}, ${student.age}`).join("; ");

    document.getElementById("resultOptional3").value = result;
}

document.getElementById("btn3Optional").addEventListener("click", resultOptional3);

function clearFildesNum3Optional() {
    document.getElementById("inputNumOptional3").value = "";
    document.getElementById("resultOptional3").value = "";
}

document.getElementById("clear3Optional").addEventListener("click", clearFildesNum3Optional);

// N4:
function resultOptional4() {
    let input = document.getElementById("inputNumOptional4").value.trim();
    if (input === "") {
        document.getElementById("resultOptional4").innerText = "Iltimos, qiymatlarni kiriting!";
        return;
    }

    let inputObj = {};
    let pairs = input.split(",");
    for (let pair of pairs) {
        let [key, value] = pair.split(":").map(el => el.trim());
        inputObj[key] = isNaN(value) ? value : Number(value);
    }

    let newObj = {};
    for (let key in inputObj) {
        newObj[key] = typeof inputObj[key] === "number" ? inputObj[key] * 2 : inputObj[key];
    }

    document.getElementById("resultOptional4").innerText = JSON.stringify(newObj, null, 2);
}

document.getElementById("btn4Optional").addEventListener("click", resultOptional4);

function clearFields4Optional() {
    document.getElementById("inputNumOptional4").value = "";
    document.getElementById("resultOptional4").innerText = "";
}

document.getElementById("clear4Optional").addEventListener("click", clearFields4Optional);

// N5:
function resultOptional5() {
    let input = document.getElementById("inputNumOptional5").value.trim();
    if (input == "") {
        document.getElementById("resultOptional5").value = "Iltimos, qiymatni qayta kiriting!";
        return;
    }

    let numbers = input.split(",").map(item => Number(item.trim()));
    let value = [];
    let count = 0;

    for (let num of numbers) {
        if (!value.includes(num)) {
            value.push(num);
            count += num;
        }
    }

    document.getElementById("resultOptional5").value = `Yig'indi: ${count}`;
}

document.getElementById("btn5Optional").addEventListener("click", resultOptional5);

function clearFildesNum5Optional() {
    document.getElementById("inputNumOptional5").value = "";
    document.getElementById("resultOptional5").value = "";
}

document.getElementById("clear5Optional").addEventListener("click", clearFildesNum5Optional);