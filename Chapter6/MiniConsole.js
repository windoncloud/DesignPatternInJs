var cache = [];

var miniConsole = {
    log: function () {
        var args = arguments;
        cache.push(function () {
            return miniConsole.log.apply(miniConsole, args)
        })
    }
}

// miniConsole.log(1)

var handler = function (ev) {
    // if (ev.keyCode === 123) {
    if (ev.keyCode === 187) {
        var script = document.createElement('script')
        script.onload = function () {
            for (var i = 0, fn; fn = cache[i++];) {
                fn()
            }
        }
        script.src = 'Agency.js'
        document.getElementsByTagName('head')[0].appendChild(script)
        document.body.removeEventListener('keydown', handler)
    }
}

document.body.addEventListener('keydown', handler, false)

minConsole = {
    log: function () {
        console.log(Array.prototype.join.call(arguments))
    }
}
//https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
// window.addEventListener("keydown", function (event) {
//     if (event.defaultPrevented) {
//         return; // Should do nothing if the default action has been cancelled
//     }
//
//     var handled = false;
//     if (event.key !== undefined) {
//         // Handle the event with KeyboardEvent.key and set handled true.
//     } else if (event.keyIdentifier !== undefined) {
//         // Handle the event with KeyboardEvent.keyIdentifier and set handled true.
//     } else if (event.keyCode !== undefined) {
//         // Handle the event with KeyboardEvent.keyCode and set handled true.
//     }
//
//     if (handled) {
//         // Suppress "double action" if event handled
//         event.preventDefault();
//     }
// }, true);