// EXTERNAL API
const JSONPLACEHOLDER_URI = 'https://jsonplaceholder.typicode.com/posts';

// *** Variables ***
//-- buttons
const btnGetTextFile = document.getElementById('btn1');
const btnGetUser = document.getElementById('btn2');
const btnGetUsers = document.getElementById('btn3');
const btnGetPosts = document.getElementById('btn4');
const btnSendPost = document.getElementById('btn5');
//-- output
const textOutput = document.querySelector('#text');
const userOutput = document.querySelector('#user');
const usersOutput = document.querySelector('#users');
const postsOutput = document.querySelector('#posts');

// *** Functions ***
//-- Load Text File Information
function loadTextFile() {
  fetch("http://localhost/text")
    .then(response => response.text())
    .then(data => {

      textOutput.textContent = data;
    });
  return;
}

//-- Load User Information
function loadUser() {
  fetch("http://localhost/user")
    .then(response => response.json())
    .then(data => {
      makeTable(data, userOutput);
    });
  return;
}

//-- Load Users information
function loadUsers() {
  fetch("http://localhost/users")
    .then(response => response.json())
    .then(data => {
      makeTable(data, usersOutput);
    });
  return;
}

//-- Load Users information
function loadPostsXHR() {
  return;
}

//NEW VERSION AJAX (fetch())
// -- Getting data
function loadPostsFETCH() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) => {
    makeTable(data, postsOutput)
  });
  return;
}

// -- Sending data
function sendPostFETCH() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'nukopinau',
    body: 'nukopinau tiesiog is jsonplaceholder guide puslapio',
    userId: 69,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  return;
}
// *** Events ***
btnGetTextFile.addEventListener('click', loadTextFile);
btnGetUser.addEventListener('click', loadUser);
btnGetUsers.addEventListener('click', loadUsers);
btnGetPosts.addEventListener('click', loadPostsXHR);
btnGetPosts.addEventListener('click', loadPostsFETCH);
btnSendPost.addEventListener('click', sendPostFETCH);

function makeTable(data, location) {
  location.innerHTML = '';
  let keys = Object.keys(data);
  if(Array.isArray(data)){
    keys = Object.keys(data[0]);
  }
  let newTable = document.createElement("table");
  location.append(newTable);
  let headerTr = document.createElement("tr");
  newTable.append(headerTr);
  keys.forEach(element => {
    let newHead = document.createElement("th");
    newHead.textContent = element;
    headerTr.append(newHead);
  });
  
  if(Array.isArray(data)){
    data.forEach(element => {
      let newTr = document.createElement("tr");
      keys.forEach(item => {
        let newTd = document.createElement("td");
        newTd.textContent = element[item];
        newTr.append(newTd);
      });
      newTable.append(newTr);
    });
  } else {
    let newTr = document.createElement("tr");
    keys.forEach(item => {
      let newTd = document.createElement("td");
      newTd.textContent = data[item];
      newTr.append(newTd);
    });
    newTable.append(newTr);
  }
}

/*
    readyState Values:
    0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready
    More: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState

    HTTP Statuses
    200: "OK"
    403: "Forbidden"
    404: "Not Found"
    More: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
*/
