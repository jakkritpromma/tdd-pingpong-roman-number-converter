describe("RomanConverter", function () {
    var RomanConvertor = require('../lib/RomanConverter');
    var romanConvertor = new RomanConvertor();
    var result;

    beforeEach(function () {
        result = undefined;
    });


    it("When number is 1 result should be I", function () {
        result = romanConvertor.convertToRoman(1)
        expect(result).toEqual("I");
    });

    it("When number is 2 result should be II", function () {
        result = romanConvertor.convertToRoman(2)
        expect(result).toEqual("II");
    });
    
    it("When number is 3 result should be III", function () {
        result = romanConvertor.convertToRoman(2)
        expect(result).toEqual("III");
    });

})