

function* calc(a) {
  let x = yield a * 2;
  let y = yield x * a;

  let result = yield x + y + a;

  return result;
}

let start = calc(10);
let value = 0;
let done = false;
do{
  let t = start.next(10);
  done = t.done;
  console.log( t.value );
}while (!done);


console.log( value );
