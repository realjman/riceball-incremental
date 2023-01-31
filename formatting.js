function format(number) {
  let exponent = Math.floor(Math.log10(number))
	let mantissa = number / Math.pow(10, exponent)
	if (exponent < 3) return number.toFixed(1)
  return mantissa.toFixed(2) + "e" + exponent
}
