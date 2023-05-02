const axios = require("axios");
const form = document.querySelector('form');


form.addEventListener('submit', e => {
  e.preventDefault()

  const usernaame = e.target.username.value;
  const password = e.target.password.value;

})

