import { notFound } from 'next/navigation';
import { procedureConfig } from './config';
import GalleryProcedureClient from './GalleryProcedureClient';

export function generateStaticParams() {
    return Object.keys(procedureConfig).map(procedure => ({ procedure }));
}

export default async function ProcedureGalleryPage({ params }: { params: Promise<{ procedure: string }> }) {
    const { procedure } = await params;
    const config = procedureConfig[procedure];
    if (!config) notFound();
    return <GalleryProcedureClient config={config} slug={procedure} />;
}
