// Função POST Axios - request que enviar o nome do usuário e verificar se já existe outro com o mesmo nome
let inNomeUsuario = ''
let nomeUsuario = ''
let axiosNomeUsuario = {}

function postRequest() {
  inNomeUsuario = document.querySelector('.inNomeUsuario')
  nomeUsuario = inNomeUsuario.value
  axiosNomeUsuario = { name: nomeUsuario }

  const postRequestPromise = axios.post(
    'https://mock-api.driven.com.br/api/v6/uol/participants',
    axiosNomeUsuario
  )

  postRequestPromise.catch(erroNomesIguaisEntrada)
  postRequestPromise.then(nomeAceitoPeloServidor)
}

// Função post, quando der erro

function erroNomesIguaisEntrada(response) {
  if (response.response.status === 400) {
    alert('Nome de Usuário já encontrado, favor escolher outro')
  } else {
    window.location.reload()
  }
}

// Função post, quando der acerto

function nomeAceitoPeloServidor(nome) {
  const paginaEntradaDeNome = document.querySelector('.paginaEntradaDeNome')
  paginaEntradaDeNome.classList.add('esconder')
}

// Função para verificar status

setInterval(() => {
  const promise = axios.post(
    'https://mock-api.driven.com.br/api/v6/uol/status',
    axiosNomeUsuario
  )
}, 5000)

function enviarMensagem() {
  let inMensageText = document.querySelector('.footer input')
  let mensageText = inMensageText.value
  let axiosMensageTexto = {
    from: nomeUsuario,
    to: 'Todos',
    text: mensageText,
    type: 'message'
  }

  const promise = axios.post(
    'https://mock-api.driven.com.br/api/v6/uol/messages',
    axiosMensageTexto
  )

  promise.catch(requestProblem)

  inMensageText.value = ''
}

// Função GET - Axios - Promessa vinda do servidor, solicitada a cada 3 segundos
setInterval(() => {
  const promise = axios.get(
    'https://mock-api.driven.com.br/api/v6/uol/messages'
  )
  promise.then(request)
  promise.catch(requestProblem)
}, 3000)

// função que recebe a promise e renderiza toda a página

function request(response) {
  const caixaDeMensagem = document.querySelector('.main')
  caixaDeMensagem.innerHTML = ''

  for (let i = 0; i < response.data.length; i++) {
    if (response.data[i].type === 'status') {
      caixaDeMensagem.innerHTML += `
        <div class="mensage-box m-status">
          <span class="hour">(${response.data[i].time})</span>
          <span class="name">${response.data[i].from}</span>
          <span class="mensage">${response.data[i].text}</span>
        </div>
        `
    } else if (response.data[i].type === 'message') {
      caixaDeMensagem.innerHTML += `
        <div class="mensage-box m-message">
          <p>
          <span class="hour">(${response.data[i].time})</span>
          <span class="name"> ${response.data[i].from}</span>para <span class="name">${response.data[i].to}</span>:
          <span class="mensage">${response.data[i].text}</span>
          </p>
        </div>
        `
    } else if (
      response.data[i].type === 'private_message' &&
      response.data[i].to === nomeUsuario
    ) {
      caixaDeMensagem.innerHTML += `
        <div class="mensage-box m-reserved">
          <p>
          <span class="hour">(${response.data[i].time})</span>
          <span class="name"> ${response.data[i].from}</span>reservadamente para <span class="name">${response.data[i].to}</span>:
          <span class="mensage">${response.data[i].text}</span>
          </p>
        </div>
        `
    }
  }

  const ultimoFilho = caixaDeMensagem.lastElementChild

  ultimoFilho.scrollIntoView()
}

function requestProblem(response) {
  windows.location.reload()
}
