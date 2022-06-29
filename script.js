let recherche;
let genius = $



async function getData(name) {

    document.querySelector('#portrait').style.background = ''


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

                document.querySelector('#alerte').style.display = 'flex'
                document.querySelector('#alerte').style.animation = 'apparition ease-in 1.2s forwards'
                console.log('erreur');
                return
            }
            else {

                document.querySelector('#alerte').style.display = 'none'


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
                else if (personnage.results[0].name === "Leia Organa") {
                    nomfr = 'Leia Organa (Princesse Leia)'
                    nom.textContent = ` ${nomfr} `
                    creationportrait('leia')

                }
                else if (personnage.results[0].name === "Han Solo") {
                    nom.textContent = ` ${personnage.results[0].name} `
                    creationportrait('hansolo')

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
                else if (personnage.results[0].name === "Darth Maul") {
                    nomfr = 'Dark Maul'
                    nom.textContent = ` ${nomfr} `
                    creationportrait('maul')

                }
                else if (personnage.results[0].name === "Dooku") {
                    nomfr = 'Dark Tyranus (Conte Dooku)'
                    nom.textContent = ` ${nomfr} `
                    creationportrait('dooku')

                }
                else if (personnage.results[0].name === "Lando Calrissian") {
                    nom.textContent = ` ${personnage.results[0].name} `

                    creationportrait('lando')

                }
                else if (personnage.results[0].name === "Yoda") {
                    nomfr = 'Yoda (Maître Yoda)'
                    nom.textContent = ` ${nomfr} `

                    creationportrait('yoda')

                }
                else if (personnage.results[0].name === "Luke Skywalker") {

                    nom.textContent = ` ${personnage.results[0].name} `
                    creationportrait('luke')

                }
                else if (personnage.results[0].name === "Padmé Amidala") {
                    nom.textContent = ` ${personnage.results[0].name} `

                    creationportrait('padme')

                }
                else if (personnage.results[0].name === "Obi-Wan Kenobi") {
                    nomfr = 'Obi-Wan Kenobi (Ben Kenobi)'
                    nom.textContent = ` ${nomfr} `

                    creationportrait('obiwan')

                }
                else if (personnage.results[0].name === "Qui-Gon Jinn") {
                    nom.textContent = ` ${personnage.results[0].name} `

                    creationportrait('quigon')

                }
                else if (personnage.results[0].name === "Jabba Desilijic Tiure") {
                    nom.textContent = ` ${personnage.results[0].name} `

                    creationportrait('jabba')

                }
                else if (personnage.results[0].name === "R2-D2") {
                    nom.textContent = ` ${personnage.results[0].name} `

                    creationportrait('r2d2')

                }
                else if (personnage.results[0].name === "C-3PO") {
                    nom.textContent = ` ${personnage.results[0].name} `

                    creationportrait('c3po')

                }
                else if (personnage.results[0].name === "Boba Fett") {
                    nom.textContent = ` ${personnage.results[0].name} `

                    creationportrait('boba')

                }
                else if (personnage.results[0].name === "Jango Fett") {
                    nom.textContent = ` ${personnage.results[0].name} `

                    creationportrait('jango')

                }
                else if (personnage.results[0].name === "Chewbacca") {
                    nom.textContent = ` ${personnage.results[0].name} `

                    creationportrait('chewbacca')

                }
                else if (personnage.results[0].name === "Mace Windu") {
                    nom.textContent = ` ${personnage.results[0].name} `

                    creationportrait('windu')

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
                let naissancefr = []
                let naissancevalue = Array.from(personnage.results[0].birth_year)
                naissancevalue.forEach(element => {
                    if (element === 'B' || element === 'Y') {
                        element = ''
                    }
                    else {
                        naissancefr.push(element)
                    }
                });

                naissancefr = naissancefr.toString()
                console.log(naissancefr);
                naissancefr = naissancefr.replace(/,/g, '')
                naissancefr += ' av la bataille de Yavin'

                naissance.textContent = ` ${naissancefr}`

                // todo ------------------------- peau
                peau = document.querySelector('#peau')
                let peaufr
                if (personnage.results[0].skin_color === 'white') {
                    peaufr = "Très pâle"
                }
                else if (personnage.results[0].skin_color === 'fair' || personnage.results[0].skin_color === 'light') {
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
                else if (personnage.results[0].skin_color === "green-tan, brown") {
                    peaufr = "Beige / Verte"
                }
                else if (personnage.results[0].skin_color === "red") {
                    peaufr = "Rouge"
                }
                else if (personnage.results[0].skin_color === "gold") {
                    peaufr = "Doré"
                }
                else if (personnage.results[0].skin_color === "tan") {
                    peaufr = "Bronzé"
                }
                else if (personnage.results[0].skin_color === "unknown") {
                    peaufr = "Inconnu"
                }
                else if (personnage.results[0].skin_color === "white, blue") {
                    peaufr = "Blanc / Bleue"
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
    document.querySelector('#input').value = ''
}

// todo ------------------------- Event entrer
document.querySelector('body').addEventListener('keypress', function (e) {


    if (e.key === 'Enter') {
        recherche = document.querySelector('#input').value
        annalyserecherche(recherche)



    }
});

// todo ------------------------- Event click boutton recheche
document.querySelector('#recherche').addEventListener('click', (e) => {

    recherche = document.querySelector('#input').value
    annalyserecherche(recherche)


})

