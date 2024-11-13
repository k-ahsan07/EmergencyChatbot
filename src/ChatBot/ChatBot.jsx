// import { useState } from 'react';
// import axios from 'axios';
// import './chatbot.css'

// function App() {
//   const [ques, setQues] = useState("");
//   const [ans, setAns] = useState("");

//   // Function to sanitize input by removing asterisks
//   const sanitizeInput = (input) => input.replace(/\s*\*+\s*\*+/g, ''); // Remove asterisks

//   // Function to format response with numbering
//   const formatAnswer = (text) => {
//     const points = text.split('\n').filter(point => point.trim() !== ''); // Split by new lines and filter empty points

//     return points.map((point, index) => {
//       // const cleanPoint = point.replace(/^\s*[*]+|[*]+$/g, '').trim();
//       // const cleaned_text = text.replace("**", "").strip()
//         const cleanPoint = point.replace(/^\s*\*+|\*+$/g, '').replace(/\*\*/g, '').trim() // Remove leading asterisks and whitespace
//       return `${index + 1}. ${cleanPoint}`; // Number each point
//     }).join('\n'); // Join with newline for output
//   };


import { useState } from 'react';
import axios from 'axios';
import './chatbot.css';

function App() {
  const [ques, setQues] = useState("");
  const [ans, setAns] = useState("");

  // Function to sanitize input by removing asterisks
  const sanitizeInput = (input) => input.replace(/\s*\*+\s*\*+/g, ''); // Remove asterisks

  // Function to format response with numbering
  // const formatAnswer = (text) => {
  //   const points = text.split('\n').filter(point => point.trim() !== ''); // Split by new lines and filter empty points

  //   return points.map((point, index) => {
  //     const cleanPoint = point.replace(/^\s*\*+|\*+$/g, '').replace(/\*\*/g, '').trim(); // Remove leading asterisks and whitespace
  //     return `${index + 1}. ${cleanPoint}`; // Number each point
  //   }).join('\n'); // Join with newline for output
  // };
  // const formatAnswer = (text) => {
  //   const points = text.split('\n').filter(point => point.trim() !== ''); // Split by new lines and filter empty points
  
  //   return points.map((point) => {
  //     return point.replace(/^\s*\*+|\*+$/g, '').replace(/\*\*/g, '').trim(); // Clean up asterisks and whitespace
  //   }).join('\n'); // Join with newline for output
  // };
  // const formatAnswer = (text) => {
  //   const points = text.split('\n').filter(point => point.trim() !== ''); // Split by new lines and filter empty points
    
  //   return points.map((point, index) => {
  //     let cleanPoint = point.replace(/^\s*\*+|\*+$/g, '').replace(/\*\*/g, '').trim(); // Clean up asterisks and whitespace
  //     // Add conversational framing to each point
  //     if (index === 0) {
  //       cleanPoint = `911 Operator: "${cleanPoint}`;
  //     } else {
  //       cleanPoint = `\n${cleanPoint}`;
  //     }
  //     return cleanPoint;
  //   }).join('\n') + '"'; // Conclude with a closing quote to mimic dialogue style
  // };
  // const formatAnswer = (text) => {
  //   const points = text.split('\n').filter(point => point.trim() !== ''); // Split by new lines and filter empty points
    
  //   return points.map((point, index) => {
  //     let cleanPoint = point.replace(/^\s*\*+|\*+$/g, '').replace(/\*\*/g, '').trim(); // Clean up asterisks and whitespace
  //     // Add conversational framing to each point
  //     if (index === 0) {
  //       cleanPoint = `EmergiVoice Operator: "${cleanPoint}`;
  //     } else {
  //       cleanPoint = `\n${cleanPoint}`;
  //     }
  //     return cleanPoint;
  //   }).join('\n') + '"'; // Conclude with a closing quote to mimic dialogue style
  // };



  // Function to format response in a conversational way without numbering
  const formatAnswer = (text) => {
    const points = text.split('\n').filter(point => point.trim() !== ''); // Split by new lines and filter empty points

    return points.map((point) => {
      return point.replace(/^\s*\*+|\*+$/g, '').replace(/\*\*/g, '').trim(); // Clean up asterisks and whitespace
    }).join('\n'); // Join with newline for output
  };



  // Function to check if the question is relevant to emergencies
  const isRelevantQuestion = (question) => {
    const keywords = [
      'gas leak',
      'gas emergency',
      'smell of gas',
      'gas detector',
      'evacuate area',
      'gas shut-off',
      'explosion risk',
      'emergency services',
      'carbon monoxide',
      'ventilate area',
      'natural gas',
      'propane leak',
      'leak detection',
      'emergency protocol',
      'gas line repair',
      'chemical exposure',
      'safety warning',
      'hazardous gas',
      'first aid for gas',
      'flammable gas',
      'fire',
      'fire safety',
      'fire emergency',
      'fire alarm',
      'fire extinguisher',
      'fire evacuation',
      'fire drill',
      'firefighter',
      'flames',
      'smoke',
      'burn',
      'wildfire',
      'controlled burn',
      'fire department',
      'fire report',
      'fire hazard',
      'smoke detector',
      'fire escape',
      'combustion',
      'arson',
      'flood emergency',
      'water rescue',
      'flood warning',
      'tsunami alert',
      'drowning emergency',
      'safety',
      'water',
      'accident',
      'natural disaster',
      'police',
      'crime',
      'wildfire preparedness',
      'burn safety',
      'community fire safety',
      'firefighter support',
      'emergency police contact',
      'crime reporting',
      'personal safety',
      'victim support',
      'missing person',
      'neighborhood watch',
      'traffic accident',
      'emergency preparedness',
      'law enforcement',
      'police escort',
      'emergency medical',
      'mental health',
      'active shooter',
      'crisis communication',
      'public health alerts',
      'community resource locator',
      'police emergency',
      'call police',
      'report crime',
      'crime in progress',
      'police assistance',
      'active shooter',
      'emergency police contact',
      'suspicious activity',
      'neighborhood watch',
      'assault report',
      'burglary alert',
      'theft report',
      'harassment',
      'missing person',
      'victim support',
      'threats',
      'traffic accident',
      'domestic violence',
      'trespassing',
      'emergency response',
      'help',
      'emergency',
      'alert',
      'danger',
      'sos',
      'rescue',
      'ambulance',
      'urgent',
      'first aid',
      'hazard',
      'evacuate',
      '911',
      'support',
      'medic',
      'shelter',
      'storm',
      'security',
      'accident',
      'report',
      'assistance',
      'evacuation',
      'survival',
      'warning',
      'threat',
      'protect',
      'outage',
      'quarantine',
      'shelter in place',
      'emergency contact',
      'response',
      'aid',
      'disaster',
      'life-threatening',
      'injury',
      'prevention',
      'check-in',
      'tsunami'
    ];
  

    return keywords.some(keyword => question.toLowerCase().includes(keyword));
  };

//   async function generateAnswer() {
//     const sanitizedQues = sanitizeInput(ques);
//     setAns("Loading ...");

//     if (!isRelevantQuestion(sanitizedQues)) {
//       setAns("Please ask a question related to fire emergencies, police emergencies, or related topics.");
//       return;
//     }

//     try {
//       const response = await axios({
//         url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBbOlasG3VAcqFwFfKwREv6R1_kLe9cwWE",
//         method: "post",
//         data: {
//           contents: [
//             {
//               parts: [
//                 {
//                   text: sanitizedQues,
//                 },
//               ],
//             },
//           ],
//         },
//       });

//       // Get the response text
//       const answerText = response.data.candidates[0].content.parts[0].text;
//       const formattedAnswer = formatAnswer(answerText); // Format the answer
//       setAns(formattedAnswer); // Set the formatted answer
//     } catch (error) {
//       console.error("Error generating answer:", error);
//       setAns("Error generating answer. Please try again.");
//     }
//   }

//   return (
//     <div className="homepage">
//       <div className="left1">
//         <h1 className='heading'>EmergiChatBot</h1>
//         <textarea className='question'
//           value={ques}
//           onChange={(e) => setQues(e.target.value)}
//           name="text"
//           rows="10"
//         />
//         <button onClick={generateAnswer}>Generate Answer</button>
//       </div>
//       <div className="right1">
//         <pre>{ans}</pre> {/* Render the formatted answer */}
//       </div>
//     </div>
//   );
  
// }

// export default App;



async function generateAnswer() {
  const sanitizedQues = sanitizeInput(ques);
  setAns("Loading ...");

  if (!isRelevantQuestion(sanitizedQues)) {
    setAns("Please ask a question related to fire emergencies, police emergencies, or related topics.");
    return;
  }

  try {
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBbOlasG3VAcqFwFfKwREv6R1_kLe9cwWE",
      method: "post",
      data: {
        contents: [
          {
            parts: [
              {
                text: sanitizedQues,
              },
            ],
          },
        ],
      },
    });

    // Get the response text
    const answerText = response.data.candidates[0].content.parts[0].text;
    const formattedAnswer = formatAnswer(answerText); // Format the answer
    setAns(formattedAnswer); // Set the formatted answer
  } catch (error) {
    console.error("Error generating answer:", error);
    setAns("Error generating answer. Please try again.");
  }
}

return (
  <div className="homepage">
    <div className="left1">
      <h1 className='heading'>EmergiChatBot</h1>
      <textarea className='question'
        value={ques}
        onChange={(e) => setQues(e.target.value)}
        name="text"
        rows="10"
      />
      <button onClick={generateAnswer}>Generate Answer</button>
    </div>
    <div className="right1">
      <h2>Response:</h2>
      <pre>{ans}</pre> {/* Render the formatted answer */}
    </div>
  </div>
);
}

export default App;