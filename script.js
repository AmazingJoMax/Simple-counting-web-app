let num = 0
let count = document.getElementById("num")
let text = document.getElementById("save-entries")
function Increment() {
num += 1   
count.textContent = num
}

function save() {
let countStr = num + " | "
text.textContent += countStr
count.textContent = 0
num = 0
}
