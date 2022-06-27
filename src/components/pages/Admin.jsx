import React from "react";
import StartFirebase from "../firebase";
import { ref, set, get, update, remove, child } from "firebase/database";
import { Link } from "react-router-dom";
export class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      db: "",
      user: "",
      fullname: "",
      skills: "",
      role: "",
    }
    this.interface = this.interface.bind(this);
  }
  componentDidMount() {
    this.setState({
      db: StartFirebase(),
    });
  }
  render() {
    console.log(this.state)
    return (
      <>

        <label>Enter user</label>
        <input
          type="text"
          id="userbox"
          value={this.state.user}
          onChange={e => { this.setState({ user: e.target.value }); }} />
        <br />
        <label>Enter fullname</label>
        <input
          type="text"
          id="namebox"
          value={this.state.fullname}
          onChange={(e) => { this.setState({ fullname: e.target.value }); }} />
        <br />
        <label>Enter skills</label>
        <input
          type="text"
          id="skillsbox"
          value={this.state.skills}
          onChange={(e) => {
            this.setState({ skills: e.target.value });
          }}
        />
        <br />
        <label>Enter role</label>
        <input
          type="text"
          id="rolerbox"
          value={this.state.role}
          onChange={(e) => {
            this.setState({ role: e.target.value });
          }}
        />
        <br />
        <button id="addBtn" onClick={this.interface}>
          Add Data
        </button>
        <button id="updateBtn" onClick={this.interface}>
          Update Data
        </button>
        <button id="deleteBtn" onClick={this.interface}>
          Delete Data
        </button>
        <button id="selectBtn" onClick={this.interface}>
          select Data
        </button>
      </>
    );
  }
  interface(event) {
    const id = event.target.id;
    if (id == "addBtn") {
      this.insertData();
    } else if (id == "updateBtn") {
      this.updateData();
    } else if (id == "deleteBtn") {
      this.deleteData();
    } else if (id == "selectBtn") {
      this.selectData();
    }
  }
  getAllInputs() {
    return {
      user: this.state.user,
      fullname: this.state.fullname,
      skills: this.state.skills,
      role: this.state.role,
    };
  }
  insertData() {
    const db = this.state.db;
    const data = this.getAllInputs();
    set(ref(db, 'input/' + data.user), {
      Fullname: data.fullname,
      Skills: data.skills,
      Role: data.role,
    })
      .then(() => { alert('ok') })
      .catch((error) => { alert("no" + error) });

  }
  updateData() {
    const db = this.state.db;
    const data = this.getAllInputs();
    update(ref(db, 'input/' + data.user), {
      Fullname: data.fullname,
      Skills: data.skills,
      Role: data.role,
    })
      .then(() => { alert('ok') })
      .catch((error) => { alert("no" + error) });
  }
  deleteData() {
    const db = this.state.db;
    const user = this.getAllInputs().user;
    remove(ref(db, 'input/' + user))
      .then(() => { alert('ok') })
      .catch((error) => { alert("no" + error) });

  }
  selectData() {
    const dbref = ref(this.state.db);
    const user = this.getAllInputs().user;
    get(child(dbref, 'input/' + user)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val())
        this.setState({
          fullname: snapshot.val().Fullname,
          skills: snapshot.val().Skills,
          role: snapshot.val().Role,
        })
      }
      else {
        alert("no dtb found")
      }
    })
      .catch((error) => { alert("there was an error,details:" + error) });
  }
}


