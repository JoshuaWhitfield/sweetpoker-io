import React from "react";
import ReactDOM from 'react-dom'

export const openNewWindow = (cToRender) => {
    const openedWindow = window.open('', '_blank', 'width=400,height=400');
    if (!openedWindow) return null

    const width = 400;
    const height = 400;
    
    const windowDoc = openedWindow.document;
    const header = `
    <html>
        <head>
            <meta 
                charset="utf-8"
                name="description"
                content="Sweet Poker Live Table"
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <title>Sweet Poker Table --insert table name--<title>
        </head>
        <body>
    `
    windowDoc.write(header);
    windowDoc.write('       <div id="root"></div>');
    windowDoc.write('   </body>\n</html>');
    windowDoc.close();

    const rootElement = windowDoc.getElementById("root");
    rootElement.style.width = `${width}px`;
    rootElement.style.height = `${height}px`;

    ReactDOM.render(
        <React.StrictMode>
            {cToRender}
        </React.StrictMode>,
        rootElement
    );
    return openedWindow

}