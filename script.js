const input = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[\W_]/g, "");
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}

checkButton.addEventListener("click", function () {
  const inputValue = input.value.trim();

  if (input.value === "") {
    alert("Please input a value");
    return;
  }

  let resultMsg = `<strong>${inputValue}</strong> ${isPalindrome(inputValue) ? "is" : "is not"} a palindrome.`;
    result.classList.remove("hidden");
    result.innerHTML = `<p class ="user-input">${resultMsg}</p>`;
    input.value = "";
});