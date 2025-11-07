import GalleryPage from "@/components/GalleryPage";
import { portfolioImages } from "@/config/images";

const FemininoGallery = () => {
  return (
    <GalleryPage
      title="Ensaio Feminino"
      images={portfolioImages.feminino}
      instagramUrl="https://www.instagram.com/studio.manufotografias/"
    />
  );
};

export default FemininoGallery;
