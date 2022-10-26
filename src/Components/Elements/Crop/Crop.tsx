import React, { useCallback, useContext, useState } from "react";
import styled from "styled-components/macro";
import { devices } from "../../../Media Queries/Queries";
import ModalBackdrop from "../Modals/ModalBackdrop";
import Header from "./Components/Header";
import { Point, Area } from "react-easy-crop/types";
import Cropper from "react-easy-crop";
import { Slider } from "@mui/material";
import { getCroppedImg } from "./CanvasUtils";
import { UserContext } from "../../../Contexts/UserContext";
import UploadUserImages from "../../../firebase/UploadUserImages";
const CropForm = styled.div`
  width: 100%;
  background: white;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0.7em;
  overflow-y: auto;

  @media ${devices.tablet} {
    max-width: 585px;
    height: 90%;
  }
`;
const CropperWrapper = styled.div`
  width: 100%;
  position: relative;
  flex: 1;
`;
const SliderWrapper = styled.div`
  padding: 0.6em 1em;
  display: flex;
  gap: 1.5em;
  align-items: center;
  justify-content: center;
`;
function Crop({
  onPrevious,
  Image,
  Heading,
  cropShape,
  fileName,
}: {
  onPrevious: (state: string | null) => void;
  Image: string | null;
  Heading: string;
  cropShape: "rect" | "round" | undefined;
  fileName: string;
}) {
  let { user } = useContext(UserContext);
  console.log(user);
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const showCroppedImage = useCallback(async () => {
    try {
      if (Image && croppedAreaPixels) {
        const croppedImage = await getCroppedImg(Image, croppedAreaPixels);
        console.log("donee", { croppedImage });
        if (user && user.Id && croppedImage) {
          UploadUserImages(user.Id, fileName, croppedImage);
        }

        setCroppedImage(croppedImage);
      }
    } catch (e) {
      console.error(e);
    }
  }, [Image, croppedAreaPixels]);
  return (
    <>
      {Image ? (
        <ModalBackdrop opacity={1} display={"flex"}>
          <CropForm>
            <Header
              onApply={showCroppedImage}
              Heading={Heading}
              onPrevious={onPrevious}
            ></Header>
            <CropperWrapper>
              <Cropper
                image={Image}
                crop={crop}
                zoom={zoom}
                aspect={cropShape ? (cropShape === "round" ? 1 : 7 / 3) : 4 / 3}
                showGrid={
                  cropShape ? (cropShape === "round" ? false : true) : true
                }
                cropShape={cropShape}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            </CropperWrapper>
            <SliderWrapper>
              <p>Zoom</p>
              <Slider
                size="small"
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-labelledby="Zoom"
                sx={{ width: "70%" }}
                onChange={(e, zoom) => setZoom(Number(zoom))}
              />
            </SliderWrapper>
          </CropForm>
        </ModalBackdrop>
      ) : (
        ""
      )}
    </>
  );
}

export default Crop;
