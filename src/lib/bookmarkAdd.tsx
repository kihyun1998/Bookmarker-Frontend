import axios, { AxiosResponse } from "axios"

//'http://localhost:8080'
// const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_API_BASE_URL


export async function saveBookmark(bookmark:{title: string, url: string}) {
    const res: AxiosResponse<any, any> = await axios.post(`/api/bookmarks`, bookmark)
    return res.data
}