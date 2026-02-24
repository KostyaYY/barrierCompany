// utils/slug.ts
import slugify from '@sindresorhus/slugify';

export function generateSlug(name: string): string {
  return slugify(name, {
    lower: true,
    strict: true,
    locale: 'uk',
  });
}