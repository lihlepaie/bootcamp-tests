describe('fromWhere', function(){


    it('should check the fromWhere that startsWith',function(){
        assert.equal('Bellville',fromWhere('CY'));
    });
    it('should check the fromWhere that startsWith ', function(){
        // this test will fail - can you fix it?
        assert.equal('Cape Town',fromWhere('CA'));
    });
});
