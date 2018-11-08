import "/imports/api/users/server/methods"
import "/imports/api/users/server/publications"

Meteor.startup(() => {
    
    // Check admin user
    const admin = Meteor.users.findOne({roles: 'admin'})
    if(!admin){
        const id = Accounts.createUser({email: "admin@yopmail.com", password: "admin"})
        Roles.addUsersToRoles(id, 'admin')
    }
})