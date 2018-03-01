import React from 'react';
import Popover2 from './test'

export const Counter = (props) => (
    <div>
        <div>
            {props.tab.map((value, index) => {
                return (

                    <div key={index}>

                        <h1>{value}</h1>
                        <h3>INCREMENT</h3>
                        <button onClick={() => props.actions.increment(index, 1)}>+</button>

                        <h3>DECREMENT</h3>
                        <button onClick={() => props.actions.decrement(index, 1)}>-</button>
                        
                        <h3>REMOVE COUNTER</h3>
                        <button onClick={() => props.actions.removeCounter(index)}>Remove</button>
                    </div>
                );
            })
            }
        </div>
        <div>
            <h2>ADD COUNTER</h2>
            <button onClick={() => props.actions.addCounter()}>Add</button>
        </div>
        <Popover2 />
    </div>
)