'use client';

import React, { useState, useEffect } from 'react';
import { format } from 'date-fns'; // Import date-fns for formatting
import { Calendar as CalendarIcon } from 'lucide-react'; // Icon for the button

import { cn } from '@/lib/utils'; // Utility for class names (usually in Shadcn setup)
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar'; // Import Shadcn Calendar
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'; // Import Shadcn Popover

const BookingModal = ({ service, onClose, onConfirm }) => {
  // Use Date object for selectedDate state, initialize as undefined
  const [selectedDate, setSelectedDate] = useState < Date | undefined > (undefined);
  const [selectedTime, setSelectedTime] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);
  const [isLoadingTimes, setIsLoadingTimes] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false); // Control popover state

  // Fetch available times when selectedDate changes
  useEffect(() => {
    if (selectedDate) {
      // Format date to YYYY-MM-DD for API or placeholder logic
      const formattedDate = format(selectedDate, 'yyyy-MM-dd');
      setIsLoadingTimes(true);
      setAvailableTimes([]); // Clear previous times
      setSelectedTime(''); // Reset time selection

      console.log(`Fetching times for ${formattedDate}... (Placeholder)`);
      // --- Replace with your actual API call ---
      // fetch(`/api/bookings?date=${formattedDate}`)
      //   .then(res => res.json())
      //   .then(data => {
      //     setAvailableTimes(data.availableTimeslots || []);
      //     setIsLoadingTimes(false);
      //   })
      //   .catch(err => {
      //      console.error("Failed to fetch times:", err);
      //      setError("Could not load available times.");
      //      setIsLoadingTimes(false);
      //   });
      // --- Placeholder Simulation ---
      setTimeout(() => {
        setAvailableTimes(["09:00", "09:30", "10:00", "11:00", "14:00", "14:30", "15:00"]);
        setIsLoadingTimes(false);
      }, 500);
      // --- End Placeholder ---
    } else {
      setAvailableTimes([]); // Clear times if no date is selected
      setSelectedTime('');
    }
  }, [selectedDate]); // Re-run effect when selectedDate changes

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setIsCalendarOpen(false); // Close the popover after selecting a date
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!selectedDate || !selectedTime || !name || !phone) {
      setError('Please fill in all fields.');
      return;
    }
    if (!/^\+?\d{10,}$/.test(phone.replace(/\s+/g, ''))) {
        setError('Please enter a valid phone number.');
        return;
    }

    // Format the date before sending it
    const formattedDate = format(selectedDate, 'yyyy-MM-dd');
    onConfirm({ date: formattedDate, time: selectedTime, name, phone });
  };

  // Disable past dates (excluding today)
  const isDateDisabled = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to start of today
    return date < today;
  };


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Book: {service.name}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Date Picker using Popover and Calendar */}
          <div>
            <Label htmlFor="date-picker">Select Date</Label>
            <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  id="date-picker"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !selectedDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, "PPP") : <span >Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  disabled={isDateDisabled} // Disable past dates
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Time Selection */}
          <div>
            <Label htmlFor="time">Select Time</Label>
            {isLoadingTimes ? (
              <p className="text-sm text-gray-500">Loading available times...</p>
            ) : availableTimes.length > 0 ? (
              <select
                id="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                required
                className="w-full p-2 border rounded bg-white" // Added bg-white for visibility
                disabled={!selectedDate || isLoadingTimes}
              >
                <option value="" disabled>-- Select a time --</option>
                {availableTimes.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            ) : (
              <p className="text-sm text-gray-500">
                {selectedDate ? 'No times available for this date.' : 'Please select a date first.'}
              </p>
            )}
          </div>

          {/* Name Input */}
          <div>
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="e.g. Jane Doe"
            />
          </div>

          {/* Phone Input */}
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="e.g. +27821234567"
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-600 text-sm">{error}</p>}

          {/* Action Buttons */}
          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoadingTimes || !selectedDate || !selectedTime || availableTimes.length === 0}>
              Confirm Booking
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;