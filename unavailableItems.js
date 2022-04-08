let unavailableItems = [
                            { startPx: 10, endPx: 30 },
                            { startPx: 55, endPx: 65 },
                            { startPx: 35, endPx: 50 },
                            { startPx: 20, endPx: 40 },
                            { startPx: 60, endPx: 70 }
                        ],
    result = unavailableItems
        .sort(function (a, b) { return a.startPx - b.startPx || a.endPx - b.endPx; })
        .reduce(function (r, a) {
            var last = r[r.length - 1] || [];
            if (last.startPx <= a.startPx && a.startPx <= last.endPx) {
                if (last.endPx < a.endPx) {
                    last.endPx = a.endPx;
                }
                return r;
            }
            return r.concat(a);
        }, []);

console.log(result);
