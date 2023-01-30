import React from 'react'

import { Growl } from 'growl_lib'

const App = () => {
  // const active =1, setActive = 10;

  return <Growl message="Hello World!" dismissAfter={10000}/>
}

export default App
