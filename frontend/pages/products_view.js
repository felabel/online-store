import {Component} from 'react'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import Products from '../components/ui/Products'


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
                <Products />
                <Footer />
            </section>
        )
    }
}