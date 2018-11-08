import "/imports/api/users/server/methods"
import "/imports/api/users/server/publications"
import "/imports/api/promos/server/methods"
import "/imports/api/promos/server/publications"

// Partie d'initialisation de l'application coté serveur

Meteor.startup(() => {
    
    // Check admin user
    // Si aucun utilisateur avec un role "admin" n'est trouvé, alors on en crée un
    const admin = Meteor.users.findOne({roles: 'admin'})
    if(!admin){
        const id = Accounts.createUser({email: "admin@yopmail.com", password: "admin"})
        Roles.addUsersToRoles(id, 'admin')
    }
})