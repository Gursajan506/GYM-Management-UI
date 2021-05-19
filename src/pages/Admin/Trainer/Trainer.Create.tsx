import React, {useCallback, useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {Alert, Button, Container, Form} from "react-bootstrap";
import {Formik} from "formik";
import UserAPIs from "../../../apis/user/user.apis";
import * as yup from "yup";
import AdminUserListAPIs from "../../../apis/admin/users/admin.user.apis";
import {CustomLoader} from "../../../Components/CustomLoader";
import AdminTrainerAPIs, {iTrainer} from "../../../apis/admin/admin.trainer.apis";

export function TrainerCreate() {
    const [error, setError] = useState<string>();
    const history = useHistory();
    const [item, setItem] = useState<iTrainer>();

    const [loading, setLoading] = useState(true);
    const params: any = useParams();
    const loadItem = useCallback(() => {
        new AdminTrainerAPIs().view(params.id).then((response) => {
            if (AdminUserListAPIs.hasError(response)) {
                setError(response.message);
            } else {
                response.item && setItem(response.item);
            }
            setLoading(false)
        });
    }, [])

    useEffect(() => {
        if (params.id) {
            loadItem();
        } else {
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
                        params.id && "Update Trainer"
                    }
                    {
                        !params.id && "Add new Trainer"
                    }
                </h5>
            </div>
        </div>
        <div className="form-wrapper form-wrapper-bg">
            <div className="form-inner">
                <Formik
                    key={item && item.id}
                    initialValues={{
                        id: (item && item.id) || "",
                        name: (item && item.name) || "",
                        experience: (item && item.experience) || "",
                        image: (item && item.image) || "",
                    }}
                    onSubmit={(values: any, helpers: any) => {
                        setError("");
                        if (params.id) {
                            new AdminTrainerAPIs().update(values).then((res) => {
                                if (UserAPIs.hasError(res)) {
                                    setError(res.message);
                                } else {
                                    history.goBack();
                                }
                            })
                        } else {
                            new AdminTrainerAPIs().create(values).then((res) => {
                                if (UserAPIs.hasError(res)) {
                                    setError(res.message);
                                } else {
                                    history.goBack();
                                }
                            })
                        }

                    }}
                    validationSchema={yup.object({
                        name: yup.string().required("Please enter name"),
                        image: yup.string().required("Please enter image url"),
                        experience: yup.string().required("Please enter experience"),
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
                                    <Form.Label>Trainer name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your trainer name"
                                                  name="name"
                                                  value={values.name}
                                                  onChange={handleChange}
                                                  isInvalid={touched && touched.name && !!(errors && errors.name)}
                                    />
                                    <Form.Control.Feedback type={"invalid"}>
                                        {
                                            errors && errors.name
                                        }
                                    </Form.Control.Feedback>

                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Image of Trainer</Form.Label>
                                    <Form.Control type="text" placeholder=""
                                                  name="image"
                                                  onChange={handleChange}
                                                  isInvalid={touched && touched.image && !!(errors && errors.image)}
                                    />
                                    <Form.Control.Feedback type={"invalid"}>
                                        {
                                            errors && errors.image
                                        }
                                    </Form.Control.Feedback>

                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Experience</Form.Label>
                                    <Form.Control type="text" placeholder=""
                                                  name="experience"
                                                  onChange={handleChange}
                                                  isInvalid={touched && touched.experience && !!(errors && errors.experience)}
                                    />
                                    <Form.Control.Feedback type={"invalid"}>
                                        {
                                            errors && errors.experience
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