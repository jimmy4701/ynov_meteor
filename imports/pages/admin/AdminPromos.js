import React, {Component, Fragment} from 'react'
import { PromoForm } from '/imports/components'
import { Promos } from '/imports/api/promos/promos'
import { Container, Loader } from 'semantic-ui-react'
import { withTracker } from 'meteor/react-meteor-data'

class AdminPromos extends Component {

    render(){
        const {loading, promos} = this.props
        return(
            <Container>
                <PromoForm />
                {loading ? 
                    <Loader>Chargement des promos</Loader> 
                : 
                    <Fragment>
                        {promos.map(promo => <p>{promo.name}</p>)}
                    </Fragment>
                }
            </Container>
        )
    }
}

export default AdminPromosContainer = withTracker((props) => {
    const promosPublication = Meteor.subscribe('promos.all')
    const loading = !promosPublication.ready()
    const promos = Promos.find({}).fetch()
    return {
        loading,
        promos
    }
})(AdminPromos)