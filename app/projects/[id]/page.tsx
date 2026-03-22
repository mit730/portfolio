"use client";

import { useParams, useRouter } from 'next/navigation';
import { projects } from '@/components/utils/common';
import Image from 'next/image';
import { FaLink, FaArrowLeft, FaUserMd, FaUser, FaCreditCard, FaEnvelope, FaCheckCircle, FaVideo } from 'react-icons/fa';
import toothaid from "../../../public/images/toothaid.png";
import vms from "../../../public/images/vms.png";
import imghippo from "../../../public/images/imghippo.png";

const ProjectDetails = () => {
  const params = useParams();
  const router = useRouter();
  const { id } = params;

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Project Not Found</h1>
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
        >
          <FaArrowLeft /> Go Back
        </button>
      </div>
    );
  }

  const image = project.id === "toothaid" ? toothaid : project.id === "vms" ? vms : project.id === "imghippo" ? imghippo : undefined;

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-6 sm:py-10 px-2 sm:px-4 md:px-8">
      <div className="max-w-7xl mx-auto w-full pt-2 sm:pt-6">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-4 sm:mb-6 transition-colors cursor-pointer w-fit px-1 sm:px-0"
        >
          <FaArrowLeft /> Back to Projects
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-3xl overflow-hidden shadow-xl">
          <div className="h-48 sm:h-64 md:h-[400px] lg:h-[500px] bg-gray-200 dark:bg-gray-700 relative">
            {image ? (
              <Image
                src={image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500"></div>
            )}
          </div>

          <div className="p-4 sm:p-6 md:p-10 lg:p-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h1>
              <div className="flex w-full md:w-auto gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full md:w-auto gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
                >
                  <FaLink /> Live Preview
                </a>
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none mb-8 sm:mb-12">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Overview</h3>
              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.id === "toothaid" && (
              <div className="border-t border-gray-200 dark:border-gray-700 pt-8 sm:pt-10 mb-8 sm:mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center sm:text-left">How Toothaid Works</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative">
                  
                  {/* Step 1 */}
                  <div className="bg-blue-50 dark:bg-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-100 dark:border-gray-700 hover:shadow-lg transition-all">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center mb-3 sm:mb-4 text-white shadow-md">
                      <FaUserMd className="text-sm sm:text-base"/>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">1. Doctor Portal Setup</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                      Doctors register, set their availability, and connect a Stripe account to receive direct payouts.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-indigo-50 dark:bg-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-indigo-100 dark:border-gray-700 hover:shadow-lg transition-all">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-500 rounded-full flex items-center justify-center mb-3 sm:mb-4 text-white shadow-md">
                      <FaUser className="text-sm sm:text-base" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">2. Customer Booking</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                      Customers log into an independent portal to request a live consultation.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-green-50 dark:bg-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-green-100 dark:border-gray-700 hover:shadow-lg transition-all">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center mb-3 sm:mb-4 text-white shadow-md">
                      <FaCreditCard className="text-sm sm:text-base" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">3. Checkout & Payment</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                      The customer pays a flat fee of $19.99 via a secure Stripe checkout form to confirm the booking.
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div className="bg-yellow-50 dark:bg-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-yellow-100 dark:border-gray-700 hover:shadow-lg transition-all">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-3 sm:mb-4 text-white shadow-md">
                      <FaEnvelope className="text-sm sm:text-base" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">4. Email Notification</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                      An email request for the booked consultation goes out to the available doctors.
                    </p>
                  </div>

                  {/* Step 5 */}
                  <div className="bg-purple-50 dark:bg-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-purple-100 dark:border-gray-700 hover:shadow-lg transition-all">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-full flex items-center justify-center mb-3 sm:mb-4 text-white shadow-md">
                      <FaCheckCircle className="text-sm sm:text-base" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">5. Doctor Acceptance</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                      The first doctor to accept the incoming notification claims the session exclusively.
                    </p>
                  </div>

                  {/* Step 6 */}
                  <div className="bg-teal-50 dark:bg-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-teal-100 dark:border-gray-700 hover:shadow-lg transition-all">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-500 rounded-full flex items-center justify-center mb-3 sm:mb-4 text-white shadow-md">
                      <FaVideo className="text-sm sm:text-base" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">6. Live Call & Split</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                      A successful WebRTC video call takes place. From the $19.99, the Doctor gets 80%, Stripe takes standard fees (~2.9%), and the platform keeps the remainder.
                    </p>
                  </div>

                </div>
              </div>
            )}

            <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.split(',').map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
