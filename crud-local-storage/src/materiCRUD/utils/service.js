import storageManager from "./storageManagement"

const addCourse = (payload) => {
    const currItem = storageManager.get();
    if (currItem.length !== 0 && currItem !== null) {
        const combinedItem = [...currItem, payload];
        storageManager.set(combinedItem);
    } else {
        storageManager.set([payload]);
    }

    return {
        data: payload
    }

}

const getCourse = () => {
    const result = storageManager.get();
    const response = {
        data: result !== null ? result : []
    }
    return response;

}

const courseService = {
    addCourse,
    getCourse
}

export default courseService;