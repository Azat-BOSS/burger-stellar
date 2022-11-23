const apiUrl = "https://norma.nomoreparties.space/api"

const checkResult = (res) => {
  if(res.ok) {
    return res.json
  }
  else {
    return Promise.reject(`Ошибка: ${res.status}`)
  }
}

export { 
  apiUrl,
  checkResult
}  