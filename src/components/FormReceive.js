import {
  FacebookOutlined,
  FieldNumberOutlined,
  FieldStringOutlined,
  RiseOutlined,
  SettingOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import React from "react";

const FormReceive = (props) => {
  return (
    <>
      <Input
        style={{ width: "90%" }}
        placeholder="tcp://localhost:1883"
        addonAfter={<RiseOutlined />}
        value={props.url}
        onChange={(event) => props.setUrl(event.target.value)}
      />
      <Input
        className="mt-2"
        style={{ width: "90%" }}
        placeholder="Username"
        addonAfter={<UserSwitchOutlined />}
        value={props.username}
        onChange={(event) => props.setUsername(event.target.value)}
      />
      <Input
        className="mt-2"
        style={{ width: "90%" }}
        placeholder="Password"
        type="password"
        addonAfter={<FieldNumberOutlined />}
        value={props.password}
        onChange={(event) => props.setPassword(event.target.value)}
      />
      <Input
        style={{ width: "90%" }}
        className="mt-2"
        addonAfter={<FieldStringOutlined />}
        placeholder="Client id"
        value={props.client}
        onChange={(event) => props.setClient(event.target.value)}
      />
      <Input
        className="mt-2"
        placeholder="Toppic"
        style={{ width: "90%" }}
        addonAfter={<FacebookOutlined />}
        value={props.toptic}
        onChange={(event) => props.setToppic(event.target.value)}
      />
    </>
  );
};

export default FormReceive;
