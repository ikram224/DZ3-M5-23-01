import React, {useState, useEffect} from 'react'

function PostList() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data)
            })
            .catch(error => {
                console.log('Error:', error)
            })
    }

    const handleEditPost = (postId) => {
        const updatedTitle = prompt('Введите новый заголовок поста:')
        if (updatedTitle) {
            const updatedPost = {
                title: updatedTitle,
            }

            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                method: 'PUT', // or 'PATCH'
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(updatedPost),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Updated post:', data)
                    // Обновляем список постов после успешного редактирования
                    fetchPosts()
                })
                .catch(error => {
                    console.log('Error:', error)
                })
        }
    }

    return (
        <div>
            <h2>Post List</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <button style={{marginBottom: '80px'}} onClick={() => handleEditPost(post.id)}>
                            Редактировать пост
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostList
