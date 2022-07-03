const peso = document.getElementById('peso');
const planetas = document.querySelectorAll('select');
const btn = document.getElementById('btn')
const img = document.createElement('img');
const saida = document.getElementById('saida');
const texto = document.getElementById('texto');
const valorPeso = document.getElementById('valorPeso');

function MostrarPlanetas(){
    let p = peso.value;

    

    planetas.forEach(elem => {
        //add imagem
        let imagem = elem.value;
        saida.style.display = 'flex';
        img.src = `images/${imagem}.png`
        document.getElementById('conteudo').appendChild(img);

        //calculo gravidade
        let m = peso.value;p;

        switch (imagem) {
            case 'earth':
                p = m * 9.8
                texto.textContent =`o peso do objeto em ${imagem}`;
                valorPeso.textContent = `${Math.floor(p)} N`
                break;
            case 'venus':
                p = m * 8.7
                texto.textContent =`o peso do objeto em ${imagem}`;
                valorPeso.textContent = `${Math.floor(p)} N`
                break;
            case 'mercury':
                p = m * 9.8
                texto.textContent =`o peso do objeto em ${imagem}`;
                valorPeso.textContent = `${Math.floor(p)} N`
                break;
            case 'moon':
                p = m * 1.6
                texto.textContent =`o peso do objeto em ${imagem}`;
                valorPeso.textContent = `${Math.floor(p)} N`
                break;
            case 'mars':
                p = m * 3.7
                texto.textContent =`o peso do objeto em ${imagem}`;
                valorPeso.textContent = `${Math.floor(p)} N`
                break;
            case 'jupiter':
                p = m * 24.79
                texto.textContent =`o peso do objeto em ${imagem}`;
                valorPeso.textContent = `${Math.floor(p)} N`
                break;
            case 'saturn':
                p = m * 10.44
                texto.textContent =`o peso do objeto em ${imagem}`;
                valorPeso.textContent = `${Math.floor(p)} N`
                break;
            case 'uranus':
                p = m * 8.69
                texto.textContent =`o peso do objeto em ${imagem}`;
                valorPeso.textContent = `${Math.floor(p)} N`
                break;
            case 'neptune':
                p = m * 11.15
                texto.textContent =`o peso do objeto em ${imagem}`;
                valorPeso.textContent = `${Math.floor(p)} N`
                break;
                        
            default:
                alert('informe os dados corretamente');
                
                break;
        }
    });

    
    
    
    
}

btn.addEventListener('click', MostrarPlanetas)
