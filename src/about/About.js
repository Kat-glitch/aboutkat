import React, { Component } from 'react'
import Avatar from "../avatar/Avatar"
import AboutMenu from "./AboutMenu.js"

export default class About extends Component {
  render() {
    return (
      <>
        <Avatar page="about"/>
        <AboutMenu/>
      </>
    )
  }
}
