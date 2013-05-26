var rotateMatrix = function (matrix) {
  var array = [];

  for (var i = 0; i < matrix.length; i++) {
    for (var l = 0; l < matrix[i].length; l++) {
      array[l] = array[l] || [];
      array[l][matrix[i].length - i] = matrix[i][l];
    }
  }

  return array;
};
