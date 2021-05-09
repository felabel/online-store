import Head from 'next/head'
import Link from 'next/link'
import {Component} from 'react'
 

export default class Navbar extends Component {
    constructor (){
      super ()

      this.showMenu = this.showMenu.bind(this)
      this.hideMenu = this.hideMenu.bind(this)
    
    }
    showMenu(){
      // get the mobile menu class and display it to none when clicked
      var harmburger = document.querySelector('.harmburger');
      harmburger.style.display = 'none';
      // get the hidemenu and display block when the menu button is clicked
      var cancel = document.querySelector('.cancel');
      cancel.style.display = 'block';
      cancel.style.float = 'right';
      cancel.style.position = 'absolute';
      cancel.style.top = 10 + '%';
      cancel.style.right = 30 + 'px';
      // getting the contents of the nav to display
      var mobile_menu = document.querySelector('.header-right');
      mobile_menu.style.display = 'block'
      // styling the nav bar
      mobile_menu.style.backgroundColor = 'tomato'
      // mobile_menu.style.borderBottom =  'none'
      mobile_menu.style.width = 100 + '%'
      var search = document.querySelector('.search-div');
      search.style.display = 'block';
      // shop link
      var shopNow = document.querySelector('.shop-now-res');
      shopNow.style.display = 'block'
      shopNow.style.padding = 15 + 'px'
      // sign-in link
      var signIn = document.querySelector('.sign-in');
      signIn.style.display = 'block'
      signIn.style.padding = 15 + 'px'

      // cart link
      var cart = document.querySelector('.cart');
      cart.style.display = 'block'
      cart.style.padding = 15 + 'px'

      // styling the nav bar
      search.style.width = 100 + '%';
      // search.style.borderBottom = 0 ;
      var nav = document.querySelector('.nav');
      nav.style.display = 'block'
    }
    hideMenu() {
      var search = document.querySelector('.search-div');
      search.style.display = 'none';
      var cancel = document.querySelector('.cancel');
      cancel.style.display = 'none';
      var mobile_menu = document.querySelector('.header-right');
      mobile_menu.style.display = 'none'
      var harmburger = document.querySelector('.harmburger');
      harmburger.style.display = 'block';
      harmburger.style.float = 'right';
      harmburger.style.position = 'absolute';
      harmburger.style.top = 30 + '%';
      harmburger.style.right = 30 + 'px';
      
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
              <form className='search-form'>
                <input className='inpu' type='text' placeholder='Search' className='search-res '/>
              </form>
            </div>
            <div className='hamburger'>
              <span className='harmburger' onClick={this.showMenu}>Menu</span>
            </div>
            <div className='cancel'>
              <span className='m' onClick={this.hideMenu}>cancel</span>
            </div>
            
            <div className='header-right  '>
            
            
            
            {/* <span className='menu-icon'>menu</span> */}
            <Link href='/products_view'>
                <a className='shop-now-res'>Shop Now</a>
            </Link>
            <Link href='/'>
                <a className='shift-res sign-in'>Sign-in</a>
            </Link>
            
            <Link href='/'>
                <a className='shift-res cart'>cart</a>
            </Link>
            </div>
            
        </nav>
        
      )
    }
}