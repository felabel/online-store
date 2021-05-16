import React from 'react'


const cart = () => {
    return (
        <div className='cart-container'>
            <div className='cart-card-holder'>
                <div className='cart-details'>
                    <div className='product-holder'>

                    </div>
                    <div className='product-info'>
                        <div className='product-info-text'>
                            <p className='product-name name'>Casual shoes</p>
                            <p className='product-desc desc '>Casual femake shoes. The perfect fit</p>
                            <p className='price'>$15</p>
                        </div>
                        <div className='product-info-quanity'>
                            <span>Qty</span><input type='number' placeholder='1'/>
                            <div className='remove-from-cart'>
                                <span>Y</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='cart-summary-container'>
                    <div className='cart-summary'>
                        <h3>Cart Summary</h3>
                        <div className='cart-total'>
                            <p className='total'></p>
                            <span className='cart-total-amount'></span>
                        </div>

                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default cart
