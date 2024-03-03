const receiverCallSign = '';
const senderCallSign = '';

const alphabet = {
    a: 'alpha',
    b: 'bravo',
    c: 'charlie',
    d: 'delta',
    e: 'echo',
    f: 'foxtrot',
    g: 'golf',
    h: 'hotel',
    i: 'india',
    j: 'juliet',
    k: 'kilo',
    m: 'mike',
    n: 'november',
    o: 'oscar',
    p: 'papa',
    q: 'quebec',
    r: 'romeo',
    s: 'sierra',
    t: 'tango',
    u: 'uniform',
    v: 'victor',
    w: 'whiskey',
    x: 'x-ray',
    y: 'yankee',
    z: 'zulu',
};
const numbers = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero',
};

const radioCommands = [
    ['ROGER', 'Message received and understood'],
    ['SITREP', 'Situation report'],
    ['MAYDAY', 'Emergency Call'],
    ['OUT', 'Message complete, do not reply'],
    ['OVER', 'Message complete, expecting reply'],
    ['SAY AGAIN', 'Repeat message'],
    ['I SAY AGAIN', 'I repeat my message'],
    ['RELAY TO', 'Pass on message to'],
    ['ABBREVIATED CALL', 'Unofficial domestic call signs used by individuals or companies'],
    ['CALL SIGN', 'Call sign reflecting on radio license of a company'],
];
const radioHandling = {
    positive: [
        'Keep radio/control room secured',
        'Use radio to transmit only official messages',
        'Handle radio with care',
        'Treat radio as technical equipment',
    ],
    neative: [
        `Don't using abusive language over radio`,
        `Don't play music in background`,
        `Don't occupy airwaves with unnecessary messages`,
        `Don't expose the radio to extreme conditions (sun, heat, water, dust)`,
    ],
};
const radioChecks = [
    'Antenna',
    'Battery',
    'Channel',
    'Condition of radio',
    'Switch',
    'Squelch',
    'Radio number',
    'Volume',
];
const radioProcedure = {
    keyWords: [
        {
            name: 'BASS',
            detail: [
                ['Brief', 'Message must be brief and only contain important facts'],
                ['Accurate', 'Details must be given clear and accurate'],
                ['Security', 'Never transmit classified information unless disguised'],
                ['Speed', 'Do not rush the message, but brief and concise'],
            ],
        },
        {
            name: 'RSVP',
            detail: [
                ['Rhythm','Use short phrases with pauses'],
                ['Speed','Remember the receiver may want to write down the message'],
                ['Volume','Do not shout, but speak slightly louder'],
                ['Pitch','Pitch your voice a bit higher than normal'],
            ],
        },
    ],
    principles: [
        'Discipline',
        'Voice procedure',
        'Transmission of message',
        'Speed and accuracy',
        'Tact',
        'Patience',
        'Courtecy',
        'Confidence',
        'Incoming Calls',
        'Dial Mechanism',
        'Dailing Methods',
    ],
    process: {
        habits: [
            'Wait for a break in air traffic, unless under emergency',
            'Establish contact',
            'Send the message',
            'End Contact',
        ],
        opening: [
            'Identify receiver and sender (yourself)',
            `${receiverCallSign} this is ${senderCallSign}`,
            'Communicates that the sender, who should be locatable, closed the channel for all users, unless under emergency conditions',
        ],
        sending: [
            `End individual instructions with 'OVER'`,
            'Communicates that the channel should be treated as closed, unless under emergency conditions',
        ],
        ending: [
            `End communication with 'OUT'`,
            'Communicates to all radio users that channel is once again open',
        ],
    },
};

const signage = {
    general: {
        shape: 'square',
        background: 'green',
        border: '',
        picture: 'white',
        desc: 'Gives general information on directional arrows, emergency exits and First Aid signs'
    },
    fire: {
        shape: 'square',
        background: 'white',
        border: 'red',
        picture: 'red',
        desc: ' Gives information about location of any type of firefighting equipment found on the premises',
    },
    warning: {
        shape: 'triangle',
        background: 'yellow',
        border: 'black',
        picture: 'black',
        desc: 'Warns against dangerous situations on the premises',
    },
    mandatory: {
        shape: 'circle',
        background: 'blue',
        border: '',
        picture: 'white',
        desc: 'Legal requirements, prescribing use of protective clothing',
    },
    prohibitory: {
        shape: 'circle',
        background: 'white',
        border: 'red',
        picture: 'red',
        desc: 'Prohibits / prevents doing certain activities on some places of the premises',
    },
}

const classesOfFire = [
    {
        class: 'A',
        type: 'Combustible solids',
        detail: [
            'Fires involving solid, everyday combustible material'
        ],
        examples: [
            'coal',
            'wood',
            'paper',
            'plastics',
            'textiles',
        ]
    },
    {
        class: 'B',
        type: 'Flammable liquids',
        detail: [
            'Fires involving flammable liquids and greases',
        ],
        examples: [
            'alcohol',
            'paraffin',
            'benzene',
            'petroleum',
        ]
    },
    {
        class: 'C',
        type: 'Electrical',
        detail: [
            'Class A, B, C and E fires occuring in the presence of live electrical installations',
        ],
        examples: [
            'generators',
            'electrical cables',
            'switchboards',
        ]
    },
    {
        class: 'D',
        type: 'Combustible metals',
        detail: [
            'Fires involving metals',
        ],
        examples: [
            'aluminium',
            'titanium',
            'magnesium',
            'lithium',
            'zirconium',
            'sodium',
            'potassium',
        ]
    },
    {
        class: 'E',
        type: 'Flammable gasses',
        detail: [
            'Fires involving leaking gasses',
        ],
        examples: [
            'methane',
            'butane',
            'propane',
        ]
    },
];
const typesOfFireExtinguisher = [
    {
        type: 'Water or APW (Air Pressurized Water extinguishers)',
        color: 'Red',
        varieties: [
            'Soda Acid',
            'Gas Cartrige',
            'Stored Pressure'
        ],
        effect: [
            'Quenching',
            'Cooling',
        ],
        details: [
            'Activates when striker on top is hit',
            'Contains ~9l water',
            'Marked with a letter A',
            'Soda Acid phased out due to impracticality',
        ],
        operation: [
            'Effective range for the 9l unit is 4m to 7m',
            'Pressurised with air or unit specific gas',
            'Released through chuck tyre valve triggered by clamp on top',
            'Fitted with pressure gague indicating state of usability',
            'Stored and used in upright position, unless the unit is a turn-over type',
            'Start extinguishing by pressing the clamp on top',
            'Stop extinguishing by releasing the clamp once the fire is subdued',
            'Open up site of fire to reveal additional potential embers and douse the area more until the fire is completely extinguished',
            'When using non-controllable units, the operator should be aided to clear the debris',
        ],
        efficacyByFireClass: {
            suitable: [
                'A',
            ],
            unsuitable: [
                'B',
                'C',
                'D',
                'E',
            ],
            ineffective: [
                '',
            ],
        }
    },
    {
        type: 'Vaporizing Liquid (Foam)',
        color: 'Cream',
        varieties: [
            '',
        ],
        effect: [
            'cooling',
            'starves fire of oxygen',
        ],
        details: [
            'Most suitable for Class B (liquid or grease) fires',
            'Alternatively suitable for Class A (standard combustible), C (Electrical) and E (gas) fires',
        ],
        operation: [
            'Effective range is 4m to 5m',
            'Direct the jet to the most enclosed area of the burning container',
            'The foam build over the liquids and coat the liquid in the retardent foam',
        ],
        efficacyByFireClass: {
            suitable: [
                'A',
                'B',
            ],
            unsuitable: [
                'C',
                'D',
                'E',
            ],
            ineffective: [
                '',
            ],
        }
    },
    {
        type: 'Dry chemical powder',
        color: 'Blue',
        effect: [
            'Interferes with chemical reactions inside flame',
        ],
        details: [
            'Most suitable for Class A (standard combustible material), B (liquid and gas), C (Electrical) and E (Gas) fires',
            'Varies in type of chemical powder appropriate to class',
            'Sizes between 1kg and 14kg',
            'Stored pressure or cartrige varieties (same as water alternatives)',
        ],
        operation: [
            'Effective range of 9kg unit is 4m to 5m',
            'Extinguish from afar and move closer as powder spreads and flames abate',
            'Point nozzle rapidly from side to side, like watering a garden',
            'Do not point nozzle at liquid as this would push liquid elsewhere, further spreading the fire',
            'For electrical fires, try to get the fog penetrating housings and covers and extinguish flames inside',
            'For gas fires, point the nozzle into the flames from and in direction of originating leak',
        ],
        efficacyByFireClass: {
            suitable: [
                'A',
                'B',
                'C',
                'E',
            ],
            unsuitable: [
                '',
            ],
            ineffective: [
                'D',
            ],
        }
    },
    {
        type: 'CO<sub>2</sub> Carbon dioxide',
        color: 'Black',
        effect: [
            'Displaces oxygen',
            'Non-conductive',
            'Temporary cooling caused by gas',
        ],
        details: [
            'Most suitable for Class C (electrical) fires',
            'Sizes between 2kg and 9kg',
        ],
        operation: [
            'Effective range up to 3m',
            'Most effective when used up close to the fire, so take care',
            'For electrical fires, try to get the fog penetrating housings and covers and extinguish flames inside',
            `Windy conditions are detrimental to it's effectiveness`,
        ],
        efficacyByFireClass: {
            suitable: [
                'B',
                'C',
                'E',
            ],
            unsuitable: [
                'A',
                'D',
            ],
            ineffective: [
                '',
            ],
        }
    },
    {
        type: 'Dry Powder',
        color: 'Blue',
        effect: [
            '',
        ],
        efficacyByFireClass: {
            suitable: [
                'B',
                'C',
                'D',
            ],
            unsuitable: [
                'A',
                'E',
            ],
            ineffective: [
                '',
            ],
        }
    },
    {
        type: 'Wet Chemical',
        color: 'Green',
        effect: [
            '',
        ],
        efficacyByFireClass: {
            suitable: [
                'K',
            ],
            unsuitable: [
                'A',
                'B',
                'C',
                'D',
                'E',
            ],
            ineffective: [
                '',
            ],
        }
    },
    {
        type: 'BCF (Bromochlorodifluoromethane)',
        color: 'Orange (Green)',
        effect: [
            'Interrupts combustion by chemically reacting with fire',
            'Displaces Oxygen from the area, thereby depriving the fire',
            'Heat absorbant, therefor has a cooling effect, thereby reducing further particle agitation',
            'Is non-conductive',
            'Being phased out',
        ],
        efficacyByFireClass: {
            suitable: [
                'A',
                'B',
                'C',
                'E',
            ],
            unsuitable: [
                'D',
            ],
            ineffective: [
                '',
            ],
        }
    },
];

const legislation = {
    act92: {
        name: 'Security officers act 92 of 1987',
        definition: [
            'A service or reward rendered by a person yo another by...',
            [
                'Declaring him/herself available for protection, body guarding or safekeeping of people, assets and property as agreed verbally or contractually with another party',
                'Providing such a party with knowledge and skills concerning protection, safe guarding or security measures of people and property',
            ],
        ],
        sections: [
            {
                number: '11',
                name: 'Registration',
                details: [
                    'Natural person',
                    'Juristic person (company, corporation, etc.)',
                    'Members, executive and directors of companies, close corporation',
                    '18 years or older',
                    'South Afican Citizen',
                    'Permanent residence in South Africa',
                ],
                procedure: [
                    '',
                ],
                excemptions: [
                    '',
                ],
            },
            {
                number: '12',
                name: 'Disqualification',
                details: [
                    'Non-natural person',
                    'Found guilty of an offence specified in the schedule to this Act pre or post Act commencement',
                    'Found guilty of improper conduct under section 20',
                    'Of unsound mind as declared by competent court of law',
                    'Under 18 years of age',
                ],
                procedure: [
                    '',
                ],
                excemptions: [
                    'By permissionof PSIRA Board',
                ],
            },
        ],

    },
    act56: {
        name: 'PSIRA act 56 of 2001',
        definition: [
            '',
            [
                '',
            ],
        ],
        sections: [
            {
                number: '15 (1) (a)',
                name: `Conditions under which a security officer's registration form can be withdrawn`,
                details: [
                    'If a security officer gives false information in connection with his application for registration',
                    'If a security officer is found guilty of improper conduct',
                    'If a security officer is found guilty of an offence specified in the schedule to this act',
                    'If a security officer is found of unsound mind and has been declared as such by a competent court of law',
                ],
                procedure: [
                    'The Board shall not withdraw the registration of a security officer unless on the authority of a resolution of the board taken at least by six (6) members of the Boardpresent at a meeting of the Board',
                ],
                excemptions: [
                    '',
                ],
            },
            {
                number: '18',
                name: 'Payment of annual amounts',
                details: [
                    'Every person registered as a security officer shall annually or before a prescribed date pay to the Board a prescribed amount.',
                    'If the security officer fails, the Board may suspend his registration, until the amount is paid.',
                    `If not received within 3 months the Board may withdraw the security officer's registration.`,
                ],
                procedure: [
                    '',
                ],
                exemptions: [
                    '',
                ],
            },
        ],
    },
    act72: {
        act: 'Intimidation Act 72 of 1982',
        definition: [
            'This Act prohibits conduct whereby persons intimidate others to conduct themselves in a certain way',
            [
                'Not joining a strike',
                'Not to support a stand taken by Government',
                'Not to give evidence in court',
                'etc.',
            ]
        ],
        sections: [
            {
                number: '1',
                name: 'Conditions for intimidation',
                details: [
                    'A person who -',
                    {
                        a: [
                            'Without lawful reason and with intent to compel or induce any person or persons of a particular nature, class or kind or persons in general to do or abstain from doing any act or to assume or to abandon a particular standpoint-',
                            {
                                i: 'assaults, injuries or causes to any person or',
                                ii: 'in any manner threatens to kill, assault, injuries or cause damage to any person or persons of a particular nature, class or kind; or',
                            }

                        ],
                        b: [
                            'Acts or conducts himself in such a manner or utters or publishes such words that it has or they have the effect, or that it might reasonably be expected that the natural and probable consequences thereof would be to the person perceiving the act, conduct, utterance or publication-',
                            {
                                i: 'Fears for their own safety or the safety of their property or the security of their livelihood, or for the safety of the property of any other person or the security of the livelihood of any other person',
                                ii: 'Shall be guilty of an offence and liable on conviction to a fine not exceeding R40, 000 or to imprisonment for a period not exceeding ten years or to both such',
                            },
                        ],
                    },
                ],
                procedure: [
                    '',
                ],
                exemptions: [
                    '',
                ],
            },
        ],
    },
    act51: {
        act: 'Criminal Procedure Act 51 of 1977',
        definition: [
            '',
        ],
        sections: [
            {
                number: '20',
                name: 'State may sieze certain articles',
                details: [
                    'Searches and seizures',
                    {
                        a: [
                            'Search',
                            {
                                i: 'A search is done in respect of persons, vehicles, containers or premesis',
                                ii: 'It consists of a physical search of a person, vehicle, containers or premesis with the intention to prevent crime or prosecute offenders',
                            },
                        ],
                        b: [
                            'Seizure',
                            {
                                i: 'Taking into posession objects with or without the permission of the lawful owner',
                                ii: {
                                    included: [
                                        'Articles concerned in the commission of a crime',
                                        'Articles intended to be used in the commission of the crime',
                                        'Articles that can afford evidence in a court of law',
                                    ],
                                },
                            },
                        ],
                    },
                ],
                procedure: [
                    '',
                ],
                exemptions: [
                    '',
                ],
            },
            {
                number: '42',
                name: 'Powers Of Arrest',
                details: [
                    'A security officer or private person may arrest anyone-',
                    [
                        'who commits a crime',
                        'who attempts to commit a crime',
                        'who flees from a crime scene',
                        'who they suspect to have committed any schedule one offence',
                        'involved in an affray or fight',
                    ],
                ],
                procedure: [
                    '',
                ],
                exemptions: [
                    '',
                ],
            },
            {
                number: '39',
                name: 'Lawful ways to arrest',
                details: [],
                procedure: [
                    'Arrest with or without a warrant',
                    'Identify yourself',
                    'Inform the person that they are being arrested',
                    'Give reasons for the arrest',
                    'Read them their rights',
                    'Request them to commit themselves into custody',
                    'If they submit themselves to custody, the arrest is completed',
                    'If they refuse to submit to custody or if they run away or flee, apply restraining force to effect the arrest',
                    `Don't question or interrogate the suspect`,
                    'Suspect must be handed over to the SAPS',
                ],
                exemptions: [
                    '',
                ],
            },
            {
                number: '49',
                name: 'When and how may force be applied in arresting a suspect',
                details: [
                    'When a suspect resists arrest',
                    'When the suspect flees or runs away from being arrested',
                    'The force applied must be reasonable and minimal',
                ],
                procedure: [
                    '',
                ],
                exemptions: [
                    '',
                ],
            },
            {
                number: '50',
                name: 'Procedures that have to be followed after arrestin a suspect',
                details: [],
                procedure: [
                    'The arrested must be handed over to SAPS as soon as possible',
                    'The arrested must be protected',
                    'The arrested must not be questioned',
                    'The arrested must be sent to the Police Station by the Security Officer',
                    'There must be no delay in handing over the arrested to the Police',
                    'A delay can render the arest unlawful and the arrested may use force to free themselves',
                ],
                exemptions: [
                    '',
                ],
            },
        ],
    },
    act59: {
        act: 'Criminal Law Amendment Act 59 of 1983',
        definition: [
            'Intends to amend the Tresspass Act 6 of 1959, so as to increase the penalties for contravention of the said Act',
            'To amend the Stock Theft Act of 1959 in various ways',
            'To amend the General Law amendment Act of 1972 so as to delete an obsolete provision',
            'To amend the Criminal Procedure act of 1977 in various ways',
            'Prohibition of entry or presence upon land or property of or in a building or property in certain circumstances, and to provide for matters incidental thereto',
            [
                `Entering another's property or premesis without the consent or permission of the lawful occupier or person in charge`,
            ],
        ],
        sections: [
            {
                number: '',
                name: 'Penalties',
                details: [
                    {
                        violator: 'natural or non-natural person',
                        penalties: [
                            'Fine of R2, 000',
                            'Imprisonment not exceeding 2 years',
                            'Fine and inprisonment',
                        ],
                    },
                    {
                        violator: 'Security Officer',
                        penalties: [
                            'Registration suspended',
                            'Registration withdrawn',
                            'Fined R1, 000',
                            'Reprimanded',
                        ],
                    }
                ],
                procedure: [
                    '',
                ],
                exemptions: [
                    '',
                ],
            },
        ],
    },
    act: {
        act: '',
        definition: [
            '',
            [
                '',
            ]
        ],
        sections: [
            {
                number: '',
                name: '',
                details: [
                    '',
                    {
                        a: [
                            '',
                            {
                                i: '',
                            },
                        ],
                    },
                ],
                procedure: [
                    '',
                ],
                exemptions: [
                    '',
                ],
            },
        ],
    },
};
const scheduleOneOffences = [
    {
        name: 'High Treason',
        description: 'Intentionally and unlawfully attempting to overthrow, coerce or endanger the exitence, independence or safety of a government to which one owes allegiance',
    },
    {
        name: 'Sedition',
        description: 'Unlawfully or intentionally in co-operation with other people offering resistance or challenging the authority of the state',
    },
    {
        name: 'Public violence',
        description: 'The unlawful and intentional performance of an act or acts by a group of people disturbing the peace, order and infringing the rights of another by violent means',
    },
    {
        name: 'Murder',
        description: 'The unlawful and intentional killing of a human being',
    },
    {
        name: 'Culpable homocide',
        description: `The unlawful and negligent causing  of another human being's death`,
    },
    {
        name: 'Rape',
        description: 'The unlawful and intentional forcing of a person to submit to sexual intercourse (whether vaginal, oral or anal) against their will',
    },
    {
        name: 'Indecent assault',
        description: 'The unlawful and intentional assaulting of another with the intent of committing an indecent act',
    },
    {
        name: 'Kidnapping',
        description: `The unlawful and intentional deprivation of one's freedom of movement and/or of a child depriving of a parent's control over the child`,
    },
    {
        name: 'Assault (GBH - Grievous Bodily Harm)',
        description: 'The unlawful and intentional application of direct or indirect force to the body of another person with the intent of causing harm and wounds',
    },
    {
        name: 'Arson',
        description: 'The unlawful and intentional damaging of an immovable structure for human occupation or property by setting fire to it with the intention to prejudice another',
    },
    {
        name: 'Malicious injury to a property',
        description: 'Unlawful or intentional damaging or destruction of the property of another or his own with the intent of claiming insurance',
    },
    {
        name: 'Theft',
        description: 'The unlawful or intention appropriation of a property belonging to another or to themselves but in respect of somebody else having a right of possession',
    },
    {
        name: 'Robbery',
        description: 'The unlawful, intentional and forceful removal and appropriation of a property belonging to another',
    },
    {
        name: 'Fraud',
        description: 'The unlawful or intentional distortion of the truth made with the intent to deceive and resulting in actual or potential prejudice to another',
    },
    {
        name: 'Forgery',
        description: 'The unlawful or intentional making of a false document or written instrument calculated to result in actual or potential prejudice to another',
    },
    {
        name: 'Breaking and entering',
        description: 'The unlawful and intentional removal or displacement of a part of a building or structure and entering, penetrating with part or the whole of the body or an instrument with the intent of committing a crime on the premesis',
    },
    {
        name: 'Sodomy',
        description: 'Non-penile-vaginal sexual activity',
        note: [
            'Fucking stupid to see this as a Schedule One offence.',
            'The domain of prudish, sheltered and orthodox religious people.',
        ],
    },
    {
        name: 'Beastiality',
        description: 'Sexual activity with an animal',
    },
];

const grades = {
    gradeE: {
        name: 'Patrol Officer',
        module1: {
            name: 'Personal Hygiene and General Appearance',
            basic: [
                'Personal cleanliness - a security officer must be clean at personal level',
                'Always wear clean clothes',
                'Avoid smoking',
                'Avoid spitting in public',
                'Spitting in the public is one of the most despicable acts done by a human being',
                'Have enough sleep',
                'Rest enough',
                'Shave regularly',
                'The skin must be washed regularly',
                'The skin provides the body with protection against pollution and impurities and should be protected through continuous cleaning',
                'Keep hair short and tidy',
                'Exercise regularly',
                'Take care of feet by regularly washing it',
                'Socks must be washed constantly',
                'The security officer should wear a clean pair of socks every day',
                'Keep shoes clean and well-polished',
                'Bath at least twice a day',
                'Brush your teeth regularly',
                'Have enough fresh air',
                'Eat a balanced diet',
                'Keep hands clean - Wash them before eating',
                'The fingernails must be short and clean',
                'Have good habits',
                'Have a clean mind (a sound mind in a sound body )',
            ],
            clothing: 'Remove odours and smells and promotes health',
            body: {
                hair: [
                    'Keeping the hair clean and short avoids sores, pimples and prevents the blocking of the pores which facilitate the removal of waste products',
                ],
                hands: [
                    'Washing of hands before meals and handling foods avoid spreading of diseases',
                ],
                teeth: [
                    'Cleaning of teeth regularly prevents germs from accumulating between the teeth',
                ],
                feet: [
                    'Feet must always be clean',
                    'Clean socks must be worn to avoid feet getting inflamed and smelly',
                ],
                fingernails: [
                    'Nails should be short and clean. Dirty nails carry germs that can contaminate our foods and cause diseases',
                ],
            },
            bathing: [
                'twice daily',
                'To keep our skins free from perspiration and other undesirable particles from the environment that settle on our skins when at work',
            ],
            exercise: [
                'Exercising has a great bearing on our health',
                'It helps the security officer to be fit',
                'It helps the security officer to look smart',
                'It could be in the form of running, walking, climbing, and riding',
                'In exercising fresh air is inspired',
                'Exercising eliminates carbonic acid in your system',
                'Our blood circulation is enhanced',
                'Exercising induces perspiration',
            ],
        },
        module2: {
            name: 'Basic Occupational Safety',
            accident: [
                'An accident is defined as an undesirable event caused by unsafe acts and unsafe conditions resulting in damage to property or injury to people',
                'Accidents do not just happen',
                'They are caused by people acting in an unsafe way or resulting from an unsafe condition which has not been attended to',
            ],
            causes: [
                'Lack of knowledge',
                'Physical or mental defect',
                'Improper attitude',
                'Inadequate work standards',
                'Unsafe conditions',
            ],
            safetySignColours: {
                note: 'For the safety of the security officer, it is important that the security officer knows and understands the meaning of symbolic safety signs',
                types: signage,
            },
            dangersOfSmoking: [
                'Fire',
                'Explosion',
                'Loss of lives',
                'Loss or damage to property',
                'Loss or waste of production time',
            ],
        },
        module3: {
            name: 'Basic Public Relations',
            impressions: {
                good: [
                    'Dress smartly',
                    'Communicate effectively',
                    'Politeness',
                    'Calm',
                    'Helpfulness',
                    'Professionalism',
                    'Tactfulness',
                    'Diplomacy',
                    'Friendliness',
                    'Dignity',
                    'Courtesy',
                    'Stand up straight',
                    'Use controlled voice',
                    'Use proper language',
                    'Maintain eye contact',
                ],
                notesOnGood: [
                    'Speak positively about employer',
                    'Makes future contacts easier',
                    'Do not cosider yourself as better than client',
                ],
                bad: [
                    'Wearing incomplete uniform',
                    'Sloppiness',
                    'Dirtiness',
                    'Crude speech',
                    'Disrespectful',
                    'Rudeness',
                    'Smoking in public whilst on duty',
                    'Smelling of alcohol',
                    'Drunk on duty',
                    'Poor attitude',
                    'Rumor spreading',
                    'Disinterest',
                    'Impoliteness',
                    'Exploitation / abuse of power',
                    'Incompetence',
                    'Bad thoughts',
                    'Bad habits',
                    'Bad actions',
                ],
            },
        },
        module4: {
            name: 'Role and function of security',
            what: 'Security can be defined as measures that are put in place for the protection of information, personnel and property, assets and equipment against hostile influences and actions by the adversary or enemy.',
            who: 'Asecurity officer is usually a privately and formally employed person who is paid to protect property, assets, information or people.',
            categories: {
                information: 'Defense against industrial espionage and sabotage',
                personnel: 'Defense against intimidation, blackmail and subversion',
                goods: 'Defense against sabotage, terrorism and theft of assets, equipment and materials',
            },
            aims: [
                'Prevent sabotage',
                'Prevent terrorist action',
                'Protect classified information',
                'Facilitate investigation through SAPS',
                'Make all security conscious',
                'Prevent adversaries from breaking into security systems',
                'Prevent adversarial success in undermining, subversive and propoganda efforts',
            ],
            contributions: [
                'No discrimination towards sex, race, color or religion',
                'Identify and report all grievances e.g. feeding, housing, transportation, health, uniform, salary',
                'Identify traps set by adversaries',
            ],
            PointsOnPremises: {
                descriptions: [
                    'Vulnerable areas should be seen as areas frequently targeted by criminals and should not exist on any premises',
                    'Security officers should be able to identify vulnerable area easily and know how to protect them',
                    'The threat could be severely intensified if proper security measures are not put in place',
                ],
                vital: [
                    'Electricity',
                    'Water resevoir',
                    'Gas supply plants',
                    'Safes',
                    'Computer rooms',
                    'Petrol pumps',
                    'Telephone facilities',
                ],
                vulnerable: [
                    'Damaged portals (doors, windows, fences, etc.)',
                    'Poorly lit-up places',
                    'Dainage pipes',
                    'Manholes',
                    'Scalable vegetation near perimiter walls/fences',
                ]
            },
        },
        module5: {
            name: 'Bombs, Explosives and firearms',
            explosives: {
                types: {
                    military: {
                        description: 'Military grade explosives (used by terrorists)',
                        types: [
                            'Black widow (violent jihadist female suicide bombers)',
                            'Limpet mines',
                            'Demolition charges',
                            'RPG 7',
                            'SAM7 & SAM9',
                            '60MM & 80MM mortars',
                            'Hand grenades',
                            '122MM 3VOF6 round with 462 High Explosive (Howitzer)',
                            'POMZ Mines',
                            'TNT (Trinitron and Toluene) Blocks',
                        ],
                    },
                    homemede: {
                        description: 'Small, hidden devices that look like practically anything',
                        types: [
                            'Molotov cocktail',
                            'Letter bomb',
                            'Parcel bomb',
                            'Briefcase bomb',
                            'Vehicle bombs',
                        ],
                    },
                },
                drills: {
                    discovered: [
                        'Do not panic',
                        'Do not cause panic',
                        'Notify control or SAPS',
                        'Mark location',
                        'Secure or safeguard area',
                        'Do not touch or handle device',
                        'Do not use radio (frequency usage may trigger device)',
                    ],
                    detonated: [
                        'Do not panic',
                        'Do not cause panic',
                        'Notify control or SAPS',
                        'Attend to injured',
                        'Help in evacuation',
                        'Do not touch or handle device',
                        'Keep people away from scene',
                        'Activate emergency procedure',
                    ],
                },
                information: [
                    'location',
                    'device size',
                    'device colour',
                    'device type (if identifiable)',
                    'device shape',
                    'device container',
                ],
            },
            firearms: [
                'Tokarev',
                'Makarov',
                'AK-47',
                'AK-M',
                'Scorpion Submachine Gun (SMG)',
                'Other AK (Avtomat Kalashnikova) weapons',
            ],
            targets: [
                'Densely populated areas (shopping centres, sports complexes, etc.)',
                'Essential services (Gas, electricity, water, etc.)',
                'Officialdom (Police stations, courts, etc.)',
                'Transportation links (Trains, buses, etc.)',
                'Communication centres (Post office, SABC, Telephones, etc.)',
                'Fuel and industrial installations (Depots, mechanics garages, etc.)',
            ],
        },
        module6: {
            name: 'Observation',
            purpose: [
                'To give a true account of an occurence so the court can come to a logical conclusion',
                'To ensure that clues that would be of assistance in solving a crime are not lost or overlooked',
                'To be able to observe and describe people, objects, vehicles and scenes of crime',
                'A security officer mus use all their senses to the best of their ability',
                'Observation must be done objectively',
            ],
            obstacles: [
                'Nervous tension',
                'Fear',
                'Aggression',
                'Suggestion',
                'Self-protection',
                'Religion',
                'Political affiliation',
                'Prejudice',
                'Ethnical relations',
                'Occupation',
            ],
            sensoryInput: {
                types: [
                    'sight',
                    'hearing',
                    'smell',
                    'touch',
                    'taste',
                ],
                usages: {
                    eyes: '85%',
                    ears: '13%',
                    remaining: '2%',
                },
            },
            types: [
                'Incidental',
                'Positive',
            ],
            patterns: {
                people: {
                    build: [
                        'Stout',
                        'Muscular',
                        'Stocky',
                        'Slender',
                        'Thin',
                    ],
                    age: 'Approximate age in years',
                    race: [
                        'White',
                        'Black',
                        'Chinese',
                        'Indian',
                        'Coloured',
                        'Foreigner',
                    ],
                    sex: [
                        'Male',
                        'Female',
                    ],
                    hair: [
                        'Colour',
                        'Wavy',
                        'Straight',
                        'Short',
                        'Bald',
                    ],
                    height: 'Approximate height in metres',
                    general: [
                        'Complextion',
                        'Voice',
                        'Markings',
                        'Tattoos',
                        'Clothes',
                    ],
                },
                vehicles: {
                    coat: {
                        intensity: [
                            'Vivid',
                            'Dull',
                            'Dirty',
                            'Pastel',
                        ],
                        sheen: [
                            'Metallic',
                            'Gloss',
                            'Matte',
                            'Colour reflection',
                            'Rainbow reflection',
                        ],
                        colour: [
                            'Brown',
                            'Black',
                            'White',
                            'Red',
                            'Green',
                            'Blue',
                            'Yellow',
                            'Purple',
                        ],
                    },
                    brand: [
                        'Ford',
                        'Nissan',
                        'Mazda',
                        'Opel',
                        'VW',
                        'Hammer',
                        'etc.',
                    ],
                    model: [
                        'Astra',
                        'Corsa',
                        'Cortina',
                        'Corolla',
                        'etc.',
                    ],
                    registration: [
                        'Standard (Alpha numeric code)',
                        'Custom named',
                    ],
                    year: [
                        'If identifiable',
                    ],
                    descriptors: [
                        'Tyres',
                        'Accessories',
                        'Modifications',
                        'Condition',
                        'Cleanliness',
                        'Damage',
                        'Noise',
                    ],
                },
                objects: [
                    'Size',
                    'Colour',
                    'Distinguishing features',
                    'Condition',
                    'Damage',
                ],
            },
            note: 'Security officers are in most cases the first on crime scenes and should be able to gather all clues without overlooking any.',
        },
        module7: {
            name: 'Guarding and Patrolling',
            purpose: [
                'Prevent unauthorized entry onto premesis',
                'Prevent Irregularities',
                'Trace and track unauthorized entry onto premesis or irregularities',
            ],
            riskEncounters: [
                'Tresspassing',
                'Theft',
                'Breaking and entering',
                'Arson',
                'Fraud',
                'Sabotage',
                'Terrorist attack',
                'Armed robbery',
            ],
            alarmQualifiers: [
                'Fire',
                'Presence of unauthorizes persons or vehicles',
                'Discovery of suspicious objects or articles',
                'Attempted forced entry',
                'Attempted tampering with security devices',
            ],
            principlesOfPatrol: [
                'Radio in good working condition',
                'Presence of all equipment',
                'Avoid predictable behaviour',
                'Turn back on your tracks regularly',
                'Avoid detection',
                'Report all irregularities',
                'Be observant',
                'Leave on for assistance',
                'Always remain calm',
                'Activate alarm if necessary',
                'Inform control room',
                'Alert emergency teams',
            ],
            equipment: [
                'Whistle',
                'Handcuffs',
                'Baton or asp',
                'Radio',
                'Firearm (under certain circumstances)',
                'Dog (under certain circumstances)',
                'Pepper spray',
                'Tazer',
                'Torch light',
            ],
            alternativeBatonNames: [
                'Tongfa',
                `Prosecuter's stick`,
                'PR 24',
                'Night stick',
            ],
            concealmentSites: {
                description: 'Concealment sites are hiding places where a criminal or adversary can hide and can hide stolen goods and property. The security officer can use these sites to their advantage if discovered.',
                types: [
                    'Manholes',
                    'Drainage pipes',
                    'Trenches',
                    'Plant foliage',
                    'Empty or unused buildings',
                    'Empty containers',
                    'Dark alleys',
                    'Parked vehicles',
                    'Open offices',
                    'Areas under stairs',
                    'Toilets',
                    'Refuse containers',
                ],
            },
            barriers: [
                'Fences',
                'Windows',
                'Gates',
                'Booms',
                'Burglar proofing',
                'Doors',
                'Counters',
                'Turnstiles',
                'Walls',
            ],
            handover: [
                'Handover all equipment allocated to the post',
                'Briefing on ongoing problems related to post',
                'Record equipment and briefing handover',
            ],
        },
        module8: {
            name: 'Legal aspects',
            legislation: legislation,
            scheduleOfOffences: scheduleOneOffences,
        },
        module9: {
            name: 'Industrial Relations',
            objective: 'To establish and maintain a balance between employers and employees through a process of collective bargaining',
            disciplinaryCode: {
                description: `The disciplinary code is not a substitute for management but a company's policy on discipline`,
                objectives: [
                    'To bring an employee to an acceptable standard of performance and behaviour',
                    'To encourage improvement and responsibility in an employee',
                    'To develop the employee to a more productive and effective worker',
                    'To protect a positive and professional image of the company',
                    'To improve an attitude and climate where employees willingly conform to established regulation',
                    'To assist the individual to grow towards a high level of competency',
                    'To help employers identify employees for promotion',
                    'To enable an organization to achieve its objectives',
                    'As a standard of performance, it helps the manager establish the required standard of discipline',
                ],
            },
            procedures: [
                {
                    type: 'grievance',
                    definition: 'A feeling of dissatisfaction or injustice an employee may have in their employment situation',
                    objectives: [
                        'To help parties solve their grievances in the interest of productivity and stability',
                        'To create a system that enables unhappiness and dissatisfaction to be detected and negotiated',
                        'To minimize unfair labour practices',
                        'To create a feeling of security for the employee',
                        'To provide a platform where an employee can air their complaints',
                        'To help parties resolve their grievances, creating a appy working environment',
                        'To enable management to be able to see problems and dissatisfaction that exists in the company and is able to respond immediately',
                    ],
                    resolution: [
                        'Needs to happen as soon as possible',
                        'Unsolved grievances affects productivity by employee',
                        'May destabalize working environment for fellow employees as well',
                        'Fellow employees may also gain grievances toward either originating employee or company',
                        'Neither company nor fellow employees should cause undue grievance',
                    ],
                },
            ],
        },
        module10: {
            name: 'Radio Communication',
            handling: radioHandling,
            phonetics: {
                objective: 'Enable proper communication and difficult to pronounce words and names to be spelt correctly and understood',
                charts: [
                    alphabet, // Refers to alphabet data object
                    numbers, // Refers to numbers data object
                ]
            },
            commands: {
                objective: 'Key phrases used to clearly communicate brief instructions',
                charts: [
                    radioCommands,
                ],
            },
            checks: radioChecks,
            procedure: radioProcedure,
        },
        module11: {
            name: 'Use of Fire Extinguisher',
            outcomes: {
                general: 'Security officer must know where to find equipment and alarms and how to operate it effectively',
                specific: [
                    'List safety precautions to be practiced before using the fire extinguisher',
                    'Demonstrate the correct use of a fire extinguisher',
                    'List why the S/O must know the whereabouts of fire fighting equipment and fire alarms',
                    'List how to sound fire alarm in event of a fire',
                ],
            },
            riskAndChemistry: {
                introduction: [
                    'As friend, fire can be used to great productive value',
                    'As enemy, fire is a great danger to property and person',
                    'Personal injuries and damage to property can be eleiminated by knowing the nature and source of fires, as well as knowledge of reporting and extinguishing of fires',
                ],
                extent: [
                    'Fire is used as a source of energy',
                    'Unwanted fire always results in loss to the host',
                    'Extent is dependent on types of processes the company is involved in',
                    'Companies spend large sums of money in protective measures and insurance',
                    'Administrative material and documentation that are crucial to the continuation of production and survival are especially at risk from fire',
                    'Arson is always a possibility and must never be excluded as a cause',
                    'Prevention and control are, therefor, as pivotal in S/O duties as detection and prevention of crime',
    
                ],
                losses: [
                    'People - Lives and injury',
                    'Production - Delays or complete shut down',
                    'Property - Damage and destruction',
                    'Products - Damage and destruction',
                ],
                duties: [
                    'Companies may appoint dedicated fire crews',
                    'S/O responsibilities include the ability to address fires in all facilities',
                    'May not be in direct contact, but in preparation for fire crews',
                    
                ],
                knowlege: [
                    'Fire classifications and use of fire extinguishing equipment',
                    'Chemistry of fire',
                    'Fire alarm procedures and drills',
                ],
                response: [
                    'Always be first on the scene to address fire and surrounds',
                    'Alertness and quick response may prevent excessive damage or spreading of fire',
                    'Immediately report fire to supervisor on duty and address fire until fire teams arrive',
                ],
                classification: {
                    note: 'Most fires when detected early may be fully extinguished by proper use of appropriate quantities of correct extinguishing agents',
                    risks: [
                        'Improper agent usage may result in injury or death to user',
                        'Spreading of the fire',
                        'Intensification of the fire',
                        'No effect at all',
                    ],
                    types: [
                        {
                            class: 'A',
                            description: 'Ordinary solid combustible material',
                            examples: [
                                'coal',
                                'paper',
                                'wood',
                                'plastics',
                                'textiles',
                            ],
                        },
                        {
                            class: 'B',
                            description: 'Flammable liquids and greases',
                            examples: [
                                'alcohol',
                                'benzene',
                                'paraffin',
                                'petroleum',
                            ],
                        },
                        {
                            class: 'C',
                            description: 'Electrical',
                            examples: [
                                'cables',
                                'generators',
                                'switchboards',
                            ],
                        },
                        {
                            class: 'D',
                            description: 'Metals',
                            examples: [
                                'aluminium',
                                'magnesium',
                                'sodium',
                                'potassium',
                            ],
                        },
                        {
                            class: 'E',
                            description: 'Flammable gasses',
                            examples: [
                                'methane',
                                'propane',
                                'butane',
                            ],
                        },
                    ]
                },
            },
            extinguishing: {
                introduction: [
                    'It is necessary to know ehat type of fire you are dealing with and what medium to use to extinguish it',
                    'Using the wrong extinguishing media on a fire may exacerbate its extent',
                ],
                extent: [
                    'Cause death or injury',
                    'Intensify or spread the fire',
                    'Not have any eeffect at all',
                ],
                classifications: typesOfFireExtinguisher,
                operation: [
                    'Ensure correct extinguisher type is used on correct fire Class',
                    'S/O should not place themselves at risk by trying to extinguish fires that are too large or spreading too fast',
                    'Vacate area and sound the alarm',
                    'Follow instructions on extinguisher to ensure correct operation of equipment',
                    'Inspect extinguisher for defects, sabotage, etc. before use',
                    'Kneel to fire and turn face away when activating extinguisher',
                ],
                drill: [
                    'Ensure back-up assistance is available before tackling the fire',
                    'Ensure an escape route is available should the fire get out of control',
                    'Follow instructions on the equipment before activating the unit',
                    'Do not put yourself at risk. Should the fire become uncontrollable, vacate the area',
                    'Move in closer, pointing nozzle rapidly from side to side, like watering a garden',
                    'Drive flames away from yourself',
                    'Approach fire from windward side if a wind is present',
                    'Adopt a chouching stance when approaching fire so as to avoid fire and smoke',
                    'Never tilt or turn extinguisher around, unless unit is a turnover type',
                    'Keep alert for changes in fire pattern',
                    'Isolate power to avoid re-ignition when tackling an electrical fire',
                    'Do not step in the liquid when tackling a liquid flammable fire in case of flareups',
                    'Step back slowly and never turn your back on the flame once extinguished',
                ],
                location: [
                    'S/O should always know where fire fighting equipment is',
                    'Immediate accessibility may save lives and costly company property',
                    'Slow reaction times may have devastating results',
                    'Use the right extinguisher for the right type of fire',
                    'Knowing the locations of alarms may enable rapid evacuation and extinguishing of fire',
                ],
                emergency: [
                    'Knowing where emergency equipment is is important as S/O may be the first and only on site',
                    'Time spent looking for equipment may have devastating results',
                    'Sound an alarm using:',
                    [
                        'telephone or radio to control room',
                        'following immediate action drill',
                        'sound alarm following correct procedure',
                        'Series of long blows on whistle or any other signal lain down',
                        'If no other means are available, use vocal faculties',
                    ],
                ],
            },
        },
    },
    gradeD: {
        name: 'Access Control Officer',
        module1: {
            name: 'Basic Fire Fighting',
            procedures: {
                positive: [
                    'Ensure an escape route is available',
                    'Follow instructions on the extinguisher',
                    'Break the seal and remove the safety device',
                    'Check the unit is operating properly',
                    'Apply the extinguisher to the base of the fire',
                    'Adopt a crouch position when approaching the fire',
                    'Keep alert for any changes in the fire pattern',
                    'Switch off all electrical mains',
                    'Ensure that fire is completely extinguished to avoid spark rekindling',
                    'The S/O must do everything possible to prevent the fire spreading',
                    'The S/O must not cover small flames with a blanket',
                    'The S/O must remove any movable combustible materials',
                ],
                negative: [
                    'The S/O must not put themselves in unnecessary risk by tackling too large a fire',
                    'Never tilt or turn over the unit unless it is a turnover type',
                    'Everyone, including S/O, must avoid walking on spillage areas',
                    'S/O must never turn their back on the fire',
                    'Do not use an extinguisher that does not match the fire classification (Class_A != Class_B)',
                ]
            },
            classesOfFire: classesOfFire,
            typesOfExtinguisher: typesOfFireExtinguisher,
            elementsOfFire: [
                'Fuel',
                'Oxygen',
                'Heat',
                'Chain Reaction',
            ],
            methods: [
                'Close doors and windows to help prevent spread of fire',
                'Throw sand on fire',
                'Turn off all electrical mains',
                'Hose down hot walls',
                'Blanket pockets of fire with wet blankets',
                'Keep bystanders away',
                'Clear gates and paths for fire brigade officers',
                'Indicate location of fire to fire brigade officers',
            ],
            knowlege: [
                'Must know locations of fire fighting equipment',
                'Fire alarm systems in area',
                'Inspect area for any fire hazards and clear',
                'Follow drills',
                'Be aware of common fire hazards, materials and classes',
            ],
        },
        module2: {
            name: 'Radio Communication',
            handling: {
                positive: [
                    'Keep radio/control room secured',
                    'Use radio to only communicate official messages',
                    'Handle radio with care',
                    'Treat radio as technical equipment',
                ],
                negative: [
                    `Don't use abusive language over radio`,
                    `Don't play music in the background`,
                    `Don't occupy airwaves with unnecessary calls`,
                    `Don't expose radio to harsh conditions (sun, heat, water, dust)`,
                ],
            },
            phonetics: {
                objective: 'Enable proper communication and difficult to pronounce words and names to be spelt correctly and understood',
                charts: [
                    alphabet, // Refers to alphabet data object
                    numbers, // Refers to numbers data object
                ],
            },
            relayMessage: [
                'Sometimes two stations may not be able to communicate with one another',
                'Stations that can communicate with both may be used to relay information',
            ],
            commands: {
                objective: 'Key phrases used to clearly communicate brief instructions',
                charts: [
                    radioCommands,
                ],
            },
            checks: [
                'Antenna',
                'Battery',
                'Channel',
                'Condition of radio',
                'Switch',
                'Squelch',
                'Radio number',
                'Volume',
            ],
            procedure: {
                keyWords: [
                    {
                        name: 'BASS',
                        detail: [
                            ['Brief', 'Message must be brief and only contain important facts'],
                            ['Accurate', 'Details must be given clear and accurate'],
                            ['Security', 'Never transmit classified information unless disguised'],
                            ['Speed', 'Do not rush the message, but brief and concise'],
                        ],
                    },
                    {
                        name: 'RSVP',
                        detail: [
                            ['Rhythm','Use short phrases with pauses'],
                            ['Speed','Remember the receiver may want to write down the message'],
                            ['Volume','Do not shout, but speak slightly louder'],
                            ['Pitch','Pitch your voice a bit higher than normal'],
                        ],
                    },
                ],
                principles: [
                    'Discipline',
                    'Voice procedure',
                    'Transmission of message',
                    'Speed and accuracy',
                    'Tact',
                    'Patience',
                    'Courtecy',
                    'Confidence',
                    'Incoming Calls',
                    'Dial Mechanism',
                    'Dailing Methods',
                ],
                process: {
                    habits: [
                        'Wait for a break in air traffic, unless under emergency',
                        'Establish contact',
                        'Send the message',
                        'End Contact',
                    ],
                    opening: [
                        'Identify receiver and sender (yourself)',
                        `${receiverCallSign} this is ${senderCallSign}`,
                        'Communicates that the sender, who should be locatable, closed the channel for all users, unless under emergency conditions',
                    ],
                    sending: [
                        `End individual instructions with 'OVER'`,
                        'Communicates that the channel should be treated as closed, unless under emergency conditions',
                    ],
                    ending: [
                        `End communication with 'OUT'`,
                        'Communicates to all radio users that channel is once again open',
                    ],
                },
            },
        },
        module3: {
            name: 'Basic Occupational Safety',
            accident: [
                'Defined as an undesirable event caused by unsafe acts and unsafe conditions',
            ],
            causes: [
                'Lack of knowledge',
                'Improper attitude',
                'Physical or mental defects',
                'Inadequate or poor work standards',
                'Unsafe conditions',
            ],
            recognition: [
                'Shape',
                'Colour',
                'Pictograms',
            ],
            signage: {
                types: signage,
            },
            actions: [
                'Wreckless or speedy driving with heavy vehicles',
                'Mischievous or abusive behaviour between colleagues',
                'Improper arrangement of items or equipment',
                'Failure to secure machinery and materials',
                'Improper usage of machinery',
                'Rendering devices inoperative',
            ],
            conditions: [
                'Uneven or ajar doors',
                'Slippery floors',
                'Unsafe construction',
                'Poorly illuminated areas',
                'Lack of guards',
                'Unsafe storage of hazardous substances',
                'Committing unsafe acts',
                'Creating unsafe conditions',
            ],
            reporting: [
                'To supervisor',
                'Record in Occurence Book (OB)',
                `Bring entry and recording to management's attention`,
            ],
        },
        module4: {
            name: 'Public Relations',
            notes: [
                'The S/O is the first to be seen by a visitor',
                'If the S/O is dirty, sloppy or insufficiently uniformed, the impression of the S/O AND company are poor',
            ],
            reinforcement: [
                'Professionalism in image, pride, actions and communication',
                'Provide good and efficient protection service at all times',
                'Pay immediate attention to each task to be executed',
                'Respect toward visitors and avoid slang or dirty language',
                'Politeness toward visitors',
                'Full and clean uniform',
                'Professional attitude',
                'Communicate effectively',
                'Smart dresswear',
                'Show concern',
                'Good manners',
            ],
            attitude: {
                positive: [
                    'Respectful',
                    'Show Concern',
                    'Helpfulness',
                    'Courteousness',
                    'Tactfulness',
                ],
                negative: [
                    'Exploitation',
                    'Abuse of power/authority',
                    'Poor attitude',
                    'Crude Speech',
                    'Incomplete uniform',
                    'Rudeness',
                    'Impoliteness',
                    'Rumour spreading',
                    'Untidiness',
                    'Incompetence',
                    'Disrespectfullness',
                    'Poor communication',
                ],
            },
        },
        module5: {
            name: 'Pocket Books',
            objectives: [
                'Provide permanent personal record of hours on duty and work performance',
                'Recording incidents during course of duty',
                'Record details of property found',
                'record particulars of fires, accidents, suspicious persons and vehicles',
                'Record arrests made',
                'Record irregularities and hazards observed dusing period of work',
            ],
            maintenance: [
                'Keep it clean and tidy',
                'Do not remove or tear out pages',
                'Do not skip lines',
                'Cancel wrong entries neatly',
                'Never use tipex',
                'Use black pen',
                'Do not erase, change or alter entries',
            ],
            recording: [
                `What happened and S/O's involvement`,
                'Who else was involved',
                'When did it happen (exact time and date)',
                'Where did it happen (exact location)',
                'How did it happen',
                'Why did it happen',
            ],
            legal: [
                'Serves as an evidentiary record for cases in court',
                'Used as reminder of particulars',
                'Particulars of arrests and investigations',
                'Serves as information aiding or assisting in investigations',
            ],
        },
        module6: {
            name: 'Access Control',
            meaning: [
                'Application of systems and methods to control access, entry and passage of people, vehicles and parcels in and out of premesis',
            ],
            objectives: [
                'Who may have access to which places or area',
                'How are they identified',
                'How are they monitored',
                'Egress (exit) procedure',
                'Observing all orders relating to access control',
            ],
            functions: [
                'Supervising all entries and exits of all employees',
                'Regulating all parcels entering and leaving premesis',
                'Issuing permits to authorized visitors',
                `Keeping visitor's log book`,
                'Conducting searches',
                'Maintaining records of all vehicles entering and leaving premesis',
                'Controlling access of visitors and contractors entering and leaving premesis',
            ],
            principles: {
                denial: {
                    description: [
                        'First line of defense',
                        'Measures that bar entry or exit',
                        'Gates, guards, fences, etc.'
                    ],
                    targets: [
                        'All authorized people and vehicles',
                        'People lacking authorization',
                        'People with unregistered firearms',
                        'Rude people',
                        'People with unkempt appearance or dresswear',
                        'People with criminal intent',
                        'People on narcotics',
                        'People on inebriants',
                        'People or vehicles that do not have business on premesis',
                    ],
                },
                detection: [
                    'Should adversaries break entry',
                    'Has to be discovered and stopped from commiting any furthe crimes',
                    'Dogs, guards, alarm, CCTV, etc.'
                ],
                deterrence: [
                    'Adds additional phychological barriers',
                    'Drives potential adversaries away',
                    'Dogs, fences, alarms, gates, etc.',
                ],
            },
            measures: {
                primary: [
                    'Fences',
                    'Alarms',
                    'Lights',
                    'Locks',
                    'Guards',
                    'Safes',
                    'CCTV',
                    'Strongrooms',
                    'Firearms',
                    'Burglar proofing',
                    'Electronic gates',
                ],
                additional: [
                    'Zoning or dividing up premesis',
                    'Security awareness procedures',
                    'Escorting',
                    'Burglar proofing of windows and doors',
                    'Appointments',
                ]
            },
            knowledgeForEntry: [
                'Task description',
                'Legal aspects',
                'Permits and waybills',
                'Immediate action drills',
                'Powers of observation',
                'Behavioural patters',
                'One official language',
                'Radio communication',
                'Emergency procedures',
                'Access and egress (exit) procedures',
                'Utilising available aids',
            ],
            procedures: [
                'Greet visitor',
                'Ask if S/O can be of assistance or help',
                'Ask to present identification',
                'Determine appointment',
                'Determine destination',
                'Determine firearms to declare',
                'Confiscate firearm and issue receipt for firearm',
                'Place firearm in a safe',
                'Complete visitors register',
                'Issue permit and arrange for escort',
                'Declare any company property',
                'Search',
                `Hand visitor's firearm back`,
                'Record time of egress',
                'Retrieve permit upon visitor egress',
                'Thank visitor for their time and wish them a safe journey',
            ],
        },
        module7: {
            name: 'Search Procedures And Techniques',
            rules: {
                primary: [
                    'Identify person',
                    'Ask permission',
                    'Search systematically and thoroughly',
                    'Project to help consider where contraband would be hidden',
                    'Be alert to possible attack',
                    'Done within the bounds of the law (Criminal Procedure Act 51 of 1977)',
                ],
                vehicles: {
                    normal: {
                        cab: [
                            'Dashboard',
                            'Behind dashboard',
                            'Under seats',
                            'Under moveable mats',
                            'Wind down windows',
                            'Check under and behind all seats',
                            'Door pockets, cubby holes, glove compartments',
                            'Middle console',
                            'Behind radio',
                            'Sun visors',
                        ],
                        back: [
                            'Under and around goods',
                            'Around spare wheel',
                        ],
                        under: [
                            'General check',
                            'Wheel cavities',
                            'Under-body cavaties',
                        ],
                        bonnet: [
                            'Open bonnet',
                            'All available cavaties',
                            'Bonnet panel cavities',
                        ],
                    },
                    motorcycle: [
                        'Petrol tank',
                        'Tool box or case',
                        'Rudder handle grips',
                        'Rudder handle guards',
                        'Foot rest',
                        'Lamps',
                        'Mudguards',
                        'Hollow spaces',
                        'Tubular framework should be examined',
                        'Exhaust (in case a big one is fake)',
                    ],
                    commercial: [
                        'Between twin rear tires',
                        'Packing sacks and containers',
                        `Driver's cab`,
                        'Along chassis',
                        'Under cab seats',
                        'Inside spare wheel',
                        'Possible fake panelling on wooden structure',
                    ],
                },
                contraband: [
                    'Suspicious objects',
                    'Weapons',
                    'Precious metals',
                    'Stolen property',
                    'Narcotics or inebriants',
                ],
                procedures: {
                    anyone: [
                        'Obtain permission',
                        'Request person to stand with hands raised and legs apart',
                        `Run hands quickly and thoroughly over person's body`,
                        'Clothing should be rolled between fingers to discover even the smallest objects',
                        'If person is a suspect, let them face the wall or vehicle with their hands on the structure',
                    ],
                    employees: [
                        'Do not discriminate against race, sex or religion',
                        'Do not select the same person every day',
                        'Stay friendly',
                        'Do not make jokes about the search',
                        'Select the person that must be searched',
                        'Get their permission',
                        'Escort them to search room or cubicle',
                        'There must be a witness present',
                        'Ask employee if they have any company property to declare',
                        'Ask to produce upon admission',
                        'Search them if no admission',
                        'If search is negative, thank them for their co-operation',
                        'If search is positive, arrest them',
                    ],
                    locations: [
                        'Inside and outside of arms',
                        'Front upper body',
                        'Back upper body',
                        'Stomach',
                        'Inside thighs',
                        'Turn-ups of trousers, seams and padded areas',
                        'Remove headgear and search',
                        'Overalls, coats, jackets and other clothing in hand',
                        'Around collar and tie',
                        'Around belt',
                        'Front and back of legs',
                        'Lift trousers to inspect socks',
                        'Under shoes (heel nook)',
                        'Inside tip of shoes',
                        'containers or briefcases the person may be carrying',
                    ],
                    briefcases: [
                        'Ask permission',
                        'Ask owner to open own briefcase or parcel',
                        'Check for false buttons or compartments',
                        'Do not damage anything',
                        'If anything suspicious is found, report it to supervisor',
                    ],
                    preceding: [
                        'Request permission to search',
                        'Ask if person has anything to declare',
                        'Ask them to empty pockets',
                        'Then search thoroughly',
                    ],
                    process: [
                        'Search must be done decently (person) and orderly (property)',
                    ],
                    sex: [
                        'Males may not search females even with their consent',
                        'Females may search males with their consent',
                    ],
                },
            },
        },
        module8: {
            name: 'Legal Aspects',
            legislation: [
                {
                    act: 'Road Traffic Act 29 of 1989',
                    definition: [
                        '',
                        [
                            '',
                        ]
                    ],
                    sections: [
                        {
                            number: '123',
                            name: `Using another's vehicle without their consent`,
                            details: [
                                'Entering or climbing upon the vehicle',
                                'Start the vehicle',
                                'Put it in gear',
                                'Tamper with the machinery or any part of the vehicle',
                                'Ride in or drive the vehicle on public roads without permission',
                            ],
                            procedure: [
                                '',
                            ],
                            exemptions: [
                                '',
                            ],
                        },
                    ],
                },
                {
                    act: 'Criminal Procedure Act 51 of 1977',
                    definition: [
                        '',
                    ],
                    sections: [
                        {
                            number: '20',
                            name: 'Siezure of articles',
                            details: [
                                'Articles concerned or used in the commission of a crime',
                                'Articles intended to be used in the commission of a crime',
                                'Articles that can afford evidence in the court of law',
                            ],
                            procedure: [
                                '',
                            ],
                            exemptions: [
                                '',
                            ],
                        },
                    ],
                },
                {
                    act: 'General Law Amendment Act 62 of 1955',
                    definition: [
                        '',
                    ],
                    sections: [
                        {
                            number: '1 (1)',
                            name: '',
                            details: [
                                'Any person who, without a bona fide claim, or right and without the consent of the owner or person having control thereof, removes any property from the control of the owner or any other person competent to give such consent, whether or not they intend throughout to return the property to the owner or person from whose control they removed it, shall, unless it is proved that such person, at the time of the removal, had reasonable grounds for believing that the owner or such person would have consented to such use if he had known about it, shall be guilty of an offence',
                            ],
                            procedure: [
                                '',
                            ],
                            exemptions: [
                                '',
                            ],
                        },
                        {
                            number: '36',
                            name: '',
                            details: [
                                'Any person who is found in possession of any goods, other than stock or produce, to which there is a reasonable suspicion that they have been stolen and is unable to give a reasonable account of such a possession, shall be guilty of an offense and liable on conviction to the penalties, which may be imposed on the conviction of theft',
                            ],
                            procedure: [
                                '',
                            ],
                            exemptions: [
                                '',
                            ],
                        },
                    ],
                },
            ],
            requirements: [
                'Person must be capable to exercise their will (incapacitated, intoxicated or inebriated, mentally or physically incapable)',
                'Person must have the authority to consent',
                'Consent must not be against public morals',
                'Consent must cover the entire act',
                'Consent must be voluntary',
                'Cannot be obtained through the use of force',
            ],
            questions: {
                true: [
                    'A person can give consent if he is not under the influence of drug or alcohol',
                    'A person can give consent if he has no mental defect',
                    'Consent must cover the whole act',
                    'Consent to search a briefcase is not consent to search a body',
                    'If a person consents to be searched by a specific person, another person can do the search',
                    'Consent must be voluntary',
                ],
                false: [
                    'A person who consents must not be capable to exercise his will',
                    'Consent can only be given by a person whose property will be searched',
                    'If a lady consents to a body search by a man, it will be regarded as valid',
                    'Consent to search cannot be withdrawn after the act has started',
                    'Consent can be obtained through the use of threats',
                    'Consent obtained through fraudulent means is valid',
                    'If a person does not understand the implications of the consent it shall be valid',
                ],
            },
        },
    },
    gradeC: {
        name: 'Asset & Reaction Officer',
        module1: {
            name: 'Legal aspects',
            justifications: [
                'Based on reasonableness and public interest',
                'Private defense',
                'Necessity',
                'Impossibility',
                'Consent',
                'Right of chastisement or punishment',
                'Acting upon command',
                'Official capacity',
            ],
            defense: {
                general: [
                    'If it is necessitated,',
                    'Infringe the interests of an innocent third party',
                    'Contravene a rule of law',
                    `Directed at the protection of their own or another's interest of an innocent third party`,
                    'Against an emergency which has commenced or is imminent',
                    'Not an attack by the person whose interests are infringed in the process',
                ],
                private: {
                    notes: 'Commonly referred to as self defense',
                    attack: [
                        'There must be an attack',
                        'The attack must be imminent or have commenced',
                        'The attack must be unlawful',
                        'The attack must be directed at a legal interest',
                    ],
                    defense: [
                        'Must be directed toward or against the attacker',
                        'It must be necessary to protect the legal interest that is in danger',
                        'The defensive action must be reasonable',
                    ],
                },
            },
            legislation: [
                {
                    act: 'Liquor Act 27 of 1989',
                    definition: [
                        '',
                    ],
                    sections: [
                        {
                            number: '154',
                            name: '',
                            details: [
                                'Any person who consumes or possesses liquor on a private premises, without the consent of the lawful owner shall be guilty of an offense',
                            ],
                            procedure: [
                                '',
                            ],
                            exemptions: [
                                '',
                            ],
                        },
                    ],
                },
                {
                    act: 'Criminal Procedure Act 51 of 1977',
                    definition: [
                        '',
                    ],
                    sections: [
                        {
                            number: '42',
                            name: 'Preservation of evidence direction',
                            details: [
                                'Arrest with or without warrant',
                                'Arrest anyone who attempts to commit a crime',
                                'Arrest anyone who commits a crime in the presence of the S/O',
                                'Arrest anyone who is involved in an affray or fight',
                                'Arrest anyone suspected of committing any schedule one offense',
                                'Arrest anyone who attempts to flee from a crime scene',
                            ],
                            procedure: [
                                '',
                            ],
                            exemptions: [
                                '',
                            ],
                        },
                        {
                            number: '48',
                            name: 'Foreign Requests for assistance and cooperation',
                            details: [
                                'Any person who may lawfully arrest another in respect of any offence and who he knows or reasonably suspects such person to be on any premesis, may if he first audibly demands entry onto such premesis and notifies the purpose of which he seeks entry and fails to gain entry may break it open, enter and search such premesis for the purpose of effecting an arrest',
                            ],
                            procedure: [
                                '',
                            ],
                            exemptions: [
                                '',
                            ],
                        },
                        {
                            number: '24',
                            name: 'Jurisdiction',
                            details: [
                                'Any person in charge of any premesis that suspects stolen stock/produce/article to be on or in possession of someone upon that premess contravenes any law relating to liquor, drugs arms and ammunition or explosives and there is no police official readily available may enter such premesis, search them and any person thereon and should be arrested',
                            ],
                            procedure: [
                                '',
                            ],
                            exemptions: [
                                '',
                            ],
                        },
                        {
                            number: '39',
                            name: 'Prohibition on disclosure of information',
                            details: [
                                'Arrest with or without a warrant',
                                'Identify yourself',
                                'Give reasons for the arrest',
                                'Explain method or procedure to the suspect',
                                'Touch the body of the suspect',
                                'Read them their rights',
                                'Do not interrogate or question the suspect',
                                'Suspect must be handed over to the South African Police Service (SAPS)',
                            ],
                            procedure: [
                                '',
                            ],
                            exemptions: [
                                '',
                            ],
                        },
                    ],
                },
            ],
            scheduleOneOffences: scheduleOneOffences,
            questions: [
                {
                    question: 'List the procedures that you will follow before you break open a premesis for a search',
                    answers: [
                        'Audibly demand entry',
                        'Identify yourself',
                        'State reason for demand',
                        'Upon failure to consent to entry, break in, enter and effect arrest or search',
                    ],
                }
            ]
        },
        module2: {
            name: 'Protection of information',
            detrimentals: [
                'Damage (arson, water)',
                'Espionage',
                'Open source',
                'Negligence',
            ],
            categories: [
                'Document security',
                'Office security',
                'Personnel security',
                'Personal security',
            ],
            controllingDuplication: [
                'Know who you gave permission to',
                'Know the date',
                'How many copies are made',
                'Reasons for making the copies',
                'Disposal of the copies',
            ],
            dangers: [
                'Unauthorised access',
                'Theft of documents or articles',
                'Photography of document contents',
                'Planting of explosives',
                'Bugging devices can be placed in ooffices or intercom',
                'Sabotage of safety equipment',
                'Arson',
                'Lock deactivation or manipulation',
                'Compromising of information',
            ],
            leaks: [
                'Shebeens',
                'Taverns',
                'Sports bars or arenas',
                'Shopping complexes',
                'Bus stops',
                'Taxi ranks',
                'Social gatherings',
                'Conference rooms',
                'Official parties',
            ],
            spreadingFactors: [
                'Habits',
                'Patterns',
                'Interests',
                'Promiscuity',
                'Debt',
                'Drugs',
                'All forms of indecency',
                'Unreliability',
                'Gambling',
                'Contact with people of bad repute',
            ],
            exploitingFactors: [
                {
                    bribery: [
                        'Taking money or other gifts to compromise information',
                        `S/O's should resist the temptation to accept bribes and report these actions immediately`,
                    ],
                },
                {
                    extortion: [
                        'Obtain by force, a threat or deceit',
                        'Adversaries could do background checks on workers',
                        `May also be done by targeting target's weaknesses`,
                        'Can blackmail workers to compromise information',
                    ],
                },
                {
                    dissatisfaction: [
                        'Using propaganda in order to obtain co-operation in espionage, sabotage and subversive activities',
                        `Sowing distrust among a company's workers serves as an effective way for adversaries to obtain information`,
                    ]
                },
            ],
            contravention: [
                'Proper security selection',
                'Continuous supervision',
                'Elimination of all dissatisfactions, grievances and problem situations',
                'Security training',
                'Control - Ensuring security personnel and supervisors strictly comply with all rules and security measures',
            ],
            documents: [
                'Need to know basis',
                'Authorized need to access personnel only',
                'Authorized need to keep personnel only',
                'Authorized need to discuss personnel only',
                'Authorized need to duplicate personnel only',
                'Recording procedures must be abided by employees',
            ],
        },
        module3: {
            name: 'Role in emergency',
            emergencyPlanPurposes: [
                'Discourage or prevent n attack',
                'Defend against attack until help arrives',
                'Cope with the results of an emergency or attack',
                'Ensuring co-operation with external organizations like Police, fire brigade and medical groups',
                'Integrating civil defense units',
                'Developing strategies by involving neighbouring installations',
                'Providing guidelines for the role of each emergency partner',
                'Providing guidelines for the role of the emergency coordinator',
            ],
            emergencyPlanRequirements: [
                'Simplicity to avoid misunderstanding',
                'Practicality',
                'Efficient and effective activation',
                'Realistic and economically viable',
                'Confusion and panic-free activation',
                'Periodic drills',
                'Co-ordination with local and civil defense services',
                'Existing facilities or equipment must be utilized',
            ],
            evacuation: {
                description: [
                    'Taking of people, partially or generally in a state of emergency, danger or a life risking situation, to a place of safety',
                    'Under partial or positive conditions, only affected areas of the emergency will be evacuated',
                    'Under general or negative conditions, all areas are affected, forcing the complete evacuation of the premesis',
                ],
                advantages: [
                    'Risks of injuries are reduced',
                    'Employees are available to conduct a search',
                    'Production can go forward',
                    'Employees can remove personal belongings',
                ],
                disadvantages: [
                    'Risks of injuries are very high',
                    'Other devices can be planted',
                    'Loss of time and high financial impact',
                    'Employees are not available to help in a search',
                ],
            },
            accident:{
                drills: [
                    'Do not panic',
                    'Inform control station',
                    'Activate relevant emergency team',
                    'Safeguard the area given the nature of the area',
                    'Report if people are injured and how many',
                    'Administer first aid if qualified',
                    'Make injured people comfortable',
                    'If emergency situation still exists, help the emergency staff'
                ],
            },
            naturalDisasters: {
                types: [
                    'Earthquake',
                    'Hail storms',
                    'Disturbances of earth surfaces',
                    'Floods',
                    'Lightning',
                ],
                drills: [
                    'Notify control station',
                    'Assess the situation',
                    'Determine extent of damage',
                    'Keep inquisitive people away',
                    'Emergency procedures must be activated immediately',
                    'Report number of injured or killed immediately',
                    'Report place and type of desaster',
                ],
            },
            strike: {
                definition: 'A strike is the lawful or unlawful activist action by a group of workers who stop working without the intention of resigning',
                types: {
                    peaceful: [
                        'A.K.A. Walk-outs or Wild Cat',
                        'Common and occurs in workshops',
                        'Normally not planned',
                        'Lasts for a few hours',
                    ],
                    riotous: [
                        'Usually starts when negotiations were unsuccessful',
                        'Often violent',
                        'Typically involves arson or damage to property',
                        'Throwing of stones and other objects',
                    ],
                },
                drills: [
                    'Report to control station',
                    'Personally evacuate scene',
                    'Avoid negotiation',
                    'Exercise caution',
                    'Avoid armed appearance',
                    'Hide weapons carefully',
                    'Avoid any further provocation',
                    'Follow Police orders',
                ],
            },
            armedRobbery: {
                definition: [
                    'Crime for personal gain',
                    'No hesitation in using firearms',
                    'Lack of respect or regard for life',
                    'Often well planned',
                ],
                drills: [
                    'Do not panic',
                    'Act according to emergency plan in place',
                    'Report to control room and SAPS',
                    'Never address culprits unless well planned',
                    'Gather as much information about people, weapons and vehicles',
                    'Take care of bystanders',
                    'Do not try to be a hero',
                    'Support traumatized employees and visitors',
                    'Remain calm until help arrives',
                ],
            },
            hostageSituation: {
                definition: [
                    'Many causes, not just political',
                    'Criminals may take hostages to negotiate escape',
                ],
                drills: [
                    'Stay calm',
                    'Never argue with them',
                    'Do as they demand',
                    'Try to keep hostages together',
                    'Try to convince them',
                    'Ask them to sit down',
                    'Befriend them',
                    'Do not try to escape',
                    'Take cover in the case of firearm usage',
                    'Determine type of firearm',
                    'Determine culprit movement',
                    'Determine culprit personal details (nationality, sex, reasons)',
                ],
            },
            fire: {
                drills: [
                    'Do not panic',
                    'Select correct extinguisher type for fire class',
                    'Sound alarm in case of uncontrollable spread',
                    'Report to control station',
                    'Report to fire brigade',
                    'Prevent access',
                    'Ensure no one is trapped',
                    'Assist injured',
                    'Render first aid if qualified',
                    'Clear path for fire brigade',
                    'Carry out fire brigade instructions',
                    'Ensure accessibility to fire hydrant',
                    'Evacuate',
                ],
            },
            explosives: {
                drills: [
                    'Do not panic',
                    'Evacuate immediately',
                    'Let personnel remove all personal belongings',
                    'Report suspicious objects',
                    'Do not touch suspicious objects',
                    'Mark area',
                    'Keep inquisitive bystanders away',
                    'Uphold all-round defense against looters',
                    'Switch off radio in close proximity',
                ],
            },
        },
        module4: {
            name: 'Bomb threats',
            causes: [
                'Deliberate arson or damage to premises, buildings, property, etc.',
                'Deliberate killing',
                'Draw attention to political grievances or dissatisfaction',
                'Draw attention away from alternative targets',
                'Disrupt essential services',
                'Occupy security personnel attention',
                'Psychological onslaught',
            ],
            drills: [
                'Notify control immediately, not by radio',
                'Do not touch it, leave it alone',
                'Inform SAPS',
                'Open doors and windows',
                'Mark location',
                'Secure and protect area',
                'Evacuate premises',
            ],
            search: [
                'Layout of area will determine more exact plan',
                'Begin search 15 - 20 metres away from building',
                'Manholes',
                'Culverts',
                'Piles of rubbish or foliage',
                'Rubbish bins',
                'Mail boxes',
                'In and around planters',
                'Flower boxes and ornaments',
                'Windows and door ledges',
                'Air conditioner units',
                'Ventilation and extractor fans',
                'Ledges',
                'Window flower pots and boxes',
                'Gutters and overhangs',
                'Fire escapes',
                'Really anywhere an explosive can cause massive damage',
            ],
            stepsWhenThreatCalledIn: [
                'Stay calm, do not cause panic',
                'Keep culprit talking as long as possible',
                'Listen carefully to their voice',
                'Ask to repeat question',
                'Note language of culprit',
                'Determine personal details (nationality, race, sex, age, accent)',
                'Determine tempermental details (seriousness, anxiety, nervousness)',
                'Determine location or caller (listen for background noise, music, trains, taxis, etc.)',
            ]
        },
        module5: {
            name: 'The threat (The Risk)',
            definitions: [
                'Action that is detrimental to persons, property, organizations or companies',
                'Differ in intensity based on time, place and product',
            ],
            elements: {
                location: [
                    'If target is frequent target of criminal activity it is a more likely target',
                ],
                time: [
                    'Financial instability, crisis period, high unemployment and poverty can cause high financial crimes',
                ],
                products: [
                    'Financial institutions will attract fraud and robbery',
                    'Product manufacurers and service delivery companies attract mostly espionage and sabotage',
                ],
            },
            internal: [
                'Threats arising from personnel',
                'Espionage',
                'Sabotage',
                'Breaking and entering',
                'Fraud',
                'Strikes',
                'Robbery and thievery',
            ],
            external: [
                'Threats arising from visitors and unauthorized persons',
                'Espionage',
                'Sabotage',
                'Breaking and entering',
                'Fraud',
                'Robbery and thievery',
            ],
            combined: [
                'Personnel supplying information that may subvert security measures and/or reveal delivery dates and times',
            ],
            prevention: [
                'Effective personnel screening',
                'Security awareness programs',
                'Access control',
                'Regular patrols',
            ],
            threatsToSecurity: [
                'Assault',
                'Robbery',
                'Murder',
                'Intimidation',
                'Bribery',
            ],
            threatsToInstallations: [
                'House breaking',
                'Robbery',
                'Espionage (Industrial)',
                'Sabotage',
                'Arson',
                'Vehicle hijacking',
                'Trespassing',
            ],
            action: [
                'Familiarity with drills',
                'Enforcing access control',
                'Maintain high standard of fire prevention and protection',
                'Familiarity with legalities',
                'Remain alert to bomb threats',
            ],
            countermeasures: [
                'Report and observe suspicious people, objects and vehicles',
                'Identify loopholes in security measures',
                'Enforce security measures laid down by organization or installation',
                'Do not discuss security measures with unauthorized people',
                'Report any forms of intimidation or bribery immediately to supervisors',
                'Be alert to unknown people approaching you',
                'Do not trust anybody. Keep safe distance between self and strangers',
                'Know how to use equipment and firearms',
                'Know emergency numbers',
                'Know and understand your legal rights',
                'When on patrol be alert and ensure windows are closed and doors locked',
                'Avoid apprehension of members of large groups',
                'Call for backup when necessary',
                {
                    escourtDuty: [
                        'Plan route ahead of time',
                        'Do not discuss route with unauthorized people',
                        'Don not allow unauthorized people on vehicle',
                        'Use safe routes',
                        'Report suspicious people and vehicles following you',
                    ],
                },
            ],
        },
        module6: {
            name: 'Occupational safety',
            causes: [
                'Lack of knowledge',
                'Physical and mental defects',
                'Inadequate or poor work standards',
                'Improper attitude',
                'Unsafe conditions',
            ],
            conditions: {
                truckLoading: [
                    'Loads falling off',
                    'Uneven floors',
                    'Slippery floors',
                    'Uneven loads',
                    'Poorly illuminated places',
                ],
                acts: [
                    'Improper driving of vehicles',
                    'Unauthorized or unlicenced equipment usage',
                    'Failure to secure machinery and equipment',
                    'Using equipment or machinery in unsafe manner',
                    'Rendering equipment inoperative',
                    'Arranging items in unsafe manner',
                    'Fooling, teasing or abusing fellow employees',
                    'Working on moving equipment',
                    'Taking chances',
                    'Failure to use safety equipment',
                ],
                conditions: [
                    'Unsafe construction',
                    'Lack of guard equipment on machinery',
                    'Poorly lit areas',
                    'Unsafe storage of hazardous substances (incl. poisons)',
                    'Overcrowding work places',
                    'Disorder or haphazard planning',
                    'Bad layout',
                    'Uneven floors',
                    'Slippery floors',
                    'Inadequate ventilation',
                    'Lack of open flame control (cigarettes)',
                ],
            },
        },
        module7: {
            name: 'Fire prevention and protection',
            classesOfFire: classesOfFire,
            agents: {
                classA: [
                    'Water',
                    'APW'
                ],
                classB: [
                    'DCP (Dry Chemical Powder)',
                    'Foam or vapourizing liquid',
                    'CO<sub>2</sub> (Carbon Dioxide)',
                    'BCF',
                ],
                classC: [
                    'CO<sub>2</sub>',
                    'DCP',
                    'BCF',
                ],
            },
            resultants: [
                'People - Lives and injuries',
                'Property - Damage and destruction',
                'Products - Damage and destruction',
                'Production - Delays or complete shutdown',
            ],
            typesOfFireExtinguisher: typesOfFireExtinguisher,
            risks: {
                common: [
                    'Process',
                    'Storage',
                    'Exposure',
                ],
                ExtinguisherMismatch: [
                    'Injury and death',
                    'Ineffectiveness',
                    'Intensify fire',
                ],
            },
            drills: [
                'Notify control station',
                'Notify fire brigade',
                'Sound alarm',
                'Attempt to extinguish',
                'Switch off all electrical mains',
                'Render first aid to injured if qualified',
                'Assist in evacuation',
                'Control access to area',
            ],
            roles: [
                'Due to usual circumstances, S/O is first on the scene',
                'Quick and correct control and action may prevent excessive damage',
                'Know and understand the chemistry of fire',
                'Know and understand the classification and use of extinguishing media',
                'Know and understand the fire alarm procedure',
                'Know and understand the emergency procedure of the premises',
                'Fight fire without risking your life',
                'Check the premises for any trapped peoples',
                'Render assistance to the injured if qualified',
                'Assist emergency teams',
                'Follow fire brigade instructions'
            ],
            important: [
                'Follow REACT procedure upon discovering a fire',
                'You have seconds to respond',
                'Respond quickly and efficiently',
                'Try to extinguish fire',
                'Use correct extinguisher',
                'Stay calm',
                'Know your options',
                'Call for help',
                'Ensure exit is available',
                'Best option is to leave the area',
                'Close door to help prevent spread of fire',
                'Call fire brigade',
            ],
            REACT: [
                'Rid - Remove people',
                'Envelope - Ensure doors and windows are closed',
                'Alarm - Activate alarm',
                'Contact - Call fire brigade',
                'Temperance - Treat the fire as a danger',
            ],
        },
        module8: {
            name: 'Written reports',
            requirements: [
                'Accuracy - All details should have true, accurate and exact description of what has happened',
                'Concise - Information should be brief and correct without accuracy reduction',
                'Complete - Report should contain all information related to the incident to reduce delay',
                'Objective - Impartiality should be practiced to reduce confusion',
                'Descriptive - Full description on patterns of people, vehicles and objects involved as well as the way in which the incident took place',
                'Honest - Honesty is the best policy. Do not report fake incidents or lies and remain truthful and trustworthy',
            ],
            questionsInReporting: [
                'Who is or was involved?',
                'What happened?',
                'When did it happen?',
                'Where did it happen?',
                'Why did it happen?',
                'How was it resolved?',
            ],
            components: [
                'Heading',
                'Body',
                'Recommendations',
                'Suggestions',
                'Conclusion',
            ],
        },
    },
};

export default {
    grades,
    alphabet,
    numbers,
    radioCommands,
    radioHandling,
    radioChecks,
    radioProcedure,
    signage,
    classesOfFire,
    typesOfFireExtinguisher,
    legislation,
    scheduleOneOffences,
};