 import Input from "@/components/FormFields/Input";
import Label from "@/components/FormFields/Label";
import TextArea from "@/components/FormFields/TextArea";
import PrimaryButton from "@/components/PrimaryButton";
import { contactErrorType, errorDataType, successDataType } from "@/hooks/types";
import { useRouter } from "next/router";
import { SetStateAction, useEffect, useState } from "react";

export default function ContactUs(){
    const {getContactInfoMethod} = useQueries();
    const router = useRouter()
    const sourceData = localStorage.getItem('sourceData');
    const [processing, setProcessing] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState(''); 
    const [phone_number, setPhoneNumber] = useState('') 
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState(''); 
    //always add  this to prevent the form from submitting to the backend.
    const [shouldSubmit, setShouldSubmit] = useState(false);

    const [data, setData] = useState<successDataType>({
        data:[],
        message:'',
        status: ''
    });
    

    const [errors, setErrors] = useState<contactErrorType>({
        msg: '',
        name: [], 
        phone_number: [],
        email: [], 
        message: []
    }); 

    const [status, setStatus] = useState(0) 
    
    const submitForm = async (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        setProcessing(true);
        setStatus(0);
        if(shouldSubmit === false){
            router.push('enter the url to the next action or page');
            return;
        }
        setErrors({
            msg: '',
            name: [], 
            phone_number: [],
            email: [], 
            message: 
        });
        try {
            const personalInfo = await getContactInfoMethod({
                name, 
                phone_number,
                email,
                message, 
                sourceData,
                setErrors,
                setStatus,
                setData
            });
        } catch (error) {
            // console.error('Error:', error);
            setProcessing(false);
        }
    }
 
    
    function setUserType(selectedOptionValue: string): void {
        throw new Error("Function not implemented.");
    }



    return(
        <div className="md:flex px-3 md:mx-12 pb-5"> 
            <div className="flex-none w-[100%] md:w-[46%]  px-3 md:px-0">
                <div className="mx-auto">
                    <h1 className="heading-1 md:mt-12  text-left md:text-center">Personal Information </h1>
                    <h6 className="text-gray-500 mt-2 text-left md:text-center">Let have your Personal info.</h6>
                    <form>
                        <div className="form-group mt-10">
                            <Label htmlFor="name">Fullname</Label>
                            <Input
                                id="name"
                                type="text"
                                value={name}
                                className={`block mt-1 w-full px-3 ${errors.name.length > 0 ? 'border-red-500' : ''}`}
                                onChange={(event:any) => setName(event.target.value)}
                                autoFocus
                            /> 
                            <div className="text-red-500">{errors.name}</div>
                        </div> 
                        <div className="form-group mt-4">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                className={`block mt-1 w-full px-3 ${errors.email.length > 0 ? 'border-red-500' : ''}`}
                                onChange={(event: { target: { value: SetStateAction<string>; }; }) => setEmail(event.target.value)}
                            /> 
                            <div className="text-red-500">{errors.email}</div>
                        </div>
                        <div className="form-group mt-4">
                            <Label htmlFor="phoneNumber">Phone Number</Label>
                            <Input
                                id="phoneNumber"
                                type="tel"
                                value={phone_number}
                                className={`block mt-1 w-full px-3 ${errors.phone_number.length > 0 ? 'border-red-500' : ''}`}
                                onChange={(event: { target: { value: SetStateAction<string>; }; }) => setPhoneNumber(event.target.value)}
                            /> 
                            <div className="text-red-500">{errors.phone_number}</div>
                        </div>  
                        <div className="form-group mt-4">
                            <Label htmlFor="message">Date of Birth</Label>
                            <TextArea 
                                id="message"
                                type="text"
                                value={message}
                                className={`block mt-1 w-full px-3 ${errors.message.length > 0 ? 'border-red-500' : ''}`}
                                onChange={(event: { target: { value: SetStateAction<string>; }; }) => setMessage(event.target.value)}
                            /> 
                            <div className="text-red-500">{errors.message}</div>
                        </div>
                        <div className="form-group mt-4">
                            <PrimaryButton processing={processing} btnName="Proceed" className=" w-full" disabled={undefined} children={undefined}/>
                        </div>        
                    </form>
                </div>
            </div>
            <div className="flex-none w-[100%] md:w-[27%]"></div>
        </div>    
    )
}

function useQueries(): { getContactInfoMethod: any; } {
    throw new Error("Function not implemented.");
}
