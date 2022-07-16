function parseJSON(response) {
    return response.json();
}

function logResponse(parsedResponse) {
    console.log(parsedResponse);
}

// GET
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));

// POST
const createConfig = {
  method: 'POST',
  body: JSON.stringify({
    title: 'some title',
    body: 'some body',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
};

fetch('https://jsonplaceholder.typicode.com/posts', createConfig)
  .then(parseJSON)
  .then(logResponse);

// PUT
const updateConfig = {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'updated title',
    body: 'updated body',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}

fetch('https://jsonplaceholder.typicode.com/posts/1', updateConfig)
  .then((response) => response.json())
  .then((json) => console.log(json));

// DELETE

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
})
  .then((response) => response.json())
  .then((json) => console.log(json));
