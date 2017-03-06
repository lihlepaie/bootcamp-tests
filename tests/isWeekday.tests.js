describe('isWeekday', function(){


    it('The isWeekday Sunday', function(){
        assert.equal(false,isWeekday('Sunday,Monday'));
    });
    it('The isWeekday Sunday', function(){
        // this test will fail - can you fix it?
        assert.equal(false,isWeekday('Sunday,Monday'));
    });
});
