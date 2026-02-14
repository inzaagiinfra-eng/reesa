import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-3xl p-10">

        <h2 className="text-3xl font-bold text-center text-red-600 mb-10">
          Contact Information
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">

          {/* Address */}
          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <MapPin className="mx-auto text-red-600 mb-4" size={40} />
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-gray-600">
              West RohtasNagar Main Market, <br />Shahadara, New Delhi-110032
             
             
            </p>
          </div>

          {/* Phone */}
          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <Phone className="mx-auto text-red-600 mb-4" size={40} />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">
              +91 9315304212
            </p>
          </div>

          {/* Email */}
          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <Mail className="mx-auto text-red-600 mb-4" size={40} />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-600">
              reesabyneha@gmail.com
              sales@reesa.in
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
