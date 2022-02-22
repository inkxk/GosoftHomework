const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// function 24gameSolver
var ar = [],
    order = [0, 1, 2],
    op = [],
    val = [];
var NOVAL = 9999,
    oper = "+-*/",
    out = "";

function rnd(n) {
    return Math.floor(Math.random() * n);
}

function getValue(x, dir) {
    var r = NOVAL;
    if (dir > 0) ++x;
    while (1) {
        if (val[x] != NOVAL) {
            r = val[x];
            val[x] = NOVAL;
            break;
        }
        x += dir;
    }
    return r * 1;
}

function calc() {
    var c = 0,
        l,
        r,
        x;
    val = ar.join("/").split("/");
    while (c < 3) {
        x = order[c];
        l = getValue(x, -1);
        r = getValue(x, 1);
        switch (op[x]) {
            case 0:
                val[x] = l + r;
                break;
            case 1:
                val[x] = l - r;
                break;
            case 2:
                val[x] = l * r;
                break;
            case 3:
                if (!r || l % r) return 0;
                val[x] = l / r;
        }
        ++c;
    }
    return getValue(-1, 1);
}

function shuffle(s, n) {
    var x = n,
        p = eval(s),
        r,
        t;
    while (x--) {
        r = rnd(n);
        t = p[x];
        p[x] = p[r];
        p[r] = t;
    }
}

function parenth(n) {
    while (n > 0) --n, (out += "(");
    while (n < 0) ++n, (out += ")");
}

function getPriority(x) {
    for (var z = 3; z--; ) if (order[z] == x) return 3 - z;
    return 0;
}

function showSolution() {
    var x = 0,
        p = 0,
        lp = 0,
        v = 0;
    while (x < 4) {
        if (x < 3) {
            lp = p;
            p = getPriority(x);
            v = p - lp;
            if (v > 0) parenth(v);
        }
        out += ar[x];
        if (x < 3) {
            if (v < 0) parenth(v);
            out += oper.charAt(op[x]);
        }
        ++x;
    }
    parenth(-p);
    return `Success: ${out}`;
}

function solve24(s) {
    var z = 4,
        r;
    while (z--) ar[z] = s.charCodeAt(z) - 48;
    out = "";
    for (z = 100000; z--; ) {
        r = rnd(256);
        op[0] = r & 3;
        op[1] = (r >> 2) & 3;
        op[2] = (r >> 4) & 3;
        shuffle("ar", 4);
        shuffle("order", 3);
        if (calc() != 24) {
            continue;
        } else {
            return showSolution();
        }
    }
}

// End function

app.get("/:number1/:number2/:number3/:number4", function (req, res) {
    var data = {
        number1: req.params.number1,
        number2: req.params.number2,
        number3: req.params.number3,
        number4: req.params.number4,
    };

    if (1 > data.number1 || data.number1 > 9) {
        res.status(403).send({ error: "invalid input number 1" });
    }
    if (1 > data.number2 || data.number2 > 9) {
        res.status(403).send({ error: "invalid input number 2" });
    }
    if (1 > data.number3 || data.number3 > 9) {
        res.status(403).send({ error: "invalid input number 3" });
    }
    if (1 > data.number4 || data.number4 > 9) {
        res.status(403).send({ error: "invalid input number 4" });
    } else {
        var result = solve24(`${data.number1}${data.number2}${data.number3}${data.number4}`);
        if (result === undefined) {
            res.send("Fail: No Solution");
        } else {
            res.send(result);
        }
    }
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
