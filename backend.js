(function() {
    var BOARD_REQUEST = 'boardRequest',
        processing = false;
    /*
     * TODO:
     * * sprawdzanie czy permutacja dobra
     */

    function drawInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /*
     * Returns uniformly distributed random permutation of elements from the set {1, 2, ..., n}
     */
    function drawPermutation(n) {
        var result = [];

        for (var i = 0; i < n; ++i) {
            var pos = drawInt(0, i);
            result.splice(pos, 0, i);
        }

        return result;
    }

    onmessage = function(e) {
        if (processing) {
            return;
        } else {
            processing = true;
        }

        if (e.data.type === BOARD_REQUEST) {
            var boardSize = e.data.boardSize;
            setTimeout(function() {
                postMessage(drawPermutation(boardSize * boardSize));
                processing = false;
            }, 1000);
        }
    }
})();