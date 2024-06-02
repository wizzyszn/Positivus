    
export default function Bubble({ testimony = {} }) {
  const { name = 'Anonymous', comment = 'No comment available', position = 'Unknown position' } = testimony;
  console.log("details: ", {
    name: name,
    comment: comment,
    position: position,
  });

  // Function to split text into lines
  const splitTextIntoLines = (text, maxLineLength) => {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    words.forEach(word => {
      if (currentLine.length + word.length + 1 <= maxLineLength) {
        currentLine += `${word} `;
      } else {
        lines.push(currentLine.trim());
        currentLine = `${word} `;
      }
    });

    lines.push(currentLine.trim());
    return lines;
  };

  const lines = splitTextIntoLines(comment, 60); // Adjust maxLineLength as needed

  return (
    <div className='relative'>
      <svg width="606" height="266" viewBox="0 0 606 266" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-inside-1_341_510" fill="white">
          <path fillRule="evenodd" clipRule="evenodd" d="M45 0C20.1472 0 0 20.1472 0 45V192.952C0 217.805 20.1676 237.952 45.0204 237.952H56.3613L83 266L109.639 237.952H560.979C585.832 237.952 606 217.805 606 192.952V45C606 20.1472 585.853 0 561 0H45Z"/>
        </mask>
        <path fillRule="evenodd" clipRule="evenodd" d="M45 0C20.1472 0 0 20.1472 0 45V192.952C0 217.805 20.1676 237.952 45.0204 237.952H56.3613L83 266L109.639 237.952H560.979C585.832 237.952 606 217.805 606 192.952V45C606 20.1472 585.853 0 561 0H45Z" fill="#191A23"/>
        <path d="M56.3613 237.952L57.0864 237.264L56.7907 236.952H56.3613V237.952ZM83 266L82.2749 266.689L83 267.452L83.7251 266.689L83 266ZM109.639 237.952V236.952H109.209L108.914 237.264L109.639 237.952ZM1 45C1 20.6995 20.6995 1 45 1V-1C19.5949 -1 -1 19.595 -1 45H1ZM1 192.952V45H-1V192.952H1ZM45.0204 236.952C20.7193 236.952 1 217.252 1 192.952H-1C-1 218.358 19.6159 238.952 45.0204 238.952V236.952ZM56.3613 236.952H45.0204V238.952H56.3613V236.952ZM83.7251 265.311L57.0864 237.264L55.6362 238.641L82.2749 266.689L83.7251 265.311ZM108.914 237.264L82.2749 265.311L83.7251 266.689L110.364 238.641L108.914 237.264ZM560.979 236.952H109.639V238.952H560.979V236.952ZM605 192.952C605 217.252 585.281 236.952 560.979 236.952V238.952C586.384 238.952 607 218.358 607 192.952H605ZM605 45V192.952H607V45H605ZM561 1C585.3 1 605 20.6995 605 45H607C607 19.5949 586.405 -1 561 -1V1ZM45 1H561V-1H45V1Z" fill="#B9FF66" mask="url(#path-1-inside-1_341_510)"/>
        <text x="50" y="50" fill="white" fontSize="18">
          {lines.map((line, index) => (
            <tspan key={index} x="50" dy={index === 0 ? 0 : 30}>{line}</tspan>
          ))}
        </text>
      </svg>
      <div className='absolute bottom-15 left-16 flex flex-col gap-3'>
        <h2 className=" text-2xl font-semibold">{name}</h2>
        <span>{position}</span>
      </div>
    </div>
  );
}
