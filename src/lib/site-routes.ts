export const SITE_URL = 'https://gordoneyeface.com';

export const staticRoutes = [
  '/',
  '/about',
  '/about/surgical-specialty-center',
  '/about/white-plains-hospital',
  '/contact',
  '/gallery',
  '/gallery/blepharoplasty',
  '/gallery/ectropion-entropion',
  '/press',
  '/reviews',
  '/treatments',
  '/treatments/eyelid-surgery',
  '/treatments/injectables',
  '/treatments/medical-eye-care',
  '/treatments/non-surgical',
  '/llms.txt',
] as const;

export const treatmentCategoryRoutes = [
  {
    category: 'medical-eye-care',
    procedures: [
      'cataract-surgery',
      'blepharoplasty',
      'ptosis-repair',
      'ectropion-entropion-repair',
      'dry-eye-management',
      'stye-removal',
      'blepharospasm',
      'tumor-removal',
      'routine-eye-exams',
      'orbital-fracture',
      'thyroid-eye-disease',
    ],
  },
  {
    category: 'eyelid-surgery',
    procedures: [
      'upper-lower-blepharoplasty',
      'revision-blepharoplasty',
      'aesthetic-ptosis-repair',
      'brow-lift',
      'festoon-treatment',
      'double-eyelid-surgery',
      'canthoplasty-canthopexy',
      'eyelid-fat-transfer',
    ],
  },
  {
    category: 'non-surgical',
    procedures: [
      '5d-eyebag-removal',
      '5d-face-lift',
      'mini-mid-facelift',
      'laser-skin-resurfacing',
      'pdo-thread-lift',
      'rf-microneedling',
      'jowl-chin-reduction',
      'prp-therapy',
      'drop-n-lift',
    ],
  },
  {
    category: 'injectables',
    procedures: [
      'tear-trough-filler',
      'botox',
      'dysport',
      'dermal-fillers',
      'filler-revision',
      'hyaluronidase',
      'restylane',
      'belotero',
      'perlane',
    ],
  },
] as const;

export const galleryRoutes = [
  '/gallery/blepharoplasty',
  '/gallery/ectropion-entropion',
  '/gallery/ptosis-repair',
  '/gallery/tumor-removal',
] as const;
