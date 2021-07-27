const web = {
    
    nombre: "The odin project",
    links: {
        enlace: "www.theodinproject.com"
    },
    redesSociales: {
        youtube:{
            enlace: "www.youtube.com",
            nombre: "canal de youtube"
        }
    }
}

const enlaceYt = web.redesSociales.youtube.enlace
console.log(enlaceYt);

const {enlace, nombre} = web.redesSociales.youtube //destructuring 
console.log (enlace);
console.log (nombre)