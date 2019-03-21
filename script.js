var name = {};
var electionResults = null;
var totalVotes = 0;

var candidateList = function (politicianName, partyColor)
{
  var candidate = {};
  candidate.name = politicianName;
  candidate.electionResults = null;
  candidate.totalVotes = 0;
  candidate.color = partyColor;
  
  candidate.tallyVotes = function() {
    this.totalVotes=0;
    
    for (var i = 0; i < this.electionResults.length; i++) {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };
  
  return candidate;
  
};


var candidate1 = candidateList("Rand al'Thor",[132, 17, 11]);
  candidate1.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
  
  
var candidate2 = candidateList("Aelin Ashryver", [245, 141, 136]);
  candidate2.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

candidate1.electionResults[9]=1;
candidate1.electionResults[4]=17;
candidate1.electionResults[43]=11;

candidate2.electionResults[9]=28;
candidate2.electionResults[4]=38;
candidate2.electionResults[43]=27;
  
candidate1.tallyVotes();
candidate2.tallyVotes();
  
console.log(candidate1.totalVotes);
console.log(candidate2.totalVotes);
console.log(candidate1.color);
console.log(candidate2.color);

var setStateResults = function(state) {
  theStates[state].winner = null;
  if (candidate1.electionResults[state] > candidate2.electionResults[state]) {
    theStates[state].winner = candidate1;
  } else if (candidate2.electionResults[state] > candidate1.electionResults[state]) {
    theStates[state].winner= candidate2;
  }
  
  var stateWinner = theStates[state].winner;
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.color;
  } else {
    theStates[state].rgbColor = [11,32,57];
  }
  
var stateTable = document.getElementById('stateResults');
var header = stateTable.children[0].children[0];
var stateName = header.children[0];
  stateName.innerText = theStates[state].nameFull;
var stateAbbrev = header.children[1];
  stateAbbrev.innerText = theStates[state].nameAbbrev;
 
var body = stateTable.children[1];
  body.children[0].children[0].innerText = candidate1.name;
  body.children[0].children[1].innerText = candidate1.electionResults[state];
  body.children[1].children[0].innerText = candidate2.name;
  body.children[1].children[1].innerText = candidate2.electionResults[state];
  if (stateWinner === null) {
    body.children[2].children[1].innerText = "DRAW";
  } else {
  body.children[2].children[1].innerText = stateWinner.name;
  }
  
 
};


var winner = "???"
  if (candidate1.totalVotes > candidate2.totalVotes) {
    winner = candidate1.name;
  } else if (candidate1.totalVotes < candidate2.totalVotes) {
    winner = candidate2.name;
  } else {
    winner = "DRAW";
  }

console.log("And the next President of the United States is..." + winner);

var countryTable = document.getElementById('countryResults');
  countryTable.children[0].children[0].children[0].innerText = candidate1.name;
  countryTable.children[0].children[0].children[1].innerText = candidate1.totalVotes;
  countryTable.children[0].children[0].children[2].innerText = candidate2.name;
  countryTable.children[0].children[0].children[3].innerText = candidate2.totalVotes;
  countryTable.children[0].children[0].children[5].innerText = winner;