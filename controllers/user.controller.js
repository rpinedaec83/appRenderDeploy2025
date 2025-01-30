exports.allAccess = (req,res)=>{
    res.status(200).send('Contenido Publico desde la nube de render');
}

exports.userBoard = (req,res)=>{
    res.status(200).send('Contenido de usuario desde la nube de render');
}

exports.moderatorBoard = (req,res)=>{
    res.status(200).send('Contenido de moderador');
}

exports.adminBoard = (req,res)=>{
    res.status(200).send('Contenido de administrador');
}