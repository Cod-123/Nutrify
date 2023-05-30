// import React, { useState } from 'react';
// import axios from 'axios';

// function InputForm() {
//   const [height, setHeight] = useState('');
//   const [weight, setWeight] = useState('');
//   const [age, setAge] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios.post('http://localhost:5000/predict', {
//       height: height,
//       weight: weight,
//       age: age,
//     })
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="height">Height (in cm):</label>
//           <input
//             type="text"
//             id="height"
//             name="height"
//             value={height}
//             onChange={(e) => setHeight(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="weight">Weight (in kg):</label>
//           <input
//             type="text"
//             id="weight"
//             name="weight"
//             value={weight}
//             onChange={(e) => setWeight(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="age">Age:</label>
//           <input
//             type="text"
//             id="age"
//             name="age"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
// export default InputForm;


// import React, { useState } from 'react';
// import axios from 'axios';

// function InputForm() {
//   const [height, setHeight] = useState('');
//   const [weight, setWeight] = useState('');
//   const [age, setAge] = useState('');
//   const [result, setResult] = useState(null);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios.post('http://localhost:5000/predict', {
//       height: height,
//       weight: weight,
//       age: age,
//     })
//     .then(function (response) {
//       setResult(response.data);
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="height">Height (in cm):</label>
//           <input
//             type="text"
//             id="height"
//             name="height"
//             value={height}
//             onChange={(e) => setHeight(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="weight">Weight (in kg):</label>
//           <input
//             type="text"
//             id="weight"
//             name="weight"
//             value={weight}
//             onChange={(e) => setWeight(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="age">Age:</label>
//           <input
//             type="text"
//             id="age"
//             name="age"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       {result && (
//         <div>
//           <h2>Results:</h2>
//           <p>Calorie Intake: {result.calories}</p>
//           <p>Food Intake: {result.food_type}</p>
//           <p>Fat: {result.fat}</p>
//           <h3>Thank You! Have a nice day</h3>
//         </div>
//       )}
//     </div>
//   );
// }

// export default InputForm;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
// import './App.css';

// function InputForm() {
//   const [height, setHeight] = useState('');
//   const [weight, setWeight] = useState('');
//   const [age, setAge] = useState('');
//   const [result, setResult] = useState(null);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios.post('http://localhost:5000/predict', {
//       height: height,
//       weight: weight,
//       age: age,
//     })
//     .then(function (response) {
//       setResult(response.data);
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   }

//   return (
//     <Container>
//       <Row className="justify-content-center mt-5">
//         <Col md={6}>
//           <Card>
//             <Card.Header>
//               <h2 className="text-center">Enter Your Details</h2>
//             </Card.Header>
//             <Card.Body>
//             <Form style={{ backgroundColor: 'white' }} onSubmit={handleSubmit} >
//                 <Form.Group controlId="height">
//                   <Form.Label>Height (in cm):</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="height"
//                     value={height}
//                     onChange={(e) => setHeight(e.target.value)}
//                   />
//                 </Form.Group>
//                 <Form.Group controlId="weight">
//                   <Form.Label>Weight (in kg):</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="weight"
//                     value={weight}
//                     onChange={(e) => setWeight(e.target.value)}
//                   />
//                 </Form.Group>
//                 <Form.Group controlId="age">
//                   <Form.Label>Age:</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="age"
//                     value={age}
//                     onChange={(e) => setAge(e.target.value)}
//                   />
//                 </Form.Group>
//                 <div className="Button">
//                  <Button variant="primary" type="submit" block="true">Submit</Button>
//                  </div>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       {result && (
//         <Row className="justify-content-center mt-3">
//           <Col md={6}>
//             <Card>
//               <Card.Header>
//                 <h2 className="text-center">Results</h2>
//               </Card.Header>
//               <Card.Body>
//                 <p>Calorie Intake: {result.calories}</p>
//                 <p>Food Intake: {result.food_type}</p>
//                 <p>Fat: {result.fat}</p>
//                 <h3 className="text-center">Thank You! Have a nice day</h3>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       )}
//     </Container>
//   );
// }

// export default InputForm;

import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './App.css';

function InputForm() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/predict', {
      height: height,
      weight: weight,
      age: age,
    })
    .then(function (response) {
      setResult(response.data);
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <Card>
            <Card.Header>
              <h3 className="text-center">Input the Details to know your calorie Intake</h3>
            </Card.Header>
            <Card.Body>
              <Form style={{ backgroundColor: 'white' }} onSubmit={handleSubmit}>
                <Form.Group controlId="height">
                  <Form.Label>Height (in cm):</Form.Label>
                  <Form.Control
                    type="text"
                    name="height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="weight">
                  <Form.Label>Weight (in kg):</Form.Label>
                  <Form.Control
                    type="text"
                    name="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="age">
                  <Form.Label>Age:</Form.Label>
                  <Form.Control
                    type="text"
                    name="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" block className='form-button'>
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {result && (
        <Row className="justify-content-center mt-3">
          <Col md={6}>
            <Card>
              <Card.Header>
                <h2 className="text-center">Results</h2>
              </Card.Header>
              <Card.Body>
                <p>Calorie Intake: {result.calories}</p>
                <p>Food Intake: {result.food_type}</p>
                <p>Fat: {result.fat}</p>
                <h3 className="text-center">Thank You! Have a nice day</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default InputForm;
