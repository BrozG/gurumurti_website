import React from "react";
import SectionTitle from "@/components/SectionTitle";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Contact Us"
          subtitle="Let's discuss how we can make your dream wedding a reality"
        />

        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-6">
            Get in Touch
          </h3>
          <p className="mb-8 text-sm sm:text-base">
            We'd love to hear about your wedding plans. Reach out to us for a
            consultation, and let's create something beautiful together.
          </p>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold-100 flex items-center justify-center rounded-full mr-3 sm:mr-4 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gold-600"
                >
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-muted-foreground">+91 9832993905</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold-100 flex items-center justify-center rounded-full mr-3 sm:mr-4 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gold-600"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-muted-foreground break-all sm:break-normal">
                  gurumurtidecorators@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold-100 flex items-center justify-center rounded-full mr-3 sm:mr-4 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gold-600"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-muted-foreground">
                  Indira Bye Pass Road, Opposite S.D.F Bhawan, Gangtok, Sikkim,
                  India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
