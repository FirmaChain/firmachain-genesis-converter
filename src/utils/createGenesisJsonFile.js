export const CreateGenesisJsonFile = (value) => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(value, null, 4)], {
        type: 'application/json'
    });

    element.href = URL.createObjectURL(file);
    element.download = 'genesis.json';
    document.body.appendChild(element);
    element.click();
}