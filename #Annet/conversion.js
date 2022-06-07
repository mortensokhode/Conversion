/*   Intet å melde her riktig ennå  */
let idLength = document.getElementById("id-length")
let idVolume = document.getElementById("id-volume")
let idMass = document.getElementById("id-mass")

let errorMsg = document.getElementById("errMsg")
let conversionBase = document.getElementById("convertNumber")

let input = document.querySelector('input') // Listen to input-element
let iValueConversionBase = 0

//  Politically decided allowable range of numbers for conversion..
const iConversionMin = 0
const iConversionMax = 9999

// Conversionfactors of various kind
const cMeter2feetFactor = 3.2809
const cFeet2meterFactor = 0.3048
const cLitre2galFactor = 0.2200
const cGal2litreFactor = 4.5459
const cKg2lbFactor = 2.2046
const cLb2kgFactor = 0.45359237

const iDebugFlag = parseInt(document.getElementById("debugFlag").textContent)

// Faktor for avrunding til 3 desimaler
const iRoundFactor = 1000

input.onblur = inputBlur
input.onfocus = inputFocus

console.log("iDebugFlag: " + iDebugFlag)


function inputBlur() {
    iValueConversionBase = parseInt(conversionBase.value)
    printLog("iConversionMin", iConversionMin)
    printLog("iConversionMax", iConversionMax)
    printLog("conversionBase.value", conversionBase.value)


    if ((iConversionMin < iValueConversionBase) && (iConversionMax >= iValueConversionBase)) {
        runConversion()
            } else {
    errorMsg.innerText = 'Number is not within range - try again.'
    }
}

function inputFocus() {
    errorMsg.innerText = ''
    conversionBase.value = ''
}

function runConversion() {

    printLog("iValueConversionBase=",iValueConversionBase)
    printConversionData(iValueConversionBase," meters ", cMeter2feetFactor, " feet ", cFeet2meterFactor, idLength)
    printConversionData(iValueConversionBase," litres ", cLitre2galFactor, " gallons ", cGal2litreFactor, idVolume)
    printConversionData(iValueConversionBase," kilograms ", cKg2lbFactor, " pounds ", cLb2kgFactor, idMass)
}


function printConversionData(baseValue, conversionText01, conversionFactor01, conversionText02, conversionFactor02, elementHTML) {
    
    elementHTML.textContent = baseValue + conversionText01 + "= " + convertValue(baseValue, conversionFactor01) + conversionText02 + "| " + baseValue + conversionText02 + convertValue(baseValue, conversionFactor02) + conversionText01
  
}
    
    function convertValue(baseValue, conversionFactor) {
        return (Math.round((baseValue * conversionFactor)*iRoundFactor)/iRoundFactor)
    }
    
    function printLog(leadText, valueOfInterest) {
        if (iDebugFlag===1) {
            console.log(leadText + ":  ", valueOfInterest)
        }   

    }

