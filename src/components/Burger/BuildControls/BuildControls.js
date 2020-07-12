import React from 'react';

import buildControlsClasses from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [

    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];
const buildControls = (props) => (
    <div className={buildControlsClasses.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredentAdded(ctrl.type)} 
                removed={() => props.ingredentRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}/>
        ))}

        <button className={buildControlsClasses.OrderButton}
                 disabled = {props.purchasable}
                 onClick = {props.ordered}>
                 ORDER NOW</button>
    </div>
);
export default buildControls;