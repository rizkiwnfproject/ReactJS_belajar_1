import { useLogin } from '../components/hooks/useLogin';


const ProfilePage = () => {
    const username = useLogin();
    return (
        <div>
            <h1>Profile</h1>
            Username : {username}
        </div>
    )
}

export default ProfilePage