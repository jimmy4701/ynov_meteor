import React, {Component} from 'react'
var stripe = Stripe(Meteor.settings.public.STRIPE_PUBLIC_KEY)
var elements = stripe.elements();
import { toast } from 'react-toastify'

export default class CardForm extends Component {
    state = {

    }

    componentDidMount(){
        var card = elements.create('card')
        card.mount('#card-element')

        document.getElementById('payment-form').addEventListener('submit', async (event) => {
            event.preventDefault()

            await stripe.createToken(card).then((result) => {
                if (result.error) {
                    console.log("STRIPE ERROR", result.error)
                    toast.error(result.error)
                } else {
                    console.log("STRIPE TOKEN", result.token)
                    this.props.onToken(result.token)
                }
              });
        })
    }


    render(){
        return(
            <form id="payment-form">
                <div id="card-element"></div>
            </form>
        )
    }
}