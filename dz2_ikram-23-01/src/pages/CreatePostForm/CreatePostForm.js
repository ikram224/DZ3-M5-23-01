import React, { useState } from 'react';

function CreatePostForm() {
    const [title, setTitle] = useState('');
    const [userId, setUserId] = useState('');
    const [postResult, setPostResult] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title,
                userId,
            })
        })
            .then(res => res.json())
            .then(data => {
                setPostResult(data);
                console.log(data)
            })
            .catch(error => {
                console.log('Error:', error);
            });
    };

    return (
        <div>
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </label>
                <br />
                <label>
                    User ID:
                    <input type="text" value={userId} onChange={e => setUserId(e.target.value)} />
                </label>
                <br />
                <button type="submit">Create</button>
            </form>
            {postResult && (
                <div>
                    <h3>Post Result:</h3>
                    <p>Title: {postResult.title}</p>
                    <p>User ID: {postResult.userId}</p>
                </div>
            )}
        </div>
    );
}

export default CreatePostForm;
