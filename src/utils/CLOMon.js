import { store } from "../store"

export const monitorStore = () => {
    const config = store.getState().playroom.config;
    return config;
}