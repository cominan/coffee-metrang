import configAxiosReq from "./axios.config";
import { useDispatch } from 'react-redux'
import { apiCoffee } from "../../store/coffeeSlice";


export const callApi = async () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch()
  await  configAxiosReq.getApi('/Course').then(res => dispatch(apiCoffee(res.data)))
}





