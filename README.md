iNotas para exponer 

1.Comienzo la exposicion mostrando las diapositivas de node y que es node etc-
2.Creacion de un proyecto.
3.Revisamos si tenemos node instalado: node -v, luego instalamos todas las dependencias necesarias. Explicacion breve sobre node mon:
la dependencia de desarrolo nodemon permite cerrar y abrir el servidor automaticamente y de manera mas rápida. 
4.Creamos el script type:module, y levantamamos el servidor.
5.Explico el codigo :
En app.set("port", 4000);, la coma separa los dos argumentos del método app.set: el nombre de la opción ("port") y el valor (4000). Este método se utiliza para configurar opciones en la aplicación Express, y en este caso específico, configura el puerto en el que la aplicación escuchará las solicitudes.
6.Hacemos el html de login para probar, creo la ruta en index.js y explico las diapositiva.
7.Creo la carpeta public y dentro los archivos css y js.
8.Configuramos la ruta de archivos estaticos.
9.Creo register y confirmamos que funcione.
10.Una vez ya conectadas las rutas etc, paso el archivo html de login y register.
11. Paso el archivo css.
12. Creo la pagina de admin.

Endpoint de usuario y register.
1.Explico las diapositicas sobre lo que un endpoint.
2.Paso el codigo de register.js y lo explico un poco según los comentarios ya introducidos.
3.Creo la carpeta y archivo controllers.js:
En este ejemplo, importamos la lógica de dos funciones controladoras desde el archivo authentication.controllers.js. Estas funciones controladoras se utilizan para manejar las rutas POST de login y registro de usuarios, organizando la lógica de negocio de manera modular y eficiente. Esto facilita la separación de responsabilidades y mejora el mantenimiento y la reutilización del código.
4.Importo express.jsson para procesar o json. : app.use(express.json());
5.Una vez que hemos resivido el body revisamos que este todo lo que necesitamos y chequeamos que el usuario no exista.
const usuarios = [{
user:"a",
email: "a@a.com",
password:"a"
}]

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
} entre esta llave y la siguiente va el codigo de abajo de hachear el pasword.
}


6.Ahora vamos a encriptar la contraseña porque un administrador no debiera tener acceso a la contraseña.(hachear)
primero import bcryptjs from "bcryptjs";  
const salt = await bcryptjs.genSalt(5);
const hashPassword = await bcryptjs.hash(password,salt);
const nuevoUsuario = {
user, email, password: hashPassword
}
console.log(nuevoUsuario), //luego esto va debajo como console.log(usuarios) 
usuarios.push(nuevoUsuario);// iria debajo de este y y vemos todos los usuarios
res.status(201).send({status:"ok",message: `Usuario ${nuevoUsuario.user} agregado`, redirect:"/"})

7.