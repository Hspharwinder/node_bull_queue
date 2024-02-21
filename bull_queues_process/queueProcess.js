const keys = require('../config/keys');
const service = require('../service');

exports.process = (queue) => {
	if (queue.name == keys.EXPIRE_SHOUTOUT) {
		queue.process(async (job, done) => {
            try {
                emailProcess(queue);                                
                done()
            } catch (error) {
                done(error)
            }
		});
	}

    if (queue.name == keys.NOTIFICATION_CREATED) {
		queue.process(async (job, done) => {
            try {
                notificationProcess(queue);
                done()
            } catch (error) {
                done(error)
            }
		});
	}
}

const emailProcess = (emailData) => {
    service._sendMail();
}

const notificationProcess = (notificationData) => {
    console.log('notificationProcess ================== ');
    service._sendNotification.emit(keys.NOTIFICATION_CREATED, notificationData);
}