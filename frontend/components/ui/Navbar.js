import Head from 'next/head'
import Link from 'next/link'
import {Component} from 'react'
 

export default class Navbar extends Component {
    constructor (){
      super ()
    
    }
    render() {
      return (
        <nav className='nav'>
          <div>
            <Link href='/'>
              <a id='logo'><span id='elogo'>Z</span>shops </a>
            </Link>
          </div>
            
            <div className='search-div'>
              <form>
                  <input className='inpu' type='text' placeholder='Search' className='search-res '/>
              </form>
            </div>
            
            <div className='header-right'>
            
            
            
            {/* <span className='menu-icon'>menu</span> */}
            <Link href='/products_view'>
                <a className='shop-now-res'>Shop Now</a>
            </Link>
            <Link href='/'>
                <a className='shift-res'>Sign-in</a>
            </Link>
            
            <Link href='/'>
                <a className='shift-res reg-res'>cart</a>
            </Link>
            </div>
            
        </nav>
        
      )
    }
}