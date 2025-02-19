import React from 'react'

async function Usedata(url) {
 let response = await fetch(url);
 return await response.json();
}

export default Usedata
