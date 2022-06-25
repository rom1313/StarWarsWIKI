let recherche;
let genius = $



async function getData(name) {
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
            console.log(personnage.count);
            if (personnage.count > 1) {
                console.log('erreur');
                return
            }
            else {
                // todo ------------------------- nom
                nom = document.querySelector('#nom')
                let nomfr
                if (personnage.results[0].name === "Darth Vader") {
                    nomfr = 'Dark Vador (Anakin Skywalker)'
                    nom.textContent = ` ${nomfr} `

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
                peau.textContent = ` ${personnage.results[0].skin_color} `

                // todo ------------------------- yeux
                yeux = document.querySelector('#yeux')
                let yeuxfr;
                if (personnage.results[0].eye_color === 'red') {
                    yeuxfr = 'Rouges'

                }
                if (personnage.results[0].eye_color === 'blue') {
                    yeuxfr = 'Bleus'

                }

                if (personnage.results[0].eye_color === 'green') {
                    yeuxfr = 'Verts'

                }

                if (personnage.results[0].eye_color === 'yellow') {
                    yeuxfr = 'Jaunes'

                }
                if (personnage.results[0].eye_color === 'brown') {
                    yeuxfr = 'Marrons'

                }
                if (personnage.results[0].eye_color === 'orange') {
                    yeuxfr = 'Oranges'

                }




                yeux.textContent = ` ${yeuxfr} `

                // todo ------------------------- cheveux
                cheveux = document.querySelector('#cheveux')
                let cheveuxfr
                if (personnage.results[0].hair_color === 'blond') {
                    cheveuxfr = 'Blonds'
                }
                if (personnage.results[0].hair_color === 'none') {
                    cheveuxfr = 'Chauve'
                }
                if (personnage.results[0].hair_color === 'brown') {
                    cheveuxfr = 'Bruns'
                }
                if (personnage.results[0].hair_color === 'grey') {
                    cheveuxfr = 'Grisonnants'
                }
                if (personnage.results[0].hair_color === 'black') {
                    cheveuxfr = 'Noirs'
                }
                if (personnage.results[0].hair_color === 'n/a') {
                    cheveuxfr = 'Sans cheveux'
                }
                cheveux.textContent = ` ${cheveuxfr}`

                // todo ------------------------- sexe
                sexe = document.querySelector('#sexe')
                let sexefr;
                if (personnage.results[0].gender === 'male') {
                    sexefr = ' Masculin'

                }
                if (personnage.results[0].gender === 'female') {
                    sexefr = 'Feminin'
                }
                if (personnage.results[0].gender === 'n/a') {
                    sexefr = 'Non défini'
                }
                if (personnage.results[0].gender === 'hermaphrodite') {
                    sexefr = 'Hermaphrodite'
                }

                sexe.textContent = ` ${sexefr} `

            }
        });

}
document.querySelector('body').addEventListener('keypress', function (e) {
    let regexVador = /VADOR/gi

    if (e.key === 'Enter') {
        recherche = document.querySelector('#input').value
        if (recherche === '') {
            return
        }
        if (regexVador.test(recherche) === true) {

            getData('vader')
            return
        }
        else {
            console.log(recherche);
            getData(recherche)
        }

    }
});

document.querySelector('#recherche').addEventListener('click', (e) => {
    if (e.key === 'Enter') {
        recherche = document.querySelector('#input').value
        if (recherche === '') {
            return
        }
        if (regexVador.test(recherche) === true) {

            getData('vader')
            return
        }
        else {
            console.log(recherche);
            getData(recherche)
        }

    }



})

