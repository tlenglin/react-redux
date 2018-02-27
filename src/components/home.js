import Counter from '../containers/counter.js'
import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => (
 <div>
     <Counter />
     <Link to='/form'>
        Click!
     </Link>
 </div>   
)