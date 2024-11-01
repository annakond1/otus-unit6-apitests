//let url = 'https://bookstore.demoqa.com/Account/v1/User'

//;(async () => {
  //let raw = {
  //"userName": "Anna@",
  //"password": "Anna@1234"
  //}

//let response = await fetch('https://bookstore.demoqa.com/Account/v1/User', {
//method: "POST",
//headers: {
  //"Content-Type": "application/json"
  //}
//body: JSON.stringify(raw)
//});
//let result = await response.json();
//console.log(result.message);
//})

//Post ошибка пользователь уже существует 
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "userName": "Anna@",
  "password": "Anna@1234"
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://bookstore.demoqa.com/Account/v1/User", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

  //POST ошибка не корректный пароль
  const myHeaders1 = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw1 = JSON.stringify({
  "userName": "Anna@123456",
  "password": "anna"
});

const requestOptions1 = {
  method: "POST",
  headers: myHeaders,
  body: raw1,
  redirect: "follow"
};

fetch("https://bookstore.demoqa.com/Account/v1/User", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

  //Post успешная генерация токена
  const myHeaders2 = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw2 = JSON.stringify({
  "userName": "Anna@",
  "password": "Anna@123"
});

const requestOptions2 = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://bookstore.demoqa.com/Account/v1/GenerateToken", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

  //Post ошибочная генерация токена
  const myHeaders3 = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw3 = JSON.stringify({
  "userName": "Anna@123",
  "password": ""
});

const requestOptions3 = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://bookstore.demoqa.com/Account/v1/GenerateToken", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

  //Post успешный новый пользователь
  const myHeaders4 = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw4 = JSON.stringify({
  "userName": "Anna@@",
  "password": "Anna@123"
});

const requestOptions4 = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://bookstore.demoqa.com/Account/v1/User", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
