import axios from "axios"

export const api = axios.create({
    baseURL :"http://localhost:8080",
    withCredentials: true
})


export async function getAllWithPaginate() {
    try {
        const response = await api.get("/movie/all")
        return response.data
    } catch (error) {
        throw new Error("Error fetching room types")
    }
}

export async function getMovieDetails(id) {
    try {
        // console.log(id)
        const response = await api.get(`/movie/details`, {
            params: {
                id: id
            }
        })
        return response.data
    } catch (error) {
        throw new Error("Error fetching room types")
    }
}

export async function getActorDetail(id) {
    try {
        // console.log(id)
        const response = await api.get(`/people/actor`, {
            params: {
                id: id
            }
        })
        return response.data
    } catch (error) {
        throw new Error("Error fetching room types")
    }
}
export async function getMoviesByRated() {
    try {
        // console.log(id)
        const response = await api.get(`/movie/movie-trailer-limit`)
        return response.data
    } catch (error) {
        throw new Error("Error fetching room types")
    }
}
