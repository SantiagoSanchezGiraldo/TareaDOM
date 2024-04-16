export function footerSection(){
    const seccion = document.createElement('div');
    seccion.style.display = 'flex';
    seccion.style.flexDirection = 'column';
    seccion.style.justifyContent = 'center';
    seccion.style.alignItems = 'center';

    const title2 = document.createElement('h1');
    title2.textContent = 'Redes sociales';
    title2.style.color = '#0B2CFF';
    seccion.appendChild(title2);

    const subSeccion = document.createElement('div');
    subSeccion.style.display = 'flex';
    subSeccion.style.flexDirection = 'row';
    subSeccion.style.justifyContent = 'center';
    subSeccion.style.alignItems = 'center';
    seccion.appendChild(subSeccion);

    const Pint = document.createElement('img');
    Pint.src = 'asets/Pint.PNG';
    Pint.style.width = '50px'; 
    Pint.style.height = '50px';
    subSeccion.appendChild(Pint);

    const Face = document.createElement('img');
    Face.src = 'asets/facebook.PNG';
    Face.style.width = '50px'; 
    Face.style.height = '50px';
    subSeccion.appendChild(Face);

    const Insta = document.createElement('img');
    Insta.src = 'asets/Insta.PNG';
    Insta.style.width = '50px'; 
    Insta.style.height = '50px';
    subSeccion.appendChild(Insta);

    return document.body.appendChild(seccion);
}