import React, { useState } from 'react';
export default function Child({ childToParent }) {

        const [text, setText] = useState("");



        function onChange(event) {

                var file = event.target.files[0];
                var reader = new FileReader();
                reader.onload = function (event) {

                        var parseString = require('xml2js').parseString;
                        var data = ""
                        parseString(event.target.result, function (err, result) {
                                setText(result);
                        });
                };

                reader.readAsText(file);


        }

        function onClick(event) {
                event.preventDefault();
                childToParent(text)
        }


        return (
                <div className='uploader'>
                        <form>
                                <h1>Upload an XML File</h1>

                                <input type="file" onChange={onChange} />




                                <button onClick={onClick}>Show the info</button>

                        </form>
                </div>
        );
}
