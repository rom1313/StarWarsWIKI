
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

function creationportrait(nom) {
    if (nom === 'vador') {

        document.querySelector('#portrait').style.background = 'url("/img/vador.png")'
    }
    if (nom === 'sidious') {

        document.querySelector('#portrait').style.background = 'url("/img/sidious.png")'
    }
    if (nom === 'lando') {

        document.querySelector('#portrait').style.background = 'url("/img/lando.png")'
    }
    if (nom === 'anakin') {

        document.querySelector('#portrait').style.background = 'url("/img/anakin.png")'
    }
    if (nom === 'yoda') {

        document.querySelector('#portrait').style.background = 'url("/img/yoda.png")'
    }
    if (nom === 'luke') {

        document.querySelector('#portrait').style.background = 'url("/img/luke.png")'
    }
    if (nom === 'padme') {

        document.querySelector('#portrait').style.background = 'url("/img/padme.png")'
    }
    if (nom === 'obiwan') {

        document.querySelector('#portrait').style.background = 'url("/img/obiwan.png")'
    }
    if (nom === 'quigon') {

        document.querySelector('#portrait').style.background = 'url("/img/quigonjin.png")'
    }


}


