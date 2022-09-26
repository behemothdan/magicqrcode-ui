export function StringCleaner(string: string, applyLowerCase: boolean) {
    let cleanString = string;
    if(applyLowerCase) {
        cleanString = cleanString.toLowerCase();
    }
    cleanString = cleanString.trim();
    cleanString = cleanString.replace(/[|&;$%@"<>()+,]/g, "");
    cleanString = cleanString.replace(/<[^>]*>/g, '');
    return cleanString;
}