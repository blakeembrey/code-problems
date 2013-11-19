module.exports = function (dictionary, start, end) {
  // Create a function that will return an object which represents a graph
  // structure.
  var createGraph = function (dictionary) {
    var graph = {};

    // Create a simple helper function that will return a boolean whether the
    // words are one character apart
    var isOneCharDifference = function (word1, word2) {
      // If the second word is larger than the first word, reverse the
      // arguments and run again.
      if (word2.length > word1.length) {
        return isOneCharDifference(word2, word1);
      }

      // If the difference in length between the words is greater than one,
      // or the words are identical anyway, it's impossible.
      if (word1 === word2 || word2.length < word1.length - 1) {
        return false;
      }

      for (var i = 0; i < word1.length; i++) {
        // First we check whether replacing the character with the equivelent
        // from the second word with make the second word.
        if (word1.substr(0, i) + word2[i] + word1.substr(i + 1) === word2) {
          return true;
        }

        // Next we check if removing a single letter from the first word will
        // result in the second word.
        if (word1.substr(0, i) + word1.substr(i + 1) === word2) {
          return true;
        }
      }

      return false;
    };

    dictionary.forEach(function (word) {
      // Add the word to the graph structure with an array for the connecting
      // nodes.
      graph[word] = [];

      // Check all the other words in the graph so far and see if they are
      // connections.
      Object.keys(graph).forEach(function (connection) {
        if (isOneCharDifference(word, connection)) {
          graph[word].push(connection);
          // Push the word into the connection if it's been created.
          graph[connection] && graph[connection].push(word);
        }
      });
    });

    return graph;
  };

  // Find the solution.
  var graph = createGraph(dictionary);
  var shortestRoute;

  (function findRoute (word, route) {
    // If the word doesn't exist in the graph or we have gone to the word
    // before, break early.
    if (!graph[word] || ~route.indexOf(word)) { return; }

    // If the route is longer than a previous route, stop trying to loop around.
    if (shortestRoute && route.length >= shortestRoute.length) { return; }

    // Push the word into the current route
    route.push(word);

    // If the word now matches the final word, set it as the route.
    if (word === end) {
      return shortestRoute = route;
    }

    graph[word].forEach(function (connection) {
      return findRoute(connection, route.slice());
    });
  })(start, []);

  return shortestRoute;
};
