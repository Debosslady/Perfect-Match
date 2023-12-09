 
import { get } from 'http';
import {getContactDataProps } from './types'

export const constactQueries =  () => {
    const csrf = () => get('/sanctum/csrf-cookie') 

    const getContactInfoMethod = async ({setDataErrors, setDataStatus, setGetInfo, ...props}: getContactDataProps) =>{
        await csrf();
        setDataErrors({
            message: '',
            status: ''
        });
 
    }
 
 
   
    return {
        getContactInfoMethod, 
    }
}


