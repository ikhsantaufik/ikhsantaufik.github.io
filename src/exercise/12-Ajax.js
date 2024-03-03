const getData = () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.npoint.io/1465052a4f4453fb4ba3");
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
        
      } else {
        reject("Error loading data");
      }
    };

    xhr.onerror = () => reject("Network Error");

    xhr.send();
  });
};

const runData = async () => {
  try {
    const responseXML = await getData();
    console.log(responseXML);
  } catch (error) {
    console.log(error);
  }
};

runData();
