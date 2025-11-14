import GalleryPage from "@/components/GalleryPage";
import { portfolioImages } from "@/config/images";

const CasamentoGallery = () => {
  return (
    <GalleryPage
      title="Casamento"
      images={portfolioImages.casamento}
      instagramUrl="https://www.instagram.com/studio.manufotografias/"
    />
  );
};

export default CasamentoGallery;
