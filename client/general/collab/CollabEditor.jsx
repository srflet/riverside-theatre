import React, { Component } from "react";
import { returnPlayerInitials } from "../helper-functions/returnPlayerInformation";
import './Editor.css'; 
import { StageTimeWrapper } from "meteor/empirica:core";

class timer extends Component {
  constructor() {
    super();
    this.state = {
        text: "",
    };

  }

  changeText = (string) => {
    this.setState({text: string})
  }

  componentDidMount() {
    //// Initialize Firebase.
    //// TODO: replace with your Firebase project configuration.

    const { game, player, team, round, remainingSeconds } = this.props;

    var config = {
      apiKey: "AIzaSyCrZqpmYPJGhQsPAPnaAhX36i8dft9Euzw",
      databaseURL: "https://collaborative-editor-d6a3b-default-rtdb.firebaseio.com",
    };
    // window.firebase.initializeApp(config);
    if (!window.firebase.apps.length) {
      window.firebase.initializeApp(config);
    }else {
      window.firebase.app(); // if already initialized, use that one
    }

    let chatReference = `${game.gameLobbyId}_${team}`

    //// Get Firebase Database reference.
    var firepadRef = window.firebase.database().ref(chatReference); //this.getExampleRef(); //wthis.getTeamRef();
    //// Create CodeMirror (with lineWrapping on).
    var codeMirror = window.CodeMirror(document.getElementById('firepad-container'), { lineWrapping: true });
    //// Create Firepad (with rich text toolbar and shortcuts enabled).
    var firepad = window.Firepad.fromCodeMirror(firepadRef, codeMirror,
        { richTextToolbar: true, richTextShortcuts: true });
    //// Initialize contents.
    firepad.on('ready', function() {
      if (firepad.isHistoryEmpty()) {
        firepad.setHtml('<span style="font-size: 24px;" style="color: gray">This is the collaborative editor, please write your final proposal here... </span>');
      }
    });

    let collabText = ''


    firepad.on('synced', () => {
      collabText = firepad.getText()
      console.log(collabText)
      this.setState({text: collabText})

    });

    // firepad.on('synced', function(isSynced) =>  {
    //   // console.log(firepad.getText())
    //   collabText = firepad.getText()
    //   console.log(collabText)
    //   // this.setState({text: collabText})
    //   //this.changeText(collabText)
    //   // round.set(`collabText${team}`, firepad.getText())
    //   // player.set("collabText", firepad.getText())
    //   // console.log(round)
      
    // });

    // if (remainingSeconds <550) {
    //   this.setState({text: collabText})
    // }
    

  }


  // Helper to get hash from end of URL or generate a random one.
  getExampleRef() {
    var ref = window.firebase.database().ref();
    var hash = window.location.hash.replace(/#/g, '');
    if (hash) {
      ref = ref.child(hash);
    } else {
      ref = ref.push(); // generate unique location.
      window.location = window.location + '#' + ref.key; // add it as a hash to the URL.
    }
    if (typeof console !== 'undefined') {
      console.log('Firebase data: ', ref.toString());
    }
    return ref;
  }

  getTeamRef() {
    const { player, type, team } = this.props;

    const myTeam = player.get("team")


    var ref = window.firebase.database().ref();
    ref = ref.child(myTeam);
    if (typeof console !== 'undefined') {
      console.log('Firebase data: ', ref.toString());
    }
    return ref;
  }


  saveText = () => {
    const { round, team } = this.props
    let text = this.state["text"]
    console.log(text)
    round.set(`collabText${team}`, text)
  };

  getIsInvolved = () => {
    const { player, team } = this.props;

    // get player team
    const myTeam = player.get("team")
    
    return (myTeam === team)

  }

  render() {

    const { remainingSeconds, round , team } = this.props
    const isInvolved = this.getIsInvolved()
    // if (remainingSeconds < 550) {
    //   // console.log(this.text)
    //   round.set(`collabText${team}`, this.text)
    // }

    return (
      <div>
        <div 
          id="firepad-container">
        </div>
        
        <div className="button-holder">
          <button onClick={this.saveText}>Please click this to save your proposal!!</button>
        </div>
      </div>

      // <div style={isInvolved ? { margin: "2.5px", width: "495px" } : { display: "none" }}>
      //   <div id="firepad-container"></div>
      // </div>
      
    );
  }
}

export default (CollabEditor = StageTimeWrapper(timer));
