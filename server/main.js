import "./server-imports"
var stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

// Partie d'initialisation de l'application coté serveur

Meteor.startup(() => {
    
    // Check admin user
    // Si aucun utilisateur avec un role "admin" n'est trouvé, alors on en crée un
    if(Meteor.isDevelopment){
        const admin = Meteor.users.findOne({roles: 'admin'})
        if(!admin){

            const id = Accounts.createUser({
                email: "admin@yopmail.com", 
                password: "admin"
            })


            // BONNE MANIERE DE FAIRE <3
            // Lancer l'appli avec "meteor --settings SETTING_FILE.JSON"
            // const id = Accounts.createUser({
            //     email: Meteor.settings.private.ADMIN_EMAIL, 
            //     password: Meteor.settings.private.ADMIN_PASSWORD
            // })
            Roles.addUsersToRoles(id, 'admin')
        }

    }
})