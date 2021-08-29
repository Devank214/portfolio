const COMMANDS = {
  id:
    'uid=0(root) gid=0(root) groups=0(root)',
  help:
    'Commands: <span class="code">about</span>, <span class="code">edu</span>, <span class="code">skills</span>, <span class="code">xp</span>, <span class="code">contact</span>, <span class="code">resume</span>',
  about:
    "Hey! 👋<br>I'm Devank Gupta. I'm a Frontend Web Developer, Bug Bounty Learner, I live for challenging adventures with the intent of making myself productive, skilled person and also to face challenges in this era of modern advanced Web Developer and Hackers.",
  skills:
    '<span class="code">Languages:</span>  HTML, CSS, Bootstrap, TailWind CSS, Python, JavaScript, SQL, MySQL, C, C++, Basics Of Linux <br><span class="code">Technical:</span>Website Development, Kali Linux, Vulnerability Assessment, Content Writing<br><span class="code">Tools:</span> PostgreSQL, Xampp, Ubuntu, Git, Kali Linux, Burpsuite',
  edu:
    " Pursuing B-Tech From Poornima Institute of Engineering & Technology - Computer Science Engineering, 2019-20230<br> <br> ",
xp:
    "I am working as Junior Information Security Analyst at RiskSek.",
  resume:
     "<a href='./Devank_Gupta_Resume.pdf' class='success link'>resume.pdf</a>",
contact:
    "You can contact me on any of following links:<br><a href='https://www.linkedin.com/in/devank-gupta-1b28a3210/' class='success link'>LinkedIn</a> ,<a href='https://www.instagram.com/scripty.kid' class='success link'>Instagram</a>, <a href='https://twitter.com/DevankGupta19' class='success link'>Twitter</a>"
  };
let userInput, terminalOutput;

let prevInputs = [];
let lenUp = -1;

const app = () => {
    userInput = document.getElementById("userInput");
    terminalOutput = document.getElementById("terminalOutput");
    document.getElementById("dummyKeyboard").focus();
    console.log("Application loaded");
};

const execute = function executeCommand(input) {
    let output;
    input = input.toLowerCase();
    if (input.length === 0) {
        return;
    }
    output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
    if (!COMMANDS.hasOwnProperty(input)) {
        output += `<div class="terminal-line">no such command: ${input}</div>`;
        console.log("Oops! no such command");
    } else {
        output += COMMANDS[input];
    }

    terminalOutput.innerHTML = `${
        terminalOutput.innerHTML
        }<div class="terminal-line">${output}</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    userInput.innerHTML = input;
    prevInputs.push(input);
    lenUp = prevInputs.length - 1;
    document.getElementById('dummyKeyboard').value = ''
};

const key = function keyEvent(e) {

    const input = document.getElementById('dummyKeyboard').value;
    if (e.key === "Enter") {
        execute(input);
        userInput.innerHTML = "";
    }


};

const backspace = function backSpaceKeyEvent(e) {

    if (e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'ArrowUp' && e.key !== 'ArrowDown') {
        return;
    }

    if (e.key === 'ArrowUp' && lenUp !== -1) {
        document.getElementById('dummyKeyboard').value = prevInputs[lenUp];
        lenUp--;
        if (lenUp < 0)
            lenUp = prevInputs.length - 1;

        return;
    } else if (e.key === 'ArrowDown' && lenUp !== -1) {

        lenUp++;
        if(lenUp===prevInputs.length)
            lenUp=0;

        document.getElementById('dummyKeyboard').value = prevInputs[lenUp];

        return;

    }
    userInput.innerHTML = userInput.innerHTML.slice(
        0,
        userInput.innerHTML.length - 1
    );
};


document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);

//Code By Devank_Gupta
