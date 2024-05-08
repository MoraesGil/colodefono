import React, { useEffect } from "react";
import { useImageLoading } from "../../containers/ImageLoadingContext";

interface LoaderImageProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const LoaderImage: React.FC<LoaderImageProps> = ({
  src,
  alt,
  style,
  onClick,
}) => {
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
      onClick={onClick}
      style={style}
    />
  );
};

export default LoaderImage;
