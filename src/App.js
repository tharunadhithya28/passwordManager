import {Component} from 'react'
import './App.css'
import PasswordList from '../PasswordList'

const initialPasswordList = []

class App extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    passwordList: initialPasswordList,
    isEmpty: true,
  }

  listenWebsite = event => {
    this.setState({
      website: event.target.value,
    })
  }

  listenUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  listenPassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmitForm = () => {
    const {website, username, password, passwordList, isEmpty} = this.state
    const newPassword = [website, username, password]
    this.setState(prevState => ({
      passwordList: [...initialPasswordList, newPassword],
      isEmpty: false,
    }))
  }

  render() {
    const {website, username, password, passwordList, isEmpty} = this.state
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="logo"
          className="logo-image"
        />
        <div className="top-container">
          <div>
            <h1> Add New Password </h1>
            <form onSubmit={this.onSubmitForm}>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="details-images"
                />
                <input
                  placeholder="Enter Website"
                  onChange={this.listenWebsite}
                />
              </div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                  alt="website"
                  className="details-images"
                />
                <input
                  placeholder="Enter Username"
                  onChange={this.listenUsername}
                />
              </div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                  alt="website"
                  className="details-images"
                />
                <input
                  placeholder="Enter Password"
                  onChange={this.listenPassword}
                />
              </div>
              <button type="submit">Add</button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-image"
            />
          </div>
        </div>
        <div className="bottom-container">
          <div className="search-pwdcount">
            <h1> Your Passwords 0</h1>
            <input placeholder="search" />
          </div>
          <div>
            <div>
              <input id="showpassword" type="checkbox" />
              <label htmlFor="showpassword"> Show Password</label>
            </div>
            <div>
              {isEmpty ? (
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                    className="no-password-image"
                  />
                  <p> No Passwords </p>
                </div>
              ) : (
                <div>
                  {passwordList.map(eachItem => (
                    <PasswordList passwordList={eachItem} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
