import DataTable from "react-data-table-component";
import {Button, Container} from "react-bootstrap";
import React, {useCallback, useEffect, useState} from "react";
import {CustomLoader} from "../../../Components/CustomLoader";
import AdminUserListAPIs from "../../../apis/admin/users/admin.user.apis";
import {useHistory} from "react-router-dom";
import AdminWorkoutListAPIs, {iWorkout} from "../../../apis/admin/admin.workout.apis";

export default function WorkoutList() {
    const [loading, setLoading] = useState<boolean>(true);
    const [items, setItems] = useState<iWorkout[]>([]);
    const [error, setError] = useState<string>();
    const history = useHistory();
    const loadResource = useCallback(() => {
        setLoading(true)
        new AdminWorkoutListAPIs().list().then((response) => {
            if (AdminUserListAPIs.hasError(response)) {
                setError(response.message);
            } else {
                response.items && setItems(response.items);
            }
            setLoading(false)
        });
    }, [])

    useEffect(() => {
        loadResource();
    }, []);

    const columns = [
        {
            name: "Title",
            selector: "title",
        },
        {
            name: "Image",
            cell: (row: iWorkout) => {
                return <div>
                    <img src={row.image} style={{width: "100%"}}/>
                </div>
            },
        },
        {
            name: "Description",
            selector: "description",
        },
        {
            name: "",
            button: true,
            cell: (row: iWorkout) => <Button variant="danger" onClick={() => {
                const confirm = window.confirm("Do you want to really delete this workout?")
                if (confirm) {
                    new AdminWorkoutListAPIs().delete(row.id).then(() => {
                        loadResource();
                    })
                }
            }}>
                Delete
            </Button>,
        },
    ];


    return <Container>
        <div>
            <Button variant="link" onClick={() => {
                history.goBack();
            }}>
                Back
            </Button>
        </div>

        <div className="mt-2 ">
            <div>
                <DataTable progressPending={loading}
                           progressComponent={<CustomLoader/>}
                           title="Workout Management"
                           columns={columns}
                           data={items}
                           actions={<Button
                               onClick={() => {
                                   history.push("/admin/workouts/create")
                               }
                               }
                           >
                               Add Workout
                           </Button>}
                />
            </div>
        </div>
    </Container>
}