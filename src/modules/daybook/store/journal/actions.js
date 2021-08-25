import journalApi from '@/api/journalApi'

export const loadEntries = async ({ commit }) => {
    const { data } = await journalApi.get('/entries.json')
    const entries = []
    for (let id of Object.keys(data)) {
        entries.push({
            id,
            ...data[id]
        })
    }
    commit('setEntries', entries)

}

export const updateEntry = async ({ commit }, data) => {
    const { date, picture, text } = data
    const entry = { date, picture, text }

    await journalApi.put(`/entries/${data.id}.json`, entry)

    commit('updateEntry', { ...data })
}


export const createEntry = async (/*{ commit }*/) => {

}
