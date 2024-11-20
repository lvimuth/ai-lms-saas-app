const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const courseOutlineAIModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate a study material for Atom and molecule for Exam and level of difficulty  will be easy with summary of course, List of Chapters along with summery  for each chapter, Topic list in each chapter and all result in  JSON format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "courseTitle": "Atoms and Molecules (Easy)",\n  "courseSummary": "This course provides a foundational understanding of atoms and molecules, covering their structure, properties, and basic interactions.  It\'s designed for beginners and focuses on fundamental concepts without delving into complex mathematical treatments.",\n  "chapters": [\n    {\n      "chapterTitle": "Introduction to Matter",\n      "chapterSummary": "This chapter introduces the basic states of matter (solid, liquid, gas) and explains the concept of atoms as fundamental building blocks.  It also touches upon the differences between pure substances and mixtures.",\n      "topics": [\n        "States of matter (solid, liquid, gas)",\n        "Physical and chemical changes",\n        "Pure substances vs. mixtures",\n        "Elements and compounds"\n      ]\n    },\n    {\n      "chapterTitle": "Atomic Structure",\n      "chapterSummary": "This chapter explores the internal structure of an atom, including protons, neutrons, and electrons.  It explains the concept of atomic number and mass number, and introduces isotopes.",\n      "topics": [\n        "Subatomic particles (protons, neutrons, electrons)",\n        "Atomic number and mass number",\n        "Isotopes and their properties",\n        "Atomic mass"\n      ]\n    },\n    {\n      "chapterTitle": "The Periodic Table",\n      "chapterSummary": "This chapter introduces the periodic table and its organization, explaining how elements are arranged based on their atomic number and properties.  It highlights groups and periods and their significance.",\n      "topics": [\n        "Organization of the periodic table",\n        "Periods and groups",\n        "Alkali metals, alkaline earth metals, halogens, noble gases",\n        "Trends in periodic properties (atomic size, ionization energy)"\n      ]\n    },\n    {\n      "chapterTitle": "Chemical Bonding",\n      "chapterSummary": "This chapter explains how atoms combine to form molecules through chemical bonding.  It focuses on ionic and covalent bonds as the primary types of bonding.",\n      "topics": [\n        "Ionic bonds (transfer of electrons)",\n        "Covalent bonds (sharing of electrons)",\n        "Lewis dot structures (simple molecules)",\n        "Polar and nonpolar molecules"\n      ]\n    },\n    {\n      "chapterTitle": "Molecular Formulas and Names",\n      "chapterSummary": "This chapter introduces the basic principles of writing and interpreting chemical formulas and naming simple compounds, focusing on common ionic and covalent compounds.",\n      "topics": [\n        "Chemical formulas",\n        "Naming ionic compounds",\n        "Naming covalent compounds",\n        "Writing formulas from names"\n      ]\n    },\n    {\n      "chapterTitle": "Introduction to Chemical Reactions (Basic)",\n      "chapterSummary": "This chapter provides a very basic introduction to chemical reactions, focusing on identifying reactants and products and balancing simple chemical equations.",\n      "topics": [\n        "Reactants and products",\n        "Balancing simple chemical equations (by inspection)",\n        "Types of chemical reactions (combination, decomposition - basic examples only)"\n      ]\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

//   const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//   console.log(result.response.text());
