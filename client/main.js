import React from 'react'
import ReactDOM from 'react-dom'
import Landing from '/imports/pages/Landing'

Meteor.startup(() => {
    ReactDOM.render(
        <Landing />,
        document.getElementById('root')
    )
})
