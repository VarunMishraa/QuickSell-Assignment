export const saveToLocal = (group, order) => {
    if (group !== undefined && order !== undefined) {
        localStorage.setItem('group', group);
        localStorage.setItem('order', order);
    }
}
export const getFromLocal = () => {
    let group = window.localStorage.getItem('group')
    let order = window.localStorage.getItem('order')
    return {group, order}
}
