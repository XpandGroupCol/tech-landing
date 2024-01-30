import type { ImageMetadata } from 'astro';

export interface AcordeonData {
    title: string;
    img: ImageMetadata;
    imgTitle: string;
    imgDescription: string;
    btnDetail: string;
}
