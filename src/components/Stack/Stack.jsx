import React from 'react'
import classes from './Stack.module.css'
import { TechStack } from '../../assets/assets'

const Stack = () => {
   return (
      <div className={classes.stack}>
         <h2>MY TECH STACK</h2>
         <div className={classes.header}>
            {TechStack.map((item, index) => (
               <div key={index} className={classes.wrapper}>
                  <img src={item.image} alt="" />
                  <p>{item.title}</p>
               </div>
            ))}
            <p></p>
         </div>
      </div>

   )
}

export default Stack