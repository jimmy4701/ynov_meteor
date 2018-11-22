import {Meteor} from 'meteor/meteor'
var stripe = require("stripe")(Meteor.settings.private.STRIPE_PRIVATE_KEY);

// Méthodes / endpoints pour les utilisateurs

Meteor.methods({
    async 'users.signup'({email, password, token}){
        console.log('---------------- STRIPE CALL-----------------')
        console.log("STRIPE TOKEN", token.id)
        
        console.log('STRIPE CHECK TOKEN', token)
        const charge = await stripe.charges.create({
            source: token.id,
            amount: 200,
            currency: "eur",
            description: "PAIEMENT TEST"
        })

        console.log('charge', charge)
        if(charge){
            Accounts.createUser({email, password})
        }

        
    },
    'users.remove'(user_id){
        if(Roles.userIsInRole(this.userId, 'admin') && (user_id != this.userId)){
            if(!Roles.userIsInRole(user_id, 'admin')){
                Meteor.users.remove({_id: user_id})
            }
        }else{
            throw new Meteor.Error('403', "Vous n'etes pas administrateur")
        }
    },
    'stripe.check_token'(token){
        
    }
})