const apiKey = 'U8rqMEcOWbhG2iWHFXNKWDJFmx7ANOxH'

const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

request.then(res => res.json())
    .then(({data}) => {
        const {url} = data.images.original

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn)