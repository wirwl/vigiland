export function getFetch(url: string) {
    return fetch(url).then(response => {
        return response.json();
    }).catch(error => {
        return Promise.reject(Error(error.message))
    })
}

export function postFetch(url: string, body: any) {
    return fetch(url, {
        method: "POST",
        body: JSON.stringify(body)
    }).then(response => {
        return response.json();
    }).catch(error => {
        return Promise.reject(Error(error.message))
    })
}
