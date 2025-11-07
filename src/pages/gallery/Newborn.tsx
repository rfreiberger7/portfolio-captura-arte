import GalleryPage from "@/components/GalleryPage";
import { portfolioImages } from "@/config/images";

const NewbornGallery = () => {
  return (
    <GalleryPage
      title="Newborn"
      images={portfolioImages.newborn}
      instagramUrl="https://www.instagram.com/studio.manufotografias/"
    />
  );
};

export default NewbornGallery;
