// // 3.1 Kieu number
// var a:number=10;
// // a='20' // Loi
// // a=true // loi
// // a=20 //Khong loi


//3.2 Kieu String
// var a:string="le van a"


//3.3 Kieu boolean
// var a:boolean=true

//4 Kieu OBJECT
// const inforUser:{
//   fullName:string,
//   age:number
// }={
//   fullName:"Le van a",
//   age:32
// }
// inforUser.age="342" // loi sai type
// inforUser.email="a@gmail.com" //khong them key-val duoc khi khong co trong constructor

//5 INTERFACE
//   //? co nghia la optional (tuy chon)
// interface sockials 
// {
//   facebook?:string,
//   zalo?:string
// }

// interface InforUser
// {
//   fullName:string,
//   age?:number ,
//   socials?:sockials //  khai bao 1 bien co type la interface
// }

// const inforUserA:InforUser={
//   fullName:"Le van a",
//   age:32,
//   socials:{
//     facebook:'aaa'
//   }
// }

// const inforUserB:InforUser={
//   fullName:"Le van b",
//   socials:{
//     zalo:'aaa'
//   }
// }


//6 extend interface

// interface Account{
//   fullName:string,
//   email:String,
//   password:string
// }

// interface AccountAdmin extends Account{ 
//   roleId:string
// }

// interface AccountUser extends Account{
//   score:number
// }

// const admin:AccountAdmin={
//   fullName:"levana",
//   email:"a@gmail.com",
//   password:"2222",
//   roleId:'aaa'
// }

// const user:AccountUser={
//   fullName:"levanb",
//   email:"b@gmail.com",
//   password:"2222",
//   score:34
// }

// 7 Kieu array
  //vd1 1 array cac so
  // const arrayNumber:number[]=[1,2,'a','b'] // loi
  // const arrayNumber:number[]=[1,2] //khong loi

  //vd2 array cac chuoi
  // const arrayString:string[]=['a','b']

  //vd 3 array so va chuoi
  // const array3:(string|number)[]=['a',2,true] //loi
  // const array3: (string|number)[]=['a',3] //khong loi

  // vd4 array cac interface
  // interface User{
  //   fullName:string,
  //   phone:string
  // }
  // const array4:User[]=[
  //   {
  //     fullName:'a',
  //     phone:'324'
  //   },
  //   {
  //     fullName:'b',
  //     phone:'353'
  //   }
  // ]


// 8 kiey tuple // khai bao truoc so luong phan tu trong tuple
// let clock:[number,number,number];
// clock=[23,21,42] //khong loi
// clock=[23,21,42,34] // loi

// 9 readonly // khong cho gan lai nhu ben js
// interface user{
//   fullName:string,
//   email:string,
//   readonly token :string
// }

// const registerUserA:user={
//   fullName:'a',
//   email:'a@gmail.com',
//   token:'r32rfw23'
// }
// // cap nhat tai khoan
// registerUserA.fullName="A" //khong loi
// registerUserA.token="asdf32r" //k gan duoc readonly

//10 functions 
// const sum=(a:number,b:number):number=>{
//   return a+b
// }
// const result=sum(10,3)
 
//11 default parameters
// const sum =(a:number=0, b:number=3):number=>{
//   return a+b
// }
// const result=sum(3,2)


// 12 rest parameters
// const sum= (...arrayNumber:number[]):number=>{
//   const result=arrayNumber.reduce((total:number,item:number):number=>{
//     return total+item
//   },0)
//   return result
// }
// console.log(sum(3,3,42));


// 13 Enum
// enum STATUS{
//     ACTIVE='active',
//     INITIAL='initial',
//     INACTIVE='inactive'
// }

// let statusCurrent='inactive'
// switch( statusCurrent){
//   case STATUS.ACTIVE:
//     console.log("viet logic nactive");
//     break;
//   case STATUS.INACTIVE:
//     console.log("viet logic inactive");
//     break;
//   case STATUS.INITIAL:
//     console.log("viet logic initial");
//     break;
//   default:
//     break
// }

// 14 Kieu Any
// var a:any=12
// a='32'
// a=true

// Bài 38

// 01. Kiểu Void

// const hello=(fullName:string):void=>{
//   console.log(fullName);
// }

// hello('Pham Tien Dat')

//02. Union type
// type statusType='initial'|'active' |'inactive'
// type ratingType= number|string


// interface Product{
//   id:string,
//   title:string,
//   rating: ratingType ,
//   status:statusType
// }

//04. Intersection type ( hop nhieu itf thanh 1)
// interface Account{
//   id:string,
//   fullName:string,
//   age:string
// }

// interface Contact{
//   email:string,
//   phone:string
// }

// type AccountContact=Account&Contact

// const userA:AccountContact={
//   id:'a',
//   fullName:'a',
//   age:'a',
//   email:'a',
//   phone:"a"
// }

//05. Declaration merging (hop 2 itf trung ten thanh 1)
// interface User{
//   id:string,
//   fullName:string
// }
// interface User{
//   email:string,
//   phone?:string
// }

// const userA:User={
//   id:'a',
//   fullName:'a',
//   email:'a'
// }

//06. Utinity Type

//6.1 Partial<type>
//thay doi tat ca cac attribute cua interface thanh optional
// interface User{
//   fullName:string,
//   email:string,
//   phone:string
// }
// const userA:Partial<User>={
//   fullName:'a'
// }

//6.2 Required<type>
// thay doi tat cac cac attribute cua interface thanh required
// interface User{
//   fullName:string,
//   email?:string,
//   phone?:string
// }

// const updateUserA:Required<User>={
//   fullName:'a',
//   email:'a',
//   phone:'a'
// }

// 6.3 Omit<type,keys>
// xoa 1 hoac nhieu attribute khoi interface

// interface User{
//   cccd:string,
//   fullName:string,
//   email:string,
//   phone:string
// }
// const createUserA:User={
//   cccd:'a',
//   fullName:'a',
//   email:'a',
//   phone:'a'
// }

// const updateUserB:Omit<User,"cccd"|'fullName'>={
//   email:'b',
//   phone:'b',
// }

// 6.4 Pick<Type,Keys>
// xoa tat ca cac attribute khoi interface tru nhung cai muon giu lai

// interface User{
//   cccd:string,
//   fullName:string,
//   email:string,
//   phone:string
// }
// const UserA:Pick<User,"email"|'phone'>={
//   email:'b',
//   phone:'b'
// }

// 6.5 Readonly <type>
// bien tat ca cac attribute trong inteface thanh chi doc

// interface User{
//   cccd:string,
//   fullName:string,
//   email:string,
//   phone:string
// }

// const userA:Readonly<User>={
//   cccd:'a',
//   fullName:'a',
//   email:'a',
//   phone:'a'
// }
// userA.cccd='a'