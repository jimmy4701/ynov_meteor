import { Meteor } from 'meteor/meteor'
import { Promos } from '/imports/api/promos/promos'

Meteor.publish('promos.all', function(){
    Promos.find({})
})