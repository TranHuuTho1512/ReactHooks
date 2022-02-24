import './Blog.scss';
import { useState } from 'react';
import axios from 'axios';

const AddNewBlog = (props) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleBtnSubmit = async () => {

        if (!title) {
            alert('Empty title');
            return;
        }

        if (!content) {
            alert('Empty content');
            return;
        }

        let data = {
            title: title,
            body: content,
            userId: 1,
        }
        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
        if (res && res.data) {
            let newBlog = res.data;
            props.handleAddNew(newBlog);
        }

    }
    return (
        <div className="add-new-container">
            <div className="text-add-new">---Add new blogs---</div>
            <div className="inputs-data">
                <label>Title:</label>
                <input type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)} />
            </div>
            <div className="inputs-data">
                <label>Content:</label>
                <input type="text"
                    value={content}
                    onChange={(event) => setContent(event.target.value)} />
            </div>
            <button className="btn-add-new" onClick={handleBtnSubmit}>Submit</button>
        </div>
    )
}
export default AddNewBlog;