function getTicketPrice(age) {
    if (age <= 12) {
        return "$10";
    } else if (age >= 13 && age <= 17) {
        return "$15";
    } else if (age >= 18) {
        return "$20";
    } else {
        return "Invalid age";
    }
}


const age = prompt("Enter your age:");


const price = getTicketPrice(Number(age));


alert("The ticket price is: " + price);
////////////////////////////////////////////////////////////////////////

function getClothingAdvice(temperature, isRaining) {
    if (isRaining) {
        return "It's raining, so make sure to wear a waterproof jacket and bring an umbrella.";
    }
    
    if (temperature <= 19) {
        return "It's quite cold. Wear a warm coat, hat, and gloves.";
    } else if (temperature <= 26) {
        return "The weather is cool. A light jacket or sweater should be enough.";
    } else {
        return "It's warm. Wear comfortable and light clothing.";
    }
}

const temperature = prompt("Enter the current temperature:");
const isRainingInput = prompt("Is it raining? (yes/no)");
const isRaining = isRainingInput.toLowerCase() === 'yes';
const clothingAdvice = getClothingAdvice(Number(temperature), isRaining);
alert(clothingAdvice);

/////////////////////////////////////////////////////////////////////////////
function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
const n = prompt("Enter the position (n) in the Fibonacci sequence:");

    const result = fibonacci(n);
    alert("The Fibonacci number at position " + n + " is: " + result);

/////////////////////////////////////////////////////
function power(base, exponent) {
    if (exponent === 0) {
        return 1; 
    } 
    else {
        return base * power(base, exponent - 1);
    }
}


const base = prompt("Enter the base:");
const exponent =prompt("Enter the exponent:");
   
const result1 = power(base, exponent);
alert(`${base} raised to the power of ${exponent} is: ${result1}`);

