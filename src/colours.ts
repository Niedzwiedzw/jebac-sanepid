import {values} from 'lodash';

export const COLOURS_PRIMARY = {
    black: '#4f5859',
    blue: '#00add8',
    orangered: '#e15829',
    orange: '#ff9e16',
};

export const COLOURS_LIGHT = {
    beige: '#f7d5c9',
    gray: '#d3d5d5',
    gold: '#ffe7c5',
    blue: '#bfeaf5',
    green: '#e5f5bf',
};

export const COLOURS_MEDIUM = {
    green: '#cbeb7f',
    blue: '#7fd6eb',
    orange: '#ffce8a',
    orangered: '#f0ab94',
    gray: '#a7abac',
};

export const ALL_COLOURS = [...values(COLOURS_MEDIUM), ...values(COLOURS_LIGHT), ...values(COLOURS_PRIMARY)];
export const MORE_COLOURS = [...ALL_COLOURS, ...ALL_COLOURS, ...ALL_COLOURS, ...ALL_COLOURS, ...ALL_COLOURS];
