var X = true;
var xScore = 0;
var oScore = 0;
var winningScores;

$(document).ready(initialize);

function initialize() {
    addEvent();
    winningScores = generateWinnerScoresArray();
    console.log(winningScores);
}

function addEvent() {
    $("div").click(function(event) {
        var id = $(this).attr("id");
        if(id >=0 && id <= 9) {
            console.log($(this).attr("id"));
            
            var isWinnerAvailable = false;
            var winner = ""
            if(X) {
                X = false;
                $(this).addClass("selectedX");
                xScore += Math.pow(2, id);
                isWinnerAvailable = checkWinner(true);
                winner = "X"
            }
            else {
                X = true;
                $(this).addClass("selectedO");
                oScore += Math.pow(2, id);
                isWinnerAvailable = checkWinner(false);
                winner = "O"
            }
            
            if(isWinnerAvailable) {
                window.alert(("Hey " + winner + " won :)"));
            }
        }
    });
}

function generateWinnerScoresArray() {
    var arr = [];
    var counter = 0;
    for(i = 0; i < 3; i++) {
        
        var tempArr = [];
        for(j = 0; j < 3; j++) {
            tempArr.push(Math.pow(2, counter++));
        }
        
        arr.push(tempArr);
    }
    
    var winningScores = [];
    
    for(i = 0; i < 8; i++) {
        winningScores.push(0);
    }
    
    var counter = 2;
    for(i = 0; i < arr.length; i++) {
        for(j = 0; j < arr[i].length; j++) {
            if(i == j) winningScores[0] += arr[i][i];
            if(i == (arr.length - j - 1)) winningScores[1] += arr[i][j]
            
            winningScores[counter] += arr[i][j];
            winningScores[counter+1] += arr[j][i];
        }
        
        counter+=2;
    }
    
//    console.log(winningScores);
    winningScores.sort(function(a, b) {
        return (a - b);
    });
    
//    console.log(winningScores);
    return winningScores;
}

function checkWinner(isXMove) {
    console.log(winningScores + " " + xScore + " " + oScore);
    var index = -1;
    if(isXMove)
        index = binarySearch(xScore, 0, winningScores.length);
    else
        index = binarySearch(oScore, 0, winningScores.length);
    
    if(index != -1) return true;
    
    return false;
}

function binarySearch(score, start, end) {
    if(start == (end - 1)) return -1;
    
    var mid = parseInt((start + end) / 2);
    
    if(winningScores[mid] == score) return mid;
    else if(winningScores[mid] > score) return binarySearch(score, start, mid);
    else if(winningScores[mid] < score) return binarySearch(score, mid, end);
}