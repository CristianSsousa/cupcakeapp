const homeService = {
    getHome: async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const json = await response.json()
        return json
    }
}

export default homeService
