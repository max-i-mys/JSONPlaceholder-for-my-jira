async function fetchData(url, opts) {
    try {
        const res = await fetch(url, opts)
        if (!res.ok) {
            throw new Error(`Response error. Status ->> ${res.status}`)
        }
        const data = await res.json()
        console.log(data)
        return data
    } catch (e) {
        console.warn(e);
    }
}
//READ
function fetchOne(base, path, id) {
    return fetchData(`${base}/${path}/${id}`)
}
function fetchList(base, path) {
    return fetchData(`${base}/${path}`)
}
//CREATE
function fetchAdd(base, path, data) {
    const opts = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }
    return fetchData(`${base}/${path}`, opts)
}
//UPDATE
function fetchReplace(base, path, id, data) {
    const opts = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }
    return fetchData(`${base}/${path}/${id}`, opts)
}
function fetchMerge(base, path, id, data) {
    const opts = {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }
    return fetchData(`${base}/${path}/${id}`, opts)
}
//DELETE
function fetchRemove(base, path, id) {
    const opts = {
        method: 'DELETE',
    }
    return fetchData(`${base}/${path}/${id}`, opts)
}