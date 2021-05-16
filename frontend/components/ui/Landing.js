import Link from 'next/link'
import {Component} from 'react'
import Productcard from '../ui/Productcard'
 

export default class Landing extends Component {
    constructor (){
      super ()
    
    }
    render() {
      return (
            <div className='l-container'>
                <div className='banner'>
                    <div className='text'>
                        <div className='text-content'>
                            <p className='season'>For every season</p>
                            <h1 className='fashion'>fashion</h1>
                            <p className='season'>Look Your Best On Your Best Day</p>
                            <Link href='/'>
                                <a className='links cta-button'>Explore Now</a>
                            </Link>
                        </div>
                    </div>
                    <div className='image'>
                        {/* <img src='/images/white-blazer.png' width='100%' height='100%'/> */}
                    </div>

                </div>
                <div className='collection-top'>
                    <p className='season collection-p'>Collections</p>
                    <p className='line'></p>
                    <p className='season top'>Our Top collections</p>
                </div>
                <div className='collections'>
                    <div className='links-div'>
                       <Link href='/'>
                        <a className='link'>Accessories</a>
                    </Link>
                    <Link href='/'>
                        <a className='link'>Jewelries</a>
                    </Link>
                    <Link href='/'>
                        <a className='link'>Wears</a>
                    </Link>
                    <Link href='/'>
                        <a className='link'>Shoes</a>
                    </Link> 
                    </div>
                    
                </div>
                <Productcard />
                <div className='collection-top'>
                    <p className='season collection-p'>New Arrival</p>
                    <p className='line'></p>
                    <p className='season top'>Latest collections</p>
                </div>
                <div className='collection-div'>
                    <div className='collection-pics-div new-arrivals'>
                        <div className='new-arival-image'></div>
                    </div>
                    <div className='collection-pics-div new-arrivals'>
                        <div className='new-arival-image'></div> 
                    </div>

                </div>
                {/* products */}
                
                <div className='collection-top'>
                    <p className='season collection-p'>Top Categories</p>
                    <p className='line'></p>
                    <p className='season top'>Our Top Categories</p>
                </div>
                <Productcard />
     
            </div>
        
      )
    }
}