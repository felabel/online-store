import Head from 'next/head'
import { Component } from "react"
import Navbar from '../components/ui/Navbar'
import Landing from '../components/ui/Landing'
import Footer from '../components/ui/Footer'
// import Layout from '../components/layout'
// import Productcard

export default class App extends Component {
    constructor (){
      super ()
    
    }
    render() {
      return (
        <div className='container'>
          <Navbar  />
          <Landing />
          <Footer />

        </div>
      )
    }
}
