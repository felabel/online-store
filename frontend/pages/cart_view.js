import {Component } from 'react'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import Cart from '../components/ui/Cart'

export default class cart_view extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <Navbar />
                <Cart />
                
                <Footer id='footer'/>
            </div>
        )
    }
}