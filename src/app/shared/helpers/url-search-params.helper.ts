
export const UrlParams = (filter: any) => {
    const params = new URLSearchParams()
    let query = ''
    if (filter) {
        for (const key in filter) {
            if (filter[key] === '' || filter[key] === null) {
                delete filter[key]
            } else {
                params.set(key, filter[key])
            }
        }
        query = Object.keys(filter).length > 0 ? `?${params}` : ''
    } else {
        query = ''
    }
    return query
}
