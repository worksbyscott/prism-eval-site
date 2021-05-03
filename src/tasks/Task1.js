import { prism } from 'prism-animation';
import React, { useEffect } from 'react';

/**
 * Evalution Task 1
 * 
 * Complete this task:
 * 
 * Animate the square on the page to rotate by 180 over duration of 4 seconds
 * Animate the square's colour to to blue with the same animation 
 * 
 * 
 */

export const Task1 = () => {

    /**
     * 
     *
     */

    const animateSquare = () => {


    }


    return (
        <div className="task1">
            <div className="content">
                <p>Move this square 100px to the Right and Rotate 180deg</p>
                <div className="square"></div>
            </div>
            <div className="actions">
                <button type="button" onClick={animateSquare}>Animate Square</button>
            </div>
        </div>
    )
}
