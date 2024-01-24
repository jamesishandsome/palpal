import {useEffect, useState} from "react";
import {Input, Select, Space} from "antd";
import pals from "./pals.json";
import matrix from "./matrix.json";

function SonCalculator() {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    useEffect(() => {
        if (value1 && value2) {
            // @ts-ignore
            const res = matrix[value1][value2];
            setValue3(res);
        }
    }, [value1, value2]);

    const filterOption = (
        input: string,
        option?: { label: string; value: string },
    ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
    return (
        <>
            <Space direction={"vertical"}>
                <Space>
                    <Select
                        options={pals}
                        showSearch={true}
                        filterOption={filterOption}
                        style={{width: 120}}
                        onChange={(value) => {
                            setValue1(value);
                        }}
                        optionRender={(option) => {
                            const {label, data} = option;
                            const {img} = data;
                            return (

                                <div className={"flex "}>
                                    <img src={img} alt={"label"} className={"w-5 h-5"}/>
                                    <span>{label}</span>
                                </div>
                            );
                        }}
                    ></Select>
                    +
                    <Select
                        showSearch={true}
                        filterOption={filterOption}
                        options={pals}
                        style={{width: 120}}
                        onChange={(value) => {
                            setValue2(value);
                        }}
                        optionRender={(option) => {
                            const {label, data} = option;
                            const {img} = data;
                            return (
                                <div className={"flex "}>
                                    <img src={img} alt={"label"} className={"w-5 h-5"}/>
                                    <span>{label}</span>
                                </div>
                            );
                        }}
                    ></Select>
                </Space>
                =
                <Input
                    style={{backgroundColor: "#fff", color: "#000"}}
                    disabled={true}
                    value={value3 ? pals.find((pal) => pal.value === value3)?.label : ""}
                ></Input>
            </Space>
        </>
    );
}

export {
    SonCalculator
}
