import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CourseCard({ searchTerm }) {
  // Dummy course data (you can replace with API data later)
  const courses = [
    {
      id: 1,
      title: 'MBA Distance Learning',
      text: 'Learn business strategies and management skills from top instructors.',
      img: 'https://www.aimlay.com/wp-content/uploads/2024/04/distance-mba-admission.webp',
    },
    {
      id: 2,
      title: 'MBA General',
      text: 'Learn business strategies and management skills from top instructors.',
      img: 'https://www.aimlay.com/wp-content/uploads/2024/12/Aimlay-Blog-Banner-1-1.jpg',
    },
    {
      id: 3,
      title: 'MCA General',
      text: 'Learn business strategies and management skills from top instructors.',
      img: 'https://akm-img-a-in.tosshub.com/sites/resources/campus/prod/img/newslisting/2024/5/64ad3d8adb0b1d001d7f77b23559497782.jpg',
    },
    {
      id: 4,
      title: 'BBA General',
      text: 'Learn business strategies and management skills from top instructors.',
      img: 'https://5.imimg.com/data5/NQ/NH/GLADMIN-7938600/bba-course.jpg',
    },
    {
      id: 5,
      title: 'BBA Distance Learning',
      text: 'Learn business strategies and management skills from top instructors.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7G2T6KEVQms1FfaKxsoNPOvMFePXX6XCGetqaasOWkSBZ0yVmx9-ARz09f-jYB3vj5d0&usqp=CAU',
    },
    {
      id: 6,
      title: 'MCA Distance Learning',
      text: 'Learn business strategies and management skills from top instructors.',
      img: 'https://collegevidya.com/blog/wp-content/uploads/2021/09/what-is-mca-distance-learning.jpg',
    },
    {
      id: 7,
      title: 'Odisha ITI Admission',
      text: 'Get admission in Odisha ITI courses with ease.',
      img: 'https://media.collegedekho.com/media/img/news/Odisha_ITI_Admission_1.png?height=310&width=615',
    },
    {
      id: 8,
      title: 'ITI Fitter',
      text: 'Learn the skills required for a career in fitting and machining.',
      img: 'https://moradabad.privateiti.com/wp-content/uploads/2025/01/UP-ITI-Admission-2025.webp',
    },
  ];
  // Filter logic (case-insensitive match)

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="d-flex flex-wrap gap-3">
      {filteredCourses.length > 0 ? (
        filteredCourses.map((course) => (
          <Card key={course.id} style={{ width: '233px' }}>
            <Card.Img className='course-image' variant="top" src={course.img} />
            <Card.Body>
              <Card.Title>Course: {course.title}</Card.Title>
              <Card.Text>{course.text}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No courses found for "{searchTerm}"</p>
      )}
    </div>
  );
}

export default CourseCard;
