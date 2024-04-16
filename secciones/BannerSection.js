export const bannerSection = (titleText, textP, imagenSRC) =>{
    const banner = document.createElement('div');
    banner.classList.add('seccion1');
    banner.style.display = 'flex';
    banner.style.flexDirection = 'column';
    banner.style.justifyContent = 'center';
    banner.style.alignItems = 'center';

    const title = document.createElement('h1');
    banner.appendChild(title);
    title.textContent = titleText;
    title.style.color = '#0B2CFF';

    const parrafo = document.createElement('p');
    banner.appendChild(parrafo);
    parrafo.textContent = textP;
    parrafo.style.fontSize = '17px';

    const logo = document.createElement('img');
    banner.appendChild(logo);
    logo.style.width = '40%'; 
    logo.src = imagenSRC;
    
    return banner;
}

