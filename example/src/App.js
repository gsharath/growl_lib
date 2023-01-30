import React from 'react'

import { Growl, useGrowl } from 'growl_lib'
// import 'growl_lib/dist/index.css'

const App = () => {
  // const active =1, setActive = 10;

  return <Growl message="Hello World!" dismissAfter={10000}/>
}

export default App
