const path = require('path');

module.exports = (Franz) => {
  const getMessages = function getMessages() {
    var directMessages = document.getElementsByClassName("buffer conversation active unread activeBadge").length;
    var indirectMessages = document.getElementsByClassName("buffer channel active unread").length;

    Franz.setBadge(directMessages, indirectMessages);
  };

  Franz.loop(getMessages);
};
