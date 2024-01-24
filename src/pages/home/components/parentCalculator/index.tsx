import {useEffect, useState} from "react";
import {Select, Space} from "antd";
import pals from "./pals.json";
import matrix from "./matrix.json";

function ParentCalculator() {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    useEffect(() => {
        if (value1 && value2) {
            // @ts-ignore
            console.log(matrix[value2]);
            // find in matrix[value2] the key of value1
            // @ts-ignore
            const res = Object.keys(matrix[value2]).find((key) => {
                    // @ts-ignore
                    return matrix[value2][key] === value1;
                }
            );
            if (res) {
                setValue3(res);
            } else {
                setValue3("");
            }

        }
    }, [value1, value2]);

    const filterOption = (
        input: string,
        option?: { label: string; value: string },
    ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
    return (
        <>
            <Space direction={"vertical"}>

                <Select
                    options={pals}
                    showSearch={true}
                    filterOption={filterOption}
                    className={"w-full"}
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
                =
                <Space>
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
                    +
                    <Select
                        showSearch={true}
                        filterOption={filterOption}
                        className={"bg-white text-black"}
                        options={pals}
                        disabled={true}
                        style={{width: 120}}
                        value={value3 ? pals.find((pal) => pal.value === value3)?.label : "找不到父代"}
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
            </Space>

        </>
    );
}

export {
    ParentCalculator
}
