import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class CourseDetails extends Component {
  render() {
    const {details} = this.props
    const {id, name, logoUrl} = details

    return (
      <Link to={`courses/${id}`} className="listItem">
        <li className="list">
          <div>
            <img src={logoUrl} alt={name} />
          </div>
          <p className="course-name">{name}</p>
        </li>
      </Link>
    )
  }
}
export default CourseDetails
