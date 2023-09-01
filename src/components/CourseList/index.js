import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'

import './index.css'

class CourseList extends Component {
  state = {isLoading: true, isFailed: false, isSuccess: false, itemDetails: {}}

  componentDidMount() {
    this.getCourse()
  }

  getCourse = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`)
    const data = await response.json()

    if (response.ok) {
      const updatedData = {
        id: data.course_details.id,
        name: data.course_details.name,
        imageUrl: data.course_details.image_url,
        description: data.course_details.description,
      }
      this.setState({
        isLoading: false,
        isFailed: false,
        isSuccess: true,
        itemDetails: updatedData,
      })
    } else {
      this.setState({isLoading: false, isFailed: true, isSuccess: false})
    }
  }

  render() {
    const {isLoading, isFailed, isSuccess, itemDetails} = this.state
    const {name, imageUrl, description} = itemDetails

    return (
      <div>
        <Header />
        <div>
          {isLoading && (
            <div data-testid="loader" className="loader">
              <Loader height="80" width="80" type="ThreeDots" color="#1e293b" />
            </div>
          )}
          {isSuccess && (
            <div className="itemDetails">
              <div>
                <img src={imageUrl} alt={name} className="image" />
              </div>
              <div>
                <h1 className="name">{name}</h1>
                <p className="desc">{description}</p>
              </div>
            </div>
          )}
          {isFailed && (
            <div className="failure-view">
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
                  alt="failure view"
                  className="failure"
                />
              </div>
              <h1 className="failure-heading">Oops! Something Went Wrong</h1>
              <p className="failure-msg">
                We cannot seem to find the page you are looking for
              </p>
              <div>
                <button
                  type="button"
                  onClick={this.getCourse}
                  className="retry-button"
                >
                  Retry
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default CourseList
