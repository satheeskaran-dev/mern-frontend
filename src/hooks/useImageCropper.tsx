import { ChangeEvent, useState } from "react";
import Cropper from "../components/core/ImageCropper";

const useImageCropper = (): {
  ImageCropper: () => JSX.Element;
  file: File | null;
  imageURL: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
} => {
  const [file, setFile] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string>("");
  const [openCrop, setOpenCrop] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFile(file);
      setImageURL(URL.createObjectURL(file));
      setOpenCrop(true);
    }
  };
  const ImageCropper = () => (
    <Cropper {...{ imageURL, openCrop, setOpenCrop, setImageURL, setFile }} />
  );

  return { ImageCropper, file, imageURL, handleChange };
};

export default useImageCropper;
