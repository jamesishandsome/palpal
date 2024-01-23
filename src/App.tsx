import { useEffect, useState } from "react";
import "./App.css";
import { Input, Select, Space } from "antd";
import chinese from "./chinese.json";
import result from "./result.json";

function App() {
  const [value1, setValue1] = useState(undefined);
  const [value2, setValue2] = useState(undefined);
  const [value3, setValue3] = useState(undefined);
  useEffect(() => {
    if (value1 && value2) {
      const index = value1 + "," + value2;
      // @ts-ignore
      const res = result[index];
      setValue3(res);
    }
  }, [value1, value2]);
  return (
    <>
      <Space direction={"vertical"}>
        <Space>
          <Select
            options={chinese}
            style={{ width: 100 }}
            onChange={(value) => {
              setValue1(value);
            }}
          ></Select>
          +
          <Select
            options={chinese}
            style={{ width: 100 }}
            onChange={(value) => {
              setValue2(value);
            }}
          ></Select>
        </Space>
        =
        <Input
          style={{ backgroundColor: "#fff", color: "#000" }}
          disabled={true}
          value={value3 ? value3 : ""}
        ></Input>
      </Space>
    </>
  );
}

export default App;
