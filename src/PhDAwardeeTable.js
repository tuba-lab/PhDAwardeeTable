import React, { useState, useEffect } from "react";

// The Header component, self-contained within this file.
const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownItems = [
    { label: "Thrust Area", key: "thrust-area", href: "#" },
    {
      label: "On Going Research Projects",
      key: "ongoing-research-projects",
      href: "#",
    },
    {
      label: "Completed Research Projects",
      key: "completed-research-projects",
      href: "#",
    },
    { label: "Joint Project", key: "joint-project", href: "#" },
    {
      label: "Important Laboratories",
      key: "important-laboratories",
      href: "/laboratories",
    },
    {
      label: "Departmental Committees",
      key: "departmental-committees",
      href: "#",
    },
    {
      label: "Alumni Relations",
      key: "alumni-relations",
      href: "/alumni-relations",
    },
  ];

  useEffect(() => {
    // Closes the dropdown when the user clicks outside of it.
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".dropdown-toggle") &&
        !e.target.closest(".dropdown-menu")
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <style>{`
        /* --- HEADER STYLES --- */
        .amu-header-horizontal {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #ffffff;
          border-radius: 20px;
          padding: 12px 20px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          flex-wrap: wrap; /* Allows items to wrap to a new line on small screens */
        }

        .amu-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .amu-left img {
          height: 45px;
        }

        .amu-title {
          font-weight: bold;
          font-size: 1.2em;
          color: #004d40;
        }

        .amu-nav {
          display: flex;
          gap: 16px;
          align-items: center;
          flex-wrap: wrap;
        }

        .amu-nav-link, .dropdown-toggle {
          text-decoration: none;
          color: #004d40;
          font-weight: 600;
          font-size: 0.95em;
          cursor: pointer;
          transition: color 0.2s ease-in-out;
        }

        .amu-nav-link:hover, .dropdown-toggle:hover {
          color: #00796b;
        }

        .dropdown-wrapper {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          background: white;
          border: 1px solid #ccc;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          padding: 10px;
          top: 100%;
          right: 0;
          z-index: 999;
          min-width: 250px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .dropdown-menu-item {
          display: block;
          padding: 8px;
          color: #004d40;
          text-decoration: none;
          font-size: 14px;
          transition: background-color 0.2s ease-in-out;
        }

        .dropdown-menu-item:hover {
          background: #e0f2f1;
          border-radius: 4px;
        }

        /* Responsive adjustments for the header on tablets and mobile devices */
        @media (max-width: 768px) {
          .amu-header-horizontal {
            flex-direction: column;
            align-items: flex-start;
            padding: 15px;
          }
          .amu-left {
            margin-bottom: 15px;
          }
          .amu-nav {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            width: 100%;
          }
          .amu-nav-link, .dropdown-toggle {
            width: 100%;
            text-align: left;
            padding: 8px 0;
          }
          .dropdown-wrapper {
            width: 100%;
          }
          .dropdown-menu {
            position: static;
            width: 100%;
            box-shadow: none;
            border: none;
            padding: 0;
            margin-top: 5px;
            background: #f8f8f8;
          }
          .dropdown-menu-item {
            padding-left: 15px;
          }
        }

        /* Further adjustments for very small mobile devices */
        @media (max-width: 480px) {
          .amu-title {
            font-size: 1em;
            text-align: center;
            width: 100%;
          }
          .amu-left {
            flex-direction: column;
          }
          .amu-left img {
            height: 35px;
          }
        }
      `}</style>
      <header className="amu-header-horizontal">
        <div className="amu-left">
          <img
            src="https://amubuddy.com/wp-content/uploads/2023/06/amu-logo.jpg"
            alt="AMU Logo"
            className="amu-logo"
          />
          <span className="amu-title">Aligarh Muslim University</span>
        </div>
        <nav className="amu-nav">
          <a href="/" className="amu-nav-link">
            Home
          </a>
          <a href="/about" className="amu-nav-link">
            About
          </a>
          <a href="/programs" className="amu-nav-link">
            Programs
          </a>
          <a href="/faculty" className="amu-nav-link">
            Faculty
          </a>
          <a href="/contact" className="amu-nav-link">
            Contact
          </a>
          <div className="dropdown-wrapper">
            <span
              className="dropdown-toggle"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Links ▼
            </span>
            {showDropdown && (
              <div className="dropdown-menu">
                {dropdownItems.map((item) => (
                  <a
                    href={item.href}
                    key={item.key}
                    className="dropdown-menu-item"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>
      </header>
      <div className="amu-underline"></div>
    </>
  );
};

// The Footer component, self-contained within this file.
const Footer = () => {
  return (
    <>
      <style>{`
        /* --- FOOTER STYLES --- */
        .amu-footer {
          background-color: #ffffff;
          color: #004d40;
          padding: 20px 0;
          margin-top: auto;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        }

        .footer-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid; /* Changed to use CSS Grid */
          grid-template-columns: 1fr 1fr; /* Two columns for desktop */
          gap: 20px;
          align-items: center;
        }

        .footer-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .footer-logo {
          height: 50px;
        }

        .footer-text {
          font-size: 0.9em;
          line-height: 1.6;
          color: #004d40;
        }

        .footer-right {
          text-align: right;
          font-size: 0.85em;
          color: #004d40;
        }

        /* Responsive adjustments for the footer on tablets and mobile devices */
        @media (max-width: 768px) {
          .amu-footer {
            padding: 15px 0;
          }
          .footer-container {
            grid-template-columns: 1fr; /* Single column on small screens */
            justify-items: center; /* Center items horizontally */
            text-align: center;
            padding: 0 15px;
          }
          .footer-left {
            flex-direction: column;
            gap: 10px;
            margin-bottom: 10px;
          }
          .footer-logo {
            margin-bottom: 5px;
          }
        }
      `}</style>
      <footer className="amu-footer">
        <div className="footer-container">
          <div className="footer-left">
            <p className="footer-text">
              &copy; {new Date().getFullYear()} Aligarh Muslim University. All
              Rights Reserved.
            </p>
          </div>
          <div className="footer-right">
            <p>Designed and Developed by Department of Computer Science</p>
            <p>Contact: info@amu.ac.in</p>
          </div>
        </div>
      </footer>
    </>
  );
};

const Layout = ({ children }) => {
  return (
    <>
      <style>{`
        /* Global Styles (apply to the entire page body) */
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: #ffffff;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Main content area styling */
        .main-content-wrapper {
          flex-grow: 1;
          max-width: 1100px;
          margin: 20px auto;
          padding: 0 20px;
          width: 100%;
        }

        .amu-underline {
          height: 4px;
          background: #004d40;
          width: 100%;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          margin-bottom: 20px;
        }
      `}</style>
      <Header />
      <main className="main-content-wrapper">{children}</main>
      <Footer />
    </>
  );
};

// --- PH.D. AWARDEE TABLE COMPONENT ---
const PhDAwardeeTable = () => {
  // Data manually extracted from the provided URL and user input.
  const phdData = [
    {
      sno: 1,
      awardeeName: "Dr. Mohammad Ubaidullah Bokhari",
      supervisor: "N/A",
      year: "2006",
    },
    {
      sno: 2,
      awardeeName: "Dr. Aasim Zafar",
      supervisor: "Prof. Nesar Ahmad",
      year: "2010",
    },
    {
      sno: 3,
      awardeeName: "Dr. Faheem Syeed Masoodi",
      supervisor: "Prof. Mohammad Ubaidullah Bokhari",
      year: "2013",
    },
    {
      sno: 4,
      awardeeName: "Dr. Shadab Alam",
      supervisor: "Prof. Mohammad Ubaidullah Bokhari",
      year: "2013",
    },
    {
      sno: 5,
      awardeeName: "Dr. Javed Ali",
      supervisor: "Prof. Rafiqul Zaman Khan",
      year: "2013",
    },
    {
      sno: 6,
      awardeeName: "Dr. Hatem Salem Abu Hammatta",
      supervisor: "Prof. Mohammad Ubaidullah Bokhari",
      year: "2014",
    },
    {
      sno: 7,
      awardeeName: "Dr. Noor Adnan Ibraheem",
      supervisor: "Prof. Rafiqul Zaman Khan",
      year: "2014",
    },
    {
      sno: 8,
      awardeeName: "Dr. Shams Tabrez Siddiqui",
      supervisor: "Prof. Mohammad Ubaidullah Bokhari",
      year: "2014",
    },
    {
      sno: 9,
      awardeeName: "Dr. Firoj Ali",
      supervisor: "Prof. Rafiqul Zaman Khan",
      year: "2014",
    },
    {
      sno: 10,
      awardeeName: "Dr. Sadaf Ahmad",
      supervisor: "Prof. Mohammad Ubaidullah Bokhari",
      year: "2015",
    },
    {
      sno: 11,
      awardeeName: "Dr. Zaki Ahmad Khan",
      supervisor: "Prof. Jamshed Siddiqui",
      year: "2016",
    },
    {
      sno: 12,
      awardeeName: "Dr. Yahya Kord Tamandani",
      supervisor: "Prof. Mohammad Ubaidullah Bokhari",
      year: "2016",
    },
    {
      sno: 13,
      awardeeName: "Dr. Nazir Ahmad",
      supervisor: "Prof. Jamshed Siddiqui",
      year: "2016",
    },
    {
      sno: 14,
      awardeeName: "Dr. Haider Khalaf Jabbar",
      supervisor: "Prof. Rafiqul Zaman Khan",
      year: "2016",
    },
    {
      sno: 15,
      awardeeName: "Dr. Suby Khanam",
      supervisor: "Prof. Jamshed Siddiqui",
      year: "2016",
    },
    {
      sno: 16,
      awardeeName: "Dr. Arman Rasool Faridi",
      supervisor: "Dr. Aasim Zafar",
      year: "2017",
    },
    {
      sno: 17,
      awardeeName: "Dr. Atena Shiranzaei Ghalehno",
      supervisor: "Prof. Rafiqul Zaman Khan",
      year: "2017",
    },
    {
      sno: 18,
      awardeeName: "Dr. Shahab Saquib Sohail",
      supervisor: "Prof. Jamshed Siddiqui",
      year: "2017",
    },
    {
      sno: 19,
      awardeeName: "Dr. Faraz Hasan",
      supervisor: "Prof. Mohammad Ubaidullah Bokhari",
      year: "2017",
    },
    {
      sno: 20,
      awardeeName: "Dr. Mohammad Alkadri",
      supervisor: "Dr. Tamanna Siddiqui",
      year: "2017",
    },
    {
      sno: 21,
      awardeeName: "Dr. Qahtan Makki Shallal",
      supervisor: "Prof. Mohammad Ubaidullah Bokhari",
      year: "2018",
    },
    {
      sno: 22,
      awardeeName: "Dr. Riaz Ahmad",
      supervisor: "Dr. Tamanna Siddiqui",
      year: "2018",
    },
    {
      sno: 23,
      awardeeName: "Dr. Hassan Faisal Hamood",
      supervisor: "Prof. Mohammad Ubaidullah Bokhari",
      year: "2019",
    },
    {
      sno: 24,
      awardeeName: "Dr. Ausaf Ahmad",
      supervisor: "Dr. Tamanna Siddiqui",
      year: "2019",
    },
    {
      sno: 25,
      awardeeName: "Dr. Mayank Srivastava",
      supervisor: "Prof. Jamshed Siddiqui",
      year: "2019",
    },
    {
      sno: 26,
      awardeeName: "Dr. Md. Oqail Ahmad",
      supervisor: "Prof. Rafiqul Zaman Khan",
      year: "2020",
    },
    {
      sno: 27,
      awardeeName: "Dr. Md. Ashraf Siddiqui",
      supervisor: "Prof. Mohammad Ubaidullah Bokhari",
      year: "2020",
    },
    {
      sno: 28,
      awardeeName: "Dr. Mohd. Kashif Adhami",
      supervisor: "Prof. Mohammad Ubaidullah Bokhari",
      year: "2020",
    },
    {
      sno: 29,
      awardeeName: "Dr. Parvej Aalam",
      supervisor: "Dr. Tamanna Siddiqui",
      year: "2020",
    },
    {
      sno: 30,
      awardeeName: "Dr. Shabbir Hassan",
      supervisor: "Prof. Mohammad Ubaidullah Bokhari",
      year: "2020",
    },
    {
      sno: 31,
      awardeeName: "Dr. Arshad Iqbal",
      supervisor: "Prof. Aasim Zafar",
      year: "2020",
    },
    {
      sno: 32,
      awardeeName: "Dr. Suhel Mustajab",
      supervisor: "N/A",
      year: "2020",
    },
    {
      sno: 33,
      awardeeName: "Dr. Rizwan Alam",
      supervisor: "Prof. Mohammad Ubaidullah Bokhari",
      year: "2021",
    },
    {
      sno: 34,
      awardeeName: "Dr. Saif Saffah Badr Alazzawi",
      supervisor: "Prof. Tamanna Siddiqui",
      year: "2021",
    },
    {
      sno: 35,
      awardeeName: "Dr. Shadab Alam Siddiqui",
      supervisor: "Prof. Tamanna Siddiqui",
      year: "2022",
    },
    {
      sno: 36,
      awardeeName: "Dr. Afreen Khan",
      supervisor: "Dr. Swaleha Zubair",
      year: "2022",
    },
    {
      sno: 37,
      awardeeName: "Dr. Ali Haider Thabet Shamsan",
      supervisor: "Dr. Arman Rasool Faridi",
      year: "2022",
    },
    {
      sno: 38,
      awardeeName: "Dr. Abdullah Yahya Abdullah Amer",
      supervisor: "Prof. Tamanna Siddiqui",
      year: "2022",
    },
    {
      sno: 39,
      awardeeName: "Dr. Mohammad Haris",
      supervisor: "Dr. Swaleha Zubair",
      year: "2022",
    },
    {
      sno: 40,
      awardeeName: "Dr. Mohd. Anas Wajid",
      supervisor: "Prof. Aasim Zafar",
      year: "2022",
    },
    {
      sno: 41,
      awardeeName: "Dr. Faraz Masood",
      supervisor: "Dr. Arman Rasool Faridi",
      year: "2023",
    },
    {
      sno: 42,
      awardeeName: "Dr. Muaadh Abdo Mohammed Ahmed Al Sabri",
      supervisor: "Dr. Swaleha Zubair",
      year: "2023",
    },
    {
      sno: 43,
      awardeeName: "Dr. Shaharyar Alam Ansari",
      supervisor: "Prof. Aasim Zafar",
      year: "2023",
    },
    {
      sno: 44,
      awardeeName: "Dr. Khalid Anwar",
      supervisor: "Prof. Aasim Zafar",
      year: "2023",
    },
    {
      sno: 45,
      awardeeName: "Dr. Anjani Kumar Singha",
      supervisor: "Dr. Swaleha Zubair",
      year: "2023",
    },
    {
      sno: 46,
      awardeeName: "Dr. Faizan Nasir",
      supervisor: "Prof. Mohammad Ubaidullah Bokhari",
      year: "2023",
    },
    {
      sno: 47,
      awardeeName: "Dr. Mohammad Atif",
      supervisor: "Dr. Faisal Anwer",
      year: "2024",
    },
    {
      sno: 48,
      awardeeName: "Dr. Ankur Kumar",
      supervisor: "Dr. Mohammad Nadeem",
      year: "2024",
    },
    {
      sno: 49,
      awardeeName: "Dr. Fakhrun Jamal",
      supervisor: "Prof. Aasim Zafar",
      year: "2024",
    },
    {
      sno: 50,
      awardeeName: "Dr. Sehba Masood",
      supervisor: "Prof. Aasim Zafar",
      year: "2024",
    },
    {
      sno: 51,
      awardeeName: "Dr. Md. Saquib Jawed",
      supervisor: "Dr. Mohammad Sajid",
      year: "2024",
    },
    {
      sno: 52,
      awardeeName: "Dr. Khushnaseeb Roshan",
      supervisor: "Prof. Aasim Zafar",
      year: "2024",
    },
    {
      sno: 53,
      awardeeName: "Dr. Ghazala Sultan",
      supervisor: "Prof. Swaleha Zubair",
      year: "2024",
    },
    {
      sno: 54,
      awardeeName: "Dr. Sheikh Burhan Ul Haque",
      supervisor: "Prof. Aasim Zafar",
      year: "2024",
    },
    {
      sno: 55,
      awardeeName: "Dr. Mohammad Luqman",
      supervisor: "Prof. Arman Rasool Faridi",
      year: "2024",
    },
    {
      sno: 56,
      awardeeName: "Dr. Mohd. Sakib",
      supervisor: "Prof. Suhel Mustajab",
      year: "2024",
    },
    {
      sno: 57,
      awardeeName: "Dr. Mahfooz Alam",
      supervisor: "Prof. Suhel Mustajab",
      year: "2024",
    },
    {
      sno: 58,
      awardeeName: "Dr. Mohd. Mustaqeem",
      supervisor: "Prof. Suhel Mustajab",
      year: "2024",
    },
  ];

  return (
    <div className="table-container">
      <style>{`
        /* --- STYLES FOR THE PH.D. AWARDEE TABLE --- */
        .table-container {
          padding: 20px;
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          overflow-x: auto; /* Ensures horizontal scrolling on small screens if needed */
        }
        
        .table-title {
          font-size: clamp(1.5rem, 5vw, 2.5rem); /* Responsive font size */
          font-weight: bold;
          color: #004d40;
          margin-bottom: 2rem;
          text-align: center;
        }

        .phd-table {
          width: 100%;
          border-collapse: collapse;
          border-radius: 8px;
          overflow: hidden;
        }

        .phd-table th, .phd-table td {
          padding: 12px 15px;
          text-align: left;
          border-bottom: 1px solid #e0f2f1;
        }

        .phd-table thead th {
          background-color: #004d40;
          color: #ffffff;
          font-weight: bold;
          text-transform: uppercase;
        }

        .phd-table tbody tr:nth-child(even) {
          background-color: #f8f8f8;
        }

        .phd-table tbody tr:hover {
          background-color: #e0f2f1;
          cursor: pointer;
        }

        /* Responsive adjustments for the table on mobile devices */
        @media (max-width: 600px) {
          .phd-table {
            border: none;
          }
          .phd-table thead {
            display: none; /* Hides the table header on mobile */
          }
          .phd-table tbody, .phd-table tr {
            display: block; /* Stacks the table elements */
            width: 100%;
          }
          .phd-table tr {
            margin-bottom: 15px;
            border: 1px solid #e0f2f1;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            display: flex;
            flex-direction: column;
            padding: 10px;
          }
          .phd-table td {
            text-align: left;
            position: relative;
            padding-left: 100px; /* Space for the data-label */
            border: none;
            display: block;
            word-break: break-word; /* Prevents long names from overflowing */
          }
          .phd-table td::before {
            content: attr(data-label);
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
            width: 80px; /* Fixed width for the label */
            font-weight: bold;
            color: #004d40;
            white-space: nowrap; /* Prevents label from wrapping */
          }
          .phd-table tbody tr:hover {
            background-color: transparent; /* Remove hover background on stacked view */
          }
        }

        /* Further adjustments for smaller screens */
        @media (max-width: 480px) {
          .phd-table td {
            padding-left: 80px;
          }
          .phd-table td::before {
            width: 60px;
          }
        }
      `}</style>
      <h1 className="table-title">P.H.D. Awardees</h1>
      <table className="phd-table">
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Awardee Name</th>
            <th>Supervisor</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {phdData.map((awardee, index) => (
            <tr key={index}>
              <td data-label="S. No.">{awardee.sno}</td>
              <td data-label="Awardee Name">{awardee.awardeeName}</td>
              <td data-label="Supervisor">{awardee.supervisor}</td>
              <td data-label="Year">{awardee.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  return (
    <Layout>
      <PhDAwardeeTable />
    </Layout>
  );
};

export default App;
