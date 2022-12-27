export type shelf = "currentlyReading" | "wantToRead" | "read";

export interface IBook {
    id: string;
    title: string;
    subtitle: string;
    shelf: shelf;
    description: string;
    readingModes: {
        image: boolean;
        text: boolean;
    };
    ratingsCount: number;
    publisher: string;
    publishedDate: string;
    printType: string;
    previewLink: string;
    panelizationSummary: {
        containsEpubBubbles: boolean;
        containsImageBubbles: boolean;
    };
    pageCount: number;
    maturityRating: string;
    language: string;
    infoLink: string;
    industryIdentifiers: {
        type: string;
        identifier: string;
    }[];
    imageLinks: {
        smallThumbnail: string;
        thumbnail: string;
    };
    contentVersion: string;
    categories: string[];
    canonicalVolumeLink: string;
    averageRating: number;
    authors: string[];
    allowAnonLogging: boolean;
}