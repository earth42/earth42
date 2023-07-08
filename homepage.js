const md5 = require( 'md5' );

function getGravatarURL( email ) {
  // Trim leading and trailing whitespace from
  // an email address and force all characters
  // to lower case
  const address = String( email ).trim().toLowerCase();

  // Create an MD5 hash of the final string
  const hash = md5( address );

  // Grab the actual image URL
  return `https://www.gravatar.com/avatar/${ hash }`;
}