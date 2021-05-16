import {Component} from 'react'
import Link from 'next/link'
export default class Productcard extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className='container'>
               <div className='card-container'>
                   <div className='card-holder'>
                       <div className='product-image-holder'>
                           <div className='product-images'></div>

                       </div>
                       <div className='product-details'>
                           <p className='product-name'>jacket</p>
                           <p className='product-description'>nice jacket, you should try it</p>
                           <span className='product-price'>$15</span>
                           <div className='product-view'><span>Add To Cart</span></div>
                           
                       </div>
                   </div>
                   {/* card 2 */}
                   <div className='card-holder'>
                       <div className='product-image-holder'>
                           <div className='product-images'></div>

                       </div>
                       <div className='product-details'>
                           <p className='product-name'>jacket</p>
                           <p className='product-description'>nice jacket, you should try it</p>
                           <span className='product-price'>$15</span>
                           <div className='product-view'>Add To Cart</div>

                       </div>
                   </div>
                   <div className='card-holder'>
                       <div className='product-image-holder'>
                           <div className='product-images'></div>

                       </div>
                       <div className='product-details'>
                           <p className='product-name'>jacket</p>
                           <p className='product-description'>nice jacket, you should try it</p>
                           <span className='product-price'>$15</span>
                           <div className='product-view'>Add To Cart</div>

                       </div>

                   </div>
                   {/* card 2 */}
                   <div className='card-holder'>
                       <div className='product-image-holder'>
                           <div className='product-images'></div>

                       </div>
                       <div className='product-details'>
                           <p className='product-name'>jacket</p>
                           <p className='product-description'>nice jacket, you should try it</p>
                           <span className='product-price'>$15</span>
                           <div className='product-view'>Add To Cart</div>

                       </div>

                   </div>
                   {/* card 3 */}
                   



               </div>
               
               
            
            </div> 
        )
    }
}

