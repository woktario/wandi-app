import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap"
import CourseCreateModal from "./components/courseCreateModal";
import courseService from "./utils/service";

const MateriCRUD = () => {

    const [showCreateModal, setShowCreateModal] = useState(false);
    const [courses, setCourses] = useState([]);

    const toggleCreateModal = () => { //Membuka atau menutup modal
        setShowCreateModal(!showCreateModal);
    }

    const handleAddCourse = (payload) => { //Menambahkan item dan menutup modal
        courseService.addCourse(payload);
        toggleCreateModal();
        fetchCourses();
    }

    const fetchCourses = () => { //Ambil data dari local storage
        const result = courseService.getCourse();
        setCourses(result.data);
    }

    useEffect(() => {
        fetchCourses();
    }, [])

    return (
        <Container style={{ padding: '50px' }}>
            <Row>
                <Col md={{ offset: 2, span: 8 }} style={{ textAlign: 'left' }}>
                    <h3 style={{ marginBottom: '25px' }}>Course List</h3>
                    <Button variant="success" onClick={toggleCreateModal}>Add New</Button>
                    <Table>
                        <thead>
                            <tr>
                                <td>No</td>
                                <td>Title</td>
                                <td>Description</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course, index) => {
                                return (
                                    <tr key={course.id}>
                                        <td>{index + 1}</td>
                                        <td>{course.title}</td>
                                        <td>{course.description}</td>
                                        <td>-</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <CourseCreateModal handleSubmit={handleAddCourse} show={showCreateModal} handleClose={toggleCreateModal} />
        </Container>
    );
}

export default MateriCRUD;