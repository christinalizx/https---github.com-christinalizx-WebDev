import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);

  return (
    <>
        <div
            className="d-flex justify-content-between align-items-center">
            <form className="form-inline">
                <input id="text-fields-SA" className="form-control"
                    placeholder="Search Assignment" />
            </form>

            <div className="float-end">
                <button className="btn btn-outline-success me-2"><i
                        className="fas fa-users"></i> Group</button>
                <button className="btn btn-outline-primary me-2"><i
                        className="fas fa-plus"></i> Assignment</button>
                <button className="btn btn-outline-primary me-2"> ︙</button>
            </div>
        </div>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;

