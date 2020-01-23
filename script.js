//Election map

//politician object

var createPolitician = function(name, partyColor){
    var politician = {};
      politician.name = name;
      politician.electionResults = null;
      politician.totalVotes = 0;
      politician.partyColor = partyColor;
      politician.addUpTotalVotes = function(){
        for (var i = 0; i < this.electionResults.length; i++){
          this.totalVotes += this.electionResults[i];
        } //end for loop
      };//end totalVotes function
      return politician;
    };//end createPolitician
    
    //assigns the two politicians their colors
    var withersColor =  [132, 17, 11];
    var chopsColor = [245, 141, 136];
    
    //creates the two politicians
    var withers = createPolitician("Withers",withersColor);
    var chops = createPolitician("Chops", chopsColor);
    
    //withers election results 
    
    withers.electionResults = [5,1,7,2,33,6,4,2,1,14,8,2,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
    
    //chops election results
    chops.electionResults =[4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];
    
    
    //updated election results
    withers.electionResults[9] = 1;
    chops.electionResults[9] = 8;
    
    withers.electionResults[4] = 17;
    chops.electionResults[4] = 38;
    
    withers.electionResults[43] = 11;
    chops.electionResults[43] = 27;
    
    //assigns the winner of each state
    
    var setStateResults = function(state){
      
      theStates[state].winner = null;
      if (withers.electionResults[state] > chops.electionResults[state]){
        theStates[state].winner = withers;
      }
      else if (withers.electionResults[state] < chops.electionResults[state]){
        theStates[state].winner = chops;
      }
      
      var stateWinner = theStates[state].winner;
      if (stateWinner !== null){
        theStates[state].rgbColor = stateWinner.partyColor;
      }
        else {
          theStates[state].rgbColor = [11, 32, 57];
        }
    //populates the states results table
    var statesTable = document.getElementById("stateResults");
    var header = statesTable.children[0];
      var stateName = header.children[0].children[0];
      var stateAbbreviation = header.children[0].children[1];
    var body = statesTable.children[1];
      var candidate1Name = body.children[0].children[0];
      var candidate1Result = body.children[0].children[1];
      var candidate2Name = body.children[1].children[0];
      var candidate2Result = body.children[1].children[1];
      var winnersName = body.children[2].children[1];
      
    stateName.innerText = theStates[state].nameFull;
    stateAbbreviation.innerText = theStates[state].nameAbbrev;
    candidate1Name.innerText = withers.name;
    candidate1Result.innerText = withers.electionResults[state];
    candidate2Name.innerText = chops.name;
    candidate2Result.innerText = chops.electionResults[state];
    
      if (theStates[state].winner === null){
        winnersName.innerText = "Draw";
      }
      else {
        winnersName.innerText = theStates[state].winner.name;
      }
    };//ends setStateResults
    
    //calls function to add up total votes
    withers.addUpTotalVotes();
    chops.addUpTotalVotes();
    
    //declares a winner
    var winner;
    
    if (withers.totalVotes > chops.totalVotes){
      winner = "Withers";
    }
    else if (withers.totalVotes < chops.totalVotes){
      winner = "Chops";
    }
    else {
      winner = "It's a tie!";
    }
    
    //populates the national table 
    var nationalTable = document.getElementById("countryResults");
    var row = nationalTable.children[0].children[0];
    
    row.children[0].innerText = withers.name;
    row.children[1].innerText = withers.totalVotes;
    row.children[2].innerText = chops.name;
    row.children[3].innerText = chops.totalVotes;
    row.children[4].innerText = "WINNER";
    row.children[5].innerText = winner;    