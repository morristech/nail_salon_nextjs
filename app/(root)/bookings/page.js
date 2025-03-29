'use client'; // This component uses client-side hooks (useState, useEffect)

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
// You'll likely need a Modal and Date Picker component.
// If using Shadcn UI, you might use Dialog for modal and Calendar + custom time select.
// Example using basic HTML elements for modal structure:
import BookingModal from '@/components/shared/BookingModal';

const BookingPage = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bookingStatus, setBookingStatus] = useState('');

  // Fetch services on component mount
  useEffect(() => {
    const fetchServices = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/bookings'); // GET request by default
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setServices(data.services || []); // Ensure services is always an array
      } catch (e) {
        console.error("Failed to fetch services:", e);
        setError('Could not load services. Please try again later.');
        setServices([]); // Set to empty array on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []); // Empty dependency array means this runs once on mount

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    setBookingStatus(''); // Clear previous status messages
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null); // Clear selection when closing
  };

  const handleConfirmBooking = async (bookingDetails) => {
    if (!selectedService) return;

    setBookingStatus('Booking in progress...'); // Provide feedback

    const fullBookingData = {
      service: selectedService, // Include full service details or just ID/name
      ...bookingDetails, // Contains date, time, name, phone from modal
    };

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fullBookingData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || `HTTP error! status: ${response.status}`);
      }

      setBookingStatus(`Booking successful! Appointment ID: ${result.appointmentId}`);
      handleCloseModal(); // Close modal on success

    } catch (e) {
      console.error("Failed to confirm booking:", e);
      setBookingStatus(`Booking failed: ${e.message}`);
      // Keep modal open on failure so user can retry or see the error
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Book Your Appointment</h1>

      {isLoading && <p className="text-center">Loading services...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {!isLoading && !error && services.length === 0 && (
        <p className="text-center">No services available at this time.</p>
      )}

      {!isLoading && !error && services.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div key={service.id} className="border p-4 rounded-lg shadow hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold">{service.name}</h2>
              <p>Duration: {service.duration} mins</p>
              <p>Price: R{service.price}</p>
              <Button onClick={() => handleServiceSelect(service)} className="mt-4 w-full">
                Select Service
              </Button>
            </div>
          ))}
        </div>
      )}

      {bookingStatus && <p className={`text-center mt-4 ${bookingStatus.startsWith('Booking failed') ? 'text-red-600' : 'text-green-600'}`}>{bookingStatus}</p>}

      {/* Conditionally render the modal */}
      {isModalOpen && selectedService && (
        <BookingModal
          service={selectedService}
          onClose={handleCloseModal}
          onConfirm={handleConfirmBooking}
        />
      )}
    </div>
  );
};

export default BookingPage;