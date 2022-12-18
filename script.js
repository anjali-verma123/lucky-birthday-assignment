var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkNumber = document.querySelector("#check-button");
var finalMsg = document.querySelector("#final-msg");

checkNumber.addEventListener("click", luckydob);

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    finalMsg.innerText = "🥳🎉🌸Your Birthday is Lucky!!!🥳🎉🌸";
    finalMsg.style.color = 'blue';
    finalMsg.style.fontSize = 'larger';
  } else {
    finalMsg.innerText = "😥😥Your Birthday is not Lucky😓😓";
    finalMsg.style.color = 'red';
    finalMsg.style.fontSize = 'larger';
  }
  if (luckyNumber <= 0) {
    finalMsg.innerText = "Please select lucky number greater than zero";
    finalMsg.style.color = 'red';
  }
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i <= dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}


function luckydob() {
  var dob = dateOfBirth.value;
  var sum = calculateSum(dob);
  if (sum && dob) {
    compareValues(sum, luckyNumber.value);
  } else {
    finalMsg.innerText = "Please fill both the fields";
  }

}

