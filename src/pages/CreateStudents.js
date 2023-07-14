import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";

export default function CreateStudents() {
    const navigate = useNavigate();

    return (
        <>
            <h1>Add Tour</h1>
            <Link to={"/"}><button>Black</button></Link>
            <Formik initialValues={{
                id: '',
                title: '',
                price: '',
                description: ''


            }}
                    onSubmit={(values) => {
                        axios.post('http://localhost:3001/tuors', values).then(() => {
                            navigate('/')
                        })
                    }}>

                <Form>
                    <Field type="hidden" name="id" placeholder="ID"></Field>
                    <Field name="title" placeholder="Title"></Field>
                    <Field name="price" placeholder="Price"></Field>
                    <Field name="description" placeholder="Description"></Field>
                    <button>Save</button>
                </Form>
            </Formik>
        </>
    )
}