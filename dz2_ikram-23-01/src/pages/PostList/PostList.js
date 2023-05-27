import React, { useState, useEffect } from 'react'

function PostList() {
    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(10)

    useEffect(() => {
        fetchPosts()
    }, [currentPage]) // Добавляем currentPage в зависимости useEffect

    const fetchPosts = () => {
        const startIndex = (currentPage - 1) * postsPerPage

        fetch(`https://jsonplaceholder.typicode.com/posts?_start=${startIndex}&_limit=${postsPerPage}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data)
            })
            .catch(error => {
                console.log('Error:', error)
            })
    }

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const goToNextPage = () => {
        setCurrentPage(currentPage + 1)
        fetchPosts() // Вызываем fetchPosts для загрузки следующих постов
    }

    return (
        <div>
            <h2>Post List</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            <div>
                <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                    Previous Page
                </button>
                <button onClick={goToNextPage}>Next Page</button>
            </div>
        </div>
    )
}

export default PostList
