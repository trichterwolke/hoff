export interface Page {
    index: string;
    header: string;
    content: string;        
    nextPage: Page;
    previousPage: Page;
}
