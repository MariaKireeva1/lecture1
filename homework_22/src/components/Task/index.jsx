import React from 'react';
import classes from './Task.module.sass'

export function Task(props) {
    return (
        <tr>
            <td className={classes.checkbox}>
                <input type='checkbox' checked={props.checked} onChange={props.changeCheckbox}></input>
            </td>
            <td className={classes.description}>
                {props.title}
            </td>
            <td className={classes.description}>
                {props.descr}
            </td>
            <td className={classes.status}>
                {props.status}
            </td>
            <td  className={classes.action}>
                {props.action}
            </td>
        </tr>
    );
}

export default Task;