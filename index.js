function mooncakeSays(message) {
  let mooncake = '(o.o)';

  if ( !message ) {
    console.log('cake moon')
    return `${mooncake} chookity?`;
  }
    console.log('moon cake')
  return `${mooncake} ${message}`;
}

module.exports.mooncakeSays = mooncakeSays
