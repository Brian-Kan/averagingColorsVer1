// Minimal Viable Product (MVP)

// REQUIREMENT
// Write a function that takes 2 colors as arguments and returns the average color.
// - The parameters will be two 6-digit hexadecimal strings. This does not need to be validated.
// - The return value should be a 6-digit hexadecimal string.
// - The hexadecimal strings represent colors in RGB, much like in CSS.
// - The average color is to be determined by taking the arithmetic mean for each component: red, green and blue.*

// THOUGHT PROCESS
// - Function 1: Takes hex colors and converts it from a string to a number.
// -- It'll take 2 colors and therefore spits out 2 numbers.

// - Function 2: Takes these numbers and calculate the average.

// - Function 3: Re-convert them back to a hexadecimal.
// -- It'll also post it to the DOM.

// STRETCH GOALS
// - Have the color selection be a bit more interactive.


$(function (){
    // =============================================
    // MVP
    // =============================================
        
        // =============================================
        // FUNCTION 1 - Take 2 hex colors and converts them to an integer.
        // =============================================
    
        const convertToIntegers = (color) => {
            // parseInt() takes has 2 parameters.  The first is the string it converts, the second, known as radix, is the base counting system.
            // Hexedecimals use a base 16 counting system.
            // So here I used parseInt with a radix 16.
            const colorConversion = parseInt(color, 16)              
            return colorConversion
        }
        
        // =============================================
        // FUNCTION 2 - Take these numbers and calculate the average.
        // =============================================
    
        const averageCalculation = (num1, num2) => {
            // The converted hexedecimal numbers are process through this simple average calculation.
            const average = (num1 + num2) / 2
            const roundedAverage = Math.round(average)
            return roundedAverage
        }
        
        // =============================================
        // FUNCTION 3 - Re-convert the answer back into a hexadecimal.
        // =============================================
        
        const convertToHexadecimal = (integer) => {
            const numberConvertor = integer.toString(16)
            return numberConvertor
        }
    
    // =============================================
    // STRETCH GOALS
    // =============================================
    
        // =============================================
        // FUNCTION 4 - Stretch goal - getting the input from the group and running it through the function.
        // =============================================
        
        $('form').on("submit", function(e){
            e.preventDefault();        
    
            // Getting the values
            const firstInputValue = $('input[name="group1"]:checked').val()
            const secondInputValue = $('input[name="group2"]:checked').val()
    
            // Combining Functions 3 and 4 starting by converting the input to integers.
            const color1 = convertToIntegers(firstInputValue)
            const color2 = convertToIntegers(secondInputValue)
    
            // Keeping things neat and structured.  Here I am assigning a variable to the average.
            const color1Color2Average = (averageCalculation(color1, color2))
    
            // And here I am assigning the converted average to a variable.
            const averageToHex = convertToHexadecimal(color1Color2Average)
    
            const addOctothorpe = "#".concat(averageToHex)
            
            $('.results').empty()
            setTimeout($('.results').append("#",averageToHex), 1000)
    
            document.body.style.backgroundColor = addOctothorpe
    
        })   
    
    })
    