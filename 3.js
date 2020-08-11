 var value = +prompt('How old are you');
 var string;

  if (value % 10 == 1 && value % 100 != 11) {
    string = 'год';
  }  else if (
    value >= 2 &&
    value <= 4 &&
    (value % 10 < 5 || value % 10 > 1)) {
      string = 'года';
    } else {
      string = 'лет';
    }

    console.log(value + ' ' + string);

