// const [getInfo, setGetInfo] = useState<successDataType>({
    //     data:[],
    //     message:'',
    //     status: ''
    // })

    // const [dataErrors, setDataErrors] = useState<errorDataType>({
    //     message: '',
    //     status: ''
    // })

    // const [dataStatus, setDataStatus] = useState(0);  

    // const getData = async () => {
    //     setStatus(0);
    //     setGetInfo({
    //         data: [],
    //         message: '',
    //         status: ''
    //     });
    //     setDataErrors({
    //         message: '',
    //         status: ''
    //     });
    //     try {
    //         const personalInfo = await getContactInfoMethod({
    //             sourceData,
    //             setDataErrors,
    //             setDataStatus,
    //             setGetInfo
    //         });
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // }

    // useEffect(()=>{
    //     getData();
    // }, []);

    // useEffect(()=>{
    //     if(getInfo){
    //         setName(getInfo.data.name || ''); 
    //         setPhoneNumber(getInfo.data.phone_number || '');
    //         setEmail(getInfo.data.email || '');
    //         setMessage(getInfo.data.message || ''); 
    //     }
    // }, [getInfo])

    // const [errors, setErrors] = useState<contactErrorType>({
    //     msg: '',
    //     name: [], 
    //     phone_number: [],
    //     email: [], 
    //     message: []
    // }); 

    // const [status, setStatus] = useState(0) 
    
    // const submitForm = async (event: { preventDefault: () => void; }) => {
    //     event.preventDefault()
    //     setProcessing(true);
    //     setStatus(0);
    //     if(shouldSubmit === false){
    //         router.push('enter the url to the next action or page');
    //         return;
    //     }
    //     setErrors({
    //         msg: '',
    //         name: [], 
    //         phone_number: [],
    //         email: [], 
    //         message: 
    //     });
    //     try {
    //         const personalInfo = await getContactInfoMethod({
    //             name, 
    //             phone_number,
    //             email,
    //             message, 
    //             sourceData,
    //             setErrors,
    //             setStatus,
    //             setData
    //         });
    //     } catch (error) {
    //         // console.error('Error:', error);
    //         setProcessing(false);
    //     }
    // }


 

    // useEffect(() => {
    //     if (status === 200) {
    //         const successStatus = data.status;
    //         const sourcedData = data.data;
    //         if(successStatus == 'success'){
    //             setProcessing(false);
    //             localStorage.setItem('sourceData', sourcedData);
    //             toast.success('Data saved successfully.', {
    //                 position: toast.POSITION.TOP_RIGHT,
    //                 className: 'custom-toast-success',
    //                 progressClassName: 'custom-progress-bar',
    //                 toastId: 'success1'
    //             });
    //             router.push('/individual/upload-idcard');
    //         }else{
    //             toast.error('Sorry an error occured while processing your request, please try again.', {
    //                 position: toast.POSITION.TOP_RIGHT,
    //                 className: 'custom-toast-error',
    //                 progressClassName: 'custom-progress-bar',
    //                 toastId: 'error1'
    //             });
    //         }
    //     } else if (status === 422) {
    //         if (errors) {
    //             const errorMessages = Object.values(errors).flat();
    //             const msg = errorMessages[0];
    //             toast.error(msg, {
    //                 position: toast.POSITION.TOP_RIGHT,
    //                 className: 'custom-toast-error',
    //                 progressClassName: 'custom-progress-bar',
    //                 toastId: 'error2',
    //             });
    //             setProcessing(false);
    //         } else {
    //             toast.error('Failed to process your request', {
    //                 position: toast.POSITION.TOP_RIGHT,
    //                 className: 'custom-toast-error',
    //                 progressClassName: 'custom-progress-bar',
    //                 toastId: 'error3'
    //             });
    //             setProcessing(false);
    //         }
    //     }else if (status === 500){
    //         toast.error('Sorry an internal server error occured while processing your request, please contact the admin.', {
    //             position: toast.POSITION.TOP_RIGHT,
    //             className: 'custom-toast-error',
    //             progressClassName: 'custom-progress-bar',
    //             toastId: 'error3'
    //         });
    //         setProcessing(false);
    //     }
    // }, [status, errors]);

    
    // function setUserType(selectedOptionValue: string): void {
    //     throw new Error("Function not implemented.");
    // }
