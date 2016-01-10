(function () {
    var app = angular.module('lovematch', []);

    app.controller('LoveMatchCtrl', function ($scope) {
        $scope.player1={};
        $scope.player2={};
        $scope.general=[];
        $scope.colourScore=0;
        $scope.personalityScore=0;
        $scope.sportScore=0;
        $scope.showCalcs=false;

        $scope.colours=[
            'Blue',
            'Yellow',
            'Red',
            'Orange',
            'Green',
            'Purple',
            'Black',
            'White'
        ];

        var colourMap=[
            [0,0,50], [0, 1, 100], [0, 2, 90], [0, 3, 60], [0, 4, 50], [0, 5, 40], [0, 6, 100], [0, 7, 100],
            [1,1,20], [1, 2, 100], [1, 3, 30], [1, 4, 10], [1, 5, 100], [1, 6, 100], [1, 7, 100],
            [2,2,50], [2, 3, 60], [2, 4, 30], [2, 5, 100], [2, 6, 100], [2, 7, 100],
            [3,3,50], [3, 4, 40], [3, 5, 90], [3, 6, 100], [3, 7, 100],
            [4,4,50], [4, 5, 50], [4, 6, 100], [4, 7, 100],
            [5,5,50], [5, 6, 100], [5, 7, 100],
            [6,6,50], [6, 7, 100],
            [7,7,50]
        ];

        $scope.personalities=[
            'Not so suree',
            'Brainiac',
            'Slut',
            'Nerd',
            'Geek',
            'Popular',
            'Thick',
            'Sporty',
            'Very Religious',
            'Serious',
            'Funny'
        ];

        var personalityMap=[
            [0,0,15], [0, 1, 25], [0, 2, 8], [0, 3, 3], [0, 4, 4], [0, 5, 78], [0, 6, 34], [0, 7, 83], [0, 8, 50], [0, 9, 63], [0, 10, 93],
            [1,1,79], [1, 2, 0], [1, 3, 5], [1, 4, 6], [1, 5, 100], [1, 6, 64], [1, 7, 55], [1, 8, 87], [1, 9, 34], [1, 10, 14],
            [2,2,100], [2, 3, 98], [2, 4, 96], [2, 5, 0], [2, 6, 100], [2, 7, 75], [2, 8, 0], [2, 9, 5], [2, 10, 10],
            [3,3,100], [3, 4, 100], [3, 5, 5], [3, 6, 26], [3, 7, 0], [3, 8, 5], [3, 9, 20], [3, 10, 0],
            [4,4,100], [4, 5, 5], [4, 6, 26], [4, 7, 0], [4, 8, 5], [4, 9, 20], [4, 10, 0],
            [5,5,95], [5, 6, 10], [5, 7, 100], [5, 8, 0], [5, 9, 20], [5, 10, 100],
            [6,6,100], [6, 7, 21], [6, 8, 18], [6, 9, 5], [6, 10, 0],
            [7,7,98], [7, 8, 5], [7, 9, 0], [7, 10, 100],
            [8,8,100], [8, 9, 79], [8, 10, 50],
            [9,9,100], [9, 10, 20],
            [10,10,100]
        ];

        $scope.sports=[
            'Football',
            'Rugby',
            'Netball',
            'Kitesurfing',
            'Basketball',
            'Sailing',
            'Cricket',
            'Rounders',
            'Badmington',
            'Tennis',
            'Rowing',
            'Trampolining'
        ];

        var sportsMap=[
            [0,0,90], [0, 1, 40], [0, 2, 70], [0, 3, 20], [0, 4, 60], [0, 5, 30], [0, 6, 50], [0, 7, 40], [0, 8, 50], [0, 9, 80], [0, 10, 50], [0, 11, 20],
            [1,1,90], [1, 2, 40], [1, 3, 60], [1, 4, 80], [1, 5, 60], [1, 6, 70], [1, 7, 40], [1, 8, 30], [1, 9, 50], [1, 10, 80], [1, 11, 30],
            [2,2,90], [2, 3, 70], [2, 4, 86], [2, 5, 60], [2, 6, 56], [2, 7, 80], [2, 8, 70], [2, 9, 40], [2, 10, 30], [2, 11, 90],
            [3,3,100], [3, 4, 30], [3, 5, 90], [3, 6, 50], [3, 7, 40], [3, 8, 30], [3, 9, 60], [3, 10, 70], [3, 11, 80],
            [4,4,90], [4, 5, 20], [4, 6, 60], [4, 7, 50], [4, 8, 40], [4, 9, 30], [4, 10, 60], [4, 11, 80],
            [5,5,100], [5, 6, 60], [5, 7, 50], [5, 8, 40], [5, 9, 30], [5, 10, 70], [5, 11, 90],
            [6,6,90], [6, 7, 80], [6, 8, 70], [6, 9, 80], [6, 10, 60], [6, 11, 20],
            [7,7,100], [7, 8, 70], [7, 9, 70], [7, 10, 60], [7, 11, 50],
            [8,8,90], [8, 9, 80], [8, 10, 50], [8, 11, 60],
            [9,9,90], [9, 10, 80], [9, 11, 60],
            [10,10,100], [10, 11, 40],
            [11,11,90]

        ];

        $scope.questions=[
            {
                question: "How often do you kiss this person?",
                answers: [
                    { answer: "Never have", score: 20 },
                    { answer: "Very occasionally", score: 40 },
                    { answer: "Once a week", score: 50 },
                    { answer: "A few times a week", score: 60 },
                    { answer: "Once a day", score: 80 },
                    { answer: "Every few minutes!", score: 100 }
                ]
            },
            {
                question: "Would you cry for this person?",
                answers: [
                    { answer: "Yes", score: 100 },
                    { answer: "No", score: 20 },
                    { answer: "Not sure", score: 50 }
                ]
            },
            {
                question: "Have you exchanged texts with each other?",
                answers: [
                    { answer: "Yes", score: 100 },
                    { answer: "No", score: 20 }
                ]
            },
            {
                question: "Has he/she already asked you out?",
                answers: [
                    { answer: "Yes", score: 100 },
                    { answer: "No", score: 60 }
                ]
            }
        ];

        function getMatch(v1, v2, map, name) {
            console.log("Finding match: "+name+" between "+v1+" and "+v2);
            if ( v1 > v2 ) {
                console.log("Oops v1 greater than v2 I'll switch them for you ._.");
                var tmp=v1;
                v1=v2;
                v2=tmp;
            }

            for (var n=0; n< map.length; n++ ) {
                var possible=map[n];
//                console.log("... checking: "+possible);
                if ( possible[0] == v1 && possible[1] == v2 ) {
                    // found match
                    return possible[2];
                }
            }
            console.log("Did not find match for: "+name);
            return 0;
        }

        $scope.calculateAll = function() {
            calculateColourMatch();
            calculatePersonalityMatch();
            calculateSportMatch();

            var total=$scope.colourScore + $scope.personalityScore + $scope.sportScore;
            for ( var n=0; n < $scope.general.length; n++ ) {
                total += $scope.general[n];
            }

            $scope.gscores=angular.copy($scope.general);

            $scope.average=total / (3+$scope.general.length);
        }

        var calculateColourMatch = function() {
            $scope.colourScore=getMatch($scope.player1.colour || -1, $scope.player2.colour || -1, colourMap, "colour");
        }

        var calculatePersonalityMatch = function() {
            $scope.personalityScore=getMatch($scope.player1.pzn || -1, $scope.player2.pzn || -1, personalityMap, "personality");
        }

        var calculateSportMatch = function() {
            $scope.sportScore=getMatch($scope.player1.sport || -1, $scope.player2.sport || -1, sportsMap, "sport");
        }
    });
})();