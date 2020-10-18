import React, {Component} from 'react';
import { Table, Grid, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'


/**
 * Courses React Class
 * @class Courses
 */
export class Courses extends Component {

  componentDidMount() {
    this.props.getCourses();
  }

  /** Calculate how much material is in */
  calcMaterial(videos, filePaths){
    return videos.length + filePaths.length
  }

  /** Generate courses table depending on student and admin view. This depends if it is enabled or disabled*/
  generateCourses(courseData){
    let role = this.props.auth.role
    let filterCourses = courseData.filter(el => {
      if (role === 1) { return true }
      else {
        if (el.courseStatus === 'enabled') {
          return true
        }
        return
      }
    })

    return filterCourses.map(val => {
          return (
          <tr key={val._id}>
            <td>{val.name}</td>
            <td>{this.calcMaterial(val.videos, val.filePaths)}</td>
            <td>{val.members.length}</td>
            {role === 1 && <td>{val.courseStatus}</td>}
            <td className="align-middle">
              <Link to={`/course/${val._id}`}>
                <Button >See course</Button>
              </Link>
            </td>
          </tr>)
        })
  }




  render() {
    let courses = this.generateCourses(this.props.courses)
    return (
      <div>
        
      </div>
    )
  }
}


