/**************** 
 * Pilot 2 Test *
 ****************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2023.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Pilot 2';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(WelcomeScreenRoutineBegin());
flowScheduler.add(WelcomeScreenRoutineEachFrame());
flowScheduler.add(WelcomeScreenRoutineEnd());
flowScheduler.add(Instruction_Set_Up_1RoutineBegin());
flowScheduler.add(Instruction_Set_Up_1RoutineEachFrame());
flowScheduler.add(Instruction_Set_Up_1RoutineEnd());
flowScheduler.add(Instruction_Set_Up_2RoutineBegin());
flowScheduler.add(Instruction_Set_Up_2RoutineEachFrame());
flowScheduler.add(Instruction_Set_Up_2RoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(ThankYouScreenRoutineBegin());
flowScheduler.add(ThankYouScreenRoutineEachFrame());
flowScheduler.add(ThankYouScreenRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'random_trials.xlsx', 'path': 'random_trials.xlsx'},
    {'name': 'Videos/short_gesture.xlsx', 'path': 'Videos/short_gesture.xlsx'},
    {'name': 'Videos/short_gesture/ful.mp4', 'path': 'Videos/short_gesture/ful.mp4'},
    {'name': 'Videos/short_gesture/hus.mp4', 'path': 'Videos/short_gesture/hus.mp4'},
    {'name': 'Videos/short_gesture/ing.mp4', 'path': 'Videos/short_gesture/ing.mp4'},
    {'name': 'Videos/short_gesture/kint.mp4', 'path': 'Videos/short_gesture/kint.mp4'},
    {'name': 'Videos/short_gesture/lap.mp4', 'path': 'Videos/short_gesture/lap.mp4'},
    {'name': 'Videos/short_gesture/ret.mp4', 'path': 'Videos/short_gesture/ret.mp4'},
    {'name': 'Videos/short_gesture/sas.mp4', 'path': 'Videos/short_gesture/sas.mp4'},
    {'name': 'Videos/short_gesture/szep.mp4', 'path': 'Videos/short_gesture/szep.mp4'},
    {'name': 'Videos/short_gesture/ut.mp4', 'path': 'Videos/short_gesture/ut.mp4'},
    {'name': 'Videos/short_gesture/zold.mp4', 'path': 'Videos/short_gesture/zold.mp4'},
    {'name': 'distractorA.xlsx', 'path': 'distractorA.xlsx'},
    {'name': 'RecallQuestionsShortGesture.xlsx', 'path': 'RecallQuestionsShortGesture.xlsx'},
    {'name': 'Videos/short_nogesture.xlsx', 'path': 'Videos/short_nogesture.xlsx'},
    {'name': 'Videos/short_nogesture/fa.mp4', 'path': 'Videos/short_nogesture/fa.mp4'},
    {'name': 'Videos/short_nogesture/kek.mp4', 'path': 'Videos/short_nogesture/kek.mp4'},
    {'name': 'Videos/short_nogesture/kert.mp4', 'path': 'Videos/short_nogesture/kert.mp4'},
    {'name': 'Videos/short_nogesture/konyv.mp4', 'path': 'Videos/short_nogesture/konyv.mp4'},
    {'name': 'Videos/short_nogesture/lent.mp4', 'path': 'Videos/short_nogesture/lent.mp4'},
    {'name': 'Videos/short_nogesture/nagy.mp4', 'path': 'Videos/short_nogesture/nagy.mp4'},
    {'name': 'Videos/short_nogesture/orr.mp4', 'path': 'Videos/short_nogesture/orr.mp4'},
    {'name': 'Videos/short_nogesture/rak.mp4', 'path': 'Videos/short_nogesture/rak.mp4'},
    {'name': 'Videos/short_nogesture/rizs.mp4', 'path': 'Videos/short_nogesture/rizs.mp4'},
    {'name': 'Videos/short_nogesture/sal.mp4', 'path': 'Videos/short_nogesture/sal.mp4'},
    {'name': 'distractorB.xlsx', 'path': 'distractorB.xlsx'},
    {'name': 'RecallQuestionsShortNoGesture.xlsx', 'path': 'RecallQuestionsShortNoGesture.xlsx'},
    {'name': 'Videos/long_gesture.xlsx', 'path': 'Videos/long_gesture.xlsx'},
    {'name': 'Videos/long_gesture/goromba.mp4', 'path': 'Videos/long_gesture/goromba.mp4'},
    {'name': 'Videos/long_gesture/hirtelen.mp4', 'path': 'Videos/long_gesture/hirtelen.mp4'},
    {'name': 'Videos/long_gesture/kiscica.mp4', 'path': 'Videos/long_gesture/kiscica.mp4'},
    {'name': 'Videos/long_gesture/vizeses.mp4', 'path': 'Videos/long_gesture/vizeses.mp4'},
    {'name': 'Videos/long_gesture/allkapocs.mp4', 'path': 'Videos/long_gesture/allkapocs.mp4'},
    {'name': 'Videos/long_gesture/nyakkendo.mp4', 'path': 'Videos/long_gesture/nyakkendo.mp4'},
    {'name': 'Videos/long_gesture/rozsaszin.mp4', 'path': 'Videos/long_gesture/rozsaszin.mp4'},
    {'name': 'Videos/long_gesture/vonalzo.mp4', 'path': 'Videos/long_gesture/vonalzo.mp4'},
    {'name': 'Videos/long_gesture/palota.mp4', 'path': 'Videos/long_gesture/palota.mp4'},
    {'name': 'Videos/long_gesture/edesseg.mp4', 'path': 'Videos/long_gesture/edesseg.mp4'},
    {'name': 'distractorC.xlsx', 'path': 'distractorC.xlsx'},
    {'name': 'RecallQuestionsLongGesture.xlsx', 'path': 'RecallQuestionsLongGesture.xlsx'},
    {'name': 'Videos/long_nogesture.xlsx', 'path': 'Videos/long_nogesture.xlsx'},
    {'name': 'Videos/long_nogesture/biztosan.mp4', 'path': 'Videos/long_nogesture/biztosan.mp4'},
    {'name': 'Videos/long_nogesture/ceruza.mp4', 'path': 'Videos/long_nogesture/ceruza.mp4'},
    {'name': 'Videos/long_nogesture/ostoba.mp4', 'path': 'Videos/long_nogesture/ostoba.mp4'},
    {'name': 'Videos/long_nogesture/szemuveg.mp4', 'path': 'Videos/long_nogesture/szemuveg.mp4'},
    {'name': 'Videos/long_nogesture/egyetem.mp4', 'path': 'Videos/long_nogesture/egyetem.mp4'},
    {'name': 'Videos/long_nogesture/reggeli.mp4', 'path': 'Videos/long_nogesture/reggeli.mp4'},
    {'name': 'Videos/long_nogesture/falevel.mp4', 'path': 'Videos/long_nogesture/falevel.mp4'},
    {'name': 'Videos/long_nogesture/fekete.mp4', 'path': 'Videos/long_nogesture/fekete.mp4'},
    {'name': 'Videos/long_nogesture/labujjak.mp4', 'path': 'Videos/long_nogesture/labujjak.mp4'},
    {'name': 'Videos/long_nogesture/oroszlan.mp4', 'path': 'Videos/long_nogesture/oroszlan.mp4'},
    {'name': 'distractorD.xlsx', 'path': 'distractorD.xlsx'},
    {'name': 'RecallQuestionsLongNoGesture.xlsx', 'path': 'RecallQuestionsLongNoGesture.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);

var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);


  return Scheduler.Event.NEXT;
}


var WelcomeScreenClock;
var WelcomeText;
var Welcome_key_resp;
var Instruction_Set_Up_1Clock;
var setupinstructions;
var key_resp;
var Instruction_Set_Up_2Clock;
var text_8;
var key_resp_3;
var Instruction_trialsClock;
var InstructionsBeforeVideos;
var Instruction_vids_key_resp;
var TrialShortGestureClock;
var instructionDistractorClock;
var text_13;
var key_resp_2;
var distractorblockAClock;
var text_12;
var textbox;
var InstructionsRecallClock;
var instructionsRecall;
var Instructions_key_resp_3;
var recallshortgestureClock;
var text_14;
var kes_resp_recall1;
var TrialShortNoGestureClock;
var distractorblockBClock;
var text_2;
var textboxB;
var RecallShortNoGestureClock;
var text_3;
var kes_resp_recall2;
var TrialLongGestureClock;
var distractorblockCClock;
var text_4;
var textboxC;
var RecallLongGestureClock;
var text_5;
var kes_resp_recall3;
var TrialLongNoGestureClock;
var distractorblockDClock;
var text_6;
var textboxD;
var RecallLongNoGestureClock;
var text_7;
var kes_resp_recall4;
var ThankYouScreenClock;
var text;
var globalClock;
var routineTimer;
var videosshortgestureClock;
var videosshortgesture;
var videosshortnogesture;
var videosshortnogestureClock;
var videoslonggesture;
var videoslongnogesture;
var videoslonggestureClock;
var videoslongnogestureClock;

async function experimentInit() {
  // Initialize components for Routine "WelcomeScreen"
  WelcomeScreenClock = new util.Clock();
  WelcomeText = new visual.TextStim({
    win: psychoJS.window,
    name: 'WelcomeText',
    text: 'Welcome to our experiment for the study \n\nFocus on the beat: Learning a novel language \n\nPress SPACE to continue.\u202f ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });

  Welcome_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instruction_Set_Up_1"
  Instruction_Set_Up_1Clock = new util.Clock();
  setupinstructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'setupinstructions',
    text: 'You will now learn some Hungarian vocabulary.\nThe experiment constists of 4 blocks. \n\nIn each block we will show you videos, followed by some tasks to see how well you remembered them.\n\nPress SPACE to continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instruction_Set_Up_2"
  Instruction_Set_Up_2Clock = new util.Clock();
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: 'Please make sure you are in a quiet environment where you can remain focused during the whole experiment.\n\nYou will be presented with videos including sound, so make sure that your computer audio is turned on. \nWe recommend using headphones to ensure you can understand everything correctly.\n\nPress SPACE  to continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instruction_trials"
  Instruction_trialsClock = new util.Clock();
  InstructionsBeforeVideos = new visual.TextStim({
    win: psychoJS.window,
    name: 'InstructionsBeforeVideos',
    text: 'You will now be shown a video.  \n\nIt will show a list of 10 Hungarian words and their english translation. \n\nTry to remember as many as you can. You are not allowed to write them down.  \n\nPay attention, as you will be tested on the translation of the words afterwards! \n\nPress SPACE to continue. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Instruction_vids_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TrialShortGesture"
  TrialShortGestureClock = new util.Clock();
  videosshortgestureClock = new util.Clock();
  videosshortgesture = new visual.MovieStim({
    win: psychoJS.window,
    name: 'videosshortgesture',
    units: psychoJS.window.units,
    movie: undefined,
    pos: [0, 0],
    anchor: 'center',
    size: [1, 0.67],
    ori: 0.0,
    opacity: undefined,
    loop: false,
    noAudio: false,
    depth: 0
    });
  // Initialize components for Routine "instructionDistractor"
  instructionDistractorClock = new util.Clock();
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: 'Good job!  \n\nIn the next part, you will be shown 10 simple math exercises.  \n\nThe operations will appear one by one onscreen. Each excersise will be on screen for 6 seconds.\n\nYou can answer by typing in the solution on your keyboard. \n\nPress SPACE to continue. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "distractorblockA"
  distractorblockAClock = new util.Clock();
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0, (- 0.2)], 
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [null, null],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  // Initialize components for Routine "InstructionsRecall"
  InstructionsRecallClock = new util.Clock();
  instructionsRecall = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructionsRecall',
    text: 'We will now ask you to connect the prior shown Hungarian words to its English meaning. \n\nYou can answer by pressing the numbers 1,2,3,4 on your keyboard, corresponding to your answer\n\nPlease answer the following questions. You can take as much time answering as you need. \n\nPress SPACE to continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Instructions_key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "recallshortgesture"
  recallshortgestureClock = new util.Clock();
  text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  kes_resp_recall1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TrialShortNoGesture"
  TrialShortNoGestureClock = new util.Clock();
  videosshortnogestureClock = new util.Clock();
  videosshortnogesture = new visual.MovieStim({
    win: psychoJS.window,
    name: 'videosshortnogesture',
    units: psychoJS.window.units,
    movie: undefined,
    pos: [0, 0],
    anchor: 'center',
    size: [1, 0.67],
    ori: 0.0,
    opacity: undefined,
    loop: false,
    noAudio: false,
    depth: 0
    });
  // Initialize components for Routine "distractorblockB"
  distractorblockBClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  textboxB = new visual.TextBox({
    win: psychoJS.window,
    name: 'textboxB',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0, (- 0.2)], 
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [null, null],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  // Initialize components for Routine "RecallShortNoGesture"
  RecallShortNoGestureClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  kes_resp_recall2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TrialLongGesture"
  TrialLongGestureClock = new util.Clock();
  videoslonggestureClock = new util.Clock();
  videoslonggesture = new visual.MovieStim({
    win: psychoJS.window,
    name: 'videoslonggesture',
    units: psychoJS.window.units,
    movie: undefined,
    pos: [0, 0],
    anchor: 'center',
    size: [1, 0.67],
    ori: 0.0,
    opacity: undefined,
    loop: false,
    noAudio: false,
    depth: 0
    });
  // Initialize components for Routine "distractorblockC"
  distractorblockCClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  textboxC = new visual.TextBox({
    win: psychoJS.window,
    name: 'textboxC',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0, (- 0.2)], 
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [null, null],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  // Initialize components for Routine "RecallLongGesture"
  RecallLongGestureClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  kes_resp_recall3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "TrialLongNoGesture"
  TrialLongNoGestureClock = new util.Clock();
  movieClock = new util.Clock();
  movie = new visual.MovieStim({
    win: psychoJS.window,
    name: 'movie',
    units: psychoJS.window.units,
    movie: undefined,
    pos: [0, 0],
    anchor: 'center',
    size: [1, 0.67],
    ori: 0.0,
    opacity: undefined,
    loop: false,
    noAudio: false,
    depth: 0
    });
  // Initialize components for Routine "distractorblockD"
  distractorblockDClock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  textboxD = new visual.TextBox({
    win: psychoJS.window,
    name: 'textboxD',
    text: '',
    placeholder: 'Type here...',
    font: 'Open Sans',
    pos: [0, (- 0.2)], 
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [null, null],  units: undefined, 
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  // Initialize components for Routine "RecallLongNoGesture"
  RecallLongNoGestureClock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  kes_resp_recall4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ThankYouScreen"
  ThankYouScreenClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'You have reached the end of our study! Press SPACE to complete your trial.\n\nYou can then close this window.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function WelcomeScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'WelcomeScreen' ---
    t = 0;
    WelcomeScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Welcome_key_resp.keys = undefined;
    Welcome_key_resp.rt = undefined;
    _Welcome_key_resp_allKeys = [];
    // keep track of which components have finished
    WelcomeScreenComponents = [];
    WelcomeScreenComponents.push(WelcomeText);
    WelcomeScreenComponents.push(Welcome_key_resp);
    
    for (const thisComponent of WelcomeScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function WelcomeScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'WelcomeScreen' ---
    // get current time
    t = WelcomeScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *WelcomeText* updates
    if (t >= 0.0 && WelcomeText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      WelcomeText.tStart = t;  // (not accounting for frame time here)
      WelcomeText.frameNStart = frameN;  // exact frame index
      
      WelcomeText.setAutoDraw(true);
    }

    
    // *Welcome_key_resp* updates
    if (t >= 0.0 && Welcome_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Welcome_key_resp.tStart = t;  // (not accounting for frame time here)
      Welcome_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Welcome_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Welcome_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Welcome_key_resp.clearEvents(); });
    }

    if (Welcome_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Welcome_key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _Welcome_key_resp_allKeys = _Welcome_key_resp_allKeys.concat(theseKeys);
      if (_Welcome_key_resp_allKeys.length > 0) {
        Welcome_key_resp.keys = _Welcome_key_resp_allKeys[_Welcome_key_resp_allKeys.length - 1].name;  // just the last key pressed
        Welcome_key_resp.rt = _Welcome_key_resp_allKeys[_Welcome_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WelcomeScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function WelcomeScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'WelcomeScreen' ---
    for (const thisComponent of WelcomeScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Welcome_key_resp.corr, level);
    }
    psychoJS.experiment.addData('Welcome_key_resp.keys', Welcome_key_resp.keys);
    if (typeof Welcome_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Welcome_key_resp.rt', Welcome_key_resp.rt);
        routineTimer.reset();
        }
    
    Welcome_key_resp.stop();
    // the Routine "WelcomeScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Instruction_Set_Up_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction_Set_Up_1' ---
    t = 0;
    Instruction_Set_Up_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    Instruction_Set_Up_1Components = [];
    Instruction_Set_Up_1Components.push(setupinstructions);
    Instruction_Set_Up_1Components.push(key_resp);
    
    for (const thisComponent of Instruction_Set_Up_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Instruction_Set_Up_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction_Set_Up_1' ---
    // get current time
    t = Instruction_Set_Up_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *setupinstructions* updates
    if (t >= 0.0 && setupinstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      setupinstructions.tStart = t;  // (not accounting for frame time here)
      setupinstructions.frameNStart = frameN;  // exact frame index
      
      setupinstructions.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruction_Set_Up_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Instruction_Set_Up_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruction_Set_Up_1' ---
    for (const thisComponent of Instruction_Set_Up_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "Instruction_Set_Up_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Instruction_Set_Up_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction_Set_Up_2' ---
    t = 0;
    Instruction_Set_Up_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    Instruction_Set_Up_2Components = [];
    Instruction_Set_Up_2Components.push(text_8);
    Instruction_Set_Up_2Components.push(key_resp_3);
    
    for (const thisComponent of Instruction_Set_Up_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Instruction_Set_Up_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction_Set_Up_2' ---
    // get current time
    t = Instruction_Set_Up_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruction_Set_Up_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Instruction_Set_Up_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruction_Set_Up_2' ---
    for (const thisComponent of Instruction_Set_Up_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "Instruction_Set_Up_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'random_trials.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      const trialshortgestureLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(trialshortgestureLoopBegin(trialshortgestureLoopScheduler, snapshot));
      trialsLoopScheduler.add(trialshortgestureLoopScheduler);
      trialsLoopScheduler.add(trialshortgestureLoopEnd);
      const trialshortnogestureLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(trialshortnogestureLoopBegin(trialshortnogestureLoopScheduler, snapshot));
      trialsLoopScheduler.add(trialshortnogestureLoopScheduler);
      trialsLoopScheduler.add(trialshortnogestureLoopEnd);
      const triallonggestureLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(triallonggestureLoopBegin(triallonggestureLoopScheduler, snapshot));
      trialsLoopScheduler.add(triallonggestureLoopScheduler);
      trialsLoopScheduler.add(triallonggestureLoopEnd);
      const triallongnogestureLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(triallongnogestureLoopBegin(triallongnogestureLoopScheduler, snapshot));
      trialsLoopScheduler.add(triallongnogestureLoopScheduler);
      trialsLoopScheduler.add(triallongnogestureLoopEnd);
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

function trialshortgestureLoopBegin(trialshortgestureLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialshortgesture = new TrialHandler({
      psychoJS: psychoJS,
      nReps: Trial1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trialshortgesture'
    });
    psychoJS.experiment.addLoop(trialshortgesture); // add the loop to the experiment
    currentLoop = trialshortgesture;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrialshortgesture of trialshortgesture) {
      snapshot = trialshortgesture.getSnapshot();
      trialshortgestureLoopScheduler.add(importConditions(snapshot));
      trialshortgestureLoopScheduler.add(Instruction_trialsRoutineBegin(snapshot));
      trialshortgestureLoopScheduler.add(Instruction_trialsRoutineEachFrame());
      trialshortgestureLoopScheduler.add(Instruction_trialsRoutineEnd(snapshot));
      const StimuliShortGestureLoopScheduler = new Scheduler(psychoJS);
      trialshortgestureLoopScheduler.add(StimuliShortGestureLoopBegin(StimuliShortGestureLoopScheduler, snapshot));
      trialshortgestureLoopScheduler.add(StimuliShortGestureLoopScheduler);
      trialshortgestureLoopScheduler.add(StimuliShortGestureLoopEnd);
      trialshortgestureLoopScheduler.add(instructionDistractorRoutineBegin(snapshot));
      trialshortgestureLoopScheduler.add(instructionDistractorRoutineEachFrame());
      trialshortgestureLoopScheduler.add(instructionDistractorRoutineEnd(snapshot));
      const distractortaskALoopScheduler = new Scheduler(psychoJS);
      trialshortgestureLoopScheduler.add(distractortaskALoopBegin(distractortaskALoopScheduler, snapshot));
      trialshortgestureLoopScheduler.add(distractortaskALoopScheduler);
      trialshortgestureLoopScheduler.add(distractortaskALoopEnd);
      trialshortgestureLoopScheduler.add(InstructionsRecallRoutineBegin(snapshot));
      trialshortgestureLoopScheduler.add(InstructionsRecallRoutineEachFrame());
      trialshortgestureLoopScheduler.add(InstructionsRecallRoutineEnd(snapshot));
      const recall1LoopScheduler = new Scheduler(psychoJS);
      trialshortgestureLoopScheduler.add(recall1LoopBegin(recall1LoopScheduler, snapshot));
      trialshortgestureLoopScheduler.add(recall1LoopScheduler);
      trialshortgestureLoopScheduler.add(recall1LoopEnd);
      trialshortgestureLoopScheduler.add(trialshortgestureLoopEndIteration(trialshortgestureLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

function StimuliShortGestureLoopBegin(StimuliShortGestureLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    StimuliShortGesture = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Videos/short_gesture.xlsx',
      seed: undefined, name: 'StimuliShortGesture'
    });
    psychoJS.experiment.addLoop(StimuliShortGesture); // add the loop to the experiment
    currentLoop = StimuliShortGesture;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisStimulusShortGesture of StimuliShortGesture) {
      snapshot = StimuliShortGesture.getSnapshot();
      StimuliShortGestureLoopScheduler.add(importConditions(snapshot));
      StimuliShortGestureLoopScheduler.add(TrialShortGestureRoutineBegin(snapshot));
      StimuliShortGestureLoopScheduler.add(TrialShortGestureRoutineEachFrame());
      StimuliShortGestureLoopScheduler.add(TrialShortGestureRoutineEnd(snapshot));
      StimuliShortGestureLoopScheduler.add(StimuliShortGestureLoopEndIteration(StimuliShortGestureLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function StimuliShortGestureLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(StimuliShortGesture);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function StimuliShortGestureLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function distractortaskALoopBegin(distractortaskALoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    distractortaskA = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'distractorA.xlsx',
      seed: undefined, name: 'distractortaskA'
    });
    psychoJS.experiment.addLoop(distractortaskA); // add the loop to the experiment
    currentLoop = distractortaskA;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisDistractortaskA of distractortaskA) {
      snapshot = distractortaskA.getSnapshot();
      distractortaskALoopScheduler.add(importConditions(snapshot));
      distractortaskALoopScheduler.add(distractorblockARoutineBegin(snapshot));
      distractortaskALoopScheduler.add(distractorblockARoutineEachFrame());
      distractortaskALoopScheduler.add(distractorblockARoutineEnd(snapshot));
      distractortaskALoopScheduler.add(distractortaskALoopEndIteration(distractortaskALoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function distractortaskALoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(distractortaskA);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function distractortaskALoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function recall1LoopBegin(recall1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    recall1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'RecallQuestionsShortGesture.xlsx',
      seed: undefined, name: 'recall1'
    });
    psychoJS.experiment.addLoop(recall1); // add the loop to the experiment
    currentLoop = recall1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRecall1 of recall1) {
      snapshot = recall1.getSnapshot();
      recall1LoopScheduler.add(importConditions(snapshot));
      recall1LoopScheduler.add(recallshortgestureRoutineBegin(snapshot));
      recall1LoopScheduler.add(recallshortgestureRoutineEachFrame());
      recall1LoopScheduler.add(recallshortgestureRoutineEnd(snapshot));
      recall1LoopScheduler.add(recall1LoopEndIteration(recall1LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function recall1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(recall1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function recall1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

async function trialshortgestureLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trialshortgesture);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trialshortgestureLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function trialshortnogestureLoopBegin(trialshortnogestureLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialshortnogesture = new TrialHandler({
      psychoJS: psychoJS,
      nReps: Trial2, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trialshortnogesture'
    });
    psychoJS.experiment.addLoop(trialshortnogesture); // add the loop to the experiment
    currentLoop = trialshortnogesture;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrialshortnogesture of trialshortnogesture) {
      snapshot = trialshortnogesture.getSnapshot();
      trialshortnogestureLoopScheduler.add(importConditions(snapshot));
      trialshortnogestureLoopScheduler.add(Instruction_trialsRoutineBegin(snapshot));
      trialshortnogestureLoopScheduler.add(Instruction_trialsRoutineEachFrame());
      trialshortnogestureLoopScheduler.add(Instruction_trialsRoutineEnd(snapshot));
      const StimuliShortNoGestureLoopScheduler = new Scheduler(psychoJS);
      trialshortnogestureLoopScheduler.add(StimuliShortNoGestureLoopBegin(StimuliShortNoGestureLoopScheduler, snapshot));
      trialshortnogestureLoopScheduler.add(StimuliShortNoGestureLoopScheduler);
      trialshortnogestureLoopScheduler.add(StimuliShortNoGestureLoopEnd);
      trialshortnogestureLoopScheduler.add(instructionDistractorRoutineBegin(snapshot));
      trialshortnogestureLoopScheduler.add(instructionDistractorRoutineEachFrame());
      trialshortnogestureLoopScheduler.add(instructionDistractorRoutineEnd(snapshot));
      const distractortaskBLoopScheduler = new Scheduler(psychoJS);
      trialshortnogestureLoopScheduler.add(distractortaskBLoopBegin(distractortaskBLoopScheduler, snapshot));
      trialshortnogestureLoopScheduler.add(distractortaskBLoopScheduler);
      trialshortnogestureLoopScheduler.add(distractortaskBLoopEnd);
      trialshortnogestureLoopScheduler.add(InstructionsRecallRoutineBegin(snapshot));
      trialshortnogestureLoopScheduler.add(InstructionsRecallRoutineEachFrame());
      trialshortnogestureLoopScheduler.add(InstructionsRecallRoutineEnd(snapshot));
      const recall2LoopScheduler = new Scheduler(psychoJS);
      trialshortnogestureLoopScheduler.add(recall2LoopBegin(recall2LoopScheduler, snapshot));
      trialshortnogestureLoopScheduler.add(recall2LoopScheduler);
      trialshortnogestureLoopScheduler.add(recall2LoopEnd);
      trialshortnogestureLoopScheduler.add(trialshortnogestureLoopEndIteration(trialshortnogestureLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

function StimuliShortNoGestureLoopBegin(StimuliShortNoGestureLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    StimuliShortNoGesture = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Videos/short_nogesture.xlsx',
      seed: undefined, name: 'StimuliShortNoGesture'
    });
    psychoJS.experiment.addLoop(StimuliShortNoGesture); // add the loop to the experiment
    currentLoop = StimuliShortNoGesture;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisStimulusShortNoGesture of StimuliShortNoGesture) {
      snapshot = StimuliShortNoGesture.getSnapshot();
      StimuliShortNoGestureLoopScheduler.add(importConditions(snapshot));
      StimuliShortNoGestureLoopScheduler.add(TrialShortNoGestureRoutineBegin(snapshot));
      StimuliShortNoGestureLoopScheduler.add(TrialShortNoGestureRoutineEachFrame());
      StimuliShortNoGestureLoopScheduler.add(TrialShortNoGestureRoutineEnd(snapshot));
      StimuliShortNoGestureLoopScheduler.add(StimuliShortNoGestureLoopEndIteration(StimuliShortNoGestureLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function StimuliShortNoGestureLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(StimuliShortNoGesture);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function StimuliShortNoGestureLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function distractortaskBLoopBegin(distractortaskBLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    distractortaskB = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'distractorB.xlsx',
      seed: undefined, name: 'distractortaskB'
    });
    psychoJS.experiment.addLoop(distractortaskB); // add the loop to the experiment
    currentLoop = distractortaskB;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisDistractortaskB of distractortaskB) {
      snapshot = distractortaskB.getSnapshot();
      distractortaskBLoopScheduler.add(importConditions(snapshot));
      distractortaskBLoopScheduler.add(distractorblockBRoutineBegin(snapshot));
      distractortaskBLoopScheduler.add(distractorblockBRoutineEachFrame());
      distractortaskBLoopScheduler.add(distractorblockBRoutineEnd(snapshot));
      distractortaskBLoopScheduler.add(distractortaskBLoopEndIteration(distractortaskBLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function distractortaskBLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(distractortaskB);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function distractortaskBLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function recall2LoopBegin(recall2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    recall2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'RecallQuestionsShortNoGesture.xlsx',
      seed: undefined, name: 'recall2'
    });
    psychoJS.experiment.addLoop(recall2); // add the loop to the experiment
    currentLoop = recall2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRecall2 of recall2) {
      snapshot = recall2.getSnapshot();
      recall2LoopScheduler.add(importConditions(snapshot));
      recall2LoopScheduler.add(RecallShortNoGestureRoutineBegin(snapshot));
      recall2LoopScheduler.add(RecallShortNoGestureRoutineEachFrame());
      recall2LoopScheduler.add(RecallShortNoGestureRoutineEnd(snapshot));
      recall2LoopScheduler.add(recall2LoopEndIteration(recall2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function recall2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(recall2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function recall2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}

async function trialshortnogestureLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trialshortnogesture);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trialshortnogestureLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function triallonggestureLoopBegin(triallonggestureLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    triallonggesture = new TrialHandler({
      psychoJS: psychoJS,
      nReps: Trial3, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'triallonggesture'
    });
    psychoJS.experiment.addLoop(triallonggesture); // add the loop to the experiment
    currentLoop = triallonggesture;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTriallonggesture of triallonggesture) {
      snapshot = triallonggesture.getSnapshot();
      triallonggestureLoopScheduler.add(importConditions(snapshot));
      triallonggestureLoopScheduler.add(Instruction_trialsRoutineBegin(snapshot));
      triallonggestureLoopScheduler.add(Instruction_trialsRoutineEachFrame());
      triallonggestureLoopScheduler.add(Instruction_trialsRoutineEnd(snapshot));
      const StimuliLongGestureLoopScheduler = new Scheduler(psychoJS);
      triallonggestureLoopScheduler.add(StimuliLongGestureLoopBegin(StimuliLongGestureLoopScheduler, snapshot));
      triallonggestureLoopScheduler.add(StimuliLongGestureLoopScheduler);
      triallonggestureLoopScheduler.add(StimuliLongGestureLoopEnd);
      triallonggestureLoopScheduler.add(instructionDistractorRoutineBegin(snapshot));
      triallonggestureLoopScheduler.add(instructionDistractorRoutineEachFrame());
      triallonggestureLoopScheduler.add(instructionDistractorRoutineEnd(snapshot));
      const distractortaskCLoopScheduler = new Scheduler(psychoJS);
      triallonggestureLoopScheduler.add(distractortaskCLoopBegin(distractortaskCLoopScheduler, snapshot));
      triallonggestureLoopScheduler.add(distractortaskCLoopScheduler);
      triallonggestureLoopScheduler.add(distractortaskCLoopEnd);
      triallonggestureLoopScheduler.add(InstructionsRecallRoutineBegin(snapshot));
      triallonggestureLoopScheduler.add(InstructionsRecallRoutineEachFrame());
      triallonggestureLoopScheduler.add(InstructionsRecallRoutineEnd(snapshot));
      const recall3LoopScheduler = new Scheduler(psychoJS);
      triallonggestureLoopScheduler.add(recall3LoopBegin(recall3LoopScheduler, snapshot));
      triallonggestureLoopScheduler.add(recall3LoopScheduler);
      triallonggestureLoopScheduler.add(recall3LoopEnd);
      triallonggestureLoopScheduler.add(triallonggestureLoopEndIteration(triallonggestureLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

function StimuliLongGestureLoopBegin(StimuliLongGestureLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    StimuliLongGesture = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Videos/long_gesture.xlsx',
      seed: undefined, name: 'StimuliLongGesture'
    });
    psychoJS.experiment.addLoop(StimuliLongGesture); // add the loop to the experiment
    currentLoop = StimuliLongGesture;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisStimulusLongGesture of StimuliLongGesture) {
      snapshot = StimuliLongGesture.getSnapshot();
      StimuliLongGestureLoopScheduler.add(importConditions(snapshot));
      StimuliLongGestureLoopScheduler.add(TrialLongGestureRoutineBegin(snapshot));
      StimuliLongGestureLoopScheduler.add(TrialLongGestureRoutineEachFrame());
      StimuliLongGestureLoopScheduler.add(TrialLongGestureRoutineEnd(snapshot));
      StimuliLongGestureLoopScheduler.add(StimuliLongGestureLoopEndIteration(StimuliLongGestureLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function StimuliLongGestureLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(StimuliLongGesture);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function StimuliLongGestureLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function distractortaskCLoopBegin(distractortaskCLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    distractortaskC = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'distractorC.xlsx',
      seed: undefined, name: 'distractortaskC'
    });
    psychoJS.experiment.addLoop(distractortaskC); // add the loop to the experiment
    currentLoop = distractortaskC;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisDistractortaskC of distractortaskC) {
      snapshot = distractortaskC.getSnapshot();
      distractortaskCLoopScheduler.add(importConditions(snapshot));
      distractortaskCLoopScheduler.add(distractorblockCRoutineBegin(snapshot));
      distractortaskCLoopScheduler.add(distractorblockCRoutineEachFrame());
      distractortaskCLoopScheduler.add(distractorblockCRoutineEnd(snapshot));
      distractortaskCLoopScheduler.add(distractortaskCLoopEndIteration(distractortaskCLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function distractortaskCLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(distractortaskC);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function distractortaskCLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function recall3LoopBegin(recall3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    recall3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'RecallQuestionsLongGesture.xlsx',
      seed: undefined, name: 'recall3'
    });
    psychoJS.experiment.addLoop(recall3); // add the loop to the experiment
    currentLoop = recall3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRecall3 of recall3) {
      snapshot = recall3.getSnapshot();
      recall3LoopScheduler.add(importConditions(snapshot));
      recall3LoopScheduler.add(RecallLongGestureRoutineBegin(snapshot));
      recall3LoopScheduler.add(RecallLongGestureRoutineEachFrame());
      recall3LoopScheduler.add(RecallLongGestureRoutineEnd(snapshot));
      recall3LoopScheduler.add(recall3LoopEndIteration(recall3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function recall3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(recall3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function recall3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}

async function triallonggestureLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(triallonggesture);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function triallonggestureLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function triallongnogestureLoopBegin(triallongnogestureLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    triallongnogesture = new TrialHandler({
      psychoJS: psychoJS,
      nReps: Trial4, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'triallongnogesture'
    });
    psychoJS.experiment.addLoop(triallongnogesture); // add the loop to the experiment
    currentLoop = triallongnogesture;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTriallongnogesture of triallongnogesture) {
      snapshot = triallongnogesture.getSnapshot();
      triallongnogestureLoopScheduler.add(importConditions(snapshot));
      triallongnogestureLoopScheduler.add(Instruction_trialsRoutineBegin(snapshot));
      triallongnogestureLoopScheduler.add(Instruction_trialsRoutineEachFrame());
      triallongnogestureLoopScheduler.add(Instruction_trialsRoutineEnd(snapshot));
      const StimuliLongNoGestureLoopScheduler = new Scheduler(psychoJS);
      triallongnogestureLoopScheduler.add(StimuliLongNoGestureLoopBegin(StimuliLongNoGestureLoopScheduler, snapshot));
      triallongnogestureLoopScheduler.add(StimuliLongNoGestureLoopScheduler);
      triallongnogestureLoopScheduler.add(StimuliLongNoGestureLoopEnd);
      triallongnogestureLoopScheduler.add(instructionDistractorRoutineBegin(snapshot));
      triallongnogestureLoopScheduler.add(instructionDistractorRoutineEachFrame());
      triallongnogestureLoopScheduler.add(instructionDistractorRoutineEnd(snapshot));
      const distractortaskDLoopScheduler = new Scheduler(psychoJS);
      triallongnogestureLoopScheduler.add(distractortaskDLoopBegin(distractortaskDLoopScheduler, snapshot));
      triallongnogestureLoopScheduler.add(distractortaskDLoopScheduler);
      triallongnogestureLoopScheduler.add(distractortaskDLoopEnd);
      triallongnogestureLoopScheduler.add(InstructionsRecallRoutineBegin(snapshot));
      triallongnogestureLoopScheduler.add(InstructionsRecallRoutineEachFrame());
      triallongnogestureLoopScheduler.add(InstructionsRecallRoutineEnd(snapshot));
      const recall4LoopScheduler = new Scheduler(psychoJS);
      triallongnogestureLoopScheduler.add(recall4LoopBegin(recall4LoopScheduler, snapshot));
      triallongnogestureLoopScheduler.add(recall4LoopScheduler);
      triallongnogestureLoopScheduler.add(recall4LoopEnd);
      triallongnogestureLoopScheduler.add(triallongnogestureLoopEndIteration(triallongnogestureLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

function StimuliLongNoGestureLoopBegin(StimuliLongNoGestureLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    StimuliLongNoGesture = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Videos/long_nogesture.xlsx',
      seed: undefined, name: 'StimuliLongNoGesture'
    });
    psychoJS.experiment.addLoop(StimuliLongNoGesture); // add the loop to the experiment
    currentLoop = StimuliLongNoGesture;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisStimulusLongNoGesture of StimuliLongNoGesture) {
      snapshot = StimuliLongNoGesture.getSnapshot();
      StimuliLongNoGestureLoopScheduler.add(importConditions(snapshot));
      StimuliLongNoGestureLoopScheduler.add(TrialLongNoGestureRoutineBegin(snapshot));
      StimuliLongNoGestureLoopScheduler.add(TrialLongNoGestureRoutineEachFrame());
      StimuliLongNoGestureLoopScheduler.add(TrialLongNoGestureRoutineEnd(snapshot));
      StimuliLongNoGestureLoopScheduler.add(StimuliLongNoGestureLoopEndIteration(StimuliLongNoGestureLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function StimuliLongNoGestureLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(StimuliLongNoGesture);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function StimuliLongNoGestureLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function distractortaskDLoopBegin(distractortaskDLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    distractortaskD = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'distractorD.xlsx',
      seed: undefined, name: 'distractortaskD'
    });
    psychoJS.experiment.addLoop(distractortaskD); // add the loop to the experiment
    currentLoop = distractortaskD;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisDistractortaskD of distractortaskD) {
      snapshot = distractortaskD.getSnapshot();
      distractortaskDLoopScheduler.add(importConditions(snapshot));
      distractortaskDLoopScheduler.add(distractorblockDRoutineBegin(snapshot));
      distractortaskDLoopScheduler.add(distractorblockDRoutineEachFrame());
      distractortaskDLoopScheduler.add(distractorblockDRoutineEnd(snapshot));
      distractortaskDLoopScheduler.add(distractortaskDLoopEndIteration(distractortaskDLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function distractortaskDLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(distractortaskD);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function distractortaskDLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function recall4LoopBegin(recall4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    recall4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'RecallQuestionsLongNoGesture.xlsx',
      seed: undefined, name: 'recall4'
    });
    psychoJS.experiment.addLoop(recall4); // add the loop to the experiment
    currentLoop = recall4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRecall4 of recall4) {
      snapshot = recall4.getSnapshot();
      recall4LoopScheduler.add(importConditions(snapshot));
      recall4LoopScheduler.add(RecallLongNoGestureRoutineBegin(snapshot));
      recall4LoopScheduler.add(RecallLongNoGestureRoutineEachFrame());
      recall4LoopScheduler.add(RecallLongNoGestureRoutineEnd(snapshot));
      recall4LoopScheduler.add(recall4LoopEndIteration(recall4LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function recall4LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(recall4);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function recall4LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}

async function triallongnogestureLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(triallongnogesture);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function triallongnogestureLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}

async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function Instruction_trialsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction_trials' ---
    t = 0;
    Instruction_trialsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Instruction_vids_key_resp.keys = undefined;
    Instruction_vids_key_resp.rt = undefined;
    _Instruction_vids_key_resp_allKeys = [];
    // keep track of which components have finished
    Instruction_trialsComponents = [];
    Instruction_trialsComponents.push(InstructionsBeforeVideos);
    Instruction_trialsComponents.push(Instruction_vids_key_resp);
    
    for (const thisComponent of Instruction_trialsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Instruction_trialsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction_trials' ---
    // get current time
    t = Instruction_trialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *InstructionsBeforeVideos* updates
    if (t >= 0.0 && InstructionsBeforeVideos.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InstructionsBeforeVideos.tStart = t;  // (not accounting for frame time here)
      InstructionsBeforeVideos.frameNStart = frameN;  // exact frame index
      
      InstructionsBeforeVideos.setAutoDraw(true);
    }

    
    // *Instruction_vids_key_resp* updates
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { Instruction_vids_key_resp.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { Instruction_vids_key_resp.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { Instruction_vids_key_resp.clearEvents(); });
  }

  if (Instruction_vids_key_resp.status === PsychoJS.Status.STARTED) {
    let theseKeys = Instruction_vids_key_resp.getKeys({keyList: ['space'], waitRelease: false});
    _Instruction_vids_key_resp_allKeys = _Instruction_vids_key_resp_allKeys.concat(theseKeys);
    if (_Instruction_vids_key_resp_allKeys.length > 0) {
      Instruction_vids_key_resp.keys = _Instruction_vids_key_resp_allKeys[_Instruction_vids_key_resp_allKeys.length - 1].name;  // just the last key pressed
      Instruction_vids_key_resp.rt = _Instruction_vids_key_resp_allKeys[_Instruction_vids_key_resp_allKeys.length - 1].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of Instruction_trialsComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  } else {
    return Scheduler.Event.NEXT;
  }
};


function Instruction_trialsRoutineEnd(snapshot) {
return async function () {
  //--- Ending Routine 'Instruction_trials' ---
  for (const thisComponent of Instruction_trialsComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // update the trial handler
  if (currentLoop instanceof MultiStairHandler) {
    currentLoop.addResponse(Instruction_vids_key_resp.corr, level);
  }
  psychoJS.experiment.addData('Instruction_vids_key_resp.keys', Instruction_vids_key_resp.keys);
  if (typeof Instruction_vids_key_resp.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('Instruction_vids_key_resp.rt', Instruction_vids_key_resp.rt);
      routineTimer.reset();
      }
  
  Instruction_vids_key_resp.stop();
  // the Routine "Instruction_trials" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  // Routines running outside a loop should always advance the datafile row
  if (currentLoop === psychoJS.experiment) {
    psychoJS.experiment.nextEntry(snapshot);
  }
  return Scheduler.Event.NEXT;
}
}

function TrialShortGestureRoutineBegin(snapshot) {
return async function () {
  TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
  
  //--- Prepare to start Routine 'TrialShortGesture' ---
  t = 0;
  TrialShortGestureClock.reset(); // clock
  frameN = -1;
  continueRoutine = true; // until we're told otherwise
  routineTimer.add(7.000000);
  // update component parameters for each repeat
  videosshortgesture.setMovie(shortgesture);
  // keep track of which components have finished
  TrialShortGestureComponents = [];
  TrialShortGestureComponents.push(videosshortgesture);
  
  for (const thisComponent of TrialShortGestureComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  return Scheduler.Event.NEXT;
}
}

function TrialShortGestureRoutineEachFrame() {
return async function () {
  //--- Loop for each frame of Routine 'TrialShortGesture' ---
  // get current time
  t = TrialShortGestureClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *videosshortgesture* updates
  if (t >= 0.0 && videosshortgesture.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    videosshortgesture.tStart = t;  // (not accounting for frame time here)
    videosshortgesture.frameNStart = frameN;  // exact frame index
    
    videosshortgesture.setAutoDraw(true);
    videosshortgesture.play();
  }

  frameRemains = 0.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (videosshortgesture.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    videosshortgesture.setAutoDraw(false);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of TrialShortGestureComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  } else {
    return Scheduler.Event.NEXT;
  }
};
}

function TrialShortGestureRoutineEnd(snapshot) {
return async function () {
  //--- Ending Routine 'TrialShortGesture' ---
  for (const thisComponent of TrialShortGestureComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  videosshortgesture.stop();
  // Routines running outside a loop should always advance the datafile row
  if (currentLoop === psychoJS.experiment) {
    psychoJS.experiment.nextEntry(snapshot);
  }
  return Scheduler.Event.NEXT;
}
}

function instructionDistractorRoutineBegin(snapshot) {
return async function () {
  TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
  
  //--- Prepare to start Routine 'instructionDistractor' ---
  t = 0;
  instructionDistractorClock.reset(); // clock
  frameN = -1;
  continueRoutine = true; // until we're told otherwise
  // update component parameters for each repeat
  key_resp_2.keys = undefined;
  key_resp_2.rt = undefined;
  _key_resp_2_allKeys = [];
  // keep track of which components have finished
  instructionDistractorComponents = [];
  instructionDistractorComponents.push(text_13);
  instructionDistractorComponents.push(key_resp_2);
  
  for (const thisComponent of instructionDistractorComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  return Scheduler.Event.NEXT;
}
}

function instructionDistractorRoutineEachFrame() {
return async function () {
  //--- Loop for each frame of Routine 'instructionDistractor' ---
  // get current time
  t = instructionDistractorClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text_13* updates
  if (t >= 0.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_13.tStart = t;  // (not accounting for frame time here)
    text_13.frameNStart = frameN;  // exact frame index
    
    text_13.setAutoDraw(true);
  }

  
  // *key_resp_2* updates
  if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_2.tStart = t;  // (not accounting for frame time here)
    key_resp_2.frameNStart = frameN;  // exact frame index
    
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
  }

  if (key_resp_2.status === PsychoJS.Status.STARTED) {
    let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
    _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
    if (_key_resp_2_allKeys.length > 0) {
      key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
      key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of instructionDistractorComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  } else {
    return Scheduler.Event.NEXT;
  }
};
}

function instructionDistractorRoutineEnd(snapshot) {
return async function () {
  //--- Ending Routine 'instructionDistractor' ---
  for (const thisComponent of instructionDistractorComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // update the trial handler
  if (currentLoop instanceof MultiStairHandler) {
    currentLoop.addResponse(key_resp_2.corr, level);
  }
  psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
  if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
      routineTimer.reset();
      }
  
  key_resp_2.stop();
  // the Routine "instructionDistractor" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  // Routines running outside a loop should always advance the datafile row
  if (currentLoop === psychoJS.experiment) {
    psychoJS.experiment.nextEntry(snapshot);
  }
  return Scheduler.Event.NEXT;
}
}

function distractorblockARoutineBegin(snapshot) {
return async function () {
  TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
  
  //--- Prepare to start Routine 'distractorblockA' ---
  t = 0;
  distractorblockAClock.reset(); // clock
  frameN = -1;
  continueRoutine = true; // until we're told otherwise
  routineTimer.add(6.000000);
  // update component parameters for each repeat
  text_12.setText(distractor_tasksA);
  textbox.setText('');
  textbox.refresh();
  textbox.setText('');
  // keep track of which components have finished
  distractorblockAComponents = [];
  distractorblockAComponents.push(text_12);
  distractorblockAComponents.push(textbox);
  
  for (const thisComponent of distractorblockAComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  return Scheduler.Event.NEXT;
}
}

function distractorblockARoutineEachFrame() {
return async function () {
  //--- Loop for each frame of Routine 'distractorblockA' ---
  // get current time
  t = distractorblockAClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text_12* updates
  if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_12.tStart = t;  // (not accounting for frame time here)
    text_12.frameNStart = frameN;  // exact frame index
    
    text_12.setAutoDraw(true);
  }

  frameRemains = 0.0 + 6.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (text_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    text_12.setAutoDraw(false);
  }
  
  // *textbox* updates
  if (t >= 0.0 && textbox.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    textbox.tStart = t;  // (not accounting for frame time here)
    textbox.frameNStart = frameN;  // exact frame index
    
    textbox.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (textbox.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    textbox.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of distractorblockAComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  } else {
    return Scheduler.Event.NEXT;
  }
};
}

function distractorblockARoutineEnd(snapshot) {
return async function () {
  //--- Ending Routine 'distractorblockA' ---
  for (const thisComponent of distractorblockAComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('textbox.text',textbox.text)
  // Routines running outside a loop should always advance the datafile row
  if (currentLoop === psychoJS.experiment) {
    psychoJS.experiment.nextEntry(snapshot);
  }
  return Scheduler.Event.NEXT;
}
}

function InstructionsRecallRoutineBegin(snapshot) {
return async function () {
  TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
  
  //--- Prepare to start Routine 'InstructionsRecall' ---
  t = 0;
  InstructionsRecallClock.reset(); // clock
  frameN = -1;
  continueRoutine = true; // until we're told otherwise
  // update component parameters for each repeat
  Instructions_key_resp_3.keys = undefined;
  Instructions_key_resp_3.rt = undefined;
  _Instructions_key_resp_3_allKeys = [];
  // keep track of which components have finished
  InstructionsRecallComponents = [];
  InstructionsRecallComponents.push(instructionsRecall);
  InstructionsRecallComponents.push(Instructions_key_resp_3);
  
  for (const thisComponent of InstructionsRecallComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  return Scheduler.Event.NEXT;
}
}

function InstructionsRecallRoutineEachFrame() {
return async function () {
  //--- Loop for each frame of Routine 'InstructionsRecall' ---
  // get current time
  t = InstructionsRecallClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *instructionsRecall* updates
  if (t >= 0.0 && instructionsRecall.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instructionsRecall.tStart = t;  // (not accounting for frame time here)
    instructionsRecall.frameNStart = frameN;  // exact frame index
    
    instructionsRecall.setAutoDraw(true);
  }

  
  // *Instructions_key_resp_3* updates
  if (t >= 0.0 && Instructions_key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Instructions_key_resp_3.tStart = t;  // (not accounting for frame time here)
    Instructions_key_resp_3.frameNStart = frameN;  // exact frame index
    
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { Instructions_key_resp_3.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { Instructions_key_resp_3.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { Instructions_key_resp_3.clearEvents(); });
  }

  if (Instructions_key_resp_3.status === PsychoJS.Status.STARTED) {
    let theseKeys = Instructions_key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
    _Instructions_key_resp_3_allKeys = _Instructions_key_resp_3_allKeys.concat(theseKeys);
    if (_Instructions_key_resp_3_allKeys.length > 0) {
      Instructions_key_resp_3.keys = _Instructions_key_resp_3_allKeys[_Instructions_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
      Instructions_key_resp_3.rt = _Instructions_key_resp_3_allKeys[_Instructions_key_resp_3_allKeys.length - 1].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of InstructionsRecallComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  } else {
    return Scheduler.Event.NEXT;
  }
};
}

function InstructionsRecallRoutineEnd(snapshot) {
return async function () {
  //--- Ending Routine 'InstructionsRecall' ---
  for (const thisComponent of InstructionsRecallComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // update the trial handler
  if (currentLoop instanceof MultiStairHandler) {
    currentLoop.addResponse(Instructions_key_resp_3.corr, level);
  }
  psychoJS.experiment.addData('Instructions_key_resp_3.keys', Instructions_key_resp_3.keys);
  if (typeof Instructions_key_resp_3.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('Instructions_key_resp_3.rt', Instructions_key_resp_3.rt);
      routineTimer.reset();
      }
  
  Instructions_key_resp_3.stop();
  // the Routine "InstructionsRecall" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  // Routines running outside a loop should always advance the datafile row
  if (currentLoop === psychoJS.experiment) {
    psychoJS.experiment.nextEntry(snapshot);
  }
  return Scheduler.Event.NEXT;
}
}

function recallshortgestureRoutineBegin(snapshot) {
return async function () {
  TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
  
  //--- Prepare to start Routine 'recallshortgesture' ---
  t = 0;
  recallshortgestureClock.reset(); // clock
  frameN = -1;
  continueRoutine = true; // until we're told otherwise
  // update component parameters for each repeat
  text_14.setText(recallshortgesturequestions);
  kes_resp_recall1.keys = undefined;
  kes_resp_recall1.rt = undefined;
  _kes_resp_recall1_allKeys = [];
  // keep track of which components have finished
  recallshortgestureComponents = [];
  recallshortgestureComponents.push(text_14);
  recallshortgestureComponents.push(kes_resp_recall1);
  
  for (const thisComponent of recallshortgestureComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  return Scheduler.Event.NEXT;
}
}

function recallshortgestureRoutineEachFrame() {
return async function () {
  //--- Loop for each frame of Routine 'recallshortgesture' ---
  // get current time
  t = recallshortgestureClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text_14* updates
  if (t >= 0.0 && text_14.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_14.tStart = t;  // (not accounting for frame time here)
    text_14.frameNStart = frameN;  // exact frame index
    
    text_14.setAutoDraw(true);
  }

  
  // *kes_resp_recall1* updates
  if (t >= 0.0 && kes_resp_recall1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    kes_resp_recall1.tStart = t;  // (not accounting for frame time here)
    kes_resp_recall1.frameNStart = frameN;  // exact frame index
    
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { kes_resp_recall1.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { kes_resp_recall1.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { kes_resp_recall1.clearEvents(); });
  }

  if (kes_resp_recall1.status === PsychoJS.Status.STARTED) {
    let theseKeys = kes_resp_recall1.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
    _kes_resp_recall1_allKeys = _kes_resp_recall1_allKeys.concat(theseKeys);
    if (_kes_resp_recall1_allKeys.length > 0) {
      kes_resp_recall1.keys = _kes_resp_recall1_allKeys[_kes_resp_recall1_allKeys.length - 1].name;  // just the last key pressed
      kes_resp_recall1.rt = _kes_resp_recall1_allKeys[_kes_resp_recall1_allKeys.length - 1].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of recallshortgestureComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  } else {
    return Scheduler.Event.NEXT;
  }
};
}

function recallshortgestureRoutineEnd(snapshot) {
return async function () {
  //--- Ending Routine 'recallshortgesture' ---
  for (const thisComponent of recallshortgestureComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // update the trial handler
  if (currentLoop instanceof MultiStairHandler) {
    currentLoop.addResponse(kes_resp_recall1.corr, level);
  }
  psychoJS.experiment.addData('kes_resp_recall1.keys', kes_resp_recall1.keys);
  if (typeof kes_resp_recall1.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('kes_resp_recall1.rt', kes_resp_recall1.rt);
      routineTimer.reset();
      }
  
  kes_resp_recall1.stop();
  // the Routine "recallshortgesture" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  // Routines running outside a loop should always advance the datafile row
  if (currentLoop === psychoJS.experiment) {
    psychoJS.experiment.nextEntry(snapshot);
  }
  return Scheduler.Event.NEXT;
}
}

function TrialShortNoGestureRoutineBegin(snapshot) {
return async function () {
  TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
  
  //--- Prepare to start Routine 'TrialShortNoGesture' ---
  t = 0;
  TrialShortNoGestureClock.reset(); // clock
  frameN = -1;
  continueRoutine = true; // until we're told otherwise
  routineTimer.add(7.000000);
  // update component parameters for each repeat
  videosshortnogesture.setMovie(shortnogesture);
  // keep track of which components have finished
  TrialShortNoGestureComponents = [];
  TrialShortNoGestureComponents.push(videosshortnogesture);
  
  for (const thisComponent of TrialShortNoGestureComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  return Scheduler.Event.NEXT;
}
}

function TrialShortNoGestureRoutineEachFrame() {
return async function () {
  //--- Loop for each frame of Routine 'TrialShortNoGesture' ---
  // get current time
  t = TrialShortNoGestureClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *videosshortnogesture* updates
  if (t >= 0.0 && videosshortnogesture.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    videosshortnogesture.tStart = t;  // (not accounting for frame time here)
    videosshortnogesture.frameNStart = frameN;  // exact frame index
    
    videosshortnogesture.setAutoDraw(true);
    videosshortnogesture.play();
  }

  frameRemains = 0.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (videosshortnogesture.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    videosshortnogesture.setAutoDraw(false);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of TrialShortNoGestureComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  } else {
    return Scheduler.Event.NEXT;
  }
};
}

function TrialShortNoGestureRoutineEnd(snapshot) {
return async function () {
  //--- Ending Routine 'TrialShortNoGesture' ---
  for (const thisComponent of TrialShortNoGestureComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  videosshortnogesture.stop();
  // Routines running outside a loop should always advance the datafile row
  if (currentLoop === psychoJS.experiment) {
    psychoJS.experiment.nextEntry(snapshot);
  }
  return Scheduler.Event.NEXT;
}
}

function distractorblockBRoutineBegin(snapshot) {
return async function () {
  TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
  
  //--- Prepare to start Routine 'distractorblockB' ---
  t = 0;
  distractorblockBClock.reset(); // clock
  frameN = -1;
  continueRoutine = true; // until we're told otherwise
  routineTimer.add(6.000000);
  // update component parameters for each repeat
  text_2.setText(distractor_tasksB);
  textboxB.setText('');
  textboxB.refresh();
  textboxB.setText('');
  // keep track of which components have finished
  distractorblockBComponents = [];
  distractorblockBComponents.push(text_2);
  distractorblockBComponents.push(textboxB);
  
  for (const thisComponent of distractorblockBComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  return Scheduler.Event.NEXT;
}
}

function distractorblockBRoutineEachFrame() {
return async function () {
  //--- Loop for each frame of Routine 'distractorblockB' ---
  // get current time
  t = distractorblockBClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text_2* updates
  if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_2.tStart = t;  // (not accounting for frame time here)
    text_2.frameNStart = frameN;  // exact frame index
    
    text_2.setAutoDraw(true);
  }

  frameRemains = 0.0 + 6.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    text_2.setAutoDraw(false);
  }
  
  // *textboxB* updates
  if (t >= 0.0 && textboxB.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    textboxB.tStart = t;  // (not accounting for frame time here)
    textboxB.frameNStart = frameN;  // exact frame index
    
    textboxB.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (textboxB.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    textboxB.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of distractorblockBComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  } else {
    return Scheduler.Event.NEXT;
  }
};
}

function distractorblockBRoutineEnd(snapshot) {
return async function () {
  //--- Ending Routine 'distractorblockB' ---
  for (const thisComponent of distractorblockBComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('textboxB.text',textboxB.text)
  // Routines running outside a loop should always advance the datafile row
  if (currentLoop === psychoJS.experiment) {
    psychoJS.experiment.nextEntry(snapshot);
  }
  return Scheduler.Event.NEXT;
}
}

function RecallShortNoGestureRoutineBegin(snapshot) {
return async function () {
  TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
  
  //--- Prepare to start Routine 'RecallShortNoGesture' ---
  t = 0;
  RecallShortNoGestureClock.reset(); // clock
  frameN = -1;
  continueRoutine = true; // until we're told otherwise
  // update component parameters for each repeat
  text_3.setText(recallshortNogesturequestions);
  kes_resp_recall2.keys = undefined;
  kes_resp_recall2.rt = undefined;
  _kes_resp_recall2_allKeys = [];
  // keep track of which components have finished
  RecallShortNoGestureComponents = [];
  RecallShortNoGestureComponents.push(text_3);
  RecallShortNoGestureComponents.push(kes_resp_recall2);
  
  for (const thisComponent of RecallShortNoGestureComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  return Scheduler.Event.NEXT;
}
}

function RecallShortNoGestureRoutineEachFrame() {
return async function () {
  //--- Loop for each frame of Routine 'RecallShortNoGesture' ---
  // get current time
  t = RecallShortNoGestureClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text_3* updates
  if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_3.tStart = t;  // (not accounting for frame time here)
    text_3.frameNStart = frameN;  // exact frame index
    
    text_3.setAutoDraw(true);
  }

  
  // *kes_resp_recall2* updates
  if (t >= 0.0 && kes_resp_recall2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    kes_resp_recall2.tStart = t;  // (not accounting for frame time here)
    kes_resp_recall2.frameNStart = frameN;  // exact frame index
    
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { kes_resp_recall2.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { kes_resp_recall2.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { kes_resp_recall2.clearEvents(); });
  }

  if (kes_resp_recall2.status === PsychoJS.Status.STARTED) {
    let theseKeys = kes_resp_recall2.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
    _kes_resp_recall2_allKeys = _kes_resp_recall2_allKeys.concat(theseKeys);
    if (_kes_resp_recall2_allKeys.length > 0) {
      kes_resp_recall2.keys = _kes_resp_recall2_allKeys[_kes_resp_recall2_allKeys.length - 1].name;  // just the last key pressed
      kes_resp_recall2.rt = _kes_resp_recall2_allKeys[_kes_resp_recall2_allKeys.length - 1].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of RecallShortNoGestureComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  } else {
    return Scheduler.Event.NEXT;
  }
};
}

function RecallShortNoGestureRoutineEnd(snapshot) {
return async function () {
  //--- Ending Routine 'RecallShortNoGesture' ---
  for (const thisComponent of RecallShortNoGestureComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // update the trial handler
  if (currentLoop instanceof MultiStairHandler) {
    currentLoop.addResponse(kes_resp_recall2.corr, level);
  }
  psychoJS.experiment.addData('kes_resp_recall2.keys', kes_resp_recall2.keys);
  if (typeof kes_resp_recall2.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('kes_resp_recall2.rt', kes_resp_recall2.rt);
      routineTimer.reset();
      }
  
  kes_resp_recall2.stop();
  // the Routine "RecallShortNoGesture" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  // Routines running outside a loop should always advance the datafile row
  if (currentLoop === psychoJS.experiment) {
    psychoJS.experiment.nextEntry(snapshot);
  }
  return Scheduler.Event.NEXT;
}
}

function TrialLongGestureRoutineBegin(snapshot) {
return async function () {
  TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
  
  //--- Prepare to start Routine 'TrialLongGesture' ---
  t = 0;
  TrialLongGestureClock.reset(); // clock
  frameN = -1;
  continueRoutine = true; // until we're told otherwise
  routineTimer.add(7.000000);
  // update component parameters for each repeat
  videoslonggesture.setMovie(longgesture);
  // keep track of which components have finished
  TrialLongGestureComponents = [];
  TrialLongGestureComponents.push(videoslonggesture);
  
  for (const thisComponent of TrialLongGestureComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  return Scheduler.Event.NEXT;
}
}

function TrialLongGestureRoutineEachFrame() {
return async function () {
  //--- Loop for each frame of Routine 'TrialLongGesture' ---
  // get current time
  t = TrialLongGestureClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *videoslonggesture* updates
  if (t >= 0.0 && videoslonggesture.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    videoslonggesture.tStart = t;  // (not accounting for frame time here)
    videoslonggesture.frameNStart = frameN;  // exact frame index
    
    videoslonggesture.setAutoDraw(true);
    videoslonggesture.play();
  }

  frameRemains = 0.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (videoslonggesture.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    videoslonggesture.setAutoDraw(false);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of TrialLongGestureComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  } else {
    return Scheduler.Event.NEXT;
  }
};
}

function TrialLongGestureRoutineEnd(snapshot) {
return async function () {
  //--- Ending Routine 'TrialLongGesture' ---
  for (const thisComponent of TrialLongGestureComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  videoslonggesture.stop();
  // Routines running outside a loop should always advance the datafile row
  if (currentLoop === psychoJS.experiment) {
    psychoJS.experiment.nextEntry(snapshot);
  }
  return Scheduler.Event.NEXT;
}
}

function distractorblockCRoutineBegin(snapshot) {
return async function () {
  TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
  
  //--- Prepare to start Routine 'distractorblockC' ---
  t = 0;
  distractorblockCClock.reset(); // clock
  frameN = -1;
  continueRoutine = true; // until we're told otherwise
  routineTimer.add(6.000000);
  // update component parameters for each repeat
  text_4.setText(distractor_tasksC);
  textboxC.setText('');
  textboxC.refresh();
  textboxC.setText('');
  // keep track of which components have finished
  distractorblockCComponents = [];
  distractorblockCComponents.push(text_4);
  distractorblockCComponents.push(textboxC);
  
  for (const thisComponent of distractorblockCComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  return Scheduler.Event.NEXT;
}
}

function distractorblockCRoutineEachFrame() {
return async function () {
  //--- Loop for each frame of Routine 'distractorblockC' ---
  // get current time
  t = distractorblockCClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text_4* updates
  if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_4.tStart = t;  // (not accounting for frame time here)
    text_4.frameNStart = frameN;  // exact frame index
    
    text_4.setAutoDraw(true);
  }

  frameRemains = 0.0 + 6.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (text_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    text_4.setAutoDraw(false);
  }
  
  // *textboxC* updates
  if (t >= 0.0 && textboxC.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    textboxC.tStart = t;  // (not accounting for frame time here)
    textboxC.frameNStart = frameN;  // exact frame index
    
    textboxC.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (textboxC.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    textboxC.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of distractorblockCComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  } else {
    return Scheduler.Event.NEXT;
  }
};
}

function distractorblockCRoutineEnd(snapshot) {
return async function () {
  //--- Ending Routine 'distractorblockC' ---
  for (const thisComponent of distractorblockCComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('textboxC.text',textboxC.text)
  // Routines running outside a loop should always advance the datafile row
  if (currentLoop === psychoJS.experiment) {
    psychoJS.experiment.nextEntry(snapshot);
  }
  return Scheduler.Event.NEXT;
}
}

function RecallLongGestureRoutineBegin(snapshot) {
return async function () {
  TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
  
  //--- Prepare to start Routine 'RecallLongGesture' ---
  t = 0;
  RecallLongGestureClock.reset(); // clock
  frameN = -1;
  continueRoutine = true; // until we're told otherwise
  // update component parameters for each repeat
  text_5.setText(recalllonggesturequestions);
  kes_resp_recall3.keys = undefined;
  kes_resp_recall3.rt = undefined;
  _kes_resp_recall3_allKeys = [];
  // keep track of which components have finished
  RecallLongGestureComponents = [];
  RecallLongGestureComponents.push(text_5);
  RecallLongGestureComponents.push(kes_resp_recall3);
  
  for (const thisComponent of RecallLongGestureComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  return Scheduler.Event.NEXT;
}
}

function RecallLongGestureRoutineEachFrame() {
return async function () {
  //--- Loop for each frame of Routine 'RecallLongGesture' ---
  // get current time
  t = RecallLongGestureClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text_5* updates
  if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_5.tStart = t;  // (not accounting for frame time here)
    text_5.frameNStart = frameN;  // exact frame index
    
    text_5.setAutoDraw(true);
  }

  
  // *kes_resp_recall3* updates
  if (t >= 0.0 && kes_resp_recall3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    kes_resp_recall3.tStart = t;  // (not accounting for frame time here)
    kes_resp_recall3.frameNStart = frameN;  // exact frame index
    
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { kes_resp_recall3.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { kes_resp_recall3.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { kes_resp_recall3.clearEvents(); });
  }

  if (kes_resp_recall3.status === PsychoJS.Status.STARTED) {
    let theseKeys = kes_resp_recall3.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
    _kes_resp_recall3_allKeys = _kes_resp_recall3_allKeys.concat(theseKeys);
    if (_kes_resp_recall3_allKeys.length > 0) {
      kes_resp_recall3.keys = _kes_resp_recall3_allKeys[_kes_resp_recall3_allKeys.length - 1].name;  // just the last key pressed
      kes_resp_recall3.rt = _kes_resp_recall3_allKeys[_kes_resp_recall3_allKeys.length - 1].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of RecallLongGestureComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  } else {
    return Scheduler.Event.NEXT;
  }
};
}

function RecallLongGestureRoutineEnd(snapshot) {
return async function () {
  //--- Ending Routine 'RecallLongGesture' ---
  for (const thisComponent of RecallLongGestureComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // update the trial handler
  if (currentLoop instanceof MultiStairHandler) {
    currentLoop.addResponse(kes_resp_recall3.corr, level);
  }
  psychoJS.experiment.addData('kes_resp_recall3.keys', kes_resp_recall3.keys);
  if (typeof kes_resp_recall3.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('kes_resp_recall3.rt', kes_resp_recall3.rt);
      routineTimer.reset();
      }
  
  kes_resp_recall3.stop();
  // the Routine "RecallLongGesture" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  // Routines running outside a loop should always advance the datafile row
  if (currentLoop === psychoJS.experiment) {
    psychoJS.experiment.nextEntry(snapshot);
  }
  return Scheduler.Event.NEXT;
}
}

function TrialLongNoGestureRoutineBegin(snapshot) {
return async function () {
  TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
  
  //--- Prepare to start Routine 'TrialLongNoGesture' ---
  t = 0;
  TrialLongNoGestureClock.reset(); // clock
  frameN = -1;
  continueRoutine = true; // until we're told otherwise
  routineTimer.add(7.000000);
  // update component parameters for each repeat
  movie.setMovie(longnogesture);
  // keep track of which components have finished
  TrialLongNoGestureComponents = [];
  TrialLongNoGestureComponents.push(movie);
  
  for (const thisComponent of TrialLongNoGestureComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  return Scheduler.Event.NEXT;
}
}

function TrialLongNoGestureRoutineEachFrame() {
return async function () {
  //--- Loop for each frame of Routine 'TrialLongNoGesture' ---
  // get current time
  t = TrialLongNoGestureClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *movie* updates
  if (t >= 0.0 && movie.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    movie.tStart = t;  // (not accounting for frame time here)
    movie.frameNStart = frameN;  // exact frame index
    
    movie.setAutoDraw(true);
    movie.play();
  }

  frameRemains = 0.0 + 7.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (movie.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    movie.setAutoDraw(false);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of TrialLongNoGestureComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  } else {
    return Scheduler.Event.NEXT;
  }
};
}

function TrialLongNoGestureRoutineEnd(snapshot) {
return async function () {
  //--- Ending Routine 'TrialLongNoGesture' ---
  for (const thisComponent of TrialLongNoGestureComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  movie.stop();
  // Routines running outside a loop should always advance the datafile row
  if (currentLoop === psychoJS.experiment) {
    psychoJS.experiment.nextEntry(snapshot);
  }
  return Scheduler.Event.NEXT;
}
}

function distractorblockDRoutineBegin(snapshot) {
return async function () {
  TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
  
  //--- Prepare to start Routine 'distractorblockD' ---
  t = 0;
  distractorblockDClock.reset(); // clock
  frameN = -1;
  continueRoutine = true; // until we're told otherwise
  routineTimer.add(6.000000);
  // update component parameters for each repeat
  text_6.setText(distractor_tasksD);
  textboxD.setText('');
  textboxD.refresh();
  textboxD.setText('');
  // keep track of which components have finished
  distractorblockDComponents = [];
  distractorblockDComponents.push(text_6);
  distractorblockDComponents.push(textboxD);
  
  for (const thisComponent of distractorblockDComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  return Scheduler.Event.NEXT;
}
}

function distractorblockDRoutineEachFrame() {
return async function () {
  //--- Loop for each frame of Routine 'distractorblockD' ---
  // get current time
  t = distractorblockDClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text_6* updates
  if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_6.tStart = t;  // (not accounting for frame time here)
    text_6.frameNStart = frameN;  // exact frame index
    
    text_6.setAutoDraw(true);
  }

  frameRemains = 0.0 + 6.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (text_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    text_6.setAutoDraw(false);
  }
  
  // *textboxD* updates
  if (t >= 0.0 && textboxD.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    textboxD.tStart = t;  // (not accounting for frame time here)
    textboxD.frameNStart = frameN;  // exact frame index
    
    textboxD.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (textboxD.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    textboxD.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of distractorblockDComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  } else {
    return Scheduler.Event.NEXT;
  }
};
}

function distractorblockDRoutineEnd(snapshot) {
return async function () {
  //--- Ending Routine 'distractorblockD' ---
  for (const thisComponent of distractorblockDComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  psychoJS.experiment.addData('textboxD.text',textboxD.text)
  // Routines running outside a loop should always advance the datafile row
  if (currentLoop === psychoJS.experiment) {
    psychoJS.experiment.nextEntry(snapshot);
  }
  return Scheduler.Event.NEXT;
}
}

function RecallLongNoGestureRoutineBegin(snapshot) {
return async function () {
  TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
  
  //--- Prepare to start Routine 'RecallLongNoGesture' ---
  t = 0;
  RecallLongNoGestureClock.reset(); // clock
  frameN = -1;
  continueRoutine = true; // until we're told otherwise
  // update component parameters for each repeat
  text_7.setText(recalllongNogesturequestions);
  kes_resp_recall4.keys = undefined;
  kes_resp_recall4.rt = undefined;
  _kes_resp_recall4_allKeys = [];
  // keep track of which components have finished
  RecallLongNoGestureComponents = [];
  RecallLongNoGestureComponents.push(text_7);
  RecallLongNoGestureComponents.push(kes_resp_recall4);
  
  for (const thisComponent of RecallLongNoGestureComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  return Scheduler.Event.NEXT;
}
}

function RecallLongNoGestureRoutineEachFrame() {
return async function () {
  //--- Loop for each frame of Routine 'RecallLongNoGesture' ---
  // get current time
  t = RecallLongNoGestureClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text_7* updates
  if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_7.tStart = t;  // (not accounting for frame time here)
    text_7.frameNStart = frameN;  // exact frame index
    
    text_7.setAutoDraw(true);
  }

  
  // *kes_resp_recall4* updates
  if (t >= 0.0 && kes_resp_recall4.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    kes_resp_recall4.tStart = t;  // (not accounting for frame time here)
    kes_resp_recall4.frameNStart = frameN;  // exact frame index
    
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { kes_resp_recall4.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { kes_resp_recall4.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { kes_resp_recall4.clearEvents(); });
  }

  if (kes_resp_recall4.status === PsychoJS.Status.STARTED) {
    let theseKeys = kes_resp_recall4.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
    _kes_resp_recall4_allKeys = _kes_resp_recall4_allKeys.concat(theseKeys);
    if (_kes_resp_recall4_allKeys.length > 0) {
      kes_resp_recall4.keys = _kes_resp_recall4_allKeys[_kes_resp_recall4_allKeys.length - 1].name;  // just the last key pressed
      kes_resp_recall4.rt = _kes_resp_recall4_allKeys[_kes_resp_recall4_allKeys.length - 1].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of RecallLongNoGestureComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  } else {
    return Scheduler.Event.NEXT;
  }
};
}

function RecallLongNoGestureRoutineEnd(snapshot) {
return async function () {
  //--- Ending Routine 'RecallLongNoGesture' ---
  for (const thisComponent of RecallLongNoGestureComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // update the trial handler
  if (currentLoop instanceof MultiStairHandler) {
    currentLoop.addResponse(kes_resp_recall4.corr, level);
  }
  psychoJS.experiment.addData('kes_resp_recall4.keys', kes_resp_recall4.keys);
  if (typeof kes_resp_recall4.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('kes_resp_recall4.rt', kes_resp_recall4.rt);
      routineTimer.reset();
      }
  
  kes_resp_recall4.stop();
  // the Routine "RecallLongNoGesture" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  // Routines running outside a loop should always advance the datafile row
  if (currentLoop === psychoJS.experiment) {
    psychoJS.experiment.nextEntry(snapshot);
  }
  return Scheduler.Event.NEXT;
}
}

function ThankYouScreenRoutineBegin(snapshot) {
return async function () {
  TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
  
  //--- Prepare to start Routine 'ThankYouScreen' ---
  t = 0;
  ThankYouScreenClock.reset(); // clock
  frameN = -1;
  continueRoutine = true; // until we're told otherwise
  routineTimer.add(5.000000);
  // update component parameters for each repeat
  key_resp_4.keys = undefined;
  key_resp_4.rt = undefined;
  _key_resp_4_allKeys = [];
  // keep track of which components have finished
  ThankYouScreenComponents = [];
  ThankYouScreenComponents.push(text);
  ThankYouScreenComponents.push(key_resp_4);
  
  for (const thisComponent of ThankYouScreenComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  return Scheduler.Event.NEXT;
}
}

function ThankYouScreenRoutineEachFrame() {
return async function () {
  //--- Loop for each frame of Routine 'ThankYouScreen' ---
  // get current time
  t = ThankYouScreenClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text* updates
  if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text.tStart = t;  // (not accounting for frame time here)
    text.frameNStart = frameN;  // exact frame index
    
    text.setAutoDraw(true);
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    text.setAutoDraw(false);
  }
  
  // *key_resp_4* updates
  if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_4.tStart = t;  // (not accounting for frame time here)
    key_resp_4.frameNStart = frameN;  // exact frame index
    
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
    psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
    psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
  }

  frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (key_resp_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    key_resp_4.status = PsychoJS.Status.FINISHED;
  }

  if (key_resp_4.status === PsychoJS.Status.STARTED) {
    let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
    _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
    if (_key_resp_4_allKeys.length > 0) {
      key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
      key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of ThankYouScreenComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  } else {
    return Scheduler.Event.NEXT;
  }
};
}

function ThankYouScreenRoutineEnd(snapshot) {
return async function () {
  //--- Ending Routine 'ThankYouScreen' ---
  for (const thisComponent of ThankYouScreenComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // update the trial handler
  if (currentLoop instanceof MultiStairHandler) {
    currentLoop.addResponse(key_resp_4.corr, level);
  }
  psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
  if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
      routineTimer.reset();
      }
  
  key_resp_4.stop();
  // Routines running outside a loop should always advance the datafile row
  if (currentLoop === psychoJS.experiment) {
    psychoJS.experiment.nextEntry(snapshot);
  }
  return Scheduler.Event.NEXT;
}
}

function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

async function quitPsychoJS(message, isCompleted) {
// Check for and save orphaned data
if (psychoJS.experiment.isEntryEmpty()) {
  psychoJS.experiment.nextEntry();
}
psychoJS.window.close();
psychoJS.quit({message: message, isCompleted: isCompleted});

return Scheduler.Event.QUIT;
}
