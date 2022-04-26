import React, { Component, useState } from 'react'

import JSONTree from 'react-json-tree'
import Uploader from "./Components/Uploader"



export default function App() {

  const [data, setData] = useState('');

  const childToParent = (childdata) => {
    setData(childdata);

    console.log("data",);
  }

  return (
    <div>


      <Uploader childToParent={childToParent} />

      <div className="result">
        <div class="result-wraper">
          <h2>Plain Tree</h2>

          <div className="result-container">


            <pre>
              {JSON.stringify(data, undefined, 4)}
            </pre>
          </div>
        </div>
        <div class="result-wraper">

          <h2>Collapsible Tree</h2>

          <div className="result-container">
            <JSONTree data={data} />
          </div>
        </div>

      </div>
    </div>
  )
}



