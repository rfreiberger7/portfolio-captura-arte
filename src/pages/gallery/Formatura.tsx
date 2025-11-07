import GalleryPage from "@/components/GalleryPage";
import { portfolioImages } from "@/config/images";

const FormaturaGallery = () => {
  return (
    <GalleryPage
      title="Formatura"
      images={portfolioImages.formatura}
      instagramUrl="https://www.instagram.com/studio.manufotografias/"
    />
  );
};

export default FormaturaGallery;
