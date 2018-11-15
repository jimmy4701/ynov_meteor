import "./server-imports"

// Partie d'initialisation de l'application coté serveur

Meteor.startup(() => {
    
    // Check admin user
    // Si aucun utilisateur avec un role "admin" n'est trouvé, alors on en crée un
    if(Meteor.isDevelopment){
        const admin = Meteor.users.findOne({roles: 'admin'})
        if(!admin){
            const id = Accounts.createUser({
                email: Meteor.settings.private.ADMIN_EMAIL, 
                password: Meteor.settings.private.ADMIN_PASSWORD
            })
            Roles.addUsersToRoles(id, 'admin')
        }

    }
})