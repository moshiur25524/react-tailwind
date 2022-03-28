import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {id:1, name:'free', price: 0, benefits: [
            'lifetime free', 
            'unlimited deals', 
            'localized deals',
            'fantastic deals', 
            'crazy deals'
        ]},
        {id:2, name:'regular', price: 9.99 ,benefits: [
            'everything on free', 
            'unlimited deals', 
            'localized deals',
            'fantastic deals', 
            'crazy deals'
        ]},
        {id:3, name:'premium', price: 19.99 ,benefits: [
            'everything on Regular', 
            'unlimited deals', 
            'localized deals',
            'fantastic deals', 
            'crazy deals'
        ]}
        
    ]
    return (
        <div className='bg-teal-300 p-4 mt-8'>
            <h2 className='text-6xl font-mono text-red-900'>Best Deals of the town</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias esse dolore natus voluptatem rem officia eum, debitis optio repellat soluta, culpa deserunt aut. Perspiciatis fugit earum nulla aspernatur deleniti?</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOptions.map(option =><PricingOption
                    key={option.id}
                    option = {option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;