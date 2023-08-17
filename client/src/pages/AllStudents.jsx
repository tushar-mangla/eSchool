import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import customFetch from "../utils/customFetch";
import StudentContainer from "../components/AllStudentContainer";
import { LoaderComponent } from "../components";
import plus from "../images/plus.svg";
import edit from "../images/edit.svg";
import search from "../images/search.svg";
import "../style/AllStudent.scss";

const AllStudents = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [customFieldLabels, setCustomFieldLabels] = useState([]);

  const fetchStudents = async (page) => {
    try {
      const { data } = await customFetch.get(`/students/?page=${page}`);
      setStudents(data.students);
      setTotalPages(data.numOfPages);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching students:", error);
      setLoading(false);
    }
  };

  const fetchCustomFieldLabels = async () => {
    try {
      const { data } = await customFetch.get("/custom");
      setCustomFieldLabels(data);
    } catch (error) {
      console.error("Error fetching custom field labels:", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchStudents(currentPage);
    fetchCustomFieldLabels();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchStudents(page);
  };

  const handleDelete = async (studentId) => {
    try {
      await customFetch.delete(`/students/${studentId}`);
      fetchStudents(currentPage);
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const delayedFetchStudents = debounce(fetchStudents, 300);

  const handleSearchChange = (event) => {
    const searchText = event.target.value;
    setSearchText(searchText);
    delayedFetchStudents(currentPage);
  };

  return (
    <div className="addNewStudentContainer">
      <div className="rightSide">
        <div className="studentListContainer">
          <div className="topbar">
            <div className="search">
              <img className="image" src={search} />
              <input
                className="input"
                placeholder="Search for Students..."
                value={searchText}
                onChange={handleSearchChange}
              />
            </div>
            <div className="rightBtn">
              <Link className="edit">
                <img className="image " src={edit} />
                <p className="para">Edit Student Details</p>
              </Link>
              <Link to="/dashboard/addStudent" className="addNew">
                <img className="image " src={plus} />
                <p className="para">Add New</p>
              </Link>
            </div>
          </div>
          {loading ? (
            <LoaderComponent />
          ) : (
            <StudentContainer
              students={students}
              customFieldLabels={customFieldLabels}
              currentPage={currentPage}
              numOfPages={totalPages}
              handlePageChange={handlePageChange}
              handleDelete={handleDelete}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AllStudents;
