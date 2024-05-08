import React, { useEffect } from "react";
import { useImageLoading } from "../../containers/ImageLoadingContext";

interface LoaderImageProps {
  src: string;
  alt: string;
  customStyle?: React.CSSProperties;
  onClick?: () => void;
}

const LoaderImage: React.FC<LoaderImageProps> = ({ src, alt }) => {
  const { registerImage, unregisterImage } = useImageLoading();

  useEffect(() => {
    registerImage();
    return () => unregisterImage();
  }, [registerImage, unregisterImage]);

  return (
    <img
      src={src}
      alt={alt}
      onLoad={unregisterImage}
      onError={unregisterImage}
    />
  );
};

export default LoaderImage;
