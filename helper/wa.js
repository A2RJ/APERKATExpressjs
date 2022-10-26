const { Client, NoAuth } = require("whatsapp-web.js");
const qrImage = require("qr-image");
const { setWaCache, getWaCache } = require("./cache");

const wa = new Client({
  authStrategy: new NoAuth(),
  // puppeteer: {
  //   handleSIGINT: false,
  //   args: ["--no-sandbox", "--disable-setuid-sandbox"],
  // },
});

const { isClientReady } = getWaCache();

wa.on("qr", (qr) => {
  const svg = qrImage.image(qr, { type: "png" });
  svg.pipe(require("fs").createWriteStream("assets/QRCode.png"));
  console.log("QR Code generated");
  console.log("Client connected", getWaCache());
});

wa.on("authenticated", (session) => {
  console.log("Client was authenticated");
});

wa.on("disconnected", (reason) => {
  console.log("Client was logged out", reason);
  setWaCache(false);
  wa.initialize();
});

wa.on("ready", () => {
  console.log("Client is ready!");
  setWaCache(true);
  console.log("Client connected", getWaCache());
});

module.exports = {
  wa,
  isClientReady,
};
