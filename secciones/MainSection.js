export const mainSection = (tituloText, buttonText, alertButton) =>{
    const section = document.createElement('div');
    section.classList.add('section');
    section.style.display = 'flex';
    section.style.flexDirection = 'column';
    section.style.justifyContent = 'center';
    section.style.alignItems = 'center';
    section.style.backgroundColor = '#FDFF80';

    const titulo = document.createElement('h1');
    titulo.textContent = tituloText;
    titulo.style.color = '#0B2CFF';
    section.appendChild(titulo);

    const input = document.createElement('input');
    section.appendChild(input);

    const boton = document.createElement('button');
    boton.textContent = buttonText;
    boton.style.border = 'none';
    boton.style.borderRadius = '5px';
    boton.style.marginTop = '15px';
    boton.style.backgroundColor = '#48BFFF';
    boton.style.cursor = 'pointer';
    boton.style.width = '70px'; 
    boton.style.height = '35px';
    boton.addEventListener('click', () => {
        alert(alertButton);
    });
    section.appendChild(boton);

    return section
}