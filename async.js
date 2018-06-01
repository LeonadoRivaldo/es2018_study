
function sum(a, b){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      return resolve(a+b);
    }, 1000);
  });
}


async function calcTotal(a,b){
  let result =  await sum(a,b);
  return result;
}

console.log(calcTotal(10, 2));
