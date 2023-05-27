import './App.css';
import {Route, Routes} from "react-router-dom";
import PostList from "./ pages/PostList/PostList";
import DeletePostConfirmation from "./ pages/DeletePostConfirmation/DeletePostConfirmation";
import EditPostForm from "./ pages/EditPostForm/EditPostForm";
import CreatePostForm from "./ pages/CreatePostForm/CreatePostForm";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={<PostList/>}/>
                <Route path='delete' element={<DeletePostConfirmation/>}/>
                <Route path='edit' element={<EditPostForm/>}/>
                <Route path='create' element={<CreatePostForm/>}/>
            </Routes>
        </div>
    );
}

export default App;
