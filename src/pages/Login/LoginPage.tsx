import React, {Dispatch, useContext, useState} from "react";
import * as yup from "yup";
import {Formik} from "formik";
import {Alert, Button, Container, Form} from "react-bootstrap";
import "./login.scss"
import UserAPIs from "../../apis/user/user.apis";
import {iStoreAction} from "../../reducer";
import {AppDispatchContext} from "../../App";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
    const [error, setError] = useState<string>();
    const history=useHistory();
    const dispatch: Dispatch<iStoreAction> = useContext(AppDispatchContext);
    return <Container>
        <div className="login-wrapper">
           <div className="login">
               <Formik
                   initialValues={{
                       username: "",
                       password: "",
                   }}
                   onSubmit={(values: any, helpers: any) => {
                       setError("");
                       new UserAPIs().login(values.username, values.password).then((res) => {
                           if (UserAPIs.hasError(res)) {
                               setError(res.message);
                           } else {
                               dispatch({type:"set_logged_in_user",loggedInUser:res});
                               history.replace("/");
                           }
                       })
                   }}
                   validationSchema={yup.object({
                       username: yup.string().required("Please enter user name"),
                       password: yup.string().required("Please enter password"),

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
                               <Form.Group >
                                   <Form.Label>Username</Form.Label>
                                   <Form.Control type="text" placeholder="Enter your username"
                                                 name="username"
                                                 onChange={handleChange}
                                                 isInvalid={touched && touched.username && !!(errors && errors.username)}
                                   />
                                   <Form.Control.Feedback type={"invalid"}>
                                       {
                                           errors && errors.username
                                       }
                                   </Form.Control.Feedback>

                               </Form.Group>

                               <Form.Group >
                                   <Form.Label>Password</Form.Label>
                                   <Form.Control type="text" placeholder="Your Password"
                                                 name="password"
                                                 onChange={handleChange}
                                                 isInvalid={touched && touched.password && !!(errors && errors.password)}
                                   />
                                   <Form.Control.Feedback type={"invalid"}>
                                       {
                                           errors && errors.password
                                       }
                                   </Form.Control.Feedback>

                               </Form.Group>
                               <Button variant="primary" type="submit">
                                   Submit
                               </Button>
                               {
                                   error && <Alert variant="danger" className="mt-2">
                                       {error}
                                   </Alert>
                               }
                           </form>
                       );
                   }}
               </Formik>
           </div>

        </div>
    </Container>
}