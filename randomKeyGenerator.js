export default function RandomKeyGenerator() {
    const letters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let word = '';
    for (let i = 0; i < 15; i++) {
        word += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return (word.substr(0, 5) +
        '-' + word.substr(5, 5) +
        '-' + word.substr(10, 5)).toUpperCase()
}
