import { prism } from 'prism-animation';

/**
 * Evalution Task 2
 * 
 * Complete this task:
 * 
 * Using the prism component to animate 
 * Animate each car image into the screen at different times
 * 
 * The car images has a default opacity of 0.
 * 
 */

export const Task2 = () => {


    const animate = () => {



    }

    return (
        <div className="task2">
            <p>Animate all of these images to fade out over 3 seconds</p>

            <div className="content">

                <div className="gallery-container">
                    <div className="image-container">
                        <img src="https://picsum.photos/200/300"></img>
                    </div>
                    <div className="image-container">
                        <img src="https://picsum.photos/200/300"></img>
                    </div>
                    <div className="image-container">
                        <img src="https://picsum.photos/200/300"></img>
                    </div>
                </div>
            </div>

            <div className="row v-center">
                <button type="button" onClick={animate}>Animate Pictures</button>
            </div>
        </div>
    )
}
