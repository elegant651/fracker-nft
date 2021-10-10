const fs = require('fs');
const fetch = require('node-fetch');
const FormData = require('form-data');

export const mintingFileupload = (
    _path,
    _chain,
    _name,
    _description,
    _mintToAddress) =>
{

  const form = new FormData();
  const fileStream = fs.createReadStream(_path);
  form.append('file', fileStream);

  const options = {
    method: 'POST',
    body: form,
    headers: {
      "Authorization": "API-Key-Here",
    },
  };
  
  fetch("https://api.nftport.xyz/v0/mints/easy/files?" + new URLSearchParams({
    chain: _chain,
    name: _name,
    description: _description,
    mint_to_address: _mintToAddress,
  }), options)
    .then(function(response) { return response.json() })
    .then(function(responseJson) {
      // Handle the response
      console.log(responseJson);
    })
  
}
