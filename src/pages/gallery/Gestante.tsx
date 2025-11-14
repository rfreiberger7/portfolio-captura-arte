import GalleryPage from "@/components/GalleryPage";
import { portfolioImages } from "@/config/images";

const GestanteGallery = () => {
  return (
    <GalleryPage
      title="Gestante"
      images={portfolioImages.gestante}
      instagramUrl="https://www.instagram.com/studio.manufotografias/"
    />
  );
};

export default GestanteGallery;
