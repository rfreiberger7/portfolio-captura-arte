import GalleryPage from "@/components/GalleryPage";
import { portfolioImages } from "@/config/images";

const PreWeddingGallery = () => {
  return (
    <GalleryPage
      title="Ensaio Pré Wedding"
      images={portfolioImages.preWedding}
      instagramUrl="https://www.instagram.com/studio.manufotografias/"
    />
  );
};

export default PreWeddingGallery;
