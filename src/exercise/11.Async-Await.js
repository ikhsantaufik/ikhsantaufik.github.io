// Async - await
// try and catch

// execute get data from database (user)
// await, function get data from database finished.
// console.log(return data user from database)

// execute get data from database (user)
// console.log(return data user from database) => null/undefine/pending

// async function runWarnet() {

// }

const member = () => {
  return new Promise((resolve, reject) => {
    const time = 1000;

    setTimeout(() => {
      if (time <= 5000) {
        resolve("Continue");
      } else {
        reject("Time's up");
      }
    }, 4000);
  });
};

const runRental = async () => {
  try {
    const response = await member();
    console.log(response);
  } catch (error) {
    console.log(error);
  }

};

runRental();
