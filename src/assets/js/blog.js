let dataBlogs = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-title").value;
  let startDate = document.getElementById("input-start-date").value;
  let endDate = document.getElementById("input-end-date").value;
  let description = document.getElementById("input-blog-description").value;
  let techCheckbox = [
    ...document.querySelectorAll("input[name='tech-icon']:checked"),
  ];

  let tech = techCheckbox.map((item) => item.value);
  let valueStartDate = new Date(startDate);
  let valueEndDate = new Date(endDate);

  // let checkboxReactJS = document.getElementById("checkbox-reactjs").checked;
  // let checkboxNodeJS = document.getElementById("checkbox-nodejs").checked;
  // let checkboxJava = document.getElementById("checkbox-java").checked;
  // let checkboxJavascript = document.getElementById(
  //   "checkbox-javascript"
  // ).checked;

  let dataBlog = {
    title,
    valueStartDate,
    valueEndDate,
    description,
    tech,
    // checkboxReactJS,
    // checkboxNodeJS,
    // checkboxJava,
    // checkboxJavascript,
  };

  dataBlogs.push(dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("blog-card").innerHTML = "";

  for (let index = 0; index < dataBlogs.length; index++) {
    // let icons = ``;
    // if (dataBlogs[index].checkboxReactJS) {
    //   icons += `<i class="fa-brands fa-react"></i>`;
    // }

    // if (dataBlogs[index].checkboxNodeJS) {
    //   icons += `<i class="fa-brands fa-node-js"></i>`;
    // }

    // if (dataBlogs[index].checkboxJava) {
    //   icons += `<i class="fa-brands fa-java"></i>`;
    // }

    // if (dataBlogs[index].checkboxJavascript) {
    //   icons += `<i class="fa-brands fa-js"></i>`;
    // }

    // let bulan = 0;
    // bulan = Math.abs(dataBlogs[index].endDate - dataBlogs[index].startDate);
    // console.log(`bulan : ${bulan}`);

    document.getElementById("blog-card").innerHTML += `
    <div class="card">
      <a href="./blog-details.html?id=${index}">
        <img src="./assets/image/blog-images/image-1.jpg" alt="" />
        <p class="card-title">${dataBlogs[index].title}</p>
        <p class="card-duration">duration : ${getFullDate(
          dataBlogs[index].valueStartDate,
          dataBlogs[index].valueEndDate
        )}</p>
        <div class="card-content">
          <p>${dataBlogs[index].description}</p>
        </div>
        <div class="card-icon">${dataBlogs[index].tech
          .map((item) => `<i class='${item}'></i>`)
          .join("")}</div>
      </a>
      <div class="card-btn">
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
    `;
  }
}

function getFullDate(startDate, endDate) {
  let nowDate = new Date();
  let now = {
    hours: 24 - nowDate.getHours(),
    minutes: 60 - nowDate.getMinutes(),
    seconds: 60 - nowDate.getSeconds(),
  };

  let start = {
    years: startDate.getFullYear(),
    months: startDate.getMonth(),
    days: startDate.getDate(),
  };

  let end = {
    years: endDate.getFullYear(),
    months: endDate.getMonth(),
    days: endDate.getDate(),
  };

  let distance = {
    years: end.years - start.years,
    months: end.months - start.months,
    days: end.days - start.days,
  };

  if (distance.years > 0) {
    return `${distance.years} years`;
  } else if (distance.months > 0) {
    return `${distance.months} months`;
  } else if (distance.days > 0) {
    return `${distance.days} days`;
  } else if (now.hours > 0) {
    return `${now.hours} hours ${now.minutes} minutes ${now.seconds} seconds`;
  } else if (now.minutes > 0) {
    return `${now.minutes} minutes`;
  } else if (now.seconds > 0) {
    return `${now.seconds} seconds`;
  } else {
    return `timeout`;
  }
}

function renderDetailBlog(id) {
  console.log("id", id);

  const title = document.getElementById("title-h1");
  const data = dataBlogs[id];

  console.log(data);

  title.innerText = data.title;
}

function renderBlogList() {}
