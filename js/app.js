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

FilterBtn.addEventListener('click', function(e) {
    e.preventDefault();

    h2ElementEror.style.display = 'none';
    body_title.style.display = 'flex';

    const min = FilterInput1.value.trim();
    const max = FilterInput2.value.trim();

    if (min === "" && max === "") {
        cards.forEach(card => {
            card.style.display = 'flex';
        });
        return;
    }

    let hasVisibleCards = false;

    cards.forEach(card => {
        const h3Text = card.querySelector('h3').textContent;
        const numberMatch = h3Text.match(/\d+/);
        const number = numberMatch ? parseInt(numberMatch[0]) : null;

        if ((number >= (min ? parseInt(min) : -Infinity)) && (number <= (max ? parseInt(max) : Infinity))) {
            card.style.display = 'flex';
            hasVisibleCards = true;
        } else {
            card.style.display = 'none';
        }
    });

    if (!hasVisibleCards) {
        h2ElementEror.style.display = 'flex';
        body_title.style.display = 'none';
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