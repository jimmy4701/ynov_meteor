import React, {Component, Fragment} from 'react'
import { Form, TextArea, Button } from 'semantic-ui-react'
import { toast } from 'react-toastify'
import DatePicker from 'react-datepicker'
import moment from 'moment'

export default class PromoForm extends Component{
    state = {
        promo: {}
    }

    componentWillReceiveProps(props){
        if(props.promo) this.setState({promo: props.promo})
    }

    handleChange = (event, {name, value}) => {
        let {promo} = this.state
        promo[name] = value
        this.setState({promo})
    }

    submitPromo = (e) => {
        e.preventDefault()
        const {promo} = this.state
        promo.start_date = promo.start_date.toString()
        promo.end_date = promo.end_date.toString()
        console.log('submit promo')
        Meteor.call(this.props.promo ? 'promos.update' : 'promos.insert', promo, (error, result) => {
            if(error){
                console.log(error.message)
                toast.error(error.reason)
            }else{
                toast.success(`Promo ${this.props.promo ? 'modifiée' : 'créée'}`)
                this.setState({promo: {}})
            }
        } )
    }

    remove = () => {
        const {promo} = this.props
        Meteor.call('promos.remove', promo._id , (error, result) => {
            if(error){
                console.log('Erreur', error.message)
                toast.error(error.message)
            }else{
                toast.success("Promo supprimée")
                this.setState({promo: {}})
                if(this.props.onRemove){
                    this.props.onRemove()
                }
            }
        })
    }

    handleSelectDate = (date, attr) => {
        let {promo} = this.state
        promo[attr] = date
        this.setState({promo})
    }
    

    render(){
        const {promo} = this.state
        return(
            <Fragment>
                <Form onSubmit={this.submitPromo}>
                    <Form.Input
                        label='Nom de la promo'
                        onChange={this.handleChange}
                        value={promo.name ? promo.name : ""}
                        name='name'
                        required
                    />
                    <TextArea
                        onChange={this.handleChange}
                        name="comment"
                        value={promo.comment ? promo.comment : ""}
                        placeholder="Commentez la promo"
                    />
                    <Form.Field>
                        <label>Date de départ</label>
                        <DatePicker
                            selected={promo.start_date}
                            onChange={(date) => this.handleSelectDate(date, 'start_date')}
                            name="start_date"
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Date de fin</label>
                        <DatePicker
                            selected={promo.end_date}
                            onChange={(date) => this.handleSelectDate(date, 'end_date')}
                            name="end_date"
                        />
                    </Form.Field>
                    <Button>{this.props.promo ? "Modifier" : "Créer"}</Button>
                </Form>
                {this.props.promo && <Button onClick={this.remove}>Supprimer</Button>}
            </Fragment>
        )
    }
}