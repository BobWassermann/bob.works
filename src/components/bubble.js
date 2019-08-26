import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const Bubble = styled(props => <Link {...props} />)`
  background-color: #F700A9;
  color: #fff;
  border-radius: 180px;
  text-decoration: none;
  padding: 15px 20px;
  display: inline-block;
  margin-bottom: 10px;
`

export default Bubble;