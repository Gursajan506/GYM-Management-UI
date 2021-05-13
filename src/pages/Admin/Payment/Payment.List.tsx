import DataTable from "react-data-table-component";
import {Button, Container} from "react-bootstrap";
import React, {useCallback, useEffect, useState} from "react";
import {CustomLoader} from "../../../Components/CustomLoader";
import AdminUserListAPIs from "../../../apis/admin/users/admin.user.apis";
import AdminPaymentListAPIs, {iPayment} from "../../../apis/admin/admin.payment.apis";
import {useHistory} from "react-router-dom";
import {User} from "../../../reducer";

export default function PaymentList() {
    const [loading, setLoading] = useState<boolean>(true);
    const [payments, setPayments] = useState<iPayment[]>([]);
    const [error, setError] = useState<string>();
    const history = useHistory();
    const loadResource = useCallback(() => {
        setLoading(true)
        new AdminPaymentListAPIs().list().then((response) => {
            if (AdminUserListAPIs.hasError(response)) {
                setError(response.message);
            } else {
                response.payments && setPayments(response.payments);
            }
            setLoading(false)
        });
    }, [])

    useEffect(() => {
        loadResource();
    }, []);

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


    const columns = [
        {
            name: "Name",
            cell: (row: iPayment) => {
                return <div>
                    {(users && users.find((value => value.id===row.user_id)) && users.find((value => value.id===row.user_id))?.username)||"Unknown user"}
                </div>
            },
        },
        {
            name: "Amount Paid",
            selector: "amount",
        },
        {
            name: "Paid at",
            cell: (row: iPayment) => {
                return <div>
                    {row.created}
                </div>
            },
        },
        {
            name: "",
            button: true,
            cell: (row: iPayment) => <Button variant="danger" onClick={()=>{
                const confirm=window.confirm("Do you want to really delete this payment?")
                if(confirm) {
                    new AdminPaymentListAPIs().delete_payment(row.id).then(()=>{
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
                           title="Payment Management"
                           columns={columns}
                           data={payments}
                           actions={<Button
                               onClick={() => {
                                   history.push("/admin/payments/create")
                               }
                               }
                           >
                               Record a payment
                           </Button>}
                />
            </div>
        </div>
    </Container>
}