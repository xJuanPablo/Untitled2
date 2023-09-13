import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_FOUNTAINS } from "../utils/queries";



// I want the user's near by fountains to auto-populate the bottom slide up
//TODO: Find certain radius of user to auto generate
// I want to retrieve the lat and lng from the google

import React from 'react'

const { loading, data } = useQuery(QUERY_FOUNTAINS);
const cards = data?.fountains || []

console.log(data)

const searchFountain = () => {

  fetch()
  return (
    <div>
      hi
    </div>
  )
}

export default searchFountain