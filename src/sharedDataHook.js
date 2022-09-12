import { useState } from "react";

let setDataListeners = {};

export const useSharedData = (intialValue, name) => {
    const [data, setData] = useState(intialValue.data);

    let setDataList = setDataListeners[name];
    if (!setDataList) {
        setDataList = [];
        setDataListeners[name] = setDataList;
    }

    const updateData = (_data) => {
        if (Array.isArray(_data)) {
            intialValue.data = Object.assign([], _data);
        } else {
            intialValue.data = Object.assign({}, _data);
        }
        setDataList.forEach((st) => st(intialValue.data));
    };

    if (!setDataList || !setDataList.includes(setData)) {
        setDataList.push(setData);
    }

    return [data, updateData];
};
