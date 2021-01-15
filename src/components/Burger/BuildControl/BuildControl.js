
import React from 'react';//Here user decided witch ingredients the Burger should have
import classes from './BuildControl.css';
import ControlButtom from './ControlButtom/ControlButtom';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControl = (props) => (
   <div className={classes.BuildControl}>
       {controls.map(ctrl => (
       <ControlButtom 
         key={ctrl.label} 
         label={ctrl.label}
         added = {() => props.ingredientAdded(ctrl.type)} />
       ))}
   </div>
);

export default buildControl;