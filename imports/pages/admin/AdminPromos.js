import React, {Component, Fragment} from 'react'
import { PromoForm } from '/imports/components'
import { Promos } from '/imports/api/promos/promos'
import { Container, Loader } from 'semantic-ui-react'
import { withTracker } from 'meteor/react-meteor-data'

class AdminPromos extends Component {

    state = {}

    editPromo = (active_promo) => this.setState({active_promo})

    clearActivePromo = () => this.setState({active_promo: null})

    render(){
        const {loading, promos} = this.props
        const {active_promo} = this.state
        return(
            <Container>
                <PromoForm promo={active_promo} onRemove={this.clearActivePromo}/>
                {loading ? 
                    <Loader>Chargement des promos</Loader> 
                : 
                    <Fragment>
                        {promos.map(promo => <p onClick={() => this.editPromo(promo)}>{promo.name}</p>)}
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