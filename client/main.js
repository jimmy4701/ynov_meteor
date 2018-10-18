import React from 'react'
import ReactDOM from 'react-dom'
import App from '/imports/startup/App'

Meteor.startup(() => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    )
})
