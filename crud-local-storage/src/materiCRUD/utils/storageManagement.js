// const course = [{
//     id: 1,
//     title: 'course title',
//     description: 'course description'
// }]

const localStorageKey = 'rjs11';

const setItem = (value) => {
    const valueToString = JSON.stringify(value);
    localStorage.setItem(localStorageKey, valueToString);

}

const getItem = () => {
    const result = localStorage.getItem(localStorageKey);
    if (result) {
        return JSON.parse(result);
    }
    return null;
}

const storageManager = {
    set: setItem,
    get: getItem
}

export default storageManager;