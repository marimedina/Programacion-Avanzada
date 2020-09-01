

const lastFM = async() => {
    const apikey = '6fd5fb7d61868a22de560ad48ec2112d';
    const resp = await fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=10&api_key=6fd5fb7d61868a22de560ad48ec2112d&format=json`);
    const artistas = await resp.json();

    console.log(resp);
    console.log(artistas);

    const listaArt = document.querySelector("#table")
    let lista;
    artistas.artists.artist.forEach(pos => {
        lista += `<tr>
                        <td>${pos.name}</td>
                        <td>${pos.playcount}</td>
                        <td>${pos.listeners}</td>
                    </tr>  
        `;

        listaArt.innerHTML = lista;


    })
}

lastFM();