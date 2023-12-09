export interface LayoutProps{
    children: React.ReactNode;
}

export interface ImageIconProps{
    imageUrl:string;
    className:string;
    alt:string;
}
type SVGImageType = React.ReactNode;

export interface IconType{
    svg: SVGImageType;
    title: string;
    text: string;
}

export interface PrimaryButtonProps{
    className: string;
    disabled: any;
    children: React.ReactNode;
    [key: string]: any;
}

export interface successDataType{
    data: any,
    message: string,
    status: string
}

export interface errorDataType{
    message: string,
    status: string
}

export interface contactErrorType{
    name: string;
    email: string;
    phone_number: string; 
    message: string;  
}

export interface contactDataProps{
    name: string;
    email: string;
    phone_number: string; 
    message: string; 
    sourceData: any;
    setErrors : (errors: contactErrorType) => void;
    setStatus : (status : number) => void;
    setData: (data: successDataType) => void;
}

export interface getContactDataProps{
    sourceData:any;
    setDataStatus : (dataStatus : number) => void;
    setDataErrors: (dataErrors: errorDataType) => void;
    setGetInfo: (getInfo: successDataType) => void;
}