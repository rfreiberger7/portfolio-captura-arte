import GalleryPage from "@/components/GalleryPage";
import { portfolioImages } from "@/config/images";

const MesversarioGallery = () => {
  return (
    <GalleryPage
      title="Mesversário"
      images={portfolioImages.mesversario}
      instagramUrl="https://www.instagram.com/studio.manufotografias/"
    />
  );
};

export default MesversarioGallery;
