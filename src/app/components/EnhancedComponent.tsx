// app/page.tsx
"use client";
import { motion } from "framer-motion";
import { certificates } from "../../../data";

export default function CertificatesPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Navigation */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-gray-900 mb-12 text-center"
        >
          CERTIFICATE
        </motion.h1>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg h-48 w-full overflow-hidden">
                    {/* Add your icon or image here */}
                    <img
                      className="text-blue-600 font-semibold w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      src={cert.src}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600 mb-4">{cert.issuer}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
