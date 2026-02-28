import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.barrierplus.store/', lastModified: new Date() },
    { url: 'https://www.barrierplus.store/products', lastModified: new Date() },
    { url: 'https://www.barrierplus.store/about', lastModified: new Date() },
    { url: 'https://www.barrierplus.store/partners', lastModified: new Date() },
    { url: 'https://www.barrierplus.store/contacts', lastModified: new Date() },
  ]
}