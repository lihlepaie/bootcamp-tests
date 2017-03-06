describe('transportFee', function(){


    it('should return free transportFee',function(){
        assert.equal('R20',transportFee('morning'));
    });
    it('should return free transportFee ', function(){
        // this test will fail - can you fix it?
        assert.equal('R10',transportFee('afternoon'));
    });
});
