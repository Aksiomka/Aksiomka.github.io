/***
 * Dark/Light mode
 *
 * TODO: Probably, Document.hasStorageAccess() and Document.requestStorageAccess() will be required for mobile clients
 */
function addDark() {
    document.body.classList.add("dark")
}

function removeDark() {
    document.body.classList.remove("dark")
}

function preferesDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

var darkStorage = storageChecker("dark", addDark, removeDark, preferesDark)

function turnDark() {
    darkStorage.turnTrue()
}

function turnLight() {
    darkStorage.turnFalse()
}

darkStorage.restore()