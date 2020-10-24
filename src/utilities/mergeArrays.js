export const mergeArrays = (a1, a2) =>
    a1.map(itm => ({
        ...a2.find((item) => (item.account_id === itm.account_id) && item),
        ...itm
    }));