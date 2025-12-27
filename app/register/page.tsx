"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    veganStatus: "",
    numberOfPeople: "1",
    hasPets: "no",
    petDetails: "",
    expectations: "",
    activities: "",
    agreeToGuidelines: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Google Apps Script Web App URL - Replace with your actual URL
      const GOOGLE_SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbxic86uWGp0P1lkTDb1BZg8j8BMnPHOVHGleZB_epzkBvv2aEdwuLUZiHHDPtdOR_DVSQ/exec";

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      // With no-cors mode, we can't read the response, so we assume success
      setSubmitStatus("success");

      // Reset form
      setFormData({
        name: "",
        email: "",
        mobile: "",
        veganStatus: "",
        numberOfPeople: "1",
        hasPets: "no",
        petDetails: "",
        expectations: "",
        activities: "",
        agreeToGuidelines: false,
      });

      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = () => {
    return (
      formData.name &&
      formData.email &&
      formData.mobile &&
      formData.veganStatus &&
      formData.numberOfPeople &&
      formData.agreeToGuidelines
    );
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-2xl mx-auto px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Registration
          </h1>
          <p className="text-gray-600">
            Join us for Vegan Retreat 2026
          </p>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Success Message */}
        {submitStatus === "success" && (
          <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="font-bold text-green-900 mb-1">
                  Registration Successful!
                </h3>
                <p className="text-green-800 text-sm">
                  Thank you for registering! We'll be in touch soon with more
                  details. For any questions, DM us on Instagram{" "}
                  <a
                    href="https://instagram.com/indicpilgrim"
                    target="_blank"
                    className="underline font-medium"
                  >
                    @indicpilgrim
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === "error" && (
          <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="font-bold text-red-900 mb-1">
                  Submission Failed
                </h3>
                <p className="text-red-800 text-sm">
                  There was an error submitting your registration. Please try
                  again or contact us on Instagram{" "}
                  <a
                    href="https://instagram.com/indicpilgrim"
                    target="_blank"
                    className="underline font-medium"
                  >
                    @indicpilgrim
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold">Personal Information</h2>

            <div>
              <label htmlFor="name" className="block font-medium mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="mobile" className="block font-medium mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                required
                value={formData.mobile}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
          </section>

          {/* Retreat Details */}
          <section className="space-y-4 pt-6 border-t border-gray-200">
            <h2 className="text-xl font-bold">Retreat Details</h2>

            <div>
              <label className="block font-medium mb-2">
                Current Status <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="veganStatus"
                    value="vegan"
                    checked={formData.veganStatus === "vegan"}
                    onChange={handleChange}
                    className="w-4 h-4"
                  />
                  <span>Vegan</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="veganStatus"
                    value="aspiring"
                    checked={formData.veganStatus === "aspiring"}
                    onChange={handleChange}
                    className="w-4 h-4"
                  />
                  <span>Aspiring Vegan</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="veganStatus"
                    value="exploring"
                    checked={formData.veganStatus === "exploring"}
                    onChange={handleChange}
                    className="w-4 h-4"
                  />
                  <span>Neither (exploring veganism)</span>
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="numberOfPeople" className="block font-medium mb-1">
                Including yourself, how many of you are interested in coming?{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="numberOfPeople"
                name="numberOfPeople"
                required
                min="1"
                value={formData.numberOfPeople}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                Will you be bringing any pets?
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hasPets"
                    value="no"
                    checked={formData.hasPets === "no"}
                    onChange={handleChange}
                    className="w-4 h-4"
                  />
                  <span>No</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hasPets"
                    value="yes"
                    checked={formData.hasPets === "yes"}
                    onChange={handleChange}
                    className="w-4 h-4"
                  />
                  <span>Yes</span>
                </label>
              </div>

              {formData.hasPets === "yes" && (
                <textarea
                  name="petDetails"
                  value={formData.petDetails}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Please provide details (type of pet, vaccination status)"
                  className="w-full mt-3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              )}
            </div>
          </section>

          {/* Experience & Engagement */}
          <section className="space-y-4 pt-6 border-t border-gray-200">
            <h2 className="text-xl font-bold">Experience & Engagement</h2>

            <div>
              <label htmlFor="expectations" className="block font-medium mb-1">
                What are your expectations from the retreat?
              </label>
              <textarea
                id="expectations"
                name="expectations"
                value={formData.expectations}
                onChange={handleChange}
                rows={3}
                maxLength={500}
                placeholder="Share what you're hoping to experience..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="activities" className="block font-medium mb-1">
                Any activity you'd like to conduct or lead?
              </label>
              <textarea
                id="activities"
                name="activities"
                value={formData.activities}
                onChange={handleChange}
                rows={2}
                placeholder="E.g., Yoga, meditation, vegan cooking, nature photography..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
          </section>

          {/* Consent & Acknowledgment */}
          <section className="space-y-4 pt-6 border-t border-gray-200">
            <h2 className="text-xl font-bold">Consent & Acknowledgment</h2>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="agreeToGuidelines"
                checked={formData.agreeToGuidelines}
                onChange={handleChange}
                required
                className="w-4 h-4 mt-1 flex-shrink-0"
              />
              <span className="text-gray-700">
                I agree to abide by all retreat guidelines, and understand this is a self-organized, non-commercial retreat and expectations should be adjusted accordingly.{" "}
                <span className="text-red-500">*</span>
              </span>
            </label>
          </section>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={!isFormValid() || isSubmitting}
              className="w-full px-6 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Registration"}
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-gray-400 text-center text-sm">
        <div className="max-w-2xl mx-auto">
          <p>
            Questions? DM us on Instagram:{" "}
            <a
              href="https://instagram.com/indicpilgrim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              @indicpilgrim
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
