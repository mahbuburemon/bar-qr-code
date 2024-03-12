// // App.js
// import React from 'react';
// import Barcode from 'react-barcode';

// function App() {
//   return (
//     <div className="App">
//       <h1>Generate Barcode in React.js</h1>

//       <div>
//         <h2>Code 128 Barcode Example</h2>
//         <Barcode value="123456789" />
//       </div>
//       <div>
//         <h2>Code 39 Barcode Example</h2>
       
//         <Barcode
//             value="123456789"
//             width={1}
//             height={40}
//             fontSize={12}
//             margin={10}
//             background="#f5f5f5"
//             lineColor="#000000"
//         />

//       </div>
//       <div className="container">
//       <Barcode value="123456789" format="CODE39" />
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import QRCode from 'qrcode.react';

function App() {
  return (
    <div className="App">
      <h1>Generate QR Code in React.js</h1>
      <QRCode
        value="123456"
        size={200}
        level={"H"}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
      />

    </div>
  );
}

export default App;


