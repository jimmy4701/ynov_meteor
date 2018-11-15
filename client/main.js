import React from 'react'
import ReactDOM from 'react-dom'
import App from '/imports/startup/App'

import "react-datepicker/dist/react-datepicker.css"

/*
    Initialisation de l'application coté client
    On affiche le composant App (base de l'application React) dans la div#root du fichier main.html

    Le fichier main.html se trouvant à la racine du projet, il est pris automatiquement comme la base 
    HTML à afficher.
*/

Meteor.startup(() => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    )
})
