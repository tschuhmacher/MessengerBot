const send = require('./send');
const threadSetup = require('./threadsetup');

const handleMessage = (id, received_message) => {
  console.log("I'm a MESSAGE! Handle me!");

  if (received_message.quick_reply) {
    switch (received_message.quick_reply.payload) {
      case "SETUP":
        break;
      case "EXHIBITIONS":
        console.log("Aktuell");
        break;
      case "OPENING_HOURS":
        console.log("Öffnungszeiten");
        send.func.sendOpeningHours(id);
        break;
      case "TICKETS":
        console.log("Tickets");
        break;
      default:
        console.log("None of the above");
        send.func.sendFailMessage(id);
    }
  } else {
    send.func.sendFailMessage(id);
  }

  return;
};

const handlePostback = (id, postback) => {
  console.log("I'm a POSTBACK! Handle me!")

  if (postback.payload === "GET_STARTED") {
    send.func.sendStartMessageFirst(id);
  } else {
    send.func.sendFailMessage(id);
  }
};

exports.func = {
  handleMessage,
  handlePostback
}
