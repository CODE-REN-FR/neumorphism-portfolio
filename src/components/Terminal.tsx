"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';


const Terminal: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [response, setResponse] = useState<string>('');
  const [displayedResponse, setDisplayedResponse] = useState<string>('');

 
  
  const commands: { [key: string]: string } = {
    '/hello': `<div>Bonjour !</div>`,
    '/help': 
      `<div>Liste des commandes disponibles...</div>`
    ,
    '/skills': `
      <div>
        <ul class="list-disc">
          <li class='specialhover plt'>Programming Languages and Technologies &gt;</li>
          <li class='specialhover st'>Software and Tools &gt;</li>
          <li class='specialhover ts'>Technical Skills &gt;</li>
          <li class='specialhover ss'>Soft Skills &gt;</li>
        </ul>
      </div>
    `,
    '/passions': `
      <div>
        <ul >
          <li class="underline"><strong>My passions :</strong></li>
          <br>
          <li>Sport (Tennis, Football)</li>
          <li>Electronics</li>
          <li>Programming</li>
          <li>Music</li>
          <li>Gaming</li>
        </ul>
      </div>
    `
  };

  
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      if (target && target.classList.contains('specialhover')) {
        if (target.classList.contains('plt')) {
          setResponse(`
            <div>
              <div class="flex">
                <ul class="mr-[5vw]">
                  <li class="underline"><strong>Programmation langages :</strong></li>
                  <br>
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>PHP</li>
                  <li>SQL</li>
                </ul>
                <ul>
                  <li class="underline"><strong>Frameworks :</strong></li>
                  <br>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>Next.js</li>
                  <li>MySQL</li>
                  <li>Tailwind CSS</li>
                  <li>Discord.js</li>
                </ul>
              </div>
              <div class="mt-[5vh] specialhover re ">Return to Skills &lt; </div>
            </div>
          `);
        } else if (target.classList.contains('st')) {
          setResponse(`
            <div>
              <ul>
                <li class="underline"><strong>Software and Tools :</strong></li>
                <br>
                <li>Visual Studio Code</li>
                <li>CodeSandbox</li>
                <li>GitHub</li>
                <li>Git</li>
                <li>Canva</li>
              </ul>
              <div class="mt-[5vh] specialhover re">Return to Skills &lt;</div>
            </div>
          `);
        } else if (target.classList.contains('ts')) {
          setResponse(`
            <div>
              <ul>
                <li class="underline"><strong>Technical Skills:</strong></li>
                <br>
                <li>Full-stack web development (front-end and back-end)</li>
                <li>Data analysis and visualization</li>
                <li>Database design and management</li>
              </ul>
              <div class="mt-[5vh] specialhover re">Return to Skills &lt;</div>
            </div>
          `);
        } else if (target.classList.contains('ss')) {
          setResponse(`
            <div>
              <ul>
                <li class="underline"><strong>Soft Skills:</strong></li>
                <br>
                <li>Complex problem-solving</li>
                <li>Teamwork</li>
                <li>Project management</li>
                <li>Perseverance</li>
                <li>Passion</li>
              </ul>
              <div class="mt-[5vh] specialhover re">Return to Skills &lt;</div>
            </div>
          `);
        }

        if (target.classList.contains('re') || target.classList[0] === 're') {
          console.log('re');
          setResponse(commands["/skills"]); // Assurez-vous que commands est défini
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [commands]);



  const generateHelpCommand = (commandsObj: { [key: string]: string }): string => {
    let commandList = '';
    Object.keys(commandsObj).forEach(command => {
        commandList += `<li class="mt-4">${command}</li>`;
    });
    return `<div>Liste des commandes : <ul>${commandList}</ul></div>`;
  };

  commands['/help'] = generateHelpCommand(commands);

  useEffect(() => {

    if (response) {

      
      let index = 0;
      const interval = setInterval(() => {

        if (index > response.length - 2) {
          
          clearInterval(interval);
          return;
        }


        if(index === 0) {

          setDisplayedResponse(response[index]);
        } else {

          setDisplayedResponse(prev => prev + response[index]);

        }

        index += 1;
        

      }, 10);
      return () => clearInterval(interval);
    }
  }, [response]);




  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const filteredCommands = Object.keys(commands).filter(command =>
      command.startsWith(value)
    );
    if (value === "") {
      setSuggestions([]);
    } else {
      setSuggestions(filteredCommands);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (commands[inputValue]) {
      setResponse(commands[inputValue]);
    } else {
      setResponse('Commande inconnue.');
    }
    setInputValue('');
    setSuggestions([]);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="flex rounded-[50px] bg-[#022B35] flex-col px-[3vw] py-[5vh] w-full relative">
      <div className="flex bg-[#DDDDD0] absolute rounded-t-[50px] h-[10%] w-full top-0 left-0">
        <div className="rounded-full bg-[#FF3131] h-[15px] w-[15px] top-4 left-[4%] absolute"></div>
        <div className="rounded-full bg-[#FFDE59] h-[15px] w-[15px] top-4 left-[6.5%] absolute"></div>
        <div className="rounded-full bg-[#3AC84D] h-[15px] w-[15px] top-4 left-[9%] absolute"></div>
      </div>
      <div className="arrow text-[green] absolute bottom-5 left-10 w-full">
        renan@yhuel ~ %
        <input
          autoFocus
          placeholder='Enter a command or /help for informations and press Enter ...'
          type="text"
          id="specialinput"
          autoComplete="off"
          className="border-none bg-[#022B35] specialinput"
          name="specialinput"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
        />
        <ul className="autocomplete-suggestions absolute bg-[#022B35] bottom-7 ">
          {suggestions.map(suggestion => (
            <li className="cursor-pointer" key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      </div>

      {displayedResponse && (
        <div
          className="response mt-10 text-[green]"
          dangerouslySetInnerHTML={{ __html: displayedResponse }}
        >

        </div>
      )}
    </div>
  );
}

export default Terminal;
