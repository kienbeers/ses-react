import { FacebookOutlined,ChromeOutlined,WindowsOutlined,GooglePlusOutlined,TwitterOutlined , DesktopOutlined, ContainerOutlined, MailOutlined, HomeOutlined, FormOutlined, RedoOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Footer } from "antd/es/layout/layout";
import { useState } from "react"
import { Link } from "react-router-dom";
const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem(<Link to={"/"}>Home</Link>, '1', <HomeOutlined />),
    getItem("Props and State", '2', <MailOutlined />,[
        getItem(<Link to={"/props"}>Props</Link>, '12', <MailOutlined />),
        getItem(<Link to={"/state"}>State</Link>, '13', <MailOutlined />),
        getItem(<Link to={"/propsvsstate"}>Props with State</Link>, '14', <MailOutlined />)
    ]),
    getItem(<Link to={"/event"}>Event Handling</Link>, '3', <DesktopOutlined />),
    getItem(<Link to={"/component"}>Component API</Link>, '4', <ContainerOutlined />),
    getItem(<Link to={"/lifecycle"}>Life Cycle</Link>, '5', <RedoOutlined />),
    getItem(<Link to={"/reactrefs"}>React Refs</Link>, '6', <FacebookOutlined />),
    getItem("List And Key", '7', <ChromeOutlined />,[
        getItem(<Link to={"/list"}>List</Link>, '14', <FormOutlined />),
        getItem(<Link to={"/key"}>Key</Link>, '15', <FormOutlined />)
    ]),
    getItem(<Link to={"/form"}>React Form</Link>, '8', <FormOutlined />),
    getItem(<Link to={"/reactrouter"}>React Router</Link>, '9', <GooglePlusOutlined />),
    getItem(<Link to={"/redux"}>Redux</Link>, '10', <WindowsOutlined />),
    getItem(<Link to={"/transition"}>React-Transition-Group</Link>, '11', <TwitterOutlined />),
]
const MenuHome = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item></Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="text-start"
                        style={{
                            padding: 24,
                            minHeight: 600,
                            background: colorBgContainer,
                        }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Hà Trung Kiên đã đến đây vui chơi
                </Footer>
            </Layout>
        </Layout>
    );
};
export default MenuHome;

