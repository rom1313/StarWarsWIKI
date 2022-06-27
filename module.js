let regexVador = /VADOR/gi
let regexSidious = /SIDIOUS/gi
let regexDooku = /TYRANUS/gi
let regexDooku2 = /DOKU/gi
let regexC3po = /C3PO/gi

function annalyserecherche(motrechecher) {
    if (motrechecher === '') {
        return
    }
    else {

        if (regexVador.test(motrechecher) === true) {

            getData('vader')

            return
        }
        if (regexC3po.test(motrechecher) === true) {

            getData('c-3po')

            return
        }
        if (regexSidious.test(motrechecher) === true) {

            getData('palpatine')
            return
        }
        if (regexDooku.test(motrechecher) === true || regexDooku2.test(motrechecher) === true) {

            getData('dooku')
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
    if (nom === 'maul') {

        document.querySelector('#portrait').style.background = 'url("/img/maul.png")'
    }
    if (nom === 'jango') {

        document.querySelector('#portrait').style.background = 'url("/img/jango.png")'
    }
    if (nom === 'boba') {

        document.querySelector('#portrait').style.background = 'url("/img/boba.png")'
    }
    if (nom === 'jabba') {

        document.querySelector('#portrait').style.background = 'url("/img/jabba.png")'
    }
    if (nom === 'hansolo') {

        document.querySelector('#portrait').style.background = 'url("/img/hansolo.png")'
    }
    if (nom === 'dooku') {

        document.querySelector('#portrait').style.background = 'url("/img/dooku.png")'
    }
    if (nom === 'r2d2') {

        document.querySelector('#portrait').style.background = 'url("/img/r2d2.png")'
    }
    if (nom === 'c3po') {

        document.querySelector('#portrait').style.background = 'url("/img/c3po.png")'
    }
    if (nom === 'leia') {

        document.querySelector('#portrait').style.background = 'url("/img/leia.png")'
    }
    if (nom === 'chewbacca') {

        document.querySelector('#portrait').style.background = 'url("/img/chewbacca.png")'
    }
    if (nom === 'windu') {

        document.querySelector('#portrait').style.background = 'url("/img/windu.png")'
    }


}


