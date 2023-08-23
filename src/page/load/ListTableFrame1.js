import React, { useContext, useEffect, useState } from "react";
import Context from "../../store/Context";
import { Button, Drawer, Input, Modal, Radio, Space, Table, theme } from "antd";
import S3MDataLoadFrame1 from "../../components/S3MDataLoadFrame1";
import { DeleteOutlined, SettingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ListTabFrame1 from "./ListTabFrame1";
import { updatenametab } from "../../store/Actions";

const ListTableFrame1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [key, setKey] = useState();
  const [nameTab, setNameTab] = useState();
  const showModal = (key) => {
    setKey(key);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    dispatch(updatenametab({ key: key, name: nameTab }));
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [state, dispatch] = useContext(Context);

  useEffect(() => {}, [state]);
  return (
    <>
      <div className="container">
        <Button
          type="primary"
          onClick={showDrawer}
          className="btn btn-primary"
          style={{ borderRadius: 20, width: "150px" }}
        >
          <span>Setting</span>
        </Button>

        <table
          className="table table-hover table-light text-center mt-2"
          style={{ width: "100%" }}
        >
          <thead className="table-dark">
            <tr>
              <th scope="col">#####</th>
              <th scope="col">Tên</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {state.tabable.map((tab) => {
              return (
                <>
                  <tr>
                    <th scope="row">{tab.key}</th>
                    <td>{tab.label}</td>
                    <td>{tab.status == true ? "Đang chạy" : "Đã dừng"}</td>
                    <td>
                      <Button onClick={() => showModal(tab.key)}>Update</Button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <Drawer
        title={"Setting Values"}
        size="large"
        placement={"top"}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
          </Space>
        }
      >
        <ListTabFrame1></ListTabFrame1>
      </Drawer>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          placeholder="Name Tab"
          onChange={(event) => setNameTab(event.target.value)}
        />
      </Modal>
    </>
  );
};

export default ListTableFrame1;
