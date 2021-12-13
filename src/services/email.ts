import axios from "axios";
import {url} from "../config";

export const sendEmail = ({...rest}: Record<string, unknown>): void => {
    axios.post(`${url}/api/auth/sendEmail`, {
        ...rest
    })
}
