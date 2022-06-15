window.onload = () => {
  let button = document.querySelector("#btn");

  button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
  let height = parseInt(document.querySelector("#height").value);

  let weight = parseInt(document.querySelector("#weight").value);

  let result = document.querySelector("#result");

  if (height === "" || isNaN(height))
    result.innerHTML = "Provide a valid Height!";
  else if (weight === "" || isNaN(weight))
    result.innerHTML = "Provide a valid Weight!";
  else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) result.innerHTML = `Under Weight : <span>${bmi}</span>`;
    else if (bmi >= 18.6 && bmi < 24.9)
      result.innerHTML = `Normal : <span>${bmi}</span>`;
    else result.innerHTML = `Over Weight : <span>${bmi}</span>`;
  }
}
// function calculate() {
//   weight = document.getElementById("weight").value;
//   height = document.getElementById("height").value;
//   error = "Please enter some values";
//   height /= 100;
//   height *= height;
//   bmi = weight / height;
//   bmi = bmi.valueOf(1).toFixed(2);
//   if (bmi <= 18.4) {
//     measure = "Your BMI is " + bmi + " Which means " + "You are Underweight";
//   } else if (bmi >= 18.5 && bmi <= 24.9) {
//     measure = "Your BMI is " + bmi + " Which means " + "You are  Normal";
//   } else if (bmi >= 25 && bmi <= 29.9) {
//     measure = "Your BMI is " + bmi + " Which means " + "You are Overweight";
//   } else if (bmi >= 30) {
//     measure = "Your BMI is " + bmi + " Which means " + "You are Obese";
//   }
//   if (weight === 0) {
//     document.getElementById("results").innerHTML = error;
//   } else if (height === 0) {
//     document.getElementById("results").innerHTML = error;
//   } else {
//     document.getElementById("results").innerHTML = measure;
//   }
//   if (weight < 0) {
//     document.getElementById("results").innerHTML =
//       "Negative Values not Allowed";
//   }
// }
