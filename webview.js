const path = require('path');

module.exports = (Franz) => {
  const getMessages = function getMessages() {
	var indirects = document.getElementsByClassName("buffer channel active unread").length;
	var directs = document.getElementsByClassName("buffer conversation active unread activeBadge").length;

	if (isNaN(indirects)) {
		indirects = 0;
	}

	if (isNaN(directs)) {
		directs = 0;
    }

    // set Franz badge
    Franz.setBadge(directs + indirects);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
