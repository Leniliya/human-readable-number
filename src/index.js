module.exports = function toReadable(number) {
    let result = [];
    let n = number.toString()
    if (n === '0') {
        return 'zero'
    }
    if (n[n.length - 3]) {
        switch (n[n.length - 3]) {
            case '0':
                break;

            case '1':
                result.push('one hundred');
                break;

            case '2':
                result.push('two hundred');
                break;

            case '3':
                result.push('three hundred');
                break;

            case '4':
                result.push('four hundred');
                break;

            case '5':
                result.push('five hundred');
                break;

            case '6':
                result.push('six hundred');
                break;

            case '7':
                result.push('seven hundred');
                break;

            case '8':
                result.push('eight hundred');
                break;

            case '9':
                result.push('nine hundred');
                break;

        }

    }

    function teens(number) {
        switch (n[n.length - 1]) {
            case '0':
                result.push('ten')
                break;

            case '1':
                result.push('eleven')
                break;

            case '2':
                result.push('twelve');
                break;

            case '3':
                result.push('thirteen');
                break;

            case '4':
                result.push('fourteen');
                break;

            case '5':
                result.push('fifteen');
                break
            case '6':
                result.push('sixteen');
                break;

            case '7':
                result.push('seventeen');
                break;

            case '8':
                result.push('eighteen');
                break;

            case '9':
                result.push('nineteen');
                break;

        }
    }

    if (n[n.length - 2]) {
        switch (n[n.length - 2]) {
            case '0':
                break;

            case '1':
                teens()
                break;

            case '2':
                result.push('twenty');
                break;

            case '3':
                result.push('thirty');
                break;

            case '4':
                result.push('forty');
                break;

            case '5':
                result.push('fifty');
                break
            case '6':
                result.push('sixty');
                break;

            case '7':
                result.push('seventy');
                break;

            case '8':
                result.push('eighty');
                break;

            case '9':
                result.push('ninety');
                break;

        }

    }

    if (n[n.length - 1] && n[n.length - 2] !== '1') {
        switch (n[n.length - 1]) {
            case '0':
                break;

            case '1':
                result.push('one');
                break;

            case '2':
                result.push('two');
                break;

            case '3':
                result.push('three');
                break;

            case '4':
                result.push('four');
                break;

            case '5':
                result.push('five');
                break;

            case '6':
                result.push('six');
                break;

            case '7':
                result.push('seven');
                break;

            case '8':
                result.push('eight');
                break;

            case '9':
                result.push('nine');
                break;

        }

    }
    return result.join(' ')
}
