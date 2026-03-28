import axios from "axios"

export const getBlogs = async () => {
    const res = await axios.get("https://dev.to/api/articles?page=1&per_page=10")
    return res.data
}
