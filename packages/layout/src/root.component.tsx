import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;
import { Link } from 'react-router-dom'
// import { Link } from "@reach/router";
import { BrowserRouter as Router } from "react-router-dom";

export default function Root(props) {
  console.log('layout header render');
  return (<Router>
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
        <Menu.Item key="home"><Link to="/home"> Home </Link> </Menu.Item>
        <Menu.Item key="app1"><Link to="/app1"> APP1</Link></Menu.Item>
      </Menu>
    </Header>
  </Router>)
}
