var stringRotation = function (a, b) {
  if (a.length != b.length)
    return false;
  return (a + a).indexOf(b) > -1;
};
