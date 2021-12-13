import axios from "axios";

export const sendEmail = ({...rest}: Record<string, unknown>): void => {
    axios.post('http://localhost:8080/api/auth/sendEmail', {
        ...rest
    })
}
