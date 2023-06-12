export const getRequest = (url) => {
  return (
    fetch(url)
      .then(res => res.json())
        // .then(res => res.data)
  )
}

export const postRequest = (url, payload) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(payload)
  })
}

export const putRequest = (url, payload) => {
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(payload)
  })
}

export const deleteRequest = (url) => {
  return fetch(url, {
    method: "DELETE"
  })
}