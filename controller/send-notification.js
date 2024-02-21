const QueueBull = require('../bulls_queue_methods/bullQueue')
const keys = require('../config/keys');
const { process } = require('../bull_queues_process/queueProcess')
const PRIORITY = {
    HIGH: 1,
    MEDIUM: 2,
    LOW: 3,
};

const sendNotification = (req, res, next)=> {
    const miliseconds = 1000;
    const seconds = 5;
    const expireDelayMiliseconds = seconds * miliseconds; // delay of 5 seconds
    const data = { id:1, name:'harwinder', description:'hi this data for bull queue'};
    let job = QueueBull.createQueue(
        keys.NOTIFICATION_CREATED, 
        data, 
        { delay: expireDelayMiliseconds, priority: PRIORITY.HIGH }
    );
    if (job) {
        process(job);
    }
    res.send('Notification sent successfully !!');
}

module.exports = {
    sendNotification
}