import React, { createContext, useContext, useState, useCallback } from "react";
import Loading from "../components/Loading";

interface ImageLoadingContextType {
  registerImage: () => void;
  unregisterImage: () => void;
}

type ImageLoadingProviderProps = {
  children: React.ReactNode;
};

const ImageLoadingContext = createContext<ImageLoadingContextType | undefined>(
  undefined
);

export const useImageLoading = () => {
  const context = useContext(ImageLoadingContext);
  if (!context) {
    throw new Error(
      "useImageLoading must be used within a ImageLoadingProvider"
    );
  }
  return context;
};

const ImageLoadingProvider: React.FC<ImageLoadingProviderProps> = ({ children }) => {
  const [loadingCount, setLoadingCount] = useState(0);

  const registerImage = useCallback(() => {
    setLoadingCount((count) => count + 1);
  }, []);

  const unregisterImage = useCallback(() => {
    setLoadingCount((count) => count - 1);
  }, []);

  return (
    <ImageLoadingContext.Provider value={{ registerImage, unregisterImage }}>
      {children}
      {loadingCount > 0 && <Loading />}
    </ImageLoadingContext.Provider>
  );
};

export default ImageLoadingProvider;
