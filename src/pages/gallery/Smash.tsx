import GalleryPage from "@/components/GalleryPage";
import { portfolioImages } from "@/config/images";

const SmashGallery = () => {
  return (
    <GalleryPage
      title="Smash the Cake"
      images={portfolioImages.smash}
      instagramUrl="https://www.instagram.com/studio.manufotografias/"
    />
  );
};

export default SmashGallery;
