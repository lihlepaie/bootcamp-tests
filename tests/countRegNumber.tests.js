describe('countRegNumber', function(){


    it('The countRegNumber will split', function(){
        assert.equal(3,countRegNumber('CA 182736, CY 523519, CJ 812328'));
    });
    it('The countRegNumber will split', function(){
        // this test will fail - can you fix it?
        assert.equal(3,countRegNumber('CA 182736, CY 523519, CJ 812328'));
    });
});
