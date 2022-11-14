# Project - ChatUOL

https://jansenosorio.github.io/chatuol/

## Summary 

Esse projeto faz parte do curso da Driven Education . Neste projeto aplicamos nossos conhecimento em HTML, CSS e Javascript, além de consumir <strong>API com Axios</strong>. Criando uma interface estática com interação de usuário recebimento e envio de mensagens. Aplicação desenvolvida para utilziação em dispositivos Mobile.

<p align="center">
  <img width="250px" src="img/ConversationPAge1.png"/>
  <img width="252px" src="img/ConversationPage.png"/>
</p>

## Technologies

<img src="https://camo.githubusercontent.com/c8d13e1c596a6726b1da8475a9299fac133f95ef009083b48be01f975a44987e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d48544d4c2d3035313232413f7374796c653d666c6174266c6f676f3d48544d4c35" />
<img src= "https://camo.githubusercontent.com/d738d76484d50c8345c2d01e39364b707285bc7936140858e7909dfe6424efb2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4353532d3035313232413f7374796c653d666c6174266c6f676f3d43535333266c6f676f436f6c6f723d313537324236" />
<img src="https://camo.githubusercontent.com/6e8ce928be6e5866e27140eb0bb25479b52137d75ee0196e7b67c91038a9abc3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4a6176615363726970742d3035313232413f7374796c653d666c6174266c6f676f3d6a617661736372697074" />

## Axios
### Installing

- Usando NPM: <strong><code>$ npm install axios</code></strong>
- Usando Bower: <strong><code>$ bower install axios</code></strong>
- Usando Yarn: <strong><code>$ yarn add axios</code></strong>
- Usando jsDelivr CDN: <strong><code><script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script></code></strong>
- Usando unpkg CDN: <strong><code><script src="https://unpkg.com/axios/dist/axios.min.js"></script></code></strong>

Documentação completa: <a href="https://axios-http.com/docs/intro">Clique Aqui</a>

### POST Request

Utilizando o <strong>Post Request</strong>

```
  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  ```

### GET Request
```
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
```

Documentação completa: <a href="https://axios-http.com/docs/intro">Clique Aqui</a>


