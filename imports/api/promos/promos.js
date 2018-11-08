import {Mongo} from 'meteor/mongo'
import SimpleSchema from 'simpl-schema'

// Définition de la collection Promos en base de données MongoDB et son schéma

export const Promos = new Mongo.Collection('promos')

Promos.schema = new SimpleSchema({
    name: String,
    start_date: Date,
    end_date: Date,
    comment: {
        type: String,
        optional: true
    },
    created_at: {
        type: Date,
        defaultValue: Date.now()
    }
})

