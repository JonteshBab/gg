document.getElementById('bmrForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const age = parseInt(document.getElementById('age').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const gender = document.getElementById('gender').value;

  let bmr;

  // BMR calculation using Mifflin-St Jeor Equation
  if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  document.getElementById('result').innerText = `Your BMR is ${bmr.toFixed(2)} calories/day.`;
});

