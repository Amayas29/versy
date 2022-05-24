import React from "react";
import Icon from "../Icon";
import Input from "../Input";
import axios from "axios";
import ProfileContainer from "../containers/ProfileContainer";

class BanWords extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: props.user,
      word: "",
      banWords: props.user.banWords,
    };

    this.editWord = this.editWord.bind(this);
    this.addWord = this.addWord.bind(this);
    this.removeWord = this.removeWord.bind(this);
    this.save = this.save.bind(this);
  }

  editWord(word) {
    this.setState({
      word: word,
    });
  }

  addWord() {
    const word = this.state.word;
    if (!word || word.length === 0) return;

    const banWords = this.state.banWords;
    if (banWords.indexOf(word) === -1) banWords.push(word);

    this.setState({
      banWords: banWords,
      word: "",
    });
  }

  removeWord() {
    const word = this.state.word;
    if (!word || word.length === 0) return;

    const banWords = this.state.banWords;
    const index = banWords.indexOf(word);

    if (index > -1) banWords.splice(index, 1);

    this.setState({
      banWords: banWords,
      word: "",
    });
  }

  save() {
    const user = this.state.user;
    user.banWords = this.state.banWords;

    axios
      .put("http://localhost:4000/api/users", {
        user: user,
      })
      .then((res) => {
        this.props.setMainContainer(
          <ProfileContainer
            user={res.data.user}
            setMainContainer={this.props.setMainContainer}
            setPage={this.props.setPage}
          />
        );

        this.props.close();
      })
      .catch((err) => {
        console.dir(err);
      });
  }

  render() {
    return (
      <div className="ban-words">
        <div className="btn ban-save" onClick={this.save}>
          Save
        </div>

        <div className="ban-input">
          <Input
            name="word"
            label="Word"
            icon="fa-keyboard"
            value={this.state.word}
            type="text"
            handleChange={(event) => this.editWord(event.target.value)}
          />

          <Icon name="fa-plus" size="fa-lg" onClick={this.addWord} />
          <Icon name="fa-minus" size="fa-lg" onClick={this.removeWord} />
        </div>

        <div className="ban-words-list">
          {this.state.banWords.map((word, i) => (
            <li key={i} className="ban-word">
              {word}
            </li>
          ))}
        </div>
      </div>
    );
  }
}

export default BanWords;
