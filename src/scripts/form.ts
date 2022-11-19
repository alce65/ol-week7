type DataFormType = {
    userName: string;
    age: number;
    isOk: boolean;
    curso: string;
    turn: string;
};
const handleForm = (event: Event) => {
    const dataForm: DataFormType = {
        userName: '',
        age: 0,
        isOk: false,
        curso: '',
        turn: '',
    };

    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const inputs = [
        ...formElement.querySelectorAll('[type="text"]'),
        ...formElement.querySelectorAll('[type="number"]'),
        ...formElement.querySelectorAll('select'),
    ];
    const values = [...inputs].map((item) => (item as HTMLFormElement).value);
    dataForm.userName = values[0];
    dataForm.age = +values[1];
    dataForm.curso = values[2];
    const checkIsOk = formElement.querySelector('[type="checkbox"]');
    dataForm.isOk = (checkIsOk as HTMLInputElement).checked;
    const radioTurn = formElement.querySelectorAll('[name="turn"]');
    const radioSelected = [...radioTurn].find(
        (item) => (item as HTMLInputElement).checked
    ) as HTMLInputElement;
    dataForm.turn = radioSelected.value;
    console.log(dataForm);
};

export const form = () => {
    const form = document.querySelector('form');
    form?.addEventListener('submit', handleForm);
};
