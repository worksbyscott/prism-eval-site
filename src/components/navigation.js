import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <div className="row v-center space-between">
                <div className="logo">
                    <Link to="/">Prism Evalution</Link>
                </div>

                <div className="navigation-links">
                    <Link to="/task1">Task 1</Link>
                    <Link to="/task2">Task 2</Link>
                    <Link to="/task3">Task 3</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
