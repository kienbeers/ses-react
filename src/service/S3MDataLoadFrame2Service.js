import { ConvertFrame2 } from "../utils/MessageConvert";

export const sendmessageframe2 = (e, user) => {
  let message = ConvertFrame2(data, {
    typeSystem: "01",
    typeDevice: "01",
    province: "01",
    codeCustomer: "01",
    codeProject: "01",
    a1: "01",
    a2: "02",
    a3: "03",
    a4: "04",
    a5: "05",
    func: "06",
    messageType: "07",
    crc: "01f8",
  });
  console.log(message);

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    brokerUrl: user.url,
    username: user.username,
    password: user.password,
    clientId: user.client,
    defaultTopic: user.topic,
    message: message,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8080/send-message", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
