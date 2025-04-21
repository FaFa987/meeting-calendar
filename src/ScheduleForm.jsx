import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";

function ScheduleForm({ onAddMeeting }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const meetingLevels = [
    { id: 1, name: "Team" },
    { id: 2, name: "Department" },
    { id: 3, name: "Company" },
  ];

  const onSubmit = (data) => {
    onAddMeeting({
      ...data,
      // Convert date format if needed
      date: data.date.split('-').reverse().join('/')
    });
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="p-4 border rounded bg-light" style={{ width: "100%", maxWidth: "800px" }}>
        <h1 className="text-center mb-4">Schedule New Meeting</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Meeting Title */}
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Meeting Title *
            </label>
            <input
              id="title"
              className={`form-control ${errors.title ? "is-invalid" : ""}`}
              {...register("title", { required: "Meeting title is required" })}
              placeholder="Enter meeting title"
            />
            {errors.title && (
              <div className="invalid-feedback">{errors.title.message}</div>
            )}
          </div>

          {/* Date and Time Row */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="date" className="form-label">
                Date *
              </label>
              <input
                id="date"
                type="date"
                className={`form-control ${errors.date ? "is-invalid" : ""}`}
                {...register("date", { required: "Date is required" })}
              />
              {errors.date && (
                <div className="invalid-feedback">{errors.date.message}</div>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="time" className="form-label">
                Time *
              </label>
              <input
                id="time"
                type="time"
                className={`form-control ${errors.time ? "is-invalid" : ""}`}
                {...register("time", { required: "Time is required" })}
              />
              {errors.time && (
                <div className="invalid-feedback">{errors.time.message}</div>
              )}
            </div>
          </div>

          {/* Meeting Level */}
          <div className="mb-3">
            <label htmlFor="level" className="form-label">
              Meeting Level *
            </label>
            <select
              id="level"
              className={`form-select ${errors.level ? "is-invalid" : ""}`}
              {...register("level", { required: "Please select a meeting level" })}
            >
              <option value="">Select Level</option>
              {meetingLevels.map((level) => (
                <option key={level.id} value={level.name}>
                  {level.name}
                </option>
              ))}
            </select>
            {errors.level && (
              <div className="invalid-feedback">{errors.level.message}</div>
            )}
          </div>

          {/* Participants */}
          <div className="mb-3">
            <label htmlFor="participants" className="form-label">
              Participants (Emails)
            </label>
            <input
              id="participants"
              className="form-control"
              {...register("participants")}
              placeholder="Enter participant emails, separated by commas"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              className="form-control"
              {...register("description")}
              placeholder="Enter meeting description"
              rows="4"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary px-4 py-2">
              Create Meeting
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ScheduleForm;