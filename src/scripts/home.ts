export const home = () => {
    console.log('App');
    console.dir(document);
    const today = new Date();

    // Ejemplo del dinamismo del DOM
    // document.body.innerHTML =
    // `<h1>Esto es nuevo de hoy ${today.toLocaleString()}</h1>`;

    // Leer información: seleccionando elementos

    const pGreetings = document.querySelector('.saludo');
    console.dir(pGreetings);

    // Escribir información
    if (!pGreetings) return;
    pGreetings.innerHTML += ` hoy, ${today.toLocaleString()}`;

    // Interaccionar con el usuario -> eventos

    const handleClic = (event: Event) => {
        const element = event.target as HTMLButtonElement;
        console.log('click', element.dataset.value);
    };

    // Para un botón
    // document.querySelector.addEventListener('click', handleClic);

    // Para multiple botones
    const nodeList = document.querySelectorAll('section button');
    nodeList.forEach((item) => item.addEventListener('click', handleClic));

    // Funcionaría debido al hoisting
    // function handleClic() {
    //     console.log('click');
    // }

    // Obtener información del usuario

    const handleForm = (event: Event) => {
        event.preventDefault();
        const formElement = event.target as HTMLFormElement;
        const inputs = formElement.querySelectorAll('input');
        const values = [...inputs].map((item) => item.value);
        (
            formElement.querySelector('output') as HTMLOutputElement
        ).value = `Hola ${values[0]}, felicidades por tus ${values[1]} años`;
        const p1 = formElement.querySelector('#p1') as HTMLParagraphElement;
        const p2 = formElement.querySelector('#p2') as HTMLParagraphElement;
        p1.hidden = false;
        p2.classList.remove('hidden');
    };

    const form = document.querySelector('form');
    if (!form) return;
    form.addEventListener('submit', handleForm);

    const inputHandler = (event: Event) => {
        const element = event.target as HTMLInputElement;
        const output = document.querySelector(
            'nav output'
        ) as HTMLOutputElement;
        if (element.value.length > 3) {
            output.value = `Buscando ${element.value}`;
        }
    };

    const search = document.querySelector('nav input') as HTMLInputElement;
    search.addEventListener('input', inputHandler);
};

// 12:15
