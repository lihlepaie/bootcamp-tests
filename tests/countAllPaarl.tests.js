describe('countAllPaarl', function(){


    it('should return countAllPaarl',function(){
        assert.equal(1,countAllPaarl('CJ 2345,Cj 22'));
    });
    it('should return countAllPaarl', function(){
        // this test will fail - can you fix it?
        assert.equal(1,countAllPaarl('CJ 2345,CJ 22'));
    });
});
