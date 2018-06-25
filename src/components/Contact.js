import React, { Component } from "react";
import ContactInfo from "./ContactInfo";

export default class Contact extends Component {
  constructor(props) {
    //react-hot-loader는 컴포넌트 수정되서 리로딩 될때 state 유지시킴
    //그 부작용으로 리액트 컴포넌트가 리로딩될때 생성자 실행 안함 -> 생성자 수정 되면 새로고침 해줘야함
    super(props);
    this.state = {
      keyword: "",
      contactData: [
        {
          name: "A",
          phone: "010-0000-0001"
        },
        {
          name: "B",
          phone: "010-0000-0002"
        },
        {
          name: "C",
          phone: "010-0000-0003"
        },
        {
          name: "D",
          phone: "010-0000-0004"
        }
      ]
    };

    this.handleChange = this.handleChange.bind(this);
  }
  //handleChange는 this가 뭔지 모름 그러므로 위처럼 bind 해줘야함
  handleChange(e) {
    //e : 이벤트 객체
    this.setState({
      keyword: e.target.value
    });
  }

  render() {
    const mapToComponents = data => {
      data.sort(); //오름차순 정렬하기 때문에 파라미터 생략가능
      data = data.filter(contact => {
        return contact.name.toLowerCase().indexOf(this.state.keyword) > -1;
      });
      return data.map((contact, i) => {
        return <ContactInfo contact={contact} key={i} />;
      });
    };

    return (
      <div>
        <h1>Contacts</h1>
        <input
          name="keyword"
          placeholder="search"
          value={this.state.keword}
          onChange={this.handleChange}
        />
        <div>{mapToComponents(this.state.contactData)}</div>
      </div>
    );
  }
}
