const { EventEmitter } = require('events');
const keys = require('../config/keys');

const NotificationEvents = new EventEmitter();

NotificationEvents.setMaxListeners(0);


NotificationEvents.on(keys.NOTIFICATION_CREATED, async (notification) => {
    // let conditions = {};
    // update notification modal
    try {
        console.log('notification emit works  ================= ');
        // await NotificationModel.updateMany(conditions, { $set: { details: notification.details } });
        
    } catch (error) {
        throw error;
    }
});

module.exports = NotificationEvents;
