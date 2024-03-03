
// for(let i = 0; i < arr.length; i++) {
//   console.log("Data ke-" + arr[i])
// }

// function hof / build in from js.
// ForEach, Map, Filter, Switch, Reduce, dll.

// ForEach => melakukan iterasi pada array.
// const data = arr.forEach((data) => {
//   return data * 2
// })
// console.log(data)

// // Map => melakukan iterasi pada array, mencopy array sesuai bentuk array asal / memanipulasi array.
// const user = [
//   {
//     name: "putri maharani",
//     age: 45
//     // isVip: true
//   },
//   {
//     name: "Samsul",
//     age: 60
//     // isVip: true
//   }
// ]

// const datas = user.map((data, index) => {
//   return {
//     ...data, // spread operator
//     // data,
//     isVip: true
//   }
// })
// console.log(datas)

// const users = [
//   {
//     data: {
//       name: "putri maharani",
//       age: 45
//     },
//     isVip: true
//   },
//   {
//     data: {
//       name: "Samsul",
//       age: 60
//     },
//     isVip: true
//   }
// ]

// filter
// const dataFilter = arr.filter((data) => data > 3 )
// console.log(dataFilter)

// reduce => menggabungkan array
// const arr = [1, 2, 3, 4, 5, 6]
// const arr = ["jhondoe", "maharani", "samsul"]

// const dataReduce = arr.reduce((prev, current) => prev + ", " +current)
// console.log(dataReduce)

// const dataJoin = arr.join(", ")
// console.log(dataJoin)