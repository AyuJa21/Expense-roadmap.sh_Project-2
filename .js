const formatName = (fName, lName) => `${fName} ${lName}`;

const greeting = (Time) => {
  let time = Time;

  function setNum() {
    if (time == "morning") time = 8;
    else if (time == "afternoon") time = 14;
    else if (time == "evening") time = 18;
    else if (time == "night") time = 21;
  }

  setNum();

  switch (true) {
    case time >= 4 && time <= 12:
      return "Good morening";
      break;
    case time >= 13 && time <= 16:
      return "Good afternoon";
      break;
    case time >= 17 && time <= 19:
      return "Good evening";
      break;
    case time >= 20 && time <= 24:
      return "good night";
    default:
      return "Haven't made it yet, Sorry";
  }
};

const createGreeting = (fName, lName, Time) => {
  let Name = formatName(fName, lName);
  let Greet = greeting(Time);

  return `${Name}, ${Greet}`
}

console.log(createGreeting("Ayush", "Jadiya", 21));
