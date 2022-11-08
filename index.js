function mooncakeSays(message) {
  let mooncake = '(o.o)';

  if ( message ) {
    console.log('cake moon')
    return `${mooncake} chookity?`;
  }

  return `${mooncake} ${message}`;
}

module.exports.mooncakeSays = mooncakeSays
