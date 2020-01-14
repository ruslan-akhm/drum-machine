function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
{/* Array of objects, each containing particular sound */}
const sounds = [
{
  title: "Q",
  id: 81,
  link: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  name: "Chord-1" },

{
  title: "W",
  id: 87,
  link: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  name: "Chord-2" },

{
  title: "E",
  id: 69,
  link: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  name: "Chord-3" },

{
  title: "A",
  id: 65,
  link: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  name: "Shaker" },

{
  title: "S",
  id: 83,
  link: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  name: "Open-HH" },

{
  title: "D",
  id: 68,
  link: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  name: "Closed-HH" },

{
  title: "Z",
  id: 90,
  link: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  name: "Punchy-Kick" },

{
  title: "X",
  id: 88,
  link: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  name: "Side-Stick" },

{
  title: "C",
  id: 67,
  link: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  name: "Snare" }];



class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleKeyPress",
















    event => {
      if (this.state.nameSound == "OFF") {
        null;
      } else
      {
        console.log(event.keyCode);
        let keyPressed;
        sounds.map(sound => event.keyCode == sound.id ? keyPressed = sound.title : null);
        this.handleClick(keyPressed); // passing the title of a sound which key mathces the keyboard button code
      }
    });_defineProperty(this, "handleClick",

    e => {
      let song;
      sounds.map(sound => sound.title == e ? song = sound.title : null);
      let audio = document.getElementById(song);
      audio.currentTime = 0;
      sounds.map(sound => sound.hasOwnProperty('title') && sound.title == e ? audio.play() : null); // mapping thru sounds to play the sound
      let soundName;
      sounds.map(sound => sound.title == e ? soundName = sound.name : null); // mapping thru sounds to reflect the sound name
      this.setState({ nameSound: soundName });
      var testAudio = audio;
    });_defineProperty(this, "handlePowerSwitch",
    i => {
      let nameSound = this.state.nameSound;
      if (nameSound == "OFF") {
        this.setState({ nameSound: "ON" });
        let elems = document.getElementsByClassName("drum-pad");
        for (let i = 0; i < elems.length; i++) {
          elems[i].disabled = false; // enabling buttons
        }
      } else
      {
        this.setState({ nameSound: "OFF" });
        let elems = document.getElementsByClassName("drum-pad");
        for (let i = 0; i < elems.length; i++) {
          elems[i].disabled = true; // disabling buttons 
        }
      }
    });this.state = { nameSound: 'START', volumeValue: 0.4 };this.handleClick = this.handleClick.bind(this);this.handleKeyPress = this.handleKeyPress.bind(this);this.handlePowerSwitch = this.handlePowerSwitch.bind(this);}componentDidMount() {document.addEventListener('keydown', this.handleKeyPress);document.getElementById("power").checked = true; //power is checkbox type of input; checked initially
  } /* playing audio based on a key pressed; */render() {
    const power = React.createElement("label", { for: "power" }, React.createElement("input", { id: "power", className: "check", type: "checkbox", onChange: i => this.handlePowerSwitch(this.state.nameSound) }), "POWER");
    const name = this.state.nameSound;
    {/* rendering drum pad buttons */}
    const button = sounds.map(sound => React.createElement("button", { type: "button", key: sound.title, id: sound.id, className: "drum-pad", onClick: e => this.handleClick(sound.title) }, sound.title, React.createElement("audio", { className: "clip", src: sound.link, id: sound.title })));

    return (
      React.createElement("div", { className: "parent" },
      React.createElement("div", { id: "drum-machine" },
      React.createElement("div", { id: "drum-pad-parent" }, button),

      React.createElement("div", { className: "display-parent" },
      React.createElement("div", { id: "display" }, name),

      React.createElement("div", { className: "power-button" }, power)))));





  }}


ReactDOM.render(React.createElement(App, null), document.getElementById('root'));