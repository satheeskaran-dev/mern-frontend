import { ChangeEvent, useState } from "react";
import Cropper from "../components/core/ImageCropper";
import { fileSizeLimit, supportedImageFormats } from "../config/app";

export type OpenCropStateType = {
  status: boolean;
  error: string | null;
};

const createErrorMsg = (size: number, type: string) => {
  let errorMsg = "";
  if (size >= fileSizeLimit)
    errorMsg = `File should be less than ${fileSizeLimit / (1024 * 1024)} mb`;
  if (!supportedImageFormats.includes(type))
    errorMsg = `Any one of webp, jepg, jpg or png are accepted.`;
  return errorMsg;
};

const useImageCropper = (): {
  ImageCropper: () => JSX.Element;
  file: File | null;
  myImageURL: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
} => {
  const [file, setFile] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string>("");

  const [openCrop, setOpenCrop] = useState<OpenCropStateType>({
    status: false,
    error: "",
  });

  const [myImageURL, setMyImageURL] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      setFile(file);
      setImageURL(URL.createObjectURL(file));

      setOpenCrop({
        status: true,
        error: createErrorMsg(file.size, file.type),
      });
    }
    e.target.value = "";
  };
  const ImageCropper = () => (
    <Cropper {...{ imageURL, openCrop, setOpenCrop, setMyImageURL, setFile }} />
  );

  return { ImageCropper, file, myImageURL, handleChange };
};

export default useImageCropper;
