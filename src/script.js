// Promessa vinda do servidor, solicitada a cada 3 segundos
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
    } else {
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
  alert('Deu pau')
}
