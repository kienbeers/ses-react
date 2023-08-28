import { Button, Card, DatePicker, Input, Switch } from "antd";
import React, { useContext, useEffect, useState } from "react";
import "../styles/card.css";
import InputMinMax from "./InputMinMax";
import FormReceive from "./FormReceive";
import S3MDataLoadFrame1Entity from "../entities/S3MDataLoadFrame1Entity";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendmessage } from "../service/S3MDataLoadFrame1Service";
import Context from "../store/Context";
import { updatestatus } from "../store/Actions";
export default function S3MDataLoadFrame1(props) {
  const [state, dispatch] = useContext(Context);
  function formatDateToDDMMYYYYHHMMSS(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }
  const [frequency, setFrequency] = useState(3000);
  const handelChangeInputTime = (event) => {
    if (event.target.value === "") {
      setFrequency(0);
    }
    setFrequency(event.target.value);
  };
  const toastErrorAccessory = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const toastSuccessAccessory = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const random = (min, max) => {
    return parseFloat(
      Math.random() * (parseInt(max) - parseInt(min) + 1) + parseInt(min)
    );
  };
  const [timerId, setTimerId] = useState(null);

  const updateStatus = (payload) => {
    dispatch(updatestatus(payload));
  };

  const handelCkickRun = () => {
    updateStatus({ key: props.data, status: true });
    console.log(url, username, password, client, topic);

    if (timerId != null) {
      clearInterval(timerId);
    }
    if (validationForm() === true) {
      const timer = setInterval(() => {
        const e = new S3MDataLoadFrame1Entity(
          random(minUab, maxUab),
          random(minUbc, maxUbc),
          random(minUca, maxUca),
          random(minUll, maxUll),
          random(minUan, maxUan),
          random(minUbn, maxUbn),
          random(minUcn, maxUcn),
          random(minUln, maxUln),
          random(minIa, maxIa),
          random(minIb, maxIb),
          random(minIc, maxIc),
          random(minIN, maxIN),
          random(minIG, maxIG),
          random(minIAvg, maxIAvg),
          random(minPa, maxPa),
          random(minPb, maxPb),
          random(minPc, maxPc),
          random(minPTotal, maxPTotal),
          random(minQa, maxQa),
          random(minQb, maxQb),
          random(minQc, maxQc),
          random(minQTotal, maxQTotal),
          random(minSa, maxSa),
          random(minSb, maxSb),
          random(minSc, maxSc),
          random(minSTotal, maxSTotal),
          random(minPfa, maxPfa),
          random(minPfb, maxPfb),
          random(minPfc, maxPfc),
          random(minPFAvg, maxPFAvg),
          random(minF, maxF),
          Math.floor(random(minEp, maxEp)),
          Math.floor(random(minEpR, maxEpR)),
          Math.floor(random(minEpDR, maxEpDR)),
          Math.floor(random(minEpDRR, maxEpDRR)),
          Math.floor(random(minEq, maxEq)),
          Math.floor(random(minEqR, maxEqR)),
          Math.floor(random(minEpDR, maxEpDR)),
          Math.floor(random(minEpDRR, maxEpDRR)),
          Math.floor(random(minEs, maxEs)),
          Math.floor(random(minEsR, maxEsR)),
          Math.floor(random(minEsDR, maxEsDR)),
          Math.floor(random(minEsDRR, maxEsDRR)),
          random(minT1, maxT2),
          random(minT2, maxT2),
          random(minT3, maxT3),
          Math.floor(random(minCommandData1, maxCommandData1)),
          Math.floor(random(minCommandData2, maxCommandData2)),
          Math.floor(random(minCommandData3, maxCommandData3)),
          Math.floor(random(minCommandData4, maxCommandData4)),
          Math.floor(random(minCommandData5, maxCommandData5)),
          Math.floor(random(minCommandData6, maxCommandData6)),
          random(minThdIa, maxThdIa),
          random(minThdIb, maxThdIb),
          random(minThdIc, maxThdIc),
          random(minThdIg, maxThdIg),
          random(minThdVab, maxThdVab),
          random(minThdVbc, maxThdVbc),
          random(minThdVca, maxThdVca),
          random(minThdVan, maxThdVan),
          random(minThdVll, maxThdVll),
          random(minThdVbn, maxThdVbn),
          random(minThdVcn, maxThdVcn),
          random(minThdVln, maxThdVln),
          formatDateToDDMMYYYYHHMMSS(new Date()),
          Math.floor(new Date().getTime() / 1000),
          random(minThdIn, maxThdIn),
          Math.floor(random(0, 10000000)),
          deviceId
        );
        sendmessage(e, {
          url: url,
          username: username,
          password: password,
          client: client,
          topic: topic,
        });
      }, frequency);
      setTimerId(timer);
      return () => clearInterval(timer);
    } else {
      toastErrorAccessory("Dữ liệu truyền vào không hợp lệ");
    }
  };
  const handelCkickStop = () => {
    updateStatus({ key: props.data, status: false });
    clearInterval(timerId);
  };
  const validationForm = () => {
    if (minUab === "") {
      setMinUab(0);
      return true;
    }
    if (maxUab === "") {
      setMaxUab(45000);
      return true;
    }
    if (minUab < 0 || maxUab > 45000 || minUab > maxUab) {
      return false;
    }
    if (minUbc === "") {
      setMinUbc(0);
      return true;
    }
    if (maxUbc === "") {
      setMaxUbc(45000);
      return true;
    }
    if (minUbc < 0 || maxUbc > 45000 || minUbc > maxUbc) {
      console.log("Lỗi");
      return false;
    }
    if (minUca === "") {
      setMinUca(0);
      return true;
    }
    if (maxUca === "") {
      setMaxUca(45000);
      return true;
    }
    if (minUca < 0 || maxUca > 45000 || minUca > maxUca) {
      console.log("Lỗi");
      return false;
    }
    if (minUan === "") {
      setMinUan(0);
      return true;
    }
    if (maxUan === "") {
      setMaxUan(45000);
      return true;
    }
    if (minUan < 0 || maxUan > 45000 || minUan > maxUan) {
      console.log("Lỗi");
      return false;
    }
    if (minUbn === "") {
      setMinUbn(0);
      return true;
    }
    if (maxUbn === "") {
      setMaxUbn(45000);
      return true;
    }
    if (minUbn < 0 || maxUbn > 45000 || minUbn > maxUbn) {
      console.log("Lỗi");
      return false;
    }
    if (minUcn === "") {
      setMinUcn(0);
      return true;
    }
    if (maxUcn === "") {
      setMaxUcn(45000);
      return true;
    }
    if (minUcn < 0 || maxUcn > 45000 || minUcn > maxUcn) {
      console.log("Lỗi");
      return false;
    }
    if (minUln === "") {
      setMinUln(0);
      return true;
    }
    if (maxUln === "") {
      setMaxUln(45000);
      return true;
    }
    if (minUln < 0 || maxUln > 45000 || minUln > maxUln) {
      console.log("Lỗi");
      return false;
    }
    if (minUll === "") {
      setMinUll(0);
      return true;
    }
    if (maxUll === "") {
      setMaxUll(45000);
      return true;
    }
    if (minUll < 0 || maxUll > 45000 || minUll > maxUll) {
      console.log("Lỗi");
      return false;
    }
    if (minIa === "") {
      setMinIa(0);
      return true;
    }
    if (maxIa === "") {
      setMaxIa(10000);
      return true;
    }
    if (minIa < 0 || maxIa > 10000 || minIa > maxIa) {
      console.log("Lỗi");
      return false;
    }
    if (minIb === "") {
      setMinIb(0);
      return true;
    }
    if (maxIb === "") {
      setMaxIb(10000);
      return true;
    }
    if (minIb < 0 || maxIb > 10000 || minIb > maxIb) {
      console.log("Lỗi");
      return false;
    }
    if (minIc === "") {
      setMinIc(0);
      return true;
    }
    if (maxIc === "") {
      setMaxIc(10000);
      return true;
    }
    if (minIc < 0 || maxIc > 10000 || minIc > maxIc) {
      console.log("Lỗi");
      return false;
    }
    if (minIN === "") {
      setMinIN(0);
      return true;
    }
    if (maxIN === "") {
      setMaxIN(10000);
      return true;
    }
    if (minIN < 0 || maxIN > 10000 || minIN > maxIN) {
      console.log("Lỗi");
      return false;
    }
    if (minIG === "") {
      setMinIG(0);
      return true;
    }
    if (maxIG === "") {
      setMaxIG(10000);
      return true;
    }
    if (minIG < 0 || maxIG > 10000 || minIG > maxIG) {
      console.log("Lỗi");
      return false;
    }
    if (minIAvg === "") {
      setMinIAvg(0);
      return true;
    }
    if (maxIAvg === "") {
      setMaxIAvg(10000);
      return true;
    }
    if (minIAvg < 0 || maxIAvg > 10000 || minIAvg > maxIAvg) {
      console.log("Lỗi");
      return false;
    }
    if (minPa === "") {
      setMinPa(-2000000);
      return true;
    }
    if (maxPa === "") {
      setMaxPa(2000000);
      return true;
    }
    if (minPa < -2000000 || maxPa > 2000000 || minPa > maxPa) {
      console.log("Lỗi");
      return false;
    }
    if (minPb === "") {
      setMinPb(-2000000);
      return true;
    }
    if (maxPb === "") {
      setMaxPb(2000000);
      return true;
    }
    if (minPb < -2000000 || maxPb > 2000000 || minPb > maxPb) {
      console.log("Lỗi");
      return false;
    }
    if (minPc === "") {
      setMinPc(-2000000);
      return true;
    }
    if (maxPc === "") {
      setMaxPc(2000000);
      return true;
    }
    if (minPc < -2000000 || maxPc > 2000000 || minPc > maxPc) {
      console.log("Lỗi");
      return false;
    }
    if (minPTotal === "") {
      setMinPTotal(-6000000);
      return true;
    }
    if (maxPTotal === "") {
      setMaxPTotal(6000000);
      return true;
    }
    if (minPTotal < -6000000 || maxPTotal > 6000000 || minPTotal > maxPTotal) {
      console.log("Lỗi");
      return false;
    }
    if (minQa === "") {
      setMinQa(-2000000);
      return true;
    }
    if (maxQa === "") {
      setMaxQa(2000000);
      return true;
    }
    if (minQa < -2000000 || maxQa > 2000000 || minQa > maxQa) {
      console.log("Lỗi");
      return false;
    }
    if (minQb === "") {
      setMinQb(-2000000);
      return true;
    }
    if (maxQb === "") {
      setMaxQb(2000000);
      return true;
    }
    if (minQb < -2000000 || maxQb > 2000000 || minQb > maxQb) {
      console.log("Lỗi");
      return false;
    }
    if (minQc === "") {
      setMinQc(-2000000);
      return true;
    }
    if (maxQc === "") {
      setMaxQc(2000000);
      return true;
    }
    if (minQc < -2000000 || maxQc > 2000000 || minQc > maxQc) {
      console.log("Lỗi");
      return false;
    }
    if (minQTotal === "") {
      setMinQTotal(-6000000);
      return true;
    }
    if (maxQTotal === "") {
      setMaxQTotal(6000000);
      return true;
    }
    if (minQTotal < -6000000 || maxQTotal > 6000000 || minQTotal > maxQTotal) {
      console.log("Lỗi");
      return false;
    }
    if (minSa === "") {
      setMinSa(-2000000);
      return true;
    }
    if (maxSa === "") {
      setMaxSa(2000000);
      return true;
    }
    if (minSa < -2000000 || maxSa > 2000000 || minSa > maxSa) {
      console.log("Lỗi");
      return false;
    }
    if (minSb === "") {
      setMinSb(-2000000);
      return true;
    }
    if (maxSb === "") {
      setMaxSb(2000000);
      return true;
    }
    if (minSb < -2000000 || maxSb > 2000000 || minSb > maxSb) {
      console.log("Lỗi");
      return false;
    }
    if (minSc === "") {
      setMinSc(-2000000);
      return true;
    }
    if (maxSc === "") {
      setMaxSc(2000000);
      return true;
    }
    if (minSc < -2000000 || maxSc > 2000000 || minSc > maxSc) {
      console.log("Lỗi");
      return false;
    }

    if (minSTotal === "") {
      setMinSTotal(-6000000);
      return true;
    }
    if (maxSTotal === "") {
      setMaxSTotal(6000000);
      return true;
    }
    if (minSTotal < -6000000 || maxSTotal > 6000000 || minSTotal > maxSTotal) {
      console.log("Lỗi");
      return false;
    }
    if (minPfa === "") {
      setMinPfa(-1);
      return true;
    }
    if (maxPfa === "") {
      setMaxPfa(1);
      return true;
    }
    if (minPfa < -1 || maxPfa > 1 || minPfa > maxPfa) {
      console.log("Lỗi");
      return false;
    }
    if (minPfb === "") {
      setMinPfb(-1);
      return true;
    }
    if (maxPfb === "") {
      setMaxPfb(1);
      return true;
    }
    if (minPfb < -1 || maxPfb > 1 || minPfb > maxPfb) {
      console.log("Lỗi");
      return false;
    }
    if (minPfc === "") {
      setMinPfc(-1);
      return true;
    }
    if (maxPfc === "") {
      setMaxPfc(1);
      return true;
    }
    if (minPfc < -1 || maxPfc > 1 || minPfc > maxPfc) {
      console.log("Lỗi");
      return false;
    }
    if (minPFAvg === "") {
      setMinPFAvg(-1);
      return true;
    }
    if (maxPFAvg === "") {
      setMaxPFAvg(1);
      return true;
    }
    if (minPFAvg < -1 || maxPFAvg > 1 || minPFAvg > maxPFAvg) {
      console.log("Lỗi");
      return false;
    }
    if (minF === "") {
      setMinF(45);
      return true;
    }
    if (maxF === "") {
      setMaxF(65);
      return true;
    }
    if (minF < 45 || maxF > 65 || minF > maxF) {
      console.log("Lỗi");
      return false;
    }
    if (minEp === "") {
      setMinEp(-2000000000);
      return true;
    }
    if (maxEp === "") {
      setMaxEp(2000000000);
      return true;
    }
    if (minEp < -2000000000 || maxEp > 2000000000 || minEp > maxEp) {
      console.log("Lỗi");
      return false;
    }
    if (minEpR === "") {
      setMinEpR(-2000000000);
      return true;
    }
    if (maxEpR === "") {
      setMaxEpR(2000000000);
      return true;
    }
    if (minEpR < -2000000000 || maxEpR > 2000000000 || minEpR > maxEpR) {
      console.log("Lỗi");
      return false;
    }
    if (minEpDR === "") {
      setMinEpDR(-2000000000);
      return true;
    }
    if (maxEpDR === "") {
      setMaxEpDR(2000000000);
      return true;
    }
    if (minEpDR < -2000000000 || maxEpDR > 2000000000 || minEpDR > maxEpDR) {
      console.log("Lỗi");
      return false;
    }
    if (minEpDRR === "") {
      setMinEpDRR(-2000000000);
      return true;
    }
    if (maxEpDRR === "") {
      setMaxEpDRR(2000000000);
      return true;
    }
    if (
      minEpDRR < -2000000000 ||
      maxEpDRR > 2000000000 ||
      minEpDRR > maxEpDRR
    ) {
      console.log("Lỗi");
      return false;
    }
    if (minEq === "") {
      setMinEq(-2000000000);
      return true;
    }
    if (maxEq === "") {
      setMaxEq(2000000000);
      return true;
    }
    if (minEq < -2000000000 || maxEq > 2000000000 || minEq > maxEq) {
      console.log("Lỗi");
      return false;
    }

    if (minEqR === "") {
      setMinEqR(-2000000000);
      return true;
    }
    if (maxEqR === "") {
      setMaxEqR(2000000000);
      return true;
    }
    if (minEqR < -2000000000 || maxEqR > 2000000000 || minEqR > maxEqR) {
      console.log("Lỗi");
      return false;
    }
    if (minEqDR === "") {
      setMinEqDR(-2000000000);
      return true;
    }
    if (maxEqDR === "") {
      setMaxEqDR(2000000000);
      return true;
    }
    if (minEqDR < -2000000000 || maxEqDR > 2000000000 || minEqDR > maxEqDR) {
      console.log("Lỗi");
      return false;
    }
    if (minEqDRR === "") {
      setMinEqDRR(-2000000000);
      return true;
    }
    if (maxEqDRR === "") {
      setMaxEqDRR(2000000000);
      return true;
    }
    if (
      minEqDRR < -2000000000 ||
      maxEqDRR > 2000000000 ||
      minEqDRR > maxEqDRR
    ) {
      console.log("Lỗi");
      return false;
    }
    if (minEs === "") {
      setMinEs(-2000000000);
      return true;
    }
    if (maxEs === "") {
      setMaxEs(2000000000);
      return true;
    }
    if (minEs < -2000000000 || maxEs > 2000000000 || minEs > maxEs) {
      console.log("Lỗi");
      return false;
    }
    if (minEsR === "") {
      setMinEsR(-2000000000);
      return true;
    }
    if (maxEsR === "") {
      setMaxEsR(2000000000);
      return true;
    }
    if (minEsR < -2000000000 || maxEsR > 2000000000 || minEsR > maxEsR) {
      console.log("Lỗi");
      return false;
    }
    if (minEsDR === "") {
      setMinEsDR(-2000000000);
      return true;
    }
    if (maxEsDR === "") {
      setMaxEsDR(2000000000);
      return true;
    }
    if (minEsDR < -2000000000 || maxEsDR > 2000000000 || minEsDR > maxEsDR) {
      console.log("Lỗi");
      return false;
    }
    if (minEsDRR === "") {
      setMinEsDRR(-2000000000);
      return true;
    }
    if (maxEsDRR === "") {
      setMaxEsDRR(2000000000);
      return true;
    }
    if (
      minEsDRR < -2000000000 ||
      maxEsDRR > 2000000000 ||
      minEsDRR > maxEsDRR
    ) {
      console.log("Lỗi");
      return false;
    }
    if (minT1 === "") {
      setMinT1(-100);
      return true;
    }
    if (maxT1 === "") {
      setMaxT1(200);
      return true;
    }
    if (minT1 < -100 || maxT1 > 200 || minT1 > maxT1) {
      console.log("Lỗi");
      return false;
    }
    if (minT2 === "") {
      setMinT2(-100);
      return true;
    }
    if (maxT2 === "") {
      setMaxT2(200);
      return true;
    }
    if (minT2 < -100 || maxT2 > 200 || minT2 > maxT2) {
      console.log("Lỗi");
      return false;
    }
    if (minT3 === "") {
      setMinT3(-100);
      return true;
    }
    if (maxT3 === "") {
      setMaxT3(200);
      return true;
    }
    if (minT3 < -100 || maxT3 > 200 || minT3 > maxT3) {
      console.log("Lỗi");
      return false;
    }
    if (minCommandData1 === "") {
      setMinCommandData1(-1000);
      return true;
    }
    if (maxCommandData1 === "") {
      setMaxCommandData1(1000);
      return true;
    }
    if (
      minCommandData1 < -1000 ||
      maxCommandData1 > 1000 ||
      minCommandData1 > maxCommandData1
    ) {
      console.log("Lỗi");
      return false;
    }
    if (minCommandData2 === "") {
      setMinCommandData2(-1000);
      return true;
    }
    if (maxCommandData2 === "") {
      setMaxCommandData2(1000);
      return true;
    }
    if (
      minCommandData2 < -1000 ||
      maxCommandData2 > 1000 ||
      minCommandData2 > maxCommandData2
    ) {
      console.log("Lỗi");
      return false;
    }
    if (minCommandData3 === "") {
      setMinCommandData3(-1000);
      return true;
    }
    if (maxCommandData3 === "") {
      setMaxCommandData3(1000);
      return true;
    }
    if (
      minCommandData3 < -1000 ||
      maxCommandData3 > 1000 ||
      minCommandData3 > maxCommandData3
    ) {
      console.log("Lỗi");
      return false;
    }
    if (minCommandData4 === "") {
      setMinCommandData4(-1000);
      return true;
    }
    if (maxCommandData4 === "") {
      setMaxCommandData4(1000);
      return true;
    }
    if (
      minCommandData4 < -1000 ||
      maxCommandData4 > 1000 ||
      minCommandData4 > maxCommandData4
    ) {
      console.log("Lỗi");
      return false;
    }
    if (minCommandData5 === "") {
      setMinCommandData5(-1000);
      return true;
    }
    if (maxCommandData5 === "") {
      setMaxCommandData5(1000);
      return true;
    }
    if (
      minCommandData5 < -1000 ||
      maxCommandData5 > 1000 ||
      minCommandData5 > maxCommandData5
    ) {
      console.log("Lỗi");
      return false;
    }
    if (minCommandData6 === "") {
      setMinCommandData6(-1000);
      return true;
    }
    if (maxCommandData6 === "") {
      setMaxCommandData6(1000);
      return true;
    }
    if (
      minCommandData6 < -1000 ||
      maxCommandData6 > 1000 ||
      minCommandData6 > maxCommandData6
    ) {
      console.log("Lỗi");
      return false;
    }
    if (minThdIa === "") {
      setMinThdIa(0);
      return true;
    }
    if (maxThdIa === "") {
      setMaxThdIa(100);
      return true;
    }
    if (minThdIa < 0 || maxThdIa > 100 || minThdIa > maxThdIa) {
      console.log("Lỗi");
      return false;
    }
    if (minThdIb === "") {
      setMinThdIb(0);
      return true;
    }
    if (maxThdIb === "") {
      setMaxThdIb(100);
      return true;
    }
    if (minThdIb < 0 || maxThdIb > 100 || minThdIb > maxThdIb) {
      console.log("Lỗi");
      return false;
    }
    if (minThdIc === "") {
      setMinThdIc(0);
      return true;
    }
    if (maxThdIc === "") {
      setMaxThdIc(100);
      return true;
    }
    if (minThdIc < 0 || maxThdIc > 100 || minThdIc > maxThdIc) {
      console.log("Lỗi");
      return false;
    }
    if (minThdIg === "") {
      setMinThdIg(0);
      return true;
    }
    if (maxThdIg === "") {
      setMaxThdIg(100);
      return true;
    }
    if (minThdIg < 0 || maxThdIg > 100 || minThdIg > maxThdIg) {
      console.log("Lỗi");
      return false;
    }
    if (minThdIn === "") {
      setMinThdIn(0);
      return true;
    }
    if (maxThdIn === "") {
      setMaxThdIn(100);
      return true;
    }
    if (minThdIn < 0 || maxThdIn > 100 || minThdIn > maxThdIn) {
      console.log("Lỗi");
      return false;
    }
    if (minThdVab === "") {
      setMinThdVab(0);
      return true;
    }
    if (maxThdVab === "") {
      setMaxThdVab(100);
      return true;
    }
    if (minThdVab < 0 || maxThdVab > 100 || minThdVab > maxThdVab) {
      console.log("Lỗi");
      return false;
    }
    if (minThdVbc === "") {
      setMinThdVbc(0);
      return true;
    }
    if (maxThdVbc === "") {
      setMaxThdVbc(100);
      return true;
    }
    if (minThdVbc < 0 || maxThdVbc > 100 || minThdVbc > maxThdVbc) {
      console.log("Lỗi");
      return false;
    }
    if (minThdVca === "") {
      setMinThdVca(0);
      return true;
    }
    if (maxThdVca === "") {
      setMaxThdVca(100);
      return true;
    }
    if (minThdVca < 0 || maxThdVca > 100 || minThdVca > maxThdVca) {
      console.log("Lỗi");
      return false;
    }
    if (minThdVan === "") {
      setMinThdVan(0);
      return true;
    }
    if (maxThdVan === "") {
      setMaxThdVan(100);
      return true;
    }
    if (minThdVan < 0 || maxThdVan > 100 || minThdVan > maxThdVan) {
      console.log("Lỗi");
      return false;
    }
    if (minThdVbn === "") {
      setMinThdVbn(0);
      return true;
    }
    if (maxThdVbn === "") {
      setMaxThdVbn(100);
      return true;
    }
    if (minThdVbn < 0 || maxThdVbn > 100 || minThdVbn > maxThdVbn) {
      console.log("Lỗi");
      return false;
    }
    if (minThdVcn === "") {
      setMinThdVcn(0);
      return true;
    }
    if (maxThdVcn === "") {
      setMaxThdVcn(100);
      return true;
    }
    if (minThdVcn < 0 || maxThdVcn > 100 || minThdVcn > maxThdVcn) {
      console.log("Lỗi");
      return false;
    }
    if (minThdVln === "") {
      setMinThdVln(0);
      return true;
    }
    if (maxThdVln === "") {
      setMaxThdVln(100);
      return true;
    }
    if (minThdVln < 0 || maxThdVln > 100 || minThdVln > maxThdVln) {
      console.log("Lỗi");
      return false;
    }
    if (minThdVll === "") {
      setMinThdVll(0);
      return true;
    }
    if (maxThdVll === "") {
      setMaxThdVll(100);
      return true;
    }
    if (minThdVll < 0 || maxThdVll > 100 || minThdVll > maxThdVll) {
      console.log("Lỗi");
      return false;
    }

    return true;
  };

  const [minUab, setMinUab] = useState(0);
  const [maxUab, setMaxUab] = useState(100);
  const [minUbc, setMinUbc] = useState(0);
  const [maxUbc, setMaxUbc] = useState(100);
  const [minUca, setMinUca] = useState(0);
  const [maxUca, setMaxUca] = useState(100);
  const [minUll, setMinUll] = useState(0);
  const [maxUll, setMaxUll] = useState(100);
  const [minUan, setMinUan] = useState(0);
  const [maxUan, setMaxUan] = useState(100);
  const [minUbn, setMinUbn] = useState(0);
  const [maxUbn, setMaxUbn] = useState(100);
  const [minUcn, setMinUcn] = useState(0);
  const [maxUcn, setMaxUcn] = useState(100);
  const [minUln, setMinUln] = useState(0);
  const [maxUln, setMaxUln] = useState(100);
  const [minIa, setMinIa] = useState(0);
  const [maxIa, setMaxIa] = useState(100);
  const [minIb, setMinIb] = useState(0);
  const [maxIb, setMaxIb] = useState(100);
  const [minIc, setMinIc] = useState(0);
  const [maxIc, setMaxIc] = useState(100);
  const [minIN, setMinIN] = useState(0);
  const [maxIN, setMaxIN] = useState(100);
  const [minIG, setMinIG] = useState(0);
  const [maxIG, setMaxIG] = useState(100);
  const [minIAvg, setMinIAvg] = useState(0);
  const [maxIAvg, setMaxIAvg] = useState(100);
  const [minPa, setMinPa] = useState(0);
  const [maxPa, setMaxPa] = useState(100);
  const [minPb, setMinPb] = useState(0);
  const [maxPb, setMaxPb] = useState(100);
  const [minPc, setMinPc] = useState(0);
  const [maxPc, setMaxPc] = useState(100);
  const [minPTotal, setMinPTotal] = useState(0);
  const [maxPTotal, setMaxPTotal] = useState(100);
  const [minQa, setMinQa] = useState(0);
  const [maxQa, setMaxQa] = useState(100);
  const [minQb, setMinQb] = useState(0);
  const [maxQb, setMaxQb] = useState(100);
  const [minQc, setMinQc] = useState(0);
  const [maxQc, setMaxQc] = useState(100);
  const [minQTotal, setMinQTotal] = useState(0);
  const [maxQTotal, setMaxQTotal] = useState(100);
  const [minSa, setMinSa] = useState(0);
  const [maxSa, setMaxSa] = useState(100);
  const [minSb, setMinSb] = useState(0);
  const [maxSb, setMaxSb] = useState(100);
  const [minSc, setMinSc] = useState(0);
  const [maxSc, setMaxSc] = useState(100);
  const [minSTotal, setMinSTotal] = useState(0);
  const [maxSTotal, setMaxSTotal] = useState(100);
  const [minPfa, setMinPfa] = useState(0);
  const [maxPfa, setMaxPfa] = useState(1);
  const [minPfb, setMinPfb] = useState(0);
  const [maxPfb, setMaxPfb] = useState(1);
  const [minPfc, setMinPfc] = useState(0);
  const [maxPfc, setMaxPfc] = useState(1);
  const [minPFAvg, setMinPFAvg] = useState(0);
  const [maxPFAvg, setMaxPFAvg] = useState(1);
  const [minF, setMinF] = useState(45);
  const [maxF, setMaxF] = useState(65);
  const [minEp, setMinEp] = useState(0);
  const [maxEp, setMaxEp] = useState(100);
  const [minEpR, setMinEpR] = useState(0);
  const [maxEpR, setMaxEpR] = useState(100);
  const [minEpDR, setMinEpDR] = useState(0);
  const [maxEpDR, setMaxEpDR] = useState(100);
  const [minEpDRR, setMinEpDRR] = useState(0);
  const [maxEpDRR, setMaxEpDRR] = useState(100);
  const [minEq, setMinEq] = useState(0);
  const [maxEq, setMaxEq] = useState(100);
  const [minEqR, setMinEqR] = useState(0);
  const [maxEqR, setMaxEqR] = useState(100);
  const [minEqDR, setMinEqDR] = useState(0);
  const [maxEqDR, setMaxEqDR] = useState(100);
  const [minEqDRR, setMinEqDRR] = useState(0);
  const [maxEqDRR, setMaxEqDRR] = useState(100);
  const [minEs, setMinEs] = useState(0);
  const [maxEs, setMaxEs] = useState(100);
  const [minEsR, setMinEsR] = useState(0);
  const [maxEsR, setMaxEsR] = useState(100);
  const [minEsDR, setMinEsDR] = useState(0);
  const [maxEsDR, setMaxEsDR] = useState(100);
  const [minEsDRR, setMinEsDRR] = useState(0);
  const [maxEsDRR, setMaxEsDRR] = useState(100);
  const [minT1, setMinT1] = useState(0);
  const [maxT1, setMaxT1] = useState(100);
  const [minT2, setMinT2] = useState(0);
  const [maxT2, setMaxT2] = useState(100);
  const [minT3, setMinT3] = useState(0);
  const [maxT3, setMaxT3] = useState(100);
  const [minCommandData1, setMinCommandData1] = useState(0);
  const [maxCommandData1, setMaxCommandData1] = useState(100);
  const [minCommandData2, setMinCommandData2] = useState(0);
  const [maxCommandData2, setMaxCommandData2] = useState(100);
  const [minCommandData3, setMinCommandData3] = useState(0);
  const [maxCommandData3, setMaxCommandData3] = useState(100);
  const [minCommandData4, setMinCommandData4] = useState(0);
  const [maxCommandData4, setMaxCommandData4] = useState(100);
  const [minCommandData5, setMinCommandData5] = useState(0);
  const [maxCommandData5, setMaxCommandData5] = useState(100);
  const [minCommandData6, setMinCommandData6] = useState(0);
  const [maxCommandData6, setMaxCommandData6] = useState(100);
  const [minThdIa, setMinThdIa] = useState(0);
  const [maxThdIa, setMaxThdIa] = useState(100);
  const [minThdIb, setMinThdIb] = useState(0);
  const [maxThdIb, setMaxThdIb] = useState(100);
  const [minThdIc, setMinThdIc] = useState(0);
  const [maxThdIc, setMaxThdIc] = useState(100);
  const [minThdIn, setMinThdIn] = useState(0);
  const [maxThdIn, setMaxThdIn] = useState(100);
  const [minThdIg, setMinThdIg] = useState(0);
  const [maxThdIg, setMaxThdIg] = useState(100);
  const [minThdVab, setMinThdVab] = useState(0);
  const [maxThdVab, setMaxThdVab] = useState(100);
  const [minThdVbc, setMinThdVbc] = useState(0);
  const [maxThdVbc, setMaxThdVbc] = useState(100);
  const [minThdVca, setMinThdVca] = useState(0);
  const [maxThdVca, setMaxThdVca] = useState(100);
  const [minThdVll, setMinThdVll] = useState(0);
  const [maxThdVll, setMaxThdVll] = useState(100);
  const [minThdVan, setMinThdVan] = useState(0);
  const [maxThdVan, setMaxThdVan] = useState(100);
  const [minThdVbn, setMinThdVbn] = useState(0);
  const [maxThdVbn, setMaxThdVbn] = useState(100);
  const [minThdVcn, setMinThdVcn] = useState(0);
  const [maxThdVcn, setMaxThdVcn] = useState(100);
  const [minThdVln, setMinThdVln] = useState(0);
  const [maxThdVln, setMaxThdVln] = useState(100);
  const [status, setStatus] = useState(false);
  const [deviceId, setDeviceId] = useState();
  const [disabled, setDisable] = useState(false);
  const onChangeSw = (checked) => {
    setDisable(checked);
    handelCkickStop();
  };
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [client, setClient] = useState("");
  const [topic, setToppics] = useState("");
  const onChangeTime = (time, timeString) => {
    setStartTime(new Date(timeString[0]));
    setEndTime(new Date(timeString[1]));
  };
  const checkTime = () => {
    if (
      startTime === undefined ||
      startTime === "" ||
      endTime === undefined ||
      endTime === ""
    ) {
      toastErrorAccessory("Chưa nhập giờ!");
      return;
    } else {
      updateStatus({ key: props.data, status: true });
      toastSuccessAccessory("Đã gửi");
    }
    const id = setInterval(() => {
      const nows = new Date();
      const st = new Date(startTime);
      const end = new Date(endTime);
      if (
        nows.getDate() == st.getDate() &&
        nows.getMonth() == st.getMonth() &&
        nows.getFullYear() == st.getFullYear() &&
        nows.getHours() == st.getHours() &&
        nows.getMinutes() == st.getMinutes() &&
        nows.getSeconds() == st.getSeconds()
      ) {
        handelCkickRun();
      }
      if (
        nows.getDate() == end.getDate() &&
        nows.getMonth() == end.getMonth() &&
        nows.getFullYear() == end.getFullYear() &&
        nows.getHours() == end.getHours() &&
        nows.getMinutes() == end.getMinutes() &&
        nows.getSeconds() == end.getSeconds()
      ) {
        clearInterval(id);
        onChangeSw();
      }
    }, 1000);
  };
  useEffect(() => {
    clearInterval(timerId);
    updateStatus({ key: props.data, status: false });
    setTimerId(null);
  }, [disabled]);

  return (
    <>
      {/* Thao tác */}
      <div className="mt-2 row">
        <div className="col-8">
          <p>
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample10"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Setting user receive
            </button>
          </p>
          <div class="collapse" id="collapseExample10">
            <div class="card card-body">
              <div className="row">
                <div className="col-6">
                  <FormReceive
                    url={url}
                    setUrl={setUrl}
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                    client={client}
                    setClient={setClient}
                    topic={topic}
                    setToppic={setToppics}
                  />
                </div>
                <div className="col-6">
                  <h4 style={{ fontSize: "20px" }} className="mt-2">
                    Url: {url === "" ? <i>không có dữ liệu</i> : url}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-3">
                    Username:{" "}
                    {username === "" ? <i>không có dữ liệu</i> : username}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-3">
                    Password:{" "}
                    {password === "" ? <i>không có dữ liệu</i> : "*******"}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-3">
                    Client: {client === "" ? <i>không có dữ liệu</i> : client}
                  </h4>
                  <h4 style={{ fontSize: "20px" }} className="mt-3">
                    Topic: {topic === "" ? <i>không có dữ liệu</i> : topic}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-5">
          <Card
            bordered={true}
            className="card bg-light"
            style={{
              width: 500,
            }}
          >
            <div className="d-flex justify-content-around">
              <Button type="primary" className="ms-2" onClick={handelCkickRun}>
                Gửi tin
              </Button>
              <Button
                type="primary"
                danger
                className="ms-2"
                onClick={handelCkickStop}
              >
                Dừng
              </Button>
              <div className="">
                <label>
                  Tần xuất (
                  <i style={{ fontWeight: "500", fontSize: "13px" }}>ms</i>)
                </label>
                <Input
                  className="ms-2 inputN"
                  width={100}
                  min={1}
                  max={10}
                  value={frequency}
                  onChange={(event) => handelChangeInputTime(event)}
                />
              </div>
            </div>
          </Card>
        </div>
        <div className="col-7">
          <Card
            bordered={true}
            className="card"
            style={{
              width: 700,
            }}
          >
            <span className="me-2" style={{ fontWeight: "bold" }}>
              Hẹn giờ
            </span>
            <Switch
              className="ms-2 me-2"
              onChange={onChangeSw}
              checked={disabled}
            />
            <DatePicker.RangePicker
              showTime
              disabled={!disabled}
              onChange={onChangeTime}
            />
            <Button
              className="ms-2"
              type="primary"
              onClick={checkTime}
              disabled={!disabled}
            >
              Gửi
            </Button>
          </Card>
        </div>
      </div>

      {/* Set dữ liệu */}
      <div class="card card-body mt-2">
        <div className="row mt-4">
          <ToastContainer />
          {/* Cột 1 */}
          <div className="col-4">
            <Input
              placeholder="Device Id"
              value={deviceId}
              onChange={(event) => setDeviceId(event.target.value)}
            />
            <Card bordered={true} className=" mt-2 bg-light">
              <InputMinMax
                title="UAB"
                minValue={minUab}
                maxValue={maxUab}
                minX={0}
                maxX={44999}
                minY={1}
                maxY={45000}
                setMinValue={setMinUab}
                setMaxValue={setMaxUab}
              />
              <InputMinMax
                className="mt-2"
                title="UBC"
                minValue={minUbc}
                maxValue={maxUbc}
                minX={0}
                maxX={44999}
                minY={1}
                maxY={45000}
                setMinValue={setMinUbc}
                setMaxValue={setMaxUbc}
              />
              <InputMinMax
                className="mt-2"
                title="UCA"
                minValue={minUca}
                maxValue={maxUca}
                minX={0}
                maxX={44999}
                minY={1}
                maxY={45000}
                setMinValue={setMinUca}
                setMaxValue={setMaxUca}
              />
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              <InputMinMax
                title="ULL"
                minValue={minUll}
                maxValue={maxUll}
                minX={0}
                maxX={44999}
                minY={1}
                maxY={45000}
                setMinValue={setMinUll}
                setMaxValue={setMaxUll}
              />
              <InputMinMax
                className="mt-2"
                title="UAN"
                minValue={minUan}
                maxValue={maxUan}
                minX={0}
                maxX={44999}
                minY={1}
                maxY={45000}
                setMinValue={setMinUan}
                setMaxValue={setMaxUan}
              />
              <InputMinMax
                className="mt-2"
                title="UBN"
                minValue={minUbn}
                maxValue={maxUbn}
                minX={0}
                maxX={44999}
                minY={1}
                maxY={45000}
                setMinValue={setMinUbn}
                setMaxValue={setMaxUbn}
              />
              <InputMinMax
                className="mt-2"
                title="UCN"
                minValue={minUcn}
                maxValue={maxUcn}
                minX={0}
                maxX={44999}
                minY={1}
                maxY={45000}
                setMinValue={setMinUcn}
                setMaxValue={setMaxUcn}
              />
              <InputMinMax
                className="mt-2"
                title="ULN"
                minValue={minUln}
                maxValue={maxUln}
                minX={0}
                maxX={44999}
                minY={1}
                maxY={45000}
                setMinValue={setMinUln}
                setMaxValue={setMaxUln}
              />
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              <InputMinMax
                title="IA"
                minValue={minIa}
                maxValue={maxIa}
                minX={0}
                maxX={10000}
                minY={1}
                maxY={9999}
                setMinValue={setMinIa}
                setMaxValue={setMaxIa}
              />
              <InputMinMax
                className="mt-2"
                title="IB"
                minValue={minIb}
                maxValue={maxIb}
                minX={0}
                maxX={10000}
                minY={1}
                maxY={9999}
                setMinValue={setMinIb}
                setMaxValue={setMaxIb}
              />
              <InputMinMax
                className="mt-2"
                title="IC"
                minValue={minIc}
                maxValue={maxIc}
                minX={0}
                maxX={10000}
                minY={1}
                maxY={9999}
                setMinValue={setMinIc}
                setMaxValue={setMaxIc}
              />

              <InputMinMax
                className="mt-2"
                title="IN"
                minValue={minIN}
                maxValue={maxIN}
                minX={0}
                maxX={10000}
                minY={1}
                maxY={9999}
                setMinValue={setMinIN}
                setMaxValue={setMaxIN}
              />
              <InputMinMax
                className="mt-2"
                title="IG"
                minValue={minIG}
                maxValue={maxIG}
                minX={0}
                maxX={10000}
                minY={1}
                maxY={9999}
                setMinValue={setMinIG}
                setMaxValue={setMaxIG}
              />
              <InputMinMax
                className="mt-2"
                title="Iavg"
                minValue={minIAvg}
                maxValue={maxIAvg}
                minX={0}
                maxX={10000}
                minY={1}
                maxY={9999}
                setMinValue={setMinIAvg}
                setMaxValue={setMaxIAvg}
              />
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              <InputMinMax
                title="Ep"
                minValue={minEp}
                maxValue={maxEp}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEp}
                setMaxValue={setMaxEp}
              />
              <InputMinMax
                className="mt-2"
                title="Ep R"
                minValue={minEpR}
                maxValue={maxEpR}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEpR}
                setMaxValue={setMaxEpR}
              />
              <InputMinMax
                className="mt-2"
                title="Ep Dr"
                minValue={minEpDR}
                maxValue={maxEpDR}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEpDR}
                setMaxValue={setMaxEpDR}
              />
              <InputMinMax
                className="mt-2"
                title="Ep Drr"
                minValue={minEpDRR}
                maxValue={maxEpDRR}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEpDRR}
                setMaxValue={setMaxEpDRR}
              />
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              <InputMinMax
                title="Eq"
                minValue={minEq}
                maxValue={maxEq}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEq}
                setMaxValue={setMaxEq}
              />
              <InputMinMax
                className="mt-2"
                title="Eq R"
                minValue={minEqR}
                maxValue={maxEqR}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEqR}
                setMaxValue={setMaxEqR}
              />
              <InputMinMax
                className="mt-2"
                title="Eq Dr"
                minValue={minEqDR}
                maxValue={maxEqDR}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEqDR}
                setMaxValue={setMaxEqDR}
              />
              <InputMinMax
                className="mt-2"
                title="Eq Drr"
                minValue={minEqDRR}
                maxValue={maxEqDRR}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEqDRR}
                setMaxValue={setMaxEqDRR}
              />
            </Card>
          </div>
          {/* Cột 2 */}
          <div className="col-4">
            <Card bordered={true} className=" bg-light">
              {" "}
              <InputMinMax
                className="mt-2"
                title="F"
                minValue={minF}
                maxValue={maxF}
                minX={45}
                maxX={64}
                minY={46}
                maxY={65}
                setMinValue={setMinF}
                setMaxValue={setMaxF}
              />
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              <InputMinMax
                title="Pa"
                minValue={minPa}
                maxValue={maxPa}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinPa}
                setMaxValue={setMaxPa}
              />
              <InputMinMax
                className="mt-2"
                title="Pb"
                minValue={minPb}
                maxValue={maxPb}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinPb}
                setMaxValue={setMaxPb}
              />
              <InputMinMax
                className="mt-2"
                title="Pc"
                minValue={minPc}
                maxValue={maxPc}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinPc}
                setMaxValue={setMaxPc}
              />

              <InputMinMax
                className="mt-2"
                title="P total"
                minValue={minPTotal}
                maxValue={maxPTotal}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinPTotal}
                setMaxValue={setMaxPTotal}
              />
            </Card>
            <Card bordered={true} className="mt-2  bg-light">
              <InputMinMax
                title="Qa"
                minValue={minQa}
                maxValue={maxQa}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinQa}
                setMaxValue={setMaxQa}
              />
              <InputMinMax
                className="mt-2"
                title="Qb"
                minValue={minQb}
                maxValue={maxQb}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinQb}
                setMaxValue={setMaxQb}
              />
              <InputMinMax
                className="mt-2"
                title="Qc"
                minValue={minQc}
                maxValue={maxQc}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinQc}
                setMaxValue={setMaxQc}
              />

              <InputMinMax
                className="mt-2"
                title="Q total"
                minValue={minQTotal}
                maxValue={maxQTotal}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinQTotal}
                setMaxValue={setMaxQTotal}
              />
            </Card>
            <Card bordered={true} className=" mt-2 bg-light">
              <InputMinMax
                title="Sa"
                minValue={minSa}
                maxValue={maxSa}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinSa}
                setMaxValue={setMaxSa}
              />
              <InputMinMax
                className="mt-2"
                title="Sb"
                minValue={minSb}
                maxValue={maxSb}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinSb}
                setMaxValue={setMaxSb}
              />
              <InputMinMax
                className="mt-2"
                title="Sc"
                minValue={minSc}
                maxValue={maxSc}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinSc}
                setMaxValue={setMaxSc}
              />

              <InputMinMax
                className="mt-2"
                title="S total"
                minValue={minSTotal}
                maxValue={maxSTotal}
                minX={-2000000}
                maxX={1999999}
                minY={-1999999}
                maxY={2000000}
                setMinValue={setMinSTotal}
                setMaxValue={setMaxSTotal}
              />
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              <InputMinMax
                title="Pfa"
                minValue={minPfa}
                maxValue={maxPfa}
                minX={-1}
                maxX={0}
                minY={0}
                maxY={1}
                setMinValue={setMinPfa}
                setMaxValue={setMaxPfa}
              />
              <InputMinMax
                className="mt-2"
                title="Pfb"
                minValue={minPfb}
                maxValue={maxPfb}
                minX={-1}
                maxY={1}
                maxX={0}
                minY={0}
                setMinValue={setMinPfb}
                setMaxValue={setMaxPfb}
              />
              <InputMinMax
                className="mt-2"
                title="Pfc"
                minValue={minPfc}
                maxValue={maxPfc}
                maxX={0}
                minY={0}
                minX={-1}
                maxY={1}
                setMinValue={setMinPfc}
                setMaxValue={setMaxPfc}
              />

              <InputMinMax
                className="mt-2"
                title="Pf Avg"
                minValue={minPFAvg}
                maxValue={maxPFAvg}
                maxX={0}
                minY={0}
                minX={-1}
                maxY={1}
                setMinValue={setMinPFAvg}
                setMaxValue={setMaxPFAvg}
              />
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              <InputMinMax
                title="Es"
                minValue={minEs}
                maxValue={maxEs}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEs}
                setMaxValue={setMaxEs}
              />
              <InputMinMax
                className="mt-2"
                title="Es R"
                minValue={minEsR}
                maxValue={maxEsR}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEsR}
                setMaxValue={setMaxEsR}
              />
              <InputMinMax
                className="mt-2"
                title="Es Dr"
                minValue={minEsDR}
                maxValue={maxEsDR}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEsDR}
                setMaxValue={setMaxEsDR}
              />
              <InputMinMax
                className="mt-2"
                title="Es Drr"
                minValue={minEsDRR}
                maxValue={maxEsDRR}
                minX={0}
                maxX={3999999999}
                minY={1}
                maxY={4000000000}
                setMinValue={setMinEsDRR}
                setMaxValue={setMaxEsDRR}
              />
            </Card>
          </div>
          {/* Cột 3 */}

          <div className="col-4">
            <Card bordered={true} className="bg-light">
              <InputMinMax
                title="T1"
                minValue={minT1}
                maxValue={maxT1}
                minX={0}
                maxX={249}
                minY={1}
                maxY={250}
                setMinValue={setMinT1}
                setMaxValue={setMaxT1}
              />
              <InputMinMax
                className="mt-2"
                title="T2"
                minValue={minT2}
                maxValue={maxT2}
                minX={0}
                maxX={249}
                minY={1}
                maxY={250}
                setMinValue={setMinT2}
                setMaxValue={setMaxT2}
              />
              <InputMinMax
                className="mt-2"
                title="T3"
                minValue={minT2}
                maxValue={maxT2}
                minX={0}
                maxX={249}
                minY={1}
                maxY={250}
                setMinValue={setMinT2}
                setMaxValue={setMaxT2}
              />
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              <InputMinMax
                title="ThdIa"
                minValue={minThdIa}
                maxValue={maxThdIa}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdIa}
                setMaxValue={setMaxThdIa}
              />
              <InputMinMax
                className="mt-2"
                title="ThdIb"
                minValue={minThdIb}
                maxValue={maxThdIb}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdIb}
                setMaxValue={setMaxThdIb}
              />
              <InputMinMax
                className="mt-2"
                title="ThdIc"
                minValue={minThdIc}
                maxValue={maxThdIc}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdIc}
                setMaxValue={setMaxThdIc}
              />
              <InputMinMax
                className="mt-2"
                title="ThdIn"
                minValue={minThdIn}
                maxValue={maxThdIn}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdIn}
                setMaxValue={setMaxThdIn}
              />
              <InputMinMax
                className="mt-2"
                title="ThdIg"
                minValue={minThdIg}
                maxValue={maxThdIg}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdIg}
                setMaxValue={setMaxThdIg}
              />
            </Card>
            <Card bordered={true} className="mt-2 bg-light">
              <InputMinMax
                title="ThdVab"
                minValue={minThdVab}
                maxValue={maxThdVab}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdVab}
                setMaxValue={setMaxThdVab}
              />
              <InputMinMax
                className="mt-2"
                title="ThdVbc"
                minValue={minThdVbc}
                maxValue={maxThdVbc}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdVbc}
                setMaxValue={setMaxThdVbc}
              />
              <InputMinMax
                className="mt-2"
                title="ThdVca"
                minValue={minThdVca}
                maxValue={maxThdVca}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdVca}
                setMaxValue={setMaxThdVca}
              />
              <InputMinMax
                className="mt-2"
                title="ThdVll"
                minValue={minThdVll}
                maxValue={maxThdVll}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdVll}
                setMaxValue={setMaxThdVll}
              />
              <InputMinMax
                className="mt-2"
                title="ThdVan"
                minValue={minThdVan}
                maxValue={maxThdVan}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdVan}
                setMaxValue={setMaxThdVan}
              />
              <InputMinMax
                className="mt-2"
                title="ThdVbn"
                minValue={minThdVbn}
                maxValue={maxThdVbn}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdVbn}
                setMaxValue={setMaxThdVbn}
              />
              <InputMinMax
                className="mt-2"
                title="ThdVcn"
                minValue={minThdVcn}
                maxValue={maxThdVcn}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdVcn}
                setMaxValue={setMaxThdVcn}
              />
              <InputMinMax
                className="mt-2"
                title="ThdVln"
                minValue={minThdVln}
                maxValue={maxThdVln}
                minX={0}
                maxX={99}
                minY={1}
                maxY={100}
                setMinValue={setMinThdVln}
                setMaxValue={setMaxThdVln}
              />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
