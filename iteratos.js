

class Users{
  constructor(users){
    this._users = users;
  }

  get users(){
    return this._users;
  }

  [Symbol.iterator](){
    let i = 0;
    let users = this.users;
    return{
      next(){
        if(i<users.length){
          return{done:false, value:users[i++]};
        }

        return {done:true};
      }
    }
  }

};


const usuarios = new Users([
  {nome:"leonardo"},
  {nome:"leonardo1"},
  {nome:"leonardo2"}
]);


for(let user of usuarios){
  console.log(user);
}
