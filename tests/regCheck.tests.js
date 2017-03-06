describe('regCheck', function(){


    it('check if the regNumber endsWith', function(){
        assert.equal(false,regCheck('EC'));
    });
    it('check if the regNumber endsWith', function(){
        // this test will fail - can you fix it?
        assert.equal(false,regCheck('GP'));
    });
});
