import {Component} from 'react'
import Productsdetails from '../components/ui/productsDetails'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'

export default class Details extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <Navbar />
                <Productsdetails />
                
                <Footer id='footer'/>
            </div>
        )
    }
}