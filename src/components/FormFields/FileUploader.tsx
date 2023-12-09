import React, { useEffect, useState } from "react";
import { fileUploadHandlerProps } from "@/hooks/types";
import Image from "next/image";
import ImageIcons from "../ImageIcons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const FileUploader = ({ idName, defaultFile, title, onFileChange }: fileUploadHandlerProps) => {
  const [fileUrl, setFileUrl] = useState<string | undefined>(defaultFile);
  const [fileExtension, setFileExtension] = useState('');
  const [fileName, setFileName] = useState('');

  useEffect(()=>{
    console.log("defaultFile", defaultFile);
    if (defaultFile && typeof defaultFile === 'string') {
      if (defaultFile.startsWith("http")) {
        setFileUrl(defaultFile);
      } else {
        const fileExtension = getFileExtension(defaultFile);
        setFileExtension(fileExtension);
        const fileName = getFileName(defaultFile);
        setFileName(fileName);
      }
    }
  }, [defaultFile]);

  const getFileName = (url: string) => {
    const slashIndex = url.lastIndexOf('/');
    if (slashIndex !== -1) {
      return url.slice(slashIndex + 1);
    }
    return '';
  };
  const getFileExtension = (filename: string) => {
    const dotIndex = filename.lastIndexOf('.');
    if (dotIndex !== -1) {
      return filename.slice(dotIndex + 1).toLowerCase();
    }
    return '';
  }
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const newFileUlr = URL.createObjectURL(file);
      setFileUrl(newFileUlr);
      onFileChange(file);
      const fileExtension = getFileExtension(file.name);
      setFileExtension(fileExtension);
      setFileName(file.name);
    }
  }; 

 

  const renderFileElement = () => {
    if (fileUrl) {
      if (fileExtension === 'pdf') {
        return (
          <div>
            <Link href={fileUrl} download>
              <FontAwesomeIcon icon={faFilePdf} className="mx-auto pdf-icon"/> <br />
              {fileName} 
            </Link>
          </div>
        );
      } else {
        return (
          <div>
            <Image src={fileUrl} alt="Image Viewer" width={600} height={300} className="uploaded-image" priority={true} />
          </div>
        );
      }
    }
    return null;
  }

  return (
    <div className="text-center border p-3 rounded">
      <ImageIcons imageUrl="/images/upload-icon.svg" alt="logo" className="upload-icon mx-auto" /> <br />
      <label htmlFor={idName} className="file-upload-label mt-3">
        {title}
        <input
          type="file"
          name={idName}
          id={idName}
          accept=".pdf, .jpg, .png"
          onChange={handleFileChange}
        />
      </label>
      {renderFileElement()}
    </div>
  );
};

export default FileUploader;