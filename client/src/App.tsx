import { Routes, Route, Navigate } from "react-router";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Applications from "./pages/applications/Applications";
import Home from "./pages/home/Home";
import JobDetails from "./pages/job-details/JobDetails";
import "./App.css";

function App() {
    return (
        <>
            <Header />
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/jobs/:id" element={<JobDetails />} />
                    <Route path="/applications" element={<Applications />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
