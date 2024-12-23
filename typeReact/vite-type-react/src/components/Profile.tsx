import {FC} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";

const Profile:FC = () => {
    const {name = "", age = 0, email = ""}: {name: string, age: number, email:string} = useSelector((state:RootState) => {
        return state && state.userSlice;
    });
    console.log('user', name, age, email);
    return (
        <div>
            <h1>Profile Page</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email: {email} </p>
        </div>
    )
}

export default Profile;
