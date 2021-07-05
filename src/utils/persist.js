const KEY = '__favorite_scholarship';

const clear = () => localStorage.removeItem(KEY);

const load = () => JSON.parse(localStorage.getItem(KEY)) ?? {};

const save = favorites => localStorage.setItem(KEY, JSON.stringify(favorites));

export { clear, load, save };