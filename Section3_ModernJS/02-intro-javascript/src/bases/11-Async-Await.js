// const getImagePromise = () => {
//     return new Promise( resolve => resolve('') )
// }

const { computeHeadingLevel } = require("@testing-library/dom");

const getImage = async () => {  
    try{
        const apiKey = 'U8rqMEcOWbhG2iWHFXNKWDJFmx7ANOxH'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data} = await resp.json();
        const {url} = data.images.original
    
        const img = document.createElement('img');
        img.src = url;
    
        document.body.append(img);        
    } catch (error) {
        console.error(Object)
    }
}

getImage()




// request.then(res => res.json())
//     .then(({data}) => {
//         const {url} = data.images.original

//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append(img);
//     })
//     .catch(console.warn)