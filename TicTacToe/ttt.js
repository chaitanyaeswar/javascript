var X = true; 

$(document).ready(initialize);

function initialize() {
    addEvent();
    var winnigScores = generateWinnerScoresArray();
}

function addEvent() {
    $("div").click(function(event) {
        var id = $(this).attr("id");
        if(id >=0 && id <= 9) {
            console.log($(this).attr("id"));
            
            if(X) {
                X = false;
                $(this).addClass("selectedX");
            }
            else {
                X = true;
                $(this).addClass("selectedO");
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
    
    console.log(winningScores);
    winningScores.sort(function(a, b) {
        return (a - b);
    });
    
    console.log(winningScores);
    return winningScores;
}

function checkWinner() {
    
}