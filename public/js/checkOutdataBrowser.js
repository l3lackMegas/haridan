function checkUnES6Support() {
    if (typeof SpecialObject == "undefined") return false;
    try { specialFunction(); }
    catch (e) { return false; }

    return true;
}

if(!checkUnES6Support()) {
    document.getElementById('IE-Message').remove();
}