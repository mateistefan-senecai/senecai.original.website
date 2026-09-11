declare module 'html2pdf.js' {
    interface Html2PdfWorker {
        set(opt: unknown): Html2PdfWorker;
        from(element: HTMLElement | string): Html2PdfWorker;
        save(): Promise<void>;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [key: string]: any;
    }
    function html2pdf(): Html2PdfWorker;
    export default html2pdf;
}
