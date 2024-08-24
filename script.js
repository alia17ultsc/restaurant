var orderedmeals=[];
var orderedmealamount=[];
var orderedmealprice=[];
var lastorder="";


function ordermeal(mealname, mealprice){
  lastorder=mealname;
  console.log(`This costs ${mealprice}epg`)
  totalcost+=mealprice;
console.log(`Total price = ${totalcost}`);
var totalprice=document.getElementById('totalprice');
totalprice.innerText=`${totalcost}egp`;
var order=document.getElementById('order');

var newmeal=true;
for (var index=0; index<orderedmeals.length; index++)
{
  if (orderedmeals[index]==mealname){
      newmeal=false;
      orderedmealamount[index]++;
      break;
  }
}
if (newmeal==true){
  orderedmeals.push(mealname);
  orderedmealamount.push(1);
  orderedmealprice.push(mealprice);
}

showtotalorder();

}


function showtotalorder(){
  order.innerText="";

for (var index=0; index<orderedmeals.length; index++){
  order.innerText +=` ${orderedmeals[index]} ${orderedmealprice[index]} egp ${orderedmealamount[index]}x\n`;
}
}

function removeitem(){
  if (lastorder==""){
    return;
  }
  for (var index=0; index<orderedmeals.length; index++){
    if (lastorder==orderedmeals[index]){
      totalcost-=orderedmealprice[index];
      var totalprice=document.getElementById('totalprice');
totalprice.innerText=`${totalcost}egp`;
      if (orderedmealamount[index]>1)
      {
        orderedmealamount[index]--;
      }
      else{
        orderedmeals.splice(index, 1);
        orderedmealamount.splice(index, 1);
        orderedmealprice.splice(index, 1);
      }
    }
  }

showtotalorder();
}