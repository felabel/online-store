import Link from 'next/link'
import {Component} from 'react'
 

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
                    <div className='image'><img src='/images/white-blazer.png' width='100%' height='100%'/></div>

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
                <div className='collection-div'>
                    {/* <div className='collection-pics'> */}
                        <div className='collection-pics-div'>
                            <div className='product-image'>
                                <div className='image-container'>
                                    <div className='product-image-pic'></div>
                                    
                                </div>
                            </div>
                            
                            <div className='product-details'>
                                <p className='product-name product-ndp'>Sneakers</p>
                                <p className='product-description  product-ndp'>Female Fashion Sneakers</p>
                                <div className='price-and-cart'>
                                 <span className='product-price  product-ndp'>$15.25</span>
                                    <span className='cta-add-to-cart cta-button'>Add To Cart</span>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className='collection-pics-div'>
                        <div className='product-image'>
                                <div className='image-container'>
                                    <div className='product-image-pic'></div>
                                    
                                </div>
                            </div>
                            
                            <div className='product-details'>
                                <p className='product-name product-ndp'>Sneakers</p>
                                <p className='product-description  product-ndp'>Female Fashion Sneakers</p>
                                <div className='price-and-cart'>
                                 <span className='product-price  product-ndp'>$15.25</span>
                                    <span className='cta-add-to-cart cta-button'>Add To Cart</span>
                                </div>
                                
                            </div>
                        </div>
                        <div className='collection-pics-div'>
                        <div className='product-image'>
                                <div className='image-container'>
                                    <div className='product-image-pic'></div>
                                    
                                </div>
                            </div>
                            
                            <div className='product-details'>
                                <p className='product-name product-ndp'>Sneakers</p>
                                <p className='product-description  product-ndp'>Female Fashion Sneakers</p>
                                <div className='price-and-cart'>
                                 <span className='product-price  product-ndp'>$15.25</span>
                                    <span className='cta-add-to-cart cta-button'>Add To Cart</span>
                                </div>
                                
                            </div>
                        </div>

                    {/* </div> */}
                </div>
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
                <div className='collection-top'>
                    <p className='season collection-p'>Top Categories</p>
                    <p className='line'></p>
                    <p className='season top'>Our Top Categories</p>
                </div>
                <div className='collection-div'>
                    {/* <div className='collection-pics'> */}
                        <div className='collection-pics-div'>
                            <div className='product-image'>
                                <div className='image-container'>
                                    <div className='product-image-pic'></div>
                                    
                                </div>
                            </div>
                            
                            <div className='product-details'>
                                <p className='product-name product-ndp'>Sneakers</p>
                                <p className='product-description  product-ndp'>Female Fashion Sneakers</p>
                                <div className='price-and-cart'>
                                 <span className='product-price  product-ndp'>$15.25</span>
                                    <span className='cta-add-to-cart cta-button'>Add To Cart</span>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className='collection-pics-div'>
                        <div className='product-image'>
                                <div className='image-container'>
                                    <div className='product-image-pic'></div>
                                    
                                </div>
                            </div>
                            
                            <div className='product-details'>
                                <p className='product-name product-ndp'>Sneakers</p>
                                <p className='product-description  product-ndp'>Female Fashion Sneakers</p>
                                <div className='price-and-cart'>
                                 <span className='product-price  product-ndp'>$15.25</span>
                                    <span className='cta-add-to-cart cta-button'>Add To Cart</span>
                                </div>
                                
                            </div>
                        </div>
                        <div className='collection-pics-div'>
                        <div className='product-image'>
                                <div className='image-container'>
                                    <div className='product-image-pic'></div>
                                    
                                </div>
                            </div>
                            
                            <div className='product-details'>
                                <p className='product-name product-ndp'>Sneakers</p>
                                <p className='product-description  product-ndp'>Female Fashion Sneakers</p>
                                <div className='price-and-cart'>
                                 <span className='product-price  product-ndp'>$15.25</span>
                                    <span className='cta-add-to-cart cta-button'>Add To Cart</span>
                                </div>
                                
                            </div>
                        </div>

                    {/* </div> */}
                </div>
            </div>
        
      )
    }
}