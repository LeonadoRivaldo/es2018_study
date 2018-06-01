

class Users{
  constructor(users){
    this._users = users;
  }

  get users(){
    return this._users;
  }

  // [Symbol.iterator](){
  //   let i = 0;
  //   let users = this.users;
  //   return{
  //     next(){
  //       if(i<users.length){
  //         return{done:false, value:users[i++]};
  //       }
  //
  //       return {done:true};
  //     }
  //   }
  // }

  *getIterator(){
    for( let i in this.users ){
      yield this._users[i];
    }
  }

};


const usuarios = new Users([
  {nome:"leonardo"},
  {nome:"leonardo1"},
  {nome:"leonardo2"}
]);

let teste = usuarios.getIterator();

for(let user of teste){
  console.log('1 => ', user);
}



function* _Users(users) {
  for( let i in users ){
    yield users[i++];
  }
}

const __users = _Users([
  {nome:"leonardo"},
  {nome:"leonardo1"},
  {nome:"leonardo2"}
]);

for(let user of __users){
  console.log('2 => ', user);
}
