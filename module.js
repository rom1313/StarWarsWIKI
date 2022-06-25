


function creationportrait(nom) {
    if (nom === 'vador') {
        document.querySelector('#portrait').style.background = 'url("/img/vador.png")'
    }
    if (nom === 'lando') {
        document.querySelector('#portrait').style.background = 'url("/img/lando.png")'
    }
    if (nom === 'sidious') {
        document.querySelector('#portrait').style.background = 'url("/img/sidious.png")'
    }


}
function annalyserecherche(motrechecher) {
    if (motrechecher === '') {
        return
    }
    else {
      
        if (regexVador.test(motrechecher) === true) {

            getData('vader')

            return
        }
        if (regexSidious.test(motrechecher) === true) {

            getData('palpatine')
            return
        }
        else {
            console.log(recherche);
            getData(motrechecher)
        }

    }

}


