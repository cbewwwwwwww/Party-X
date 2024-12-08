import React, { useState } from "react";
import { FaCalendar, FaCamera, FaCheck, FaTimes } from "react-icons/fa";
import Navbar from "../home/navbar";
import Footer from "../home/footer";

const Events = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selectedEvent: ""
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  const upcomingEvents = [
    { id: 1, title: "Tech Conference 2024", date: "2024-03-15", spots: 50 },
    { id: 2, title: "Digital Summit", date: "2024-03-20", spots: 30 },
    { id: 3, title: "Innovation Forum", date: "2024-03-25", spots: 40 }
  ];

  const pastEvents = [
    {
      id: 1,
      title: "AI Workshop 2023",
      date: "2023-12-10",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7",
      description: "Exploring the future of AI technology"
    },
    {
      id: 2,
      title: "Web Dev Bootcamp",
      date: "2023-11-15",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
      description: "Intensive coding workshop for developers"
    },
    {
      id: 3,
      title: "Design Thinking Session",
      date: "2023-10-20",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
      description: "Creative problem-solving workshop"
    }
  ];

  const handleDateClick = (day) => {
    setSelectedDate(day);
    setShowEventDetails(true);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.selectedEvent) newErrors.selectedEvent = "Please select an event";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setShowSuccess(true);
      setFormData({ name: "", email: "", phone: "", selectedEvent: "" });
      setErrors({});
      setTimeout(() => setShowSuccess(false), 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Events Portal</h1>

        {/* Calendar Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FaCalendar className="mr-2" /> Event Calendar
          </h2>
          <div className="grid grid-cols-7 gap-2">
            {daysInMonth.map((day) => (
              <button
                key={day}
                onClick={() => handleDateClick(day)}
                className="p-4 text-center border rounded-lg hover:bg-blue-50 transition-colors"
              >
                {day}
              </button>
            ))}
          </div>

          {showEventDetails && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold">Events on March {selectedDate}</h3>
              <p>No events scheduled for this date.</p>
            </div>
          )}
        </div>

        {/* Past Events Gallery */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FaCamera className="mr-2" /> Past Events Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div key={event.id} className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1560439514-4e9645039924";
                  }}
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{event.title}</h3>
                  <p className="text-gray-600">{event.date}</p>
                  <p className="mt-2">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Event Registration</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Select Event</label>
              <select
                name="selectedEvent"
                value={formData.selectedEvent}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Choose an event</option>
                {upcomingEvents.map((event) => (
                  <option key={event.id} value={event.id}>
                    {event.title} - {event.date}
                  </option>
                ))}
              </select>
              {errors.selectedEvent && (
                <p className="text-red-500 text-sm mt-1">{errors.selectedEvent}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-neutral-500 transition-colors"
            >
              Register for Event
            </button>
          </form>

          {showSuccess && (
            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg flex items-center">
              <FaCheck className="mr-2" /> Registration successful!
            </div>
          )}
        </div>
      </div>
    </div>
          <Footer/>
    </div>
  );
};

export default Events;