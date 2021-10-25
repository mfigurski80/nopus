const colors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'];

export function stringToColor(str) {
    var hash = hashCode(str);
    hash = ((hash % colors.length) + colors.length) % colors.length;
    return colors[hash];
}

export function hashCode(str) {
    // https://stackoverflow.com/a/8831937/9043642
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash;
    }
    return hash;
}
