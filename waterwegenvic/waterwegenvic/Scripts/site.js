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
        if (src == 'banana' || src == 'nappy') {
            ev.target.appendChild(document.getElementById(src));
            ev.stopPropagation();
        } else {
            alert("Wrong Dustbin! " + src + " is not supposed to be put inside a red bin.");
        }
    } else if (id == 'yellow-bin') {
        if (src == 'coffee' || src == 'cola' || src == 'screw' || src == 'whiskey') {
            ev.target.appendChild(document.getElementById(src));
            ev.stopPropagation();
        } else {
            if (src == 'coffee') {
                src = 'coffee cup';
            } else if (src == 'whiskey') {
                src = 'whiskey bottle';
            }
            alert("Wrong Dustbin! " + src + " is not supposed to be put inside a red bin.");
        }
    } else if (id == 'green-bin') {
        if (src == 'hay') {
            ev.target.appendChild(document.getElementById(src));
            ev.stopPropagation();
        } else {
            alert("Wrong Dustbin!  " + src + " is not supposed to be put inside a red bin.");
        }
    }
    return false;
}