import React from 'react';
import './Meals.css'

export default function Hero() {

  return (
     <div className='meals mx-4 my-2 md:mx-[6em]'>
        <div className='meals-div my-[3em] md:mt-[7em] px-8 text-center'>
            <h4>Special Meals of the day!</h4>
            <p className='py-2 hidden md:block'>Check our sepecials of the day and get discounts on all our meals <br/> and swift delivery to what ever location within Ilorin.</p>
            <p className='py-4 px-2 block md:hidden'>Check our sepecials of the day and get discounts on all our meals and swift delivery to what ever location within Ilorin.</p>
        </div>

        <div className='food flex flex-col md:flex-row items-center justify-center'>
            <div className='food-box'>
               <div className='food-img'></div>
               <p className='hd'>Stir fry Pasta</p>
               <p>Stir fry pasta yada yada yada <br />because of Sesan</p>
            </div>

            <div className='food-box my-8'>
               <div className='food-img two'></div>
               <p className='hd'>Meat Balls</p>
               <p>Stir fry pasta yada yada yada <br />because of Sesan</p>
            </div>

            <div className='food-box'>
               <div className='food-img three'></div>
               <p className='hd'>Burger Meal</p>
               <p>Stir fry pasta yada yada yada <br />because of Sesan</p>
            </div>

        </div>

        <div className='connect flex flex-col md:flex-row mx-8 my-[6em] justify-start  space-y-6 md:justify-between'>
            <div className='notify space-y-2'>
                <h3 className='up'>Get notified when we update!</h3>
               <p className='hidden md:block'>Get notified when we add new items to our specials menu,<br /> update our price list of have promos!</p>
               <p className='block md:hidden'>Get notified when we add new items to our specials menu, update our price list of have promos!</p>
              
            </div>

            <div className='mail flex flex-col md:flex-row'>

                <input className='w-[18rem] sm:w-[22rem] md:w-[20rem]' type='email' placeholder='gregphilip@gmail.com'></input>

                <button className='get-started-btn md:ml-[0.4rem] mt-2 md:mt-0 w-[18rem] sm:w-[24rem] md:w-[12rem]'><a href='/'>Get notified</a></button>

            </div>

        </div>

     </div>

);

}