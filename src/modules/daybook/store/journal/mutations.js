
// export const myAction = ( state ) => {

// }

export const setEntries = (state, payload) => {
    state.entries = [...state.entries, ...payload]
    state.isLoading = false
}

export const updateEntry = (state, payload) => {
    const indice = state.entries.map(el => el.id).indexOf(payload.id)
    state.entries[indice] = payload
}

export const addEntry = (state, payload) => {
    state.entries = [payload, ...state.entries]
}

export const deleteEntry = (state, payload) => {
    state.entries = state.entries.filter(el => el.id !== payload)
}
