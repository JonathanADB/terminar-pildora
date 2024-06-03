import bcryptjs from "bcryptjs"; 

const usuarios = [{
    user:"a",
    email: "a@a.com",
    password:"$2a$05$gJfqJULJpxzaMop3.8ivQ.Xt1a1Zfwtt/edTFOJW2LGlt54a5byCS"
}]
async function login(req,res){

}

async function register (req,res){
    console.log(req.body);
    const user = req.body.user;
    const password = req.body.password;
    const email = req.body.email;
    if(!user || !password || !email){
        res.status(400).send({status:"Error",message:"Los campos estan incompletos"})
    }
     const usuarioArevisar = usuarios.find(usuario => usuario.user === user);
     if(usuarioArevisar){
        res.status(400).send({status: "Error", message:"Este usuario ya existe"})
     }
     const salt = await bcryptjs.genSalt(5);
     const hashPassword = await bcryptjs.hash(password,salt);
     const nuevoUsuario = {
        user, email, password: hashPassword
     }
     usuarios.push(nuevoUsuario);
     console.log(usuarios),
     res.status(201).send({status:"ok",message: `Usuario ${nuevoUsuario.user} agregado`, redirect:"/"})
}

export const methods = {
    login,
    register
}