import {Meteor} from 'meteor/meteor'
var stripe = require("stripe")(Meteor.settings.private.STRIPE_PRIVATE_KEY);


// Méthodes / endpoints pour les utilisateurs

Meteor.methods({
    async 'users.signup'({email, password, token}){
        console.log('---------------- STRIPE CALL-----------------')
        console.log("STRIPE TOKEN", token.id)
        
        const customer = await stripe.customers.create({
            description: email
            
        })
        console.log('Stripe customer', customer.id)
        
        const source = await stripe.customers.createSource(
            customer.id,
            { source: token.id }
            )
            
        console.log("Stripe source", source.id)

        const subscription = await stripe.subscriptions.create({
            customer: customer.id,
            items: [
                {
                  plan: "school_year",
                  quantity: 1
                }
              ]
        })

        console.log("Stripe subscription", subscription.id)
        

        if(subscription){
            const user_id = Accounts.createUser({email, password})
            Meteor.users.update({_id: user_id}, {$set: {
                roles: ['subscribed'], 
                stripe: {customer: customer.id, subscription: subscription.id} 
            }})
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
    async 'users.update_subscription'(){
        const user = Meteor.users.findOne({_id: this.userId})
        const subscription = await stripe.subscriptions.retrieve(user.stripe.subscription)
        console.log('SUBSCRIPTION', subscription.items)
        const item_id = subscription.items.data[0].id

        const stripe_item = await stripe.subscriptionItems.update(
            item_id,
            {quantity: 2}
        )

        console.log("STRIPE ITEM", stripe_item)
    },
    'stripe.check_token'(token){
        
    }
})