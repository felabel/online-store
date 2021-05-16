import {Component} from 'react'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import Productcard from '../components/ui/Productcard'


export default class products_view extends Component{
    constructor(){
        super()
    }
    render() {
        return (
            <section className='product_views'>
                <Navbar />
                {/* <Products />
                <Products />
                <Products /> */}
                <Productcard />
                
                <Footer />
            </section>
        )
    }
}