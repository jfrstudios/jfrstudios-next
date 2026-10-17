/**
 * Sanity Studio route.
 * Mounts the embedded CMS at /studio for content editing.
 *
 * Before this works you must:
 *   1. Create a project at https://sanity.io
 *   2. Set NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local
 *   3. Run `npx sanity@latest init --reconfigure` if needed
 */
'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config';

export const dynamic = 'force-static';

export default function StudioPage() {
  return <NextStudio config={config} />;
}