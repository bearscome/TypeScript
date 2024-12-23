import {FC} from "react";
import {useDispatch} from "react-redux";
import {login} from "../redux/user";

const Login:FC = () => {
    const dispatch = useDispatch();


    return(
        <div>
            <button onClick={() => {
                dispatch(
                    login({
                        name: "John Doe",
                        age: 30,
                        email: "john.doe@example.com",
                    })
                );
            }
            }>Login</button>
        </div>
    );
};

export default Login;
