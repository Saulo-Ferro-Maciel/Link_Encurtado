function encurtarLink(){
    let url =document.getElementById('input-url').value;
    if(!url){
        alert("Por favor, coloque um link válido!");
        return;
    }else if(url.search('rebrand.ly') !== -1 || url.search('https') !== -1){
        alert("Por favor, coloque um link válido!");
        return;
    }else{
        let header = {
            "Content-Type": "application/json",
            "apiKey": "63ad6f1c36d34ac98fdb03c5f96e7ba1"
        }
    
        let linkRequest ={
            destination: url,
            domain: {fullName: "rebrand.ly"}
        }

        fetch("https://api.rebrandly.com/v1/links",{
            method: "POST",
            headers: header,
            body: JSON.stringify(linkRequest)
        })
            .then(reponse => reponse.json())
            .then(json => {
                let inputUrl = document.getElementById('input-url');
                inputUrl.value = json.shortUrl;
            });
    }
    
}

function copiarLink() {
    let inputUrl = document.getElementById('input-url');
    let url =document.getElementById('input-url').value;

    if(!url){
        alert("Por favor, coloque um link válido!");
        return;
    } else if(url.search('rebrand.ly') !== -1 || url.search('undefined') !== -1){
        alert("Coloque um link válido ou aperte o botão de encurtar link.");
        return;
    } else{
        inputUrl.select();
        inputUrl.setSelectionRange(0, 99999);

        document.execCommand('copy');

        alert(`Link Copiado Com Sucesso: ${inputUrl.value}`);
    }
}
