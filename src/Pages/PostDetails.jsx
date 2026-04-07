import React, { useEffect, useState } from 'react'
import { getBlog } from '../api/devto';
import { useParams } from 'react-router-dom';

function PostDetails() {
    const { id } = useParams()
    const [blog, setBlog] = useState({})

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const data = await getBlog(id)
                setBlog(data)
            } catch (error) {
                console.log(error);
            }
        }

        fetchBlog()
    }, [id])

    return (
        <div className='px-6 py-7'>

            <>
                <div dangerouslySetInnerHTML={{ __html: blog.body_html }} />

            </>
        </div >
    )
}

export default PostDetails