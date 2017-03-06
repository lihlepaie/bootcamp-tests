describe('findItemsOver', function(){


    it('should listQuantity findItemsOver',function(){
      var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3}
  ];
  function findItemsOver(threshold){
  var mythreshold=20
  return mythreshold;
}
console.log(20);


var results= findItemsOver(itemList)
//results look like this now.
var expectedResults= [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];
        assert.deepEqual(20,results,expectedResults);

    });
});
