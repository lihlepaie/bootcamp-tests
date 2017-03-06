describe('totalPhoneBill', function(){


    it('should check the totalPhoneBill that startsWith',function(){
        assert.equal('R2.75',totalPhoneBill('c'));
    });
    it('should check the totalPhoneBill that startsWith ', function(){
        // this test will fail - can you fix it?
        assert.equal('R0.65',totalPhoneBill('s'));
    });
});
