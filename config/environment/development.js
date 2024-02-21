module.exports = {
    redis: {
		port: process.env.REDIS_PORT || 6379,
		host: process.env.REDIS_HOST || '127.0.0.1',
		// pass: '',
		auth: process.env.REDIS_AUTH || 'foobared',
		pass: process.env.REDIS_PASS || 'foobared',

		db: process.env.REDIS_DB || 1, // if provided select a non-default redis db
		options: {
		// see https://github.com/mranney/node_redis#rediscreateclient
		},
		prefix: process.env.APP_ENV || 'development'
	},
	mailCredential:{
		service: process.env.EMAIL_SERVICE || 'gmail',
		user: process.env.EMAIL_ID || 'harwindersingh@gmail.com',
		pass: process.env.EMAIL_PASSWORD
	}
}