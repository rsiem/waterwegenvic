function dragStart(ev) {
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
    ev.dataTransfer.setDragImage(ev.target, 100, 100);
    return true;
}

function dragEnter(ev) {
    event.preventDefault();
    return true;
}

function dragOver(ev) {
    return false;
}

function dragDrop(ev) {
    var src = ev.dataTransfer.getData("Text");
    var id = ev.target.id;
    if (id == 'red-bin') {
        if (src == 'car') {
            ev.target.appendChild(document.getElementById(src));
            ev.stopPropagation();
        } else {
            alert('wrong dustbin.');
        }
    } else if (id == 'yellow-bin') {
        if (src == 'ambulance') {
            ev.target.appendChild(document.getElementById(src));
            ev.stopPropagation();
        } else {
            alert('wrong dustbin.');
        }
    } else if (id == 'green-bin') {
        if (src == 'bike') {
            ev.target.appendChild(document.getElementById(src));
            ev.stopPropagation();
        } else {
            alert('wrong dustbin.');
        }
    }
    return false;
}