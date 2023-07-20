import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import styles from './index.module.css';
import { Outlet } from 'react-router-dom';
const BasicLayout = () => {
    const { Header, Content } = Layout;
    return (
        <>
            <Header className={styles.layout_header}>
                <Link to="dashboard">Dashboard</Link>
                <Link to="blog">Blog</Link>
                <Link to="about">About Me</Link>
            </Header>
            <Content>
                <Outlet />
            </Content>
        </>
    );
}

export default BasicLayout;