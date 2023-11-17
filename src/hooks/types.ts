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