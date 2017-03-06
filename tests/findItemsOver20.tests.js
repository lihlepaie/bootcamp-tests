describe('findItemsOver20', function(){


    it('should listQuantity findItemsOver20',function(){
      var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var results = findItemsOver20(itemList)
//results look like this now.
var expectedResults = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];

        assert.deepEqual(results,expectedResults);

    });
});
