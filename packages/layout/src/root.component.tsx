import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;


export default function Root(props) {
  console.log('layout header render');
  return <Header>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
      <Menu.Item key="home"><a href="/home"></a> Home</Menu.Item>
      <Menu.Item key="app1"><a href="/app1"></a> APP1</Menu.Item>
    </Menu>
  </Header>
}
