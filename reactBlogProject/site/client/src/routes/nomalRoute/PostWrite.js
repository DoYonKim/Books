import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Form, FormGroup, Label, Input, Button, Col, Progress} from 'reactstrap';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'
import {editorConfiguration} from '../../components/editor/EditorConfig'
import Myinit from '../../components/editor/UploadAdapter';

const PostWrite = () => {
    const {isAuthenticated} = useSelector((state) => state.auth);
    const [form, setValue] = useState({title: "", contents: "", fileUrl: ""});
    const dispatch = useDispatch();
    
    const onChange = (e) =>{
        setValue({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const getDataFormCKEditor = (event, editor) => {
        console.log("editor");
    };

    const onSubmit = async(e) => {
        await e.prenentDefault();
        const {title, contents, fileUrl, category} = form;
    };

    return (
        <div>
            {isAuthenticated ? (
                <Form onSubmit = {onSubmit}>
                    <FormGroup className="mb-3">
                        <Label for = "title">Title</Label>
                        <Input 
                            type = "text"
                            name = "title"
                            id= "title"
                            className = "form-control"
                            onChange = {onChange}/>
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <Label for = "category">Category</Label>
                        <Input 
                            type = "text"
                            name = "category"
                            id= "category"
                            className = "form-control"
                            onChange = {onChange}/>
                    </FormGroup>
                    <FormGroup className="mb-3">
                        <Label for = "content">Content</Label>
                        <CKEditor
                            editor = {ClassicEditor}
                            config = {editorConfiguration}
                            onReady = {Myinit}
                            onBlur = {getDataFormCKEditor}
                        />
                        <Button
                            color = "success"
                            block
                            className = "mt-3 col-md-2 offset-md-10 mb-3">
                            제출하기
                        </Button>
                    </FormGroup>
                </Form>
            ) : (
                <Col width = {50} className = "p-5 m-5">
                    <Progress animated color = "info" value = {100}/>
                </Col>
            )}
        </div>
    )
};

export default PostWrite;