import {Meteor} from 'meteor/meteor'
import { Promos } from '../promos'

// Méthodes / endpoints pour les promos

Meteor.methods({
    'promos.insert'(promo){
        Promos.insert(promo)
        console.log('SERVER : Promo créée')
    },
    'promos.update'(promo){
        Promos.update({_id: promo._id}, {$set: promo})
        console.log('SERVER : Promo créée')
    }
})

