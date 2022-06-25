let recherche;
let genius = $
let regexVador = /VADOR/gi
let regexSidious = /SIDIOUS/gi


async function getData(name) {
    document.querySelector('#portrait').style.background = ''
    document.querySelector('#portrait').style.display = 'none'
    document.querySelector('#info').style.display = 'none'
    let personnage;
    let nom;
    let taille;
    let poids;
    let naissance;
    let peau;
    let yeux;
    let cheveux;
    let sexe;




    fetch(`https://swapi.dev/api/people/?search=${name}`)
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            personnage = json

            if (personnage.count > 1 || personnage.count === 0) {
                console.log('erreur');
                return
            }
            else {
                document.querySelector('#portrait').style.display = 'flex'
                document.querySelector('#portrait').style.animation = 'apparition ease-in 1.2s forwards'
                document.querySelector('#info').style.display = 'flex'
                document.querySelector('#info').style.animation = 'apparition ease-in 1.2s forwards'

                // todo ------------------------- nom
                nom = document.querySelector('#nom')
                let nomfr
                if (personnage.results[0].name === "Darth Vader") {
                    nomfr = 'Dark Vador (Anakin Skywalker)'
                    nom.textContent = ` ${nomfr} `
                    creationportrait('vador')

                }
                else if (personnage.results[0].name === "Anakin Skywalker") {
                    nomfr = 'Anakin Skywalker (Jedi)'
                    nom.textContent = ` ${nomfr} `
                    creationportrait('anakin')

                }
                else if (personnage.results[0].name === "Palpatine") {
                    nomfr = 'Dark Sidious (Palpatine)'
                    nom.textContent = ` ${nomfr} `
                    creationportrait('sidious')

                }
                else if (personnage.results[0].name === "Lando Calrissian") {
                    nom.textContent = ` ${personnage.results[0].name} `

                    creationportrait('lando')

                }
                else {
                    nom.textContent = ` ${personnage.results[0].name} `
                }



                // todo ------------------------- taille
                taille = document.querySelector('#taille')
                taille.textContent = ` ${personnage.results[0].height}` / 100 + " m"

                // todo ------------------------- poids
                poids = document.querySelector('#poids')
                poids.textContent = ` ${personnage.results[0].mass} Kilos`

                // todo ------------------------- naissance
                naissance = document.querySelector('#naissance')
                naissance.textContent = ` ${personnage.results[0].birth_year} `

                // todo ------------------------- peau
                peau = document.querySelector('#peau')
                let peaufr
                if (personnage.results[0].skin_color === 'white') {
                    peaufr = "Très pâle"
                }
                else if (personnage.results[0].skin_color === 'fair') {
                    peaufr = "Claire"
                }
                else if (personnage.results[0].skin_color === 'pale') {
                    peaufr = "Pâle"
                }
                else if (personnage.results[0].skin_color === 'dark') {
                    peaufr = "Sombre"
                }
                else if (personnage.results[0].skin_color === 'green') {
                    peaufr = "Verte"
                }
                peau.textContent = peaufr

                // todo ------------------------- yeux
                yeux = document.querySelector('#yeux')
                let yeuxfr;
                if (personnage.results[0].eye_color === 'red') {
                    yeuxfr = 'Rouges'

                }
                else if (personnage.results[0].eye_color === 'blue') {
                    yeuxfr = 'Bleus'

                }

                else if (personnage.results[0].eye_color === 'green') {
                    yeuxfr = 'Verts'

                }

                else if (personnage.results[0].eye_color === 'yellow') {
                    yeuxfr = 'Jaunes'

                }
                else if (personnage.results[0].eye_color === 'brown') {
                    yeuxfr = 'Marrons'

                }
                else if (personnage.results[0].eye_color === 'orange') {
                    yeuxfr = 'Oranges'

                }
                else if (personnage.results[0].eye_color === 'blue-gray') {
                    yeuxfr = 'Bleus'

                }






                yeux.textContent = ` ${yeuxfr} `

                // todo ------------------------- cheveux
                cheveux = document.querySelector('#cheveux')
                let cheveuxfr
                if (personnage.results[0].hair_color === 'blond') {
                    cheveuxfr = 'Blonds'
                }
                else if (personnage.results[0].hair_color === 'none') {
                    cheveuxfr = 'Chauve'
                }
                else if (personnage.results[0].hair_color === 'brown') {
                    cheveuxfr = 'Bruns'
                }
                else if (personnage.results[0].hair_color === 'grey') {
                    cheveuxfr = 'Grisonnants'
                }
                else if (personnage.results[0].hair_color === 'black') {
                    cheveuxfr = 'Noirs'
                }
                else if (personnage.results[0].hair_color === 'n/a') {
                    cheveuxfr = 'Sans cheveux'
                }
                else if (personnage.results[0].hair_color === 'white') {
                    cheveuxfr = 'Blancs'
                }
                else if (personnage.results[0].hair_color === 'auburn, white') {
                    cheveuxfr = 'Chatains / Blancs'
                }

                cheveux.textContent = ` ${cheveuxfr}`

                // todo ------------------------- sexe
                sexe = document.querySelector('#sexe')
                let sexefr;
                if (personnage.results[0].gender === 'male') {
                    sexefr = ' Masculin'

                }
                else if (personnage.results[0].gender === 'female') {
                    sexefr = 'Feminin'
                }
                else if (personnage.results[0].gender === 'n/a') {
                    sexefr = 'Non défini'
                }
                else if (personnage.results[0].gender === 'hermaphrodite') {
                    sexefr = 'Hermaphrodite'
                }

                sexe.textContent = ` ${sexefr} `

            }
        });

}

// todo ------------------------- Event entrer
document.querySelector('body').addEventListener('keypress', function (e) {


    if (e.key === 'Enter') {
        recherche = document.querySelector('#input').value

        if (recherche === '') {
            return
        }
        else {
            annalyserecherche(recherche)
        }


    }
});

// todo ------------------------- Event click boutton recheche
document.querySelector('#recherche').addEventListener('click', (e) => {

    recherche = document.querySelector('#input').value
    annalyserecherche(recherche)


})

