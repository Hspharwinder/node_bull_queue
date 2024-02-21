const config = require("./environment");

const prefix = config.redis.prefix;

module.exports = {
	EXPIRE_SHOUTOUT: prefix + "_EXPIRE_SHOUTOUT",

	NOTIFICATION_CREATED : prefix + "_NOTIFICATION_CREATED",

	USER_CACHE: prefix + "_USER_",
	SEND_MAIL: prefix + "_SEND_MAIL",
	DELETE_SHOUTOUT: prefix + "_DELETE_SHOUTOUT",
	REMINDER_SHOUTOUT: prefix + "_REMINDER_SHOUTOUT",
};
