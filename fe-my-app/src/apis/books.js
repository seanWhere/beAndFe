export function getBooksApi(){
    return fetch('http://localhost:4000/books')
        .then(response => response.json())
        .then(data => data);
}

export function addBookApi(book){
    return fetch('http://localhost:4000/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    })
        .then(res => res.json())
        .then(data => data);
}

export function updateBookApi(book){
    return fetch(`http://localhost:4000/books/${book._id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    })
        .then(res => res.json())
        .then(data => data);
}

export function deleteBookApi(id){
    return fetch(`http://localhost:4000/books/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })
        .then(res => res.json())
        .then(data => data);
}