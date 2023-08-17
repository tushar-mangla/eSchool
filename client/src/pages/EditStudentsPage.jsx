/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import customFetch from "../utils/customFetch";
import CustomFieldsForm from "../components/CustomFieldsForm";
import { OrganizeCustomFields } from "../components";
import "../style/AddStudent.scss";
import avatar from "../images/avatar.svg";
import iconUser from "../images/iconUser.svg";

const EditStudent = () => {
  const { studentId } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    studentId: "",
    firstName: "",
    lastName: "",
    dob: "",
    studentClass: "",
    gender: "",
    parentsName: "",
    address: "",
    details: "",
  });
  const [customFieldsData, setCustomFieldsData] = useState([]);
  const [customFields, setCustomFields] = useState({});

  const formatDate = (date) => {
    const dateObject = new Date(date);
    const day = String(dateObject.getDate()).padStart(2, "0");
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const year = dateObject.getFullYear();

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };
  const fetchCustomFields = async () => {
    try {
      const response = await customFetch.get("/custom");
      if (response.data) {
        console.log(response.data);
        const organizedData = OrganizeCustomFields(response.data);
        setCustomFieldsData(organizedData);
      } else {
        console.error("Error fetching custom fields: Invalid data");
      }
    } catch (error) {
      console.error("Error fetching custom fields:", error);
    }
  };

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const { data } = await customFetch.get(`/students/${studentId}`);
        const formattedDob = formatDate(data.student.dob);
        setStudent({
          ...data.student,
          dob: formattedDob,
        });
        setCustomFields(data.student.customFields || {});
      } catch (error) {
        console.error("Error fetching student details:", error);
      }
    };

    fetchStudentDetails();
    fetchCustomFields();
  }, [studentId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleCustomFieldChange = (customFieldId, value) => {
    setCustomFields((prevFields) => ({
      ...prevFields,
      [customFieldId]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const updatedStudentData = {
        ...student,
        customFields: customFields,
      };

      await customFetch.patch(`/students/${studentId}`, updatedStudentData);
      navigate("/dashboard/students");
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  return (
    <div className="addNewStudentContainer">
      <div className="rightSide">
        <form className="addStudent" onSubmit={handleSubmit}>
          <img className="image" src={avatar} />
          <div className="nameSection">
            <div>
              <p>FirstName</p>
              {/* <label htmlFor="firstName">First Name</label> */}
              <div className="formRow">
                <input
                  className="formInput"
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={student.firstName}
                  onChange={handleInputChange}
                />
                <img className="inputImage" src={iconUser} />
              </div>
            </div>
            <div>
              {/* <label htmlFor="lastName">Last Name</label> */}
              <p>Last Name</p>
              <div className="formRow">
                <input
                  className="formInput"
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={student.lastName}
                  onChange={handleInputChange}
                />
                <img className="inputImage" src={iconUser} />
              </div>
            </div>
          </div>

          <div className="nameSection">
            <div>
              <p>ID</p>
              <div className="formRow">
                {/* <label htmlFor="studentId">Student ID:</label> */}
                <input
                  className="formInput"
                  type="text"
                  id="studentId"
                  name="studentId"
                  value={student.studentId}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <p>Date of Birth</p>
              {/* <label htmlFor="dob">Date of Birth:</label> */}
              <div className="formRow">
                <input
                  className="formInput"
                  type="date"
                  id="dob"
                  name="dob"
                  value={student.dob}
                  onChange={handleInputChange}
                  max={new Date().toISOString().split("T")[0]}
                />
              </div>
            </div>
          </div>
          <div className="nameSection">
            <div>
              <p>Class</p>
              {/* <label htmlFor="studentClass">Class:</label> */}
              <div className="formRow">
                <input
                  className="formInput"
                  type="text"
                  id="studentClass"
                  name="studentClass"
                  value={student.studentClass}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* <label htmlFor="gender">Gender:</label> */}
            <div>
              <p>Gender</p>
              <div className="formRow">
                <select
                  className="formInput"
                  id="gender"
                  name="gender"
                  value={student.gender}
                  onChange={handleInputChange}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="nameSection">
            <div>
              <p>Parent's Name</p>
              {/* <label htmlFor="parentsName">Parents Name:</label> */}
              <div className="formRow">
                <input
                  className="formInput"
                  type="text"
                  id="parentsName"
                  name="parentsName"
                  value={student.parentsName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <p>Address</p>
              {/* <label htmlFor="address">Address:</label> */}
              <div className="formRow">
                <input
                  className="formInput"
                  type="text"
                  id="address"
                  name="address"
                  value={student.address}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="details">
            <p>Details</p>
            {/* <label htmlFor="details">Details:</label> */}
            <textarea
              className="detailsInput"
              id="details"
              name="details"
              value={student.details}
              onChange={handleInputChange}
            />
          </div>

          {customFieldsData && (
            <CustomFieldsForm
              customFieldsData={customFieldsData}
              customFields={customFields}
              handleCustomFieldChange={handleCustomFieldChange}
            />
          )}

          <div className="buttonContainer">
            <button className="button" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStudent;
