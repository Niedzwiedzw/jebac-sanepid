import {
    keyBy, toPairs, values, zip, take,
    first, mapValues, isNil,
    map, keys, isEmpty, isArray, cloneDeep,
    reverse, replace,
} from 'lodash';
import moment from 'moment';
import {MORE_COLOURS} from "@/colours";

export function reversed<T>(array: T[]): T[] {
    return reverse(cloneDeep(array));
}

export function formatTime(input: string): string {
    return moment(input).fromNow();
}

export function tryFormatTime(val: string): string {
    try {
        const newVal = formatTime(val);
        if (!isNil(newVal) && Boolean(newVal)) { return newVal; }
    } catch (e) { (() => (1 + 1))(); }
    return val;
}


export function buildMultiLineChartData(data: { [key: string]: { [key: string]: number } }, colours = MORE_COLOURS) {
    const bottomLabels = reversed(keys(data)); // this is reversed...
    const subsetNames = keys(first(values(data))!);

    return cloneDeep({
        labels: map(bottomLabels, tryFormatTime),
        datasets: map(
            zip(subsetNames, take(colours, subsetNames.length)),
            ([subsetName, colour]) => ({
                data: reversed(map(values(data), (subset) => subset[subsetName!])), // ...because this is reversed
                label: subsetName!,
                borderColor: colour!,
            }),
        ),
    });
}
