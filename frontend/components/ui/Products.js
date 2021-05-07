import {Component} from 'react'
import Link from 'next/link'
export default class Product extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className='collection-div'>
            {/* start of product card */}
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
                         <Link href='/Details'>
                         <a><span className='cta-add-to-cart cta-button'>View</span></a>

                         </Link>
                        </div>
                        
                    </div>
                    
                </div>
            {/* end of product card */}
            {/* start of product card */}
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
                            <a><span className='cta-add-to-cart cta-button'>View</span></a>
                        </div>
                        
                    </div>
                    
                </div>
            {/* end of product card */}
            {/* start of product card */}
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
                            <a><span className='cta-add-to-cart cta-button'>View</span></a>
                        </div>
                        
                    </div>
                    
                </div>
            {/* end of product card */}
                
               
            
            </div> 
        )
    }
}

