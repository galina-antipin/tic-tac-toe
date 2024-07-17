let fields = [
    null,
    null,
    null,
    null,
    'circle',
    'cross',
    null,
    null,
    null,
];

function init(){
    render();
}

function render() {
    let content = document.getElementById('content');
    let table = '<table>';

    for (let i = 0; i < 3; i++) {
        table += '<tr>';
        for (let j = 0; j < 3; j++) {
            let index = i * 3 + j;
            if (fields[index] === 'cross') {
                table += '<td>X</td>';
            } else if (fields[index] === 'circle') {
                table += '<td>O</td>';
            } else {
                table += '<td></td>';
            }
        }
        table += '</tr>';
    }

    table += '</table>';
    content.innerHTML = table;
}
