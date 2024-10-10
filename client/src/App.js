import React, { useState } from "react";
import { Container, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import "./App.css";
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [prompt, setPrompt] = useState("");
  const [images, setImages] = useState(null);

  const moon_icon = (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const sun_icon = (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.28451 10.3333C7.10026 10.8546 7 11.4156 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C11.4156 7 10.8546 7.10026 10.3333 7.28451"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 2V4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 20V22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 12L2 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M22 12L20 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M19.7778 4.22266L17.5558 6.25424"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4.22217 4.22266L6.44418 6.25424"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6.44434 17.5557L4.22211 19.7779"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M19.7778 19.7773L17.5558 17.5551"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  // Function to handle fetching images on button click
  const fetchImages = async () => {
    if (!prompt) {
      toast.error("You must provide a prompt!", { autoClose: 2000 });
      return;
    }

    toast.info("Generating !", { autoClose: 3000, hideProgressBar: false });
    try {
      const response = await fetch("http://localhost:5000/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to generate images.");
      }

      const data = await response.json();
      setImages(data.images); // Update state with fetched images
    } catch (error) {
      toast.error(`Error fetching images: ${error.message}`); // Display toast with error message
      console.error("Error fetching images:", error);
    }
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Navbar bg="dark" variant="dark" className="justify-content-between px-2">
        <Navbar.Brand href="#home">AI Image Generator</Navbar.Brand>
        <Button variant="dark" onClick={toggleMode} style={{ outline: "none" }}>
          {darkMode ? sun_icon : moon_icon}
        </Button>
      </Navbar>

      <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
        <h1 className="text-center mb-4">AI Image Generator</h1>
        <Form className="d-flex w-75">
          <FormControl
            type="search"
            placeholder="Search for images"
            className="me-2"
            aria-label="Search"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)} // Update prompt on input change
          />
          {/* Button to trigger the image generation */}
          <Button variant="primary" onClick={fetchImages}>
            Generate
          </Button>
        </Form>

        {/* Container to display the fetched images */}
        <div className="image-container d-flex justify-content-center mt-5">
          {images ? (
            images.map((imgUrl, index) => (
              <img
                key={index}
                src={imgUrl}
                alt={`Generated ${index + 1}`}
                className="img-fluid me-2"
              />
            ))
          ) : (
            <p>No images to display.</p>
          )}
        </div>
      </Container>

      {/* Toast Container to display toasts */}
      <ToastContainer
        position="bottom-center"
        limit={1}
        autoClose={5000}
        hideProgressBar={true}
        pauseOnFocusLoss={false}
      />
    </div>
  );
}

export default App;
