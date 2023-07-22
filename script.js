function checkInput() {
    var n = document.getElementById("person1").value;
    var m=document.getElementById("person2").value;
    if (n==="" || m===""){
        alert("Please enter both the names");
    }
    else{
        findFlames();
    }
}
// -----------------------------------------------------------------


function resetStuff() {
    document.getElementById("person1").value = "";
    document.getElementById("person2").value = "";
    document.getElementById("result").innerHTML = "";
}
// -----------------------------------------------------------------
function findFlames(){

    function get_unique(a, b) {
        var count;
        count = 0;

        for (var i = 0, _pj_a = a.length; i < _pj_a; i += 1) {
            for (var j = 0, _pj_b = b.length; j < _pj_b; j += 1) {
                if (a[i] === b[j]) {
                    b = b.slice(0, j) + b.slice(j + 1);
                    count += 1;
                    break;
                }
            }
        }

        console.log("len a [Without Removing duplicates]", a.length);
        console.log("count", count);
        console.log("leb b [After Removing duplicates]", b.length);
        return a.length - count + b.length;
    }


    var n = document.getElementById("person1").value;
    n=n.toLowerCase().replace(" ", "");
    var m=document.getElementById("person2").value;
    m=m.toLowerCase().replace(" ", "");


    var finalText="";
    if (n==="hemanth" || m==="hemanth"){
        finalText+="Coding Chesko vro, ilanti websites lo time waste cheyyaku\n\n<br><br> Ni result : ";
        console.log("$$$$$$$$$$$$$$$$$$$$$$");
    }

    console.log(n);
    console.log(m);

    var game, unique;

    if (n.length < m.length) {
        unique = get_unique(n, m);
    } else {
        if (n.length > m.length) {
            unique = get_unique(m, n);
        } else {
            unique = get_unique(m, n);
        }
    }

    game = "FLAMES";
    console.log("unique : ", unique);

    function findLEFT(unique, s, position) {
        var i, index;
        i = 0;
        index = -1 + position;

        while (i < unique) {
            index += 1;

            if (index === s.length) {
                index = 0;
            }

            i += 1;
        }

        if (i === unique) {
            return [s.slice(0, index) + s.slice(index + 1), index];
        }
    }
    var game, position;
    position = 0;
    console.log(`[${game}]`);

    while (game.length !== 1) {
        [game, position] = findLEFT(unique, game, position);
        console.log(`[${game}]`, position);
    }

    console.log("----------------");
    if (game === "F") {
        console.log("Friends.");
        finalText += "Friends.";

    }
    else if(game === "L") {
        console.log("Love.");
        finalText += "Love.";
    }
    else if(game === "A") {
        console.log("Affection.");
        finalText += "Affection.";
    }
    else if(game === "M") {
        console.log("Marriage.");
        finalText += "Marriage.";
    }
    else if(game === "E") {
        console.log("Enemy.");
        finalText += "Enemy.";
    }
    else if(game === "S") {
        console.log("Sister.");
        finalText += "Sister.";
    }

    document.getElementById("result").innerHTML = finalText;
}