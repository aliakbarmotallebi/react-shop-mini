export default function TextToSlug(titleStr) {
    titleStr = titleStr.replace(/^\s+|\s+$/g, '');
    titleStr = titleStr.replaceAll('/' , '-');
    titleStr = titleStr.toLowerCase();
    titleStr = titleStr.replace(/[^a-z0-9_\s-ءاأإآؤئبتثجحخدذرزسشصضطظعغفقكلمنهويةى]#u/, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
    return titleStr;
}