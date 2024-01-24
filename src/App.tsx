import './App.css';
import { Home } from './pages/home';
import { Analytics } from '@vercel/analytics/react';
import { ConfigProvider, Layout } from 'antd';
import { Adsense } from '@ctrl/react-adsense';
const { Header, Footer, Content } = Layout;
function App() {
    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Layout: {
                            headerBg: '#f5f5f5',
                        },
                    },
                }}
            >
                <Layout className={'h-full w-full'}>
                    <Header></Header>
                    <Content>
                        <div
                            className={
                                'flex justify-center items-center w-full h-full'
                            }
                        >
                            <Home></Home>
                        </div>
                    </Content>
                    <Footer>
                        <Adsense
                            client="ca-pub-4882664754361963"
                            slot="7450812669"
                            style={{ display: 'block' }}
                            layout="in-article"
                            format="fluid"
                        />
                    </Footer>
                </Layout>
            </ConfigProvider>
            <Analytics />
        </>
    );
}

export default App;
