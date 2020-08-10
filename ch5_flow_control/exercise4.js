function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

/*
This will log:
 Product 2
 Product 3
 Product not found!
This is because there is no break statement. After matching with 
case '113', the execution will fall through to next break case.
 */