function countAllPaarl(regNumber){

var list=regNumber.split(', ');
var count=0;
for(var i=0;i<list.length;i++){
  console.log(list[i]);

if(list[i].startsWith('CJ')){
//count.push(list[i]);
  console.log(count++);

}
}
return count;

}
