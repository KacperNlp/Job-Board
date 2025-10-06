import { Routes, Route } from "react-router";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import "./App.css";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/jobs/:id" element={<JobDetails />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
