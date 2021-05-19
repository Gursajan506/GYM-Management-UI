import React, {useCallback, useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {Alert, Button, Container, Form} from "react-bootstrap";
import {Formik} from "formik";
import UserAPIs from "../../../apis/user/user.apis";
import * as yup from "yup";
import AdminUserListAPIs from "../../../apis/admin/users/admin.user.apis";
import {CustomLoader} from "../../../Components/CustomLoader";
import AdminWorkoutListAPIs, {iWorkout} from "../../../apis/admin/admin.workout.apis";
import AdminDietPlanAPIs from "../../../apis/admin/admin.diet.plan.apis";

export function DietPlanCreate() {
    const [error, setError] = useState<string>();
    const history = useHistory();
    const [item, setItem] = useState<iWorkout>();

    const [loading, setLoading] = useState(true);
    const params: any = useParams();
    const loadItem = useCallback(() => {
        new AdminDietPlanAPIs().view(params.id).then((response) => {
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
                        params.id && "Update Diet Plan"
                    }
                    {
                        !params.id && "Add new Diet Plan"
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
                        title: (item && item.title) || "",
                        description: (item && item.description) || "",
                        image: (item && item.image) || "",
                    }}
                    onSubmit={(values: any, helpers: any) => {
                        setError("");
                        if (params.id) {
                            new AdminDietPlanAPIs().update(values).then((res) => {
                                if (UserAPIs.hasError(res)) {
                                    setError(res.message);
                                } else {
                                    history.goBack();
                                }
                            })
                        } else {
                            new AdminDietPlanAPIs().create(values).then((res) => {
                                if (UserAPIs.hasError(res)) {
                                    setError(res.message);
                                } else {
                                    history.goBack();
                                }
                            })
                        }

                    }}
                    validationSchema={yup.object({
                        title: yup.string().required("Please enter title"),
                        image: yup.string().required("Please enter image url"),
                        description: yup.string().required("Please enter description"),

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
                                    <Form.Label>Diet Plan Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your diet plan title"
                                                  name="title"
                                                  value={values.title}
                                                  onChange={handleChange}
                                                  isInvalid={touched && touched.title && !!(errors && errors.title)}
                                    />
                                    <Form.Control.Feedback type={"invalid"}>
                                        {
                                            errors && errors.title
                                        }
                                    </Form.Control.Feedback>

                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Image Url</Form.Label>
                                    <Form.Control type="text" placeholder="Diet plan image url"
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
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" placeholder=""
                                                  name="description"
                                                  onChange={handleChange}
                                                  isInvalid={touched && touched.description && !!(errors && errors.description)}
                                    />
                                    <Form.Control.Feedback type={"invalid"}>
                                        {
                                            errors && errors.description
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