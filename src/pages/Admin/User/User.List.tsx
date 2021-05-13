import DataTable from "react-data-table-component";
import {Button, Container} from "react-bootstrap";
import React, {useCallback, useEffect, useState} from "react";
import {CustomLoader} from "../../../Components/CustomLoader";
import {User} from "../../../reducer";
import AdminUserListAPIs from "../../../apis/admin/users/admin.user.apis";
import {useHistory} from "react-router-dom";
import AdminPaymentListAPIs from "../../../apis/admin/admin.payment.apis";

export default function UserList() {
    const [loading, setLoading] = useState<boolean>(true);
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string>();
    const history = useHistory();
    const loadResource = useCallback(() => {
        setLoading(true)
        new AdminUserListAPIs().list().then((response) => {
            if (AdminUserListAPIs.hasError(response)) {
                setError(response.message);
            } else {
                response.users && setUsers(response.users);
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
            selector: "username",
        },
        {
            name: "Created at",
            cell: (row: User) => {
                return <div>
                    {row.created}
                </div>
            },
        },
        {
            name: "",
            button: true,
            cell: (row: User) => <Button variant="danger" onClick={()=>{
                const confirm=window.confirm("Do you want to really delete this user?")
                if(confirm) {
                    new AdminUserListAPIs().delete_user(row.id).then(()=>{
                        loadResource();
                    })
                }
            }}>
                Delete
            </Button>,
        },
        {
            name: "",
            button: true,
            cell: (row: User) => <Button onClick={()=>{
                history.push("/admin/users/edit/"+row.id)
            }}>
                Edit
            </Button>,
        }
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
                           title="User Management"
                           columns={columns}
                           data={users}
                           actions={<Button
                               onClick={() => {
                                   history.push("/admin/users/create")
                               }
                               }
                           >
                               Add User
                           </Button>}
                />
            </div>
        </div>
    </Container>
}