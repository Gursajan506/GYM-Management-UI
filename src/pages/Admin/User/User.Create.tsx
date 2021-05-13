import React, {useCallback, useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {User} from "../../../reducer";
import {Alert, Button, Container, Form} from "react-bootstrap";
import {Formik} from "formik";
import UserAPIs from "../../../apis/user/user.apis";
import * as yup from "yup";
import AdminUserListAPIs from "../../../apis/admin/users/admin.user.apis";
import {CustomLoader} from "../../../Components/CustomLoader";

export function UserCreate() {
    const [error, setError] = useState<string>();
    const history = useHistory();
    const [user, setUser] = useState<User>();

    const [loading, setLoading] = useState(true);
    const params: any = useParams();
    const loadUserResource = useCallback(() => {

        new AdminUserListAPIs().view(params.id).then((response) => {
            if (AdminUserListAPIs.hasError(response)) {
                setError(response.message);
            } else {
                response.user && setUser(response.user);
            }
            setLoading(false)
        });
    }, [])

    useEffect(() => {
        if(params.id){
            loadUserResource();
        }else {
            setLoading(false)
        }
    }, []);
    if (loading) {
        return <CustomLoader/>
    }


    return <Container>
        <div>
            <Button variant="link" onClick={() => {
                history.goBack();
            }}>
                Back
            </Button>
            <div>
                <h5 className="text-center">
                    {
                        params.id && "Update User"
                    }
                    {
                        !params.id && "Add new User"
                    }
                </h5>
            </div>
        </div>
        <div className="login-wrapper">
            <div className="login">
                <Formik
                    key={user && user.id}
                    initialValues={{
                        id:  (user && user.id)||"",
                        username: (user && user.username)||"",
                        password: "",
                    }}
                    onSubmit={(values: any, helpers: any) => {
                        setError("");
                        if(params.id){
                            new AdminUserListAPIs().edit_user(values).then((res) => {
                                if (UserAPIs.hasError(res)) {
                                    setError(res.message);
                                } else {
                                    history.goBack();
                                }
                            })
                        }else {
                            new AdminUserListAPIs().create_user(values).then((res) => {
                                if (UserAPIs.hasError(res)) {
                                    setError(res.message);
                                } else {
                                    history.goBack();
                                }
                            })
                        }

                    }}
                    validationSchema={yup.object({
                        username: yup.string().required("Please enter username"),
                        password: yup.number().required("Please enter password"),

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
                                    <Form.Label>Customer Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your username"
                                                  name="username"
                                                  value={values.username}
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