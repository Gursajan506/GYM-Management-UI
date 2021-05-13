import React, {Dispatch, useCallback, useContext, useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {iStoreAction, User} from "../../../reducer";
import {AppDispatchContext} from "../../../App";
import {Alert, Button, Container, Form} from "react-bootstrap";
import {Formik} from "formik";
import UserAPIs from "../../../apis/user/user.apis";
import * as yup from "yup";
import AdminPaymentListAPIs from "../../../apis/admin/admin.payment.apis";
import AdminUserListAPIs from "../../../apis/admin/users/admin.user.apis";
import {Simulate} from "react-dom/test-utils";

export function PaymentCreate() {
    const [error, setError] = useState<string>();
    const history = useHistory();
    const [users, setUsers] = useState<User[]>([]);
    const loadUserResource = useCallback(() => {

        new AdminUserListAPIs().list().then((response) => {
            if (AdminUserListAPIs.hasError(response)) {
                setError(response.message);
            } else {
                response.users && setUsers(response.users);
            }
        });
    }, [])

    useEffect(() => {
        loadUserResource();
    }, []);


    return <Container>
        <div>
            <Button variant="link" onClick={() => {
                history.goBack();
            }}>
                Back
            </Button>
            <div>
                <h5 className="text-center">
                    Record new Payment
                </h5>
            </div>
        </div>
        <div className="login-wrapper">
            <div className="login">
                <Formik
                    initialValues={{
                        user_id: "",
                        amount: "",
                    }}
                    onSubmit={(values: any, helpers: any) => {
                        setError("");
                        new AdminPaymentListAPIs().create_payment(values).then((res) => {
                            if (UserAPIs.hasError(res)) {
                                setError(res.message);
                            } else {
                                history.goBack();
                            }
                        })
                    }}
                    validationSchema={yup.object({
                        user_id: yup.string().required("Please select user"),
                        amount: yup.number().required("Please enter amount"),

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
                                    <Form.Label>Customer</Form.Label>
                                    <Form.Control type="text"
                                                  as="select"
                                                  placeholder="Enter your username"
                                                  name="user_id"
                                                  onChange={handleChange}
                                                  isInvalid={touched && touched.user_id && !!(errors && errors.user_id)}
                                    >
                                        <option>Select one Customer</option>
                                        {users && users.map((user)=>{
                                            return <option value={user.id} key={user.id}>
                                                {user.username}
                                            </option>
                                        })}
                                    </Form.Control>
                                    <Form.Control.Feedback type={"invalid"}>
                                        {
                                            errors && errors.user_id
                                        }
                                    </Form.Control.Feedback>

                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Amount Paid</Form.Label>
                                    <Form.Control type="number" placeholder="1000"
                                                  name="amount"
                                                  onChange={handleChange}
                                                  isInvalid={touched && touched.amount && !!(errors && errors.amount)}
                                    />
                                    <Form.Control.Feedback type={"invalid"}>
                                        {
                                            errors && errors.amount
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