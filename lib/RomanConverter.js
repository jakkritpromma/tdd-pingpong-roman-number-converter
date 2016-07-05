function RomanConvertor() {
}
RomanConvertor.prototype.convertToRoman = function (decimal) {
  if(decimal==1){
    return "I";
  }
  else if(decimal==2){
    return "II";
  }
}

module.exports = RomanConvertor;