const bot = mineflayer.createBot({
    host: 'mc.prostocraft.ru ', // optional
    port: 25565, // optional
    username: 'FlommyXD', // email and password
    version: 1.12
    })
    
    bot.on('chat', function (username, message) {
    if (username === bot.username) return
    bot.chat(message)
    })
    
    // Log errors and kick reasons:
    bot.on('kicked', (reason, loggedIn) => console.log(reason, loggedIn))
    bot.on('error', err => console.log(err))