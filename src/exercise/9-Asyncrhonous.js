// syncrhonous => blocking
// console.log("Hello World 1")
// console.log("Hello World 2")
// console.log("Hello World 3")


// console.log("======================================");
// asyncrhonous => non-block
// console.log("Hello World 1")
// setTimeout(() => console.log("Hello World 2"), 5000)
// console.log("Hello World 3")

// console.log("System start");

// function ProcessA() {
//   for(let i = 0; i <5; i++) {
//     console.log(`Process - ${i}`)
//   }
// }

// ProcessA()

// console.log("System stop");


// console.log("======================================");
// console.log("======================================");





console.log("System start");

function Stop() {
  console.log("System stop")
}

for(let index = 0; index < 5; index++) {
  ProcessB(index, () => {
    if(index === 4) {
      Stop()
    }
  })
}

function ProcessB(iterasi, callback) {
  setTimeout(() => {
    console.log("Process" + iterasi);
    callback()
  }, 3000)
}


// System start
// System stop
// Looping
// Process B


// System start
// Process B after one second
// Looping
// System stop

