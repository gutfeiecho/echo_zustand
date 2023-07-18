import { Link } from 'react-router-dom';
const BasicLayout = () => {
    return (
        <>
            <header className="App-header">
                <Link to="dashboard">Dashboard</Link>
                <Link to="blog">Blog</Link>
                <Link to="about">About Me</Link>
            </header>
        </>
    );
}

export default BasicLayout;