//objetos
const web = {
    nombre: 'bluuweb',
    links: {
        enlace: 'www.bluuweb.cl'
    },
    
    redesSociales: {
        youtube: {
            enlace: 'youtube.com/bluuweb',
            nombre: 'bluuweb yt'
        },
        facebook: {
            enlace: 'facebook.com/bluuweb',
            nombre: 'bluuweb fb'
        }
    }
}

const enlaceYt = web.redesSociales.youtube.enlace;
console.log(enlaceYt)

const {enlace, nombre} = web.redesSociales.youtube;
console.log(enlace)
console.log(nombre)