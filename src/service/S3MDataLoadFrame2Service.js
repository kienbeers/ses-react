export const sendmessageframe2 = (e, user) => {
  let message =
    "@[01*01*84*29*1*1*192.168.1.2*0005]*" +
    e.sentDate +
    "*1*1*(" +
    e.vanH1 +
    "," +
    +e.vanH2 +
    "," +
    e.vanH3 +
    "," +
    e.vanH4 +
    "," +
    e.vanH5 +
    "," +
    e.vanH6 +
    "," +
    e.vanH7 +
    "," +
    e.vanH8 +
    "," +
    e.vanH9 +
    "," +
    e.vanH10 +
    "," +
    e.vanH11 +
    "," +
    e.vanH12 +
    "," +
    e.vanH13 +
    "," +
    e.vanH14 +
    "," +
    e.vanH15 +
    "," +
    e.vanH16 +
    "," +
    e.vanH17 +
    "," +
    e.vanH18 +
    "," +
    e.vanH19 +
    "," +
    e.vanH20 +
    "," +
    e.vanH21 +
    "," +
    e.vanH22 +
    "," +
    e.vanH23 +
    "," +
    e.vanH24 +
    "," +
    e.vanH25 +
    "," +
    e.vanH26 +
    "," +
    e.vanH27 +
    "," +
    e.vanH28 +
    "," +
    e.vanH29 +
    "," +
    e.vanH30 +
    "," +
    e.vanH31 +
    ")*(" +
    +e.vbnH1 +
    "," +
    +e.vbnH2 +
    "," +
    e.vbnH3 +
    "," +
    e.vbnH4 +
    "," +
    e.vbnH5 +
    "," +
    e.vbnH6 +
    "," +
    e.vbnH7 +
    "," +
    e.vbnH8 +
    "," +
    e.vbnH9 +
    "," +
    e.vbnH10 +
    "," +
    e.vbnH11 +
    "," +
    e.vbnH12 +
    "," +
    e.vbnH13 +
    "," +
    e.vbnH14 +
    "," +
    e.vbnH15 +
    "," +
    e.vbnH16 +
    "," +
    e.vbnH17 +
    "," +
    e.vbnH18 +
    "," +
    e.vbnH19 +
    "," +
    e.vbnH20 +
    "," +
    e.vbnH21 +
    "," +
    e.vbnH22 +
    "," +
    e.vbnH23 +
    "," +
    e.vbnH24 +
    "," +
    e.vbnH25 +
    "," +
    e.vbnH26 +
    "," +
    e.vbnH27 +
    "," +
    e.vbnH28 +
    "," +
    e.vbnH29 +
    "," +
    e.vbnH30 +
    "," +
    e.vbnH31 +
    ")*(" +
    +e.vcnH1 +
    "," +
    +e.vcnH2 +
    "," +
    e.vcnH3 +
    "," +
    e.vcnH4 +
    "," +
    e.vcnH5 +
    "," +
    e.vcnH6 +
    "," +
    e.vcnH7 +
    "," +
    e.vcnH8 +
    "," +
    e.vcnH9 +
    "," +
    e.vcnH10 +
    "," +
    e.vcnH11 +
    "," +
    e.vcnH12 +
    "," +
    e.vcnH13 +
    "," +
    e.vcnH14 +
    "," +
    e.vcnH15 +
    "," +
    e.vcnH16 +
    "," +
    e.vcnH17 +
    "," +
    e.vcnH18 +
    "," +
    e.vcnH19 +
    "," +
    e.vcnH20 +
    "," +
    e.vcnH21 +
    "," +
    e.vcnH22 +
    "," +
    e.vcnH23 +
    "," +
    e.vcnH24 +
    "," +
    e.vcnH25 +
    "," +
    e.vcnH26 +
    "," +
    e.vcnH27 +
    "," +
    e.vcnH28 +
    "," +
    e.vcnH29 +
    "," +
    e.vcnH30 +
    "," +
    e.vcnH31 +
    ")*(" +
    e.iaH1 +
    "," +
    +e.iaH2 +
    "," +
    e.iaH3 +
    "," +
    e.iaH4 +
    "," +
    e.iaH5 +
    "," +
    e.iaH6 +
    "," +
    e.iaH7 +
    "," +
    e.iaH8 +
    "," +
    e.iaH9 +
    "," +
    e.iaH10 +
    "," +
    e.iaH11 +
    "," +
    e.iaH12 +
    "," +
    e.iaH13 +
    "," +
    e.iaH14 +
    "," +
    e.iaH15 +
    "," +
    e.iaH16 +
    "," +
    e.iaH17 +
    "," +
    e.iaH18 +
    "," +
    e.iaH19 +
    "," +
    e.iaH20 +
    "," +
    e.iaH21 +
    "," +
    e.iaH22 +
    "," +
    e.iaH23 +
    "," +
    e.iaH24 +
    "," +
    e.iaH25 +
    "," +
    e.iaH26 +
    "," +
    e.iaH27 +
    "," +
    e.iaH28 +
    "," +
    e.iaH29 +
    "," +
    e.iaH30 +
    "," +
    e.iaH31 +
    ")*(" +
    e.ibH1 +
    "," +
    +e.ibH2 +
    "," +
    e.ibH3 +
    "," +
    e.ibH4 +
    "," +
    e.ibH5 +
    "," +
    e.ibH6 +
    "," +
    e.ibH7 +
    "," +
    e.ibH8 +
    "," +
    e.ibH9 +
    "," +
    e.ibH10 +
    "," +
    e.ibH11 +
    "," +
    e.ibH12 +
    "," +
    e.ibH13 +
    "," +
    e.ibH14 +
    "," +
    e.ibH15 +
    "," +
    e.ibH16 +
    "," +
    e.ibH17 +
    "," +
    e.ibH18 +
    "," +
    e.ibH19 +
    "," +
    e.ibH20 +
    "," +
    e.ibH21 +
    "," +
    e.ibH22 +
    "," +
    e.ibH23 +
    "," +
    e.ibH24 +
    "," +
    e.ibH25 +
    "," +
    e.ibH26 +
    "," +
    e.ibH27 +
    "," +
    e.ibH28 +
    "," +
    e.ibH29 +
    "," +
    e.ibH30 +
    "," +
    e.ibH31 +
    ")*(" +
    e.icH1 +
    "," +
    +e.icH2 +
    "," +
    e.icH3 +
    "," +
    e.icH4 +
    "," +
    e.icH5 +
    "," +
    e.icH6 +
    "," +
    e.icH7 +
    "," +
    e.icH8 +
    "," +
    e.icH9 +
    "," +
    e.icH10 +
    "," +
    e.icH11 +
    "," +
    e.icH12 +
    "," +
    e.icH13 +
    "," +
    e.icH14 +
    "," +
    e.icH15 +
    "," +
    e.icH16 +
    "," +
    e.icH17 +
    "," +
    e.icH18 +
    "," +
    e.icH19 +
    "," +
    e.icH20 +
    "," +
    e.icH21 +
    "," +
    e.icH22 +
    "," +
    e.icH23 +
    "," +
    e.icH24 +
    "," +
    e.icH25 +
    "," +
    e.icH26 +
    "," +
    e.icH27 +
    "," +
    e.icH28 +
    "," +
    e.icH29 +
    "," +
    e.icH30 +
    "," +
    e.icH31 +
    ")*2e8b";
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
