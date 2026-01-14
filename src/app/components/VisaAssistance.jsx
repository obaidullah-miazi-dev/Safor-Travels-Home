"use client";
import React, { useRef } from "react";
import {
  FileText,
  Globe,
  Users,
  Briefcase,
  ClipboardList,
  Send,
  BellRing,
  ShieldCheck,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VisaAssistance() {
  const container = useRef();
  const headerRef = useRef();
  const servicesRef = useRef();
  const processRef = useRef();
  const trustRef = useRef();

  useGSAP(
    () => {
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      const services = servicesRef.current.children;
      gsap.from(services, {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
      });

      const steps = processRef.current.children;
      gsap.from(steps, {
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
        x: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Trust Block Animation
      gsap.from(trustRef.current, {
        scrollTrigger: {
          trigger: trustRef.current,
          start: "top 80%",
        },
        x: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  const services = [
    {
      icon: <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Tourist Visa",
      description:
        "Explore the world with hassle-free tourist visa processing.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Visit Visa",
      description: "Short-term travel solutions for business or leisure.",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Family Visit Visa",
      description: "Reunite with loved ones with our expert assistance.",
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Visa Consultancy",
      description: "Expert advice for country-specific visa requirements.",
    },
  ];

  const steps = [
    {
      icon: <ClipboardList className="w-5 h-5" />,
      title: "Consultation",
      description: "Eligibility check & guidance",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Preparation",
      description: "Document organization",
    },
    {
      icon: <Send className="w-5 h-5" />,
      title: "Submission",
      description: "Application filing",
    },
    {
      icon: <BellRing className="w-5 h-5" />,
      title: "Updates",
      description: "Status tracking & delivery",
    },
  ];

  return (
    <section className="py-24" id="visaAssistance" ref={container}>
      <div className="max-w-11/12 mx-auto px-4">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold  mb-4">
            Visa Assistance
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Expert guidance to simplify your visa application process.
          </p>
        </div>

        {/* Supported Visa Types */}
        <div
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 dark:hover:border-blue-800 transition-colors"
            >
              <div className="mb-4 bg-blue-50  w-12 h-12 rounded-lg flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process & Trust Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-bold mb-8">Simple 4-Step Process</h3>
            <div
              ref={processRef}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg border border-slate-100 "
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{step.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div
              ref={trustRef}
              className="p-8 rounded-2xl shadow-lg border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-8 h-8 text-green-600 dark:text-green-500" />
                <h3 className="text-xl font-bold ">Why Choose Us?</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                We handle your application with professional care, ensuring
                accurate documentation and regular follow-ups to minimize
                rejection risks. Travel with confidence knowing your visa is in
                expert hands.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-colors shadow-lg hover:shadow-blue-600/20 flex items-center justify-center gap-2">
                Get Visa Guidance
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
