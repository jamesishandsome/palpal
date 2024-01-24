import {SonCalculator} from "./components/sonCalculator";
import {Tabs, TabsProps} from "antd";
import {ParentCalculator} from "./components/parentCalculator";

const Home = () => {

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: '父母推算子代',
            children: <SonCalculator></SonCalculator>,
        },
        {
            key: '2',
            label: '子代推算父母',
            children: <ParentCalculator></ParentCalculator>

        }
    ];
    return (
        <div >
            <Tabs defaultActiveKey="1" items={items} />
        </div>
    )
}

export {Home}