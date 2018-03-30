var app = require('./config/server');



var server = app.listen(80, function() {
    console.log('Servidor ON');
});

var io = require('socket.io')
    .listen(server);

app.set('io', io);

    /* criar a conexão por websocket */

    /* tratando eventos do socket io */
io.on('connection', function(socket){
    console.log('usuario conectou.');

    socket.on('disconnect', function(){
        console.log('Usuário desconectou');
    });

    socket.on('msgParaServidor', function(data){
        /* Broadcast envia para outros clientes */

       socket.broadcast.emit('msgParaCliente', data);

       socket.emit('msgParaCliente', data);

       if(data.apelido_atualizado == 0){
            socket.broadcast.emit('participantesParaCliente', {apelido: data.apelido});

            socket.emit('participantesParaCliente', {apelido: data.apelido});
       }

      
    });
});