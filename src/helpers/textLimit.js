export default function TextLimit(text, count) {
    if (!text) return
    
    return text.substring(0, count)
}