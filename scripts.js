var nameError = document.getElementById("error-name");
var cardNoError = document.getElementById("error-cardNo");
var monthError = document.getElementById("error-month");
var yearError = document.getElementById("error-year");
var cvvError = document.getElementById("error-cvv");
var submitError = document.getElementById("submit-error");

function validateName() {
  var name = document.getElementById("input_cardName").value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = "<p>valid</p>";
  return true;
}

function validateCardNo() {
  var cardNo = document.getElementById("input_cardNumber").value;
  if (cardNo == 0) {
    cardNoError.innerHTML = "Number required";
    return false;
  }
  if (cardNo.length !== 16) {
    cardNoError.innerHTML = "CardNumber should be 16 digits";
    return false;
  }

  if (!cardNo.match(/^[0-9]{16}$/)) {
    cardNoError.innerHTML = "give a valid card digit";
    return false;
  }

  cardNoError.innerHTML = "<p>valid</p>";
  return true;
}

function validateMonth() {
  var month = document.getElementById("input_month").value;
  if (month.length == 0) {
    monthError.innerHTML = "Month is required";
  } else if (month.length !== 0) {
    if (month > 12) {
      monthError.innerHTML = "*month should be below 1-12";
    } else if (month < 1) {
      monthError.innerHTML = "*month cannot be in negeative";
    } else {
      monthError.innerHTML = "<p>Valid</p>";
      return true;
    }
  }
}

function validateYear() {
  var year = document.getElementById("input_year").value;
  if (year.length == 0) {
    yearError.innerHTML = " is required";
  } else if (year.length !== 0) {
    if (year > 22) {
      yearError.innerHTML = "*Year should be below 0-22";
    } else if (year < 1) {
      yearError.innerHTML = "*Year cannot be in negeative or zero";
    } else {
      yearError.innerHTML = "<p>Valid</p>";
      return true;
    }
  }
}

function validateCvv() {
  var cvv = document.getElementById("input_cvv").value;
  if (cvv.length == 0) {
    cvvError.innerHTML = "cvv is required";
    return false;
  }

  if (!cvv.match(/^[0-9]{3}$/)) {
    cvvError.innerHTML = "cvv is not correct";
    return false;
  }
  cvvError.innerHTML = "<p>valid</p>";
  return true;
}
