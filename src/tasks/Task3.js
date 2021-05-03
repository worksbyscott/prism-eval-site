import { prism } from 'prism-animation';

/**
 * Evalution Task 3
 * 
 * Complete this task:
 * 
 * Animate the model into the screen on the click of 
 * the show me button. Animate the modal to slipe up and fade in.
 * 
 * 
 * The modal has a default opacity of 0.
 * 
 */

export const Task3 = () => {

    const openModal = () => {


    }

    const closeModal = () => {


    }

    return (
        <div className="task3">

            {/* 
                This the modal element!
                Class Name: modal
            */}

            <div className="modal">
                <div className="modal-content">
                    <div className="header">
                        <h1>Subscribe to News Letter</h1>
                    </div>
                    <div className="body">
                        <p>Subscribe to the prism newsletter and recive updated information about the prism library!</p>
                    </div>
                    <div className="footers">
                        <button type="button" onClick={closeModal}>Close Modal</button>
                    </div>
                </div>
            </div>

            <div className="content">
                <div className="row">
                    <h1>Open Modal Box</h1>
                </div>
                <div className="row ">
                    <button onClick={openModal}>Open Modal</button>
                </div>
            </div>
        </div>
    )
}
