import { writable } from "svelte/store";

export const classicHighScore = writable<number>(0);
export const speedyHighScore = writable<number>(0);
export const timedHighScore = writable<number>(0);
export const currentClassicScore = writable<number>(0);
export const currentSpeedyScore = writable<number>(0);
export const currentTimedScore = writable<number>(0);
export const classicActive = writable<boolean>(false);
export const speedyActive = writable<boolean>(false);
export const timedActive = writable<boolean>(false);
export const modalClosed = writable<boolean>(false);
