import React from "react";
import * as yup from "yup";
import {Formik} from "formik";
import {Button, Container, Form} from "react-bootstrap";
import "./login.scss"

export default function LoginPage() {
    return <Container>
        <div className="login-wrapper">
           <div className="login">
               <Formik
                   initialValues={{
                       email: "",
                       password: "",
                   }}
                   onSubmit={(values: any, helpers: any) => {

                   }}
                   validationSchema={yup.object({
                       email: yup.string().required("Please enter first name"),
                       password: yup.string().required("Please enter last name"),

                   })}
               >
                   {({
                         handleSubmit,
                         handleChange,
                         values,
                         isSubmitting,
                         touched,
                         setFieldValue,
                         errors,
                     }: any) => {
                       return (
                           <form onSubmit={handleSubmit}>
                               <Form.Group controlId="formBasicEmail">
                                   <Form.Label>Email address</Form.Label>
                                   <Form.Control type="email" placeholder="Enter email" />
                                   <Form.Text className="text-muted">
                                       We'll never share your email with anyone else.
                                   </Form.Text>
                               </Form.Group>

                               <Form.Group controlId="formBasicPassword">
                                   <Form.Label>Password</Form.Label>
                                   <Form.Control type="password" placeholder="Password" />
                               </Form.Group>
                               <Button variant="primary" type="submit">
                                   Submit
                               </Button>
                           </form>
                       );
                   }}
               </Formik>
           </div>

        </div>
    </Container>
}