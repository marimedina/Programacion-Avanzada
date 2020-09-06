/*const getImagenPromesa = () => {
    const promesa =  new Promise((resolve, reject) => {
        resolve('https://fvsdfbvfg.com')
    })
     return promesa;
}

getImagenPromesa().then(console.log); */


/*const getImagen = async() => {
    return 'https://fvsdfbvfg.com';
}

console.log(getImagen()); */


//implementando gif de giphy (c/fb)

const getImagen = async() => {

    const apiKey = '0fAjXcNJ3sRd0mh25mr9pUcury96Ahei';
    const resp = await fetch(`http://api.giphy.com/v1/stickers/random?api_key=${apiKey}`);
    const {data} = await resp.json();

    console.log(data);

    const {url} = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img)
}

getImagen();