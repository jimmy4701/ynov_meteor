import {Meteor} from 'meteor/meteor'
import { Promos } from '../promos'

// Méthodes / endpoints pour les promos

Meteor.methods({
    'promos.insert'(promo){
        Promos.insert(promo)
        console.log('Promo créée')
    }
})

