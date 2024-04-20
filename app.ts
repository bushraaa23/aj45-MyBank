#!/usr/bin/env node


import inquirer from "inquirer";
class Customer{
    firstname: string;
    lastname:string;
    age:number;
    gender:string;
    mob:string
    acount:number;
    blance:number;
    constructor(fname:string,lname:string,age:number,gender:string,mob:string,act:number,blc:number){
        this.firstname=fname;
        this.lastname=lname;
        this.age=age;
        this.gender=gender;
        this.mob=mob;
        this.acount=act;
        this.blance=blc
    }
    view(){
        console.log("blance in your account is = "+this.blance)
    }
    deposit(am:number){
        this.blance += am;
        console.log("after deposting "+ am +" Rs in your account now the account balnce is = "+this.blance)
    }
    withdraw(am:number){
      if (this.blance>am){  this.blance -= am;
        console.log("after withdrawaing "+ am +" Rs in your account now the account balnce is = "+this.blance)
    }
    else {
        console.log("amount that you want to withdraw "+ am +" Rs in greater than you blance you blance is = "+this.blance)
    }
    }
}
class Bnak {
    customer: Customer []=[]
    addcus(cus:Customer){
        this.customer.push(cus)
    }
    
}
let mybank=new Bnak();
let user= new Customer("Hina","khan",24,"fenale","+923477245423",1,10000)
mybank.addcus(user);
async function service(b1:Customer){
    let service= await inquirer.prompt({
        type:"list",
        name:"inp",
        message:"What option do youn want to perform",
        choices:["view blance","cash withdraw","cash deposit"],
    });
    if(service.inp == "view blance"){
    user.view();
    }
    else{
       let amount = await inquirer.prompt({
        type:"number",
        name:"am",
        message:"write the amount",
       }); 
    if (service.inp == "cash deposit") {
    user.deposit(amount.am)
    }
    else {
        user.withdraw(amount.am)

    }}
}
// this is templte for one customer only but for pure banking we need to add pin security other account also
do{
  await  service(user);
let choice = await inquirer.prompt({
    type:"input",
    name:"cho",
    message:"if you want to perform an other opertaion press y",
});
var a=choice.cho
}while (a == 'y' || a=="Y")
