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
    communityConnections: "",
    referral: "",
    dietaryInfo: "",
    accessibilityRequirements: "",
    agreeVegan: false,
    agreeSelfOrganized: false,
    agreeGuidelines: false,
    agreeRefundPolicy: false,
    agreeDecisions: false,
    stayConnected: false,
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

      const response = await fetch(GOOGLE_SCRIPT_URL, {
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
        communityConnections: "",
        referral: "",
        dietaryInfo: "",
        accessibilityRequirements: "",
        agreeVegan: false,
        agreeSelfOrganized: false,
        agreeGuidelines: false,
        agreeRefundPolicy: false,
        agreeDecisions: false,
        stayConnected: false,
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
      formData.agreeVegan &&
      formData.agreeSelfOrganized &&
      formData.agreeGuidelines &&
      formData.agreeRefundPolicy &&
      formData.agreeDecisions
    );
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6"
          >
            <svg
              className="w-5 h-5"
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
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Registration
          </h1>
          <p className="text-xl text-gray-600">
            Join us for Vegan Retreat 2026
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Success Message */}
        {submitStatus === "success" && (
          <div className="mb-12 p-8 bg-green-50 border border-green-200 rounded-2xl">
            <div className="flex items-start gap-4">
              <svg
                className="w-6 h-6 text-green-600 flex-shrink-0 mt-1"
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
                <h3 className="text-xl font-bold text-green-900 mb-2">
                  Registration Successful!
                </h3>
                <p className="text-green-800">
                  Thank you for registering! We'll be in touch soon with more
                  details about the venue and next steps. For any immediate
                  questions, feel free to DM us on Instagram{" "}
                  <a
                    href="https://instagram.com/indic.pilgrim"
                    target="_blank"
                    className="underline font-medium"
                  >
                    @indic.pilgrim
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === "error" && (
          <div className="mb-12 p-8 bg-red-50 border border-red-200 rounded-2xl">
            <div className="flex items-start gap-4">
              <svg
                className="w-6 h-6 text-red-600 flex-shrink-0 mt-1"
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
                <h3 className="text-xl font-bold text-red-900 mb-2">
                  Submission Failed
                </h3>
                <p className="text-red-800">
                  There was an error submitting your registration. Please try
                  again or contact us directly on Instagram{" "}
                  <a
                    href="https://instagram.com/indic.pilgrim"
                    target="_blank"
                    className="underline font-medium"
                  >
                    @indic.pilgrim
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Personal Information */}
          <section className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Personal Information</h2>
              <p className="text-gray-600">Let us know who you are</p>
            </div>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium mb-3"
                >
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
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium mb-3"
                >
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
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                />
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className="block text-lg font-medium mb-3"
                >
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
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                />
              </div>
            </div>
          </section>

          {/* Retreat Details */}
          <section className="space-y-8 pt-12 border-t border-gray-200">
            <div>
              <h2 className="text-3xl font-bold mb-2">Retreat Details</h2>
              <p className="text-gray-600">Tell us about your journey</p>
            </div>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="veganStatus"
                  className="block text-lg font-medium mb-3"
                >
                  Current Status <span className="text-red-500">*</span>
                </label>
                <select
                  id="veganStatus"
                  name="veganStatus"
                  required
                  value={formData.veganStatus}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                >
                  <option value="">Select your status</option>
                  <option value="vegan">Vegan</option>
                  <option value="aspiring">Aspiring Vegan</option>
                  <option value="exploring">
                    Neither (exploring veganism)
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="numberOfPeople"
                  className="block text-lg font-medium mb-3"
                >
                  How many people are you bringing?{" "}
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
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Including yourself. Please specify number of adults and
                  children if applicable.
                </p>
              </div>

              <div>
                <label className="block text-lg font-medium mb-3">
                  Will you be bringing any pets?
                </label>
                <div className="flex gap-6 mb-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="hasPets"
                      value="no"
                      checked={formData.hasPets === "no"}
                      onChange={handleChange}
                      className="w-5 h-5"
                    />
                    <span className="text-lg">No</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="hasPets"
                      value="yes"
                      checked={formData.hasPets === "yes"}
                      onChange={handleChange}
                      className="w-5 h-5"
                    />
                    <span className="text-lg">Yes</span>
                  </label>
                </div>

                {formData.hasPets === "yes" && (
                  <textarea
                    name="petDetails"
                    value={formData.petDetails}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Please provide details (type of pet, vaccination status, any special requirements)"
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                  />
                )}
              </div>
            </div>
          </section>

          {/* Experience & Engagement */}
          <section className="space-y-8 pt-12 border-t border-gray-200">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                Experience & Engagement
              </h2>
              <p className="text-gray-600">
                Share your hopes and contributions
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="expectations"
                  className="block text-lg font-medium mb-3"
                >
                  What are your expectations from the retreat?
                </label>
                <textarea
                  id="expectations"
                  name="expectations"
                  value={formData.expectations}
                  onChange={handleChange}
                  rows={4}
                  maxLength={500}
                  placeholder="Share what you're hoping to experience or gain from this retreat..."
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Maximum 500 characters
                </p>
              </div>

              <div>
                <label
                  htmlFor="activities"
                  className="block text-lg font-medium mb-3"
                >
                  Any activity you'd like to conduct or lead?
                </label>
                <textarea
                  id="activities"
                  name="activities"
                  value={formData.activities}
                  onChange={handleChange}
                  rows={3}
                  placeholder="E.g., Yoga, meditation, vegan cooking session, slacklining, unicycling, drone flying, nature photography, storytelling, etc."
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                />
                <p className="text-sm text-gray-500 mt-2">
                  We'd love to know if you have skills or activities you'd like
                  to share with the group
                </p>
              </div>
            </div>
          </section>

          {/* Help Us Spread the Word */}
          <section className="space-y-8 pt-12 border-t border-gray-200">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                Help Us Spread the Word
              </h2>
              <p className="text-gray-600">
                Connect us with the vegan community
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="communityConnections"
                  className="block text-lg font-medium mb-3"
                >
                  Suggest WhatsApp groups, Facebook or Instagram pages/handles
                </label>
                <textarea
                  id="communityConnections"
                  name="communityConnections"
                  value={formData.communityConnections}
                  onChange={handleChange}
                  rows={3}
                  placeholder="E.g., 'Bangalore Vegans' WhatsApp group, @vegansofindia on Instagram, etc."
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Where we could share about this event to find more vegans
                </p>
              </div>

              <div>
                <label
                  htmlFor="referral"
                  className="block text-lg font-medium mb-3"
                >
                  Anyone you'd like us to share information about the retreat
                  with?
                </label>
                <input
                  type="text"
                  id="referral"
                  name="referral"
                  value={formData.referral}
                  onChange={handleChange}
                  placeholder="Name and contact details (optional)"
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                />
              </div>
            </div>
          </section>

          {/* Special Requirements */}
          <section className="space-y-8 pt-12 border-t border-gray-200">
            <div>
              <h2 className="text-3xl font-bold mb-2">Special Requirements</h2>
              <p className="text-gray-600">
                Help us ensure your comfort and safety
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="dietaryInfo"
                  className="block text-lg font-medium mb-3"
                >
                  Any allergens, dietary restrictions, or medical information?
                </label>
                <textarea
                  id="dietaryInfo"
                  name="dietaryInfo"
                  value={formData.dietaryInfo}
                  onChange={handleChange}
                  rows={3}
                  placeholder="E.g., nut allergies, gluten intolerance, mobility requirements, medications, etc."
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                />
                <p className="text-sm text-gray-500 mt-2">
                  This information is confidential and helps us ensure your
                  safety and comfort
                </p>
              </div>

              <div>
                <label
                  htmlFor="accessibilityRequirements"
                  className="block text-lg font-medium mb-3"
                >
                  Do you have any accessibility requirements?
                </label>
                <textarea
                  id="accessibilityRequirements"
                  name="accessibilityRequirements"
                  value={formData.accessibilityRequirements}
                  onChange={handleChange}
                  rows={3}
                  placeholder="E.g., wheelchair access, hearing assistance, etc."
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                />
              </div>
            </div>
          </section>

          {/* Consent & Acknowledgment */}
          <section className="space-y-8 pt-12 border-t border-gray-200">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                Consent & Acknowledgment
              </h2>
              <p className="text-gray-600">
                Please review and agree to the following
              </p>
            </div>

            <div className="space-y-4">
              <label className="flex items-start gap-4 cursor-pointer group">
                <input
                  type="checkbox"
                  name="agreeVegan"
                  checked={formData.agreeVegan}
                  onChange={handleChange}
                  required
                  className="w-5 h-5 mt-1 flex-shrink-0"
                />
                <span className="text-lg group-hover:text-gray-700">
                  I will remain vegan throughout the entire retreat (both at the
                  venue and outside) <span className="text-red-500">*</span>
                </span>
              </label>

              <label className="flex items-start gap-4 cursor-pointer group">
                <input
                  type="checkbox"
                  name="agreeSelfOrganized"
                  checked={formData.agreeSelfOrganized}
                  onChange={handleChange}
                  required
                  className="w-5 h-5 mt-1 flex-shrink-0"
                />
                <span className="text-lg group-hover:text-gray-700">
                  I understand this is a self-organized, non-commercial retreat
                  and expectations should be adjusted accordingly{" "}
                  <span className="text-red-500">*</span>
                </span>
              </label>

              <label className="flex items-start gap-4 cursor-pointer group">
                <input
                  type="checkbox"
                  name="agreeGuidelines"
                  checked={formData.agreeGuidelines}
                  onChange={handleChange}
                  required
                  className="w-5 h-5 mt-1 flex-shrink-0"
                />
                <span className="text-lg group-hover:text-gray-700">
                  I agree to abide by all retreat guidelines (no alcohol,
                  smoking, or substances; civil and courteous behavior){" "}
                  <span className="text-red-500">*</span>
                </span>
              </label>

              <label className="flex items-start gap-4 cursor-pointer group">
                <input
                  type="checkbox"
                  name="agreeRefundPolicy"
                  checked={formData.agreeRefundPolicy}
                  onChange={handleChange}
                  required
                  className="w-5 h-5 mt-1 flex-shrink-0"
                />
                <span className="text-lg group-hover:text-gray-700">
                  I have read and accept the cancellation and refund policy{" "}
                  <span className="text-red-500">*</span>
                </span>
              </label>

              <label className="flex items-start gap-4 cursor-pointer group">
                <input
                  type="checkbox"
                  name="agreeDecisions"
                  checked={formData.agreeDecisions}
                  onChange={handleChange}
                  required
                  className="w-5 h-5 mt-1 flex-shrink-0"
                />
                <span className="text-lg group-hover:text-gray-700">
                  I understand that organizer decisions are final and binding{" "}
                  <span className="text-red-500">*</span>
                </span>
              </label>

              <div className="pt-4 border-t border-gray-200 mt-8">
                <label className="flex items-start gap-4 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="stayConnected"
                    checked={formData.stayConnected}
                    onChange={handleChange}
                    className="w-5 h-5 mt-1 flex-shrink-0"
                  />
                  <span className="text-lg group-hover:text-gray-700">
                    I'd like to receive updates about future vegan retreats and
                    events
                  </span>
                </label>
              </div>
            </div>
          </section>

          {/* Submit Button */}
          <div className="pt-8">
            <button
              type="submit"
              disabled={!isFormValid() || isSubmitting}
              className="w-full px-8 py-5 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-300"
            >
              {isSubmitting ? "Submitting..." : "Submit Registration"}
            </button>
            <p className="text-center text-sm text-gray-500 mt-4">
              By submitting this form, you agree to our terms and conditions
            </p>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-400 text-center mt-20">
        <div className="max-w-4xl mx-auto">
          <p>
            Questions? DM us on Instagram:{" "}
            <a
              href="https://instagram.com/indic.pilgrim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              @indic.pilgrim
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
