import {
  Box,
  Button,
  IconButton,
  Modal,
  Paper,
  Slider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Cropper, { Area } from "react-easy-crop";
import CloseIcon from "@mui/icons-material/Close";
import getCroppedImg from "./cropper";
import BackendError from "../BackendError";
import FlexBox from "../FlexBox";

interface ImageCropperProps {
  imageURL: string;
  openCrop: boolean;
  setOpenCrop: React.Dispatch<React.SetStateAction<boolean>>;
  setImageURL: React.Dispatch<React.SetStateAction<string>>;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}
type CroppedImage = {
  file: File;
  url: string;
} | null;

const ImageCropper = ({
  imageURL,
  openCrop,
  setOpenCrop,
  setImageURL,
  setFile,
}: ImageCropperProps) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const cropComplete = (croppedArea: Area, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleClose = () => setOpenCrop(false);

  const cropImage = async () => {
    try {
      const croppedImage: CroppedImage = await getCroppedImg(
        imageURL,
        croppedAreaPixels!,
        rotation
      );

      if (croppedImage) {
        const { file, url } = croppedImage;
        setImageURL(url);
        setFile(file);
        setOpenCrop(false);
      } else {
        // Handle the case when the cropped image is null
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      open={openCrop}
      onClose={(e: any, reason: string) => {
        if (reason !== "backdropClick") handleClose();
      }}
      sx={{
        display: "flex",
        p: "clamp(20px, 5vw, 40px)",
        overflow: "auto",
        border: "none",
      }}
    >
      <Paper
        sx={{
          m: "auto",
          width: "100%",
          maxWidth: "400px",
          minHeight: "350px",
          p: "20px 30px",
          position: "relative",
        }}
      >
        <Typography fontSize="20px" fontWeight={700} align="center" mb="20px">
          Crop image
        </Typography>
        <IconButton
          sx={{ position: "absolute", top: 15, right: 15 }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <Box position="relative" width="100%" minHeight="300px">
          <Cropper
            image={imageURL}
            crop={crop}
            zoom={zoom}
            rotation={rotation}
            aspect={1}
            onZoomChange={setZoom}
            onRotationChange={setRotation}
            onCropChange={setCrop}
            onCropComplete={cropComplete}
            style={{
              containerStyle: { borderRadius: "12px" },
            }}
          />
        </Box>
        <BackendError errorMsg={null} />

        <FlexBox gap={15} justifyContent="space-between">
          <Typography fontWeight={500} color="text.secondary">
            Zoom
          </Typography>

          <Slider
            sx={{ maxWidth: "70%" }}
            valueLabelDisplay="auto"
            valueLabelFormat={zoomPercent}
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onChange={(e, zoom) => setZoom(zoom as number)}
          />
        </FlexBox>

        <FlexBox gap={15} justifyContent="space-between">
          <Typography fontWeight={500} color="text.secondary">
            Rotate
          </Typography>
          <Slider
            sx={{ maxWidth: "70%" }}
            valueLabelDisplay="auto"
            min={0}
            max={360}
            value={rotation}
            onChange={(e, rotation) => setRotation(rotation as number)}
          />
        </FlexBox>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          gap="30px"
          mt={20}
        >
          <Button
            variant="outlined"
            color="error"
            sx={{
              borderRadius: "40px",
              height: 40,
              maxWidth: 120,
              width: "100%",
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            // disabled={Boolean(errorMessage)}
            variant="contained"
            sx={{
              borderRadius: "40px",
              height: 40,
              maxWidth: 120,
              width: "100%",
            }}
            onClick={cropImage}
          >
            Save
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
};

export default ImageCropper;

const zoomPercent = (value: number) => {
  return `${Math.round(value * 100)}%`;
};
