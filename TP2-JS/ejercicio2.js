

const lastFM = async() => {
    const apikey = '6fd5fb7d61868a22de560ad48ec2112d';
    const resp = await fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=10&api_key=6fd5fb7d61868a22de560ad48ec2112d&format=json`);
    const artistas = await resp.json();

    console.log(resp);
    console.log(artistas);

    let lista = `<table>
                        <tr>
                            <td>Artista</td>
                            <td>Reporducciones</td>
                            <td>Oyentes</td>
                        </tr>
                    </table>`

    const listaArt = document.querySelector("table")

    artistas.artist.forEach(pos => {
        lista += `<table>
                    <tr>
                        <td>${pos.name}</td>
                        <td>${pos.playcount}</td>
                        <td>${pos.listener}</td>
                    </tr>
                </table>
        `;

        listaArt.innerHTML = lista;


    })
}

lastFM();