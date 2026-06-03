const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL

export type AssetBucket = 'site-assets' | 'gallery' | 'treatments' | 'press'

export function assetUrl(bucket: AssetBucket, path: string): string {
  if (!SUPABASE_URL) {
    throw new Error('NEXT_PUBLIC_SUPABASE_URL is not set')
  }
  const cleanPath = path.replace(/^\/+/, '')
  return `${SUPABASE_URL}/storage/v1/object/public/${bucket}/${cleanPath}`
}
