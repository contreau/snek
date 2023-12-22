import { writable } from "svelte/store";

export const highScore = writable<number>(0);
export const currentScore = writable<number>(0);
export const classicActive = writable<boolean>(false);
