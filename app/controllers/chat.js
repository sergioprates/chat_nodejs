module.exports.iniciaChat = function(application, req, res){

    var dadosForm = req.body;

    req.assert('apelido', 'apelido é obrigatório').notEmpty();

    var ex = req.validationErrors();

    if(ex){
        res.render('index.ejs', {validacao: ex});
    }
    else{
        application.get('io').emit('msgParaCliente', {apelido: dadosForm.apelido, mensagem: 'Entrou no chat'});
        res.render('chat.ejs', {apelido: dadosForm.apelido});
    }
}