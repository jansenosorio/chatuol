// Promessa vinda do servidor
setInterval(() => {
  const promise = axios.get(
    'https://mock-api.driven.com.br/api/v6/uol/messages'
  )
  promise.then(request)
}, 3000)

function request(response) {
  const caixaDeMensagem = document.querySelector('.main')

  for (let i = 0; i < response.data.length; i++) {
    caixaDeMensagem.innerHTML += `
    <div class="mensage-box m-normal">
      <span class="hour">${response.data[i].time}</span>
      <span class="name">${response.data[i].from}</span>
      <span class="mensage">${response.data[i].text}</span>
    </div>
    `
  }

  const ultimoFilho = caixaDeMensagem.lastElementChild

  ultimoFilho.scrollIntoView()
}
