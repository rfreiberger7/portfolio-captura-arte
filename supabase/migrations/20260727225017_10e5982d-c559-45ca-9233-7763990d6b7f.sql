-- 1. Drop broad SELECT listing policy on storage.objects for gallery-images
DROP POLICY IF EXISTS "Anyone can view gallery images" ON storage.objects;

-- 2. Rewrite storage.objects admin policies to inline role check
DROP POLICY IF EXISTS "Only admins can upload images" ON storage.objects;
DROP POLICY IF EXISTS "Only admins can update images" ON storage.objects;
DROP POLICY IF EXISTS "Only admins can delete images" ON storage.objects;

CREATE POLICY "Only admins can upload images"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (
  bucket_id = 'gallery-images'
  AND EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'admin')
);

CREATE POLICY "Only admins can update images"
ON storage.objects FOR UPDATE TO authenticated
USING (
  bucket_id = 'gallery-images'
  AND EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'admin')
);

CREATE POLICY "Only admins can delete images"
ON storage.objects FOR DELETE TO authenticated
USING (
  bucket_id = 'gallery-images'
  AND EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'admin')
);

-- 3. Rewrite public.gallery_images policies to inline role check (remove has_role dependency)
DROP POLICY IF EXISTS "Only admins can delete images" ON public.gallery_images;
DROP POLICY IF EXISTS "Only admins can insert images" ON public.gallery_images;
DROP POLICY IF EXISTS "Only admins can update images" ON public.gallery_images;

CREATE POLICY "Only admins can delete images"
ON public.gallery_images FOR DELETE TO authenticated
USING (EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'admin'));

CREATE POLICY "Only admins can insert images"
ON public.gallery_images FOR INSERT TO authenticated
WITH CHECK (EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'admin'));

CREATE POLICY "Only admins can update images"
ON public.gallery_images FOR UPDATE TO authenticated
USING (EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'admin'));

-- 4. Revoke EXECUTE on has_role from public/anon/authenticated
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM anon;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM authenticated;