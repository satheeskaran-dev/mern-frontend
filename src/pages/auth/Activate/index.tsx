import useImageCropper from "../../../hooks/useImageCropper";
import Container from "../../../layouts/Auth/components/Container";
import ActivateForm from "./Form";

interface Props {}

const Activate: React.FC<Props> = (props) => {
  const { ImageCropper, imageURL, handleChange } = useImageCropper();
  return (
    <Container>
      <ActivateForm
        avatarUploaderProps={{ src: imageURL, handleChange }}
        handleFormSubmit={() => {}}
      />
      <ImageCropper />
    </Container>
  );
};

export default Activate;
