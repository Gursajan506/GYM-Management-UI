import React, {Dispatch, useContext, useState} from "react";
import * as yup from "yup";
import {Formik} from "formik";
import {Alert, Button, Container, Form} from "react-bootstrap";
import "./login.scss"
import {useHistory} from "react-router-dom";
import {iStoreAction} from "../../reducer";
import {AppDispatchContext} from "../../App";
import UserAPIs from "../../apis/user/user.apis";
import AdminUserAPIs from "../../apis/admin/user.apis";
import feature_image from "../../assets/images/feature.jpg";

export default function AdminLoginPage() {
    const [error, setError] = useState<string>();
    const history = useHistory();
    const dispatch: Dispatch<iStoreAction> = useContext(AppDispatchContext);
    return <div className="login-wrapper" style={{
        backgroundImage: `url(${feature_image})`,
        width: "100vw",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }}>
        <Container>
            <div className="login">
                <Formik
                    initialValues={{
                        username: "",
                        password: "",
                    }}
                    onSubmit={(values: any, helpers: any) => {
                        setError("");
                        new AdminUserAPIs().login(values.username, values.password).then((res) => {
                            if (UserAPIs.hasError(res)) {
                                setError(res.message);
                            } else {
                                dispatch({type: "set_logged_in_user", loggedInUser: res});
                                dispatch({type: "is_admin", is_admin: true});
                                history.replace("/admin/dashboard");
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
                                <Form.Group>
                                    <Form.Label>Admin Username</Form.Label>
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

                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Your Password"
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

        </Container>
        </div>
}