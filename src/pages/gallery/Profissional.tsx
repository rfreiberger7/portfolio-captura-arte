import GalleryPage from "@/components/GalleryPage";
import { portfolioImages } from "@/config/images";

const ProfissionalGallery = () => {
  return (
    <GalleryPage
      title="Ensaio Profissional"
      images={portfolioImages.profissional}
      instagramUrl="https://www.instagram.com/studio.manufotografias/"
    />
  );
};

export default ProfissionalGallery;
