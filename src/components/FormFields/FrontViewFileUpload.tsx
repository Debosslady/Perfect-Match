import React, { useEffect, useState } from "react";
import { fileUploadHandlerProps } from "@/hooks/types";
import Image from "next/image";
import ImageIcons from "../ImageIcons";

const FrontViewFileUpload = ({ idName, defaultFile, onFileChange }: fileUploadHandlerProps) => {
  const [frontImageUrl, setFrontImageUrl] = useState<string | undefined>(defaultFile);

  useEffect(()=>{
    if(defaultFile){
      setFrontImageUrl(defaultFile);
    }
  }, [defaultFile])
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const frontImageUrl = URL.createObjectURL(file);
      setFrontImageUrl(frontImageUrl);
      onFileChange(file);
    }
  }; 

  return (
    <div className="text-center border p-3 rounded">
      <ImageIcons imageUrl="/images/upload-icon.svg" alt="logo" className="upload-icon mx-auto" /> <br />
      <label htmlFor={idName} className="file-upload-label mt-3">
        Tag to upload ID card
        <input
          type="file"
          name={idName}
          id={idName}
          accept=".pdf, .jpg, .png"
          onChange={handleFileChange}
        />
      </label>
      {frontImageUrl && <Image src={frontImageUrl} alt="Uploaded Back View" width={600} height={300} className="uploaded-image" priority={true} />}
    </div>
  );
};

export default FrontViewFileUpload;
