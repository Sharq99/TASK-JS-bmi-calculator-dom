function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  const heightInMeter = height / 100;
  let BMI = (weight / heightInMeter ^ 2);
  

  if(BMI < 18.5){
    alert("You are Underweight");
  }
  else if(BMI >= 18.5 && BMI <= 24.9){
    alert("You're Healthy weight");
  }
  else if(BMI >= 25 && BMI <= 29.9){
    alert("You are Overweight");
  }
  else{
    alert("You're Obese");
  }


  if(age >= 19 && age <= 24){
    if(BMI < 18.5){
      alert("Based on Your age You are Underweight");
    }
    else if(BMI >= 19 && BMI <= 24.9){
      alert("Based on Your age You're Normal weight");
    }
    else if(BMI >= 25 && BMI <= 29.9){
      alert("Based on Your age You are Overweight");
    }
    else{
      alert("Based on Your age You're Obese");
    }
  }
  else if(age >= 25 && age <= 34){
    if(BMI < 20){
      alert("Based on Your age You are Underweight");
    }
    else if(BMI >= 20 && BMI <= 25.9){
      alert("Based on Your age You're Normal weight");
    }
    else if(BMI >= 26 && BMI <= 29.9){
      alert("Based on Your age You are Overweight");
    }
    else{
      alert("Based on Your age You're Obese");
    }
  }
  else if(age >= 35 && age <= 44){
    if(BMI < 21){
      alert("Based on Your age You are Underweight");
    }
    else if(BMI >= 21 && BMI <= 26.9){
      alert("Based on Your age You're Normal weight");
    }
    else if(BMI >= 27 && BMI <= 29.9){
      alert("Based on Your age You are Overweight");
    }
    else{
      alert("Based on Your age You're Obese");
    }
  }
  else if(age >= 45 && age <= 54){
    if(BMI < 22){
      alert("Based on Your age You are Underweight");
    }
    else if(BMI >= 22 && BMI <= 27.9){
      alert("Based on Your age You're Normal weight");
    }
    else if(BMI >= 28 && BMI <= 29.9){
      alert("Based on Your age You are Overweight");
    }
    else{
      alert("Based on Your age You're Obese");
    }
  }
  else if(age >= 55 && age <= 64){
    if(BMI < 23){
      alert("Based on Your age You are Underweight");
    }
    else if(BMI >= 23 && BMI <= 28.9){
      alert("Based on Your age You're Normal weight");
    }
    else if(BMI >= 29 && BMI <= 29.9){
      alert("Based on Your age You are Overweight");
    }
    else{
      alert("Based on Your age You're Obese");
    }
  }
  else{
    if(BMI < 19){
      alert("Based on Your age You are Underweight");
    }
    else if(BMI >= 19 && BMI <= 23.9){
      alert("Based on Your age You're Healthy weight");
    }
    else if(BMI >= 24 && BMI <= 29.9){
      alert("Based on Your age You're Normal weight");
    }
    else{
      alert("Based on Your age You're Obese");
    }
  }

}
