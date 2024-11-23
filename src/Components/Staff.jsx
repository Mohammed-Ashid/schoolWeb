import React, { useState } from 'react';
import '../Styles/Staff.css';
import Footer from './Footer';
import NavBar from './NavBar';

const staffData = [
  {
    id: 1,
    name: 'John Doe',
    department: 'Math',
    contact: 'john.doe@school.com',
    image: 'https://via.placeholder.com/150?text=Teacher1',
  },
  {
    id: 2,
    name: 'Jane Smith',
    department: 'Science',
    contact: 'jane.smith@school.com',
    image: 'https://via.placeholder.com/150?text=Teacher2',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    department: 'History',
    contact: 'mike.johnson@school.com',
    image: 'https://via.placeholder.com/150?text=Teacher3',
  },
  {
    id: 4,
    name: 'Sara Williams',
    department: 'English',
    contact: 'sara.williams@school.com',
    image: 'https://via.placeholder.com/150?text=Teacher4',
  },
  // More staff members...
];

const specialSections = [
  {
    id: 1,
    name: 'John Doe',
    title: 'Principal',
    about: 'John is the principal of the school with over 20 years of experience.',
    image: 'https://via.placeholder.com/150?text=Principal',
  },
  {
    id: 2,
    name: 'Jane Smith ',
    title: 'Managing Director',
    about: 'Jane leads the administration and strategic direction of the school.',
    image: 'https://via.placeholder.com/150?text=MD',
  },
  {
    id: 3,
    name: 'Mike Johnson ',
    title: 'Owner',
    about: 'Mike is the owner of the school and has been an active supporter of education.',
    image: 'https://via.placeholder.com/150?text=Owner',
  },
];

function Staff() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStaff, setFilteredStaff] = useState(staffData);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setFilteredStaff(
      staffData.filter(
        (staff) =>
          staff.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
          staff.department.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <div><NavBar/>
    <div className="staff-container">
      {/* Special Sections */}
      <div className="special-sections">
        {specialSections.map((section) => (
          <div key={section.id} className="special-section">
            <div>
                <div>
            <img src={section.image} alt={section.name} className="special-section-img" /></div><h2 className="special-section-name">{section.name}</h2>
            <h4 className="special-section-title">{section.title}</h4>
            </div>
            <div className="special-section-info">
              
              <p className="special-section-about">{section.about}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name or department..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Staff Grid */}
      <h1 className="staff-heading">Our Teachers</h1>
      <div className="staff-grid">
        {filteredStaff.map((teacher) => (
          <div key={teacher.id} className="staff-card">
            <img src={teacher.image} alt={teacher.name} className="staff-image" />
            <div className="staff-info">
              <h3 className="staff-name">{teacher.name}</h3>
              <p className="staff-department">{teacher.department}</p>
              <p className="staff-contact">{teacher.contact}</p>
            </div>
          </div>
        ))}
      </div>
    </div><Footer/></div>
  );
}

export default Staff;
