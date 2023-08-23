export const sendmessage = (entity, user) => {
  let message =
    "@01*01*842911192168125*" +
    entity.sentDate +
    "*1*1*(" +
    entity.uab +
    "," +
    entity.ubc +
    "," +
    entity.uca +
    ")*(" +
    entity.ull +
    "," +
    entity.uan +
    "," +
    entity.ubn +
    "," +
    entity.ucn +
    "," +
    entity.uln +
    ")*(" +
    entity.ia +
    "," +
    entity.ib +
    "," +
    entity.ic +
    "," +
    entity.in +
    "," +
    entity.ig +
    "," +
    entity.iavg +
    ")*(" +
    entity.pa +
    "," +
    entity.pb +
    "," +
    entity.pc +
    "," +
    entity.ptotal +
    ")*(" +
    entity.qa +
    "," +
    entity.qb +
    "," +
    entity.qc +
    "," +
    entity.qtotal +
    ")*(" +
    entity.sa +
    "," +
    entity.sb +
    "," +
    entity.sc +
    "," +
    entity.stotal +
    ")*" +
    entity.f +
    "*(" +
    entity.ep +
    "," +
    "-" +
    "," +
    "-" +
    "," +
    "-" +
    ")*(" +
    entity.eq +
    "," +
    "-" +
    "," +
    "-" +
    "," +
    "-" +
    ")*(" +
    entity.es +
    "," +
    "-" +
    "," +
    "-" +
    "," +
    "-" +
    ")*(" +
    entity.t1 +
    "," +
    entity.t2 +
    "," +
    entity.t3 +
    ")*(-,-,-,-,-,-)*(" +
    entity.thdIa +
    "," +
    entity.thdIb +
    "," +
    entity.thdIc +
    "," +
    entity.thdIn +
    "," +
    entity.thdIg +
    ")*(" +
    entity.thdVab +
    "," +
    entity.thdVbc +
    "," +
    entity.thdVca +
    "," +
    entity.thdVll +
    "," +
    entity.thdVan +
    "," +
    entity.thdVbn +
    "," +
    entity.thdVcn +
    "," +
    entity.thdVln +
    ")*1f25";
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    brokerUrl: user.url,
    username: user.username,
    password: user.password,
    clientId: "client-sub",
    defaultTopic: "loadTopic",
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
