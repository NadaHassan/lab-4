function cToF(celsius)
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'degrees C is ' + cToFahr + ' degrees F.';
    console.log(message);
}

function fToC(fahrenheit)
{  
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'degreesF is ' + fToCel + 'degreesC.';
    console.log(message);
}
