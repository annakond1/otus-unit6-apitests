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
//Выгрузка из Посман
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

  //тест с использованием fetch
  //describe('Post ошибка пользователь уже существует', () => {
    //it('Post ошибка пользователь уже существует', 
    ;(async () => {
      const response = await fetch('https://bookstore.demoqa.com/Account/v1/User', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        userName: "Anna@",
        password: "Anna@1234"
      })
    })
    const data = await response.json()
    
    expect(response.status).toEqual(406)
    expect (data.token).toBeDefined('Not Acceptable')
    expect (data.result).toBe('ошибка пользователь уже существует')
  })
      //expect (data.result).toBe('ошибка пользователь уже существует')
      
  //POST ошибка некорректный пароль
  //Выгрузка из Посман
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

  //Тест и использованием fetch
  //POST ошибка некорректный пароль
  ;(async () => {
    const response = await fetch('https://bookstore.demoqa.com/Account/v1/User', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
      userName: "Anna@123456",
      password: "anna"
    })
  })
  const data = await response.json()
  
  expect(response.status).toEqual(400)
  expect (data.token).toBeDefined('Bad Request')
  expect (data.result).toBe('ошибка некорректный пароль пользователя')
})

  //Post успешная генерация токена
  //Выгрузка из Постам
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

  //Fetch
  //Post успешная генерация токена 
  ;(async () => {
    const response = await fetch('https://bookstore.demoqa.com/Account/v1/GenerateToken', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
      userName: "Anna@",
      password: "Anna@123"
    })
  })
  const data = await response.json()
  
  expect(response.status).toEqual(200)
  expect (data.token).toBeDefined('OK')
  expect (data.result).toBe('успешная генерация токена')
})

  //Post ошибочная генерация токена
  //Выгрузка из Посман
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

  //Post ошибочная генерация токена
  //Fetch
  ;(async () => {
    const response = await fetch('https://bookstore.demoqa.com/Account/v1/GenerateToken', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
      userName: "Anna@123",
      password: ""
    })
  })
  const data = await response.json()
  
  expect(response.status).toEqual(400)
  expect (data.token).toBeDefined('Bad Request')
  expect (data.result).toBe('ошибочная генерация токена')
})

  //Post успешный новый пользователь
  //Выгрузка из Посман
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

  //Post успешный новый пользователь
  //Fetch
  ;(async () => {
    const response = await fetch('https://bookstore.demoqa.com/Account/v1/User', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
      userName: "Anna@@",
      password: "Anna@123"
    })
  })
  const data = await response.json()
  
  expect(response.status).toEqual(406)
  expect (data.token).toBeDefined('Not Acceptable')
  expect (data.result).toBe('успешный новый пользователь')
})
