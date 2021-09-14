function encodeAndDecodeMessages() {
    const buttons = document.getElementsByTagName('button');
    const messages = document.getElementsByTagName('textarea');

    buttons[0].addEventListener('click', encodeMessages);
    buttons[1].addEventListener('click', decodeMessages);

    function encodeMessages() {
        const text = messages[0].value;
        let encoded = '';

        for (let i = 0; i < text.length; i++) {
            encoded += String.fromCharCode(ascii(text[i]) + 1)
        }
        messages[0].value = '';
        messages[1].value = encoded
    }

    function decodeMessages() {
        const text = messages[1].value;
        let decoded = '';

        for (let i = 0; i < text.length; i++) {
            decoded += String.fromCharCode(ascii(text[i]) - 1);
        }
        messages[1].value = decoded;
    }

    function ascii(c) {
        return c.charCodeAt(0);
    }
}