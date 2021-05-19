import DataTable from "react-data-table-component";
import {Button, Container} from "react-bootstrap";
import React, {useCallback, useEffect, useState} from "react";
import {CustomLoader} from "../../../Components/CustomLoader";
import AdminUserListAPIs from "../../../apis/admin/users/admin.user.apis";
import {useHistory} from "react-router-dom";
import AdminTrainerAPIs, {iTrainer} from "../../../apis/admin/admin.trainer.apis";

export default function TrainerList() {
    const [loading, setLoading] = useState<boolean>(true);
    const [items, setItems] = useState<iTrainer[]>([]);
    const [error, setError] = useState<string>();
    const history = useHistory();
    const loadResource = useCallback(() => {
        setLoading(true)
        new AdminTrainerAPIs().list().then((response) => {
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
            name: "Name",
            selector: "name",
        },
        {
            name: "Image",
            cell: (row: iTrainer) => {
                return <div>
                    <img src={row.image} style={{width: "100%"}}/>
                </div>
            },
        },
        {
            name: "Experience",
            selector: "experience",
        },
        {
            name: "",
            button: true,
            cell: (row: iTrainer) => <Button variant="danger" onClick={() => {
                const confirm = window.confirm("Do you want to really delete this trainer?")
                if (confirm) {
                    new AdminTrainerAPIs().delete(row.id).then(() => {
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
                           title="Trainer Management"
                           columns={columns}
                           data={items}
                           actions={<Button
                               onClick={() => {
                                   history.push("/admin/trainers/create")
                               }
                               }
                           >
                               Add Trainer
                           </Button>}
                />
            </div>
        </div>
    </Container>
}