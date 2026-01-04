"use client";

import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget); // event.target → event.currentTarget (better typing)

        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
        if (!accessKey) {
            console.error("Access key is missing!");
            setStatus("An error occurred. Please try again.");
            return;
        }

        formData.append("access_key", accessKey);
        console.log("sending")
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            const result = await response.json();
            if (result.success) {
                setStatus("Form submitted successfully!");
                event.currentTarget.reset(); // Reset form on success
            } else {
                setStatus("Submission failed. Please try again.");
            }
        } catch (error) {
            setStatus("An error occurred. Please try again.");
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className="bg-gold p-6 rounded-md">
            <h3 className="text-xl font-bold mb-4 text-center">צור איתנו קשר</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input type="text" placeholder="שם מלא" name="name" required className="w-full px-3 py-2 rounded-md bg-gold-light text-dark-light placeholder-dark-light border border-gold-dark" />
                </div>
                <div>
                    <input type="email" name="email" required placeholder="אימייל"
                        className="w-full px-3 py-2 rounded-md bg-gold-light text-dark-light placeholder-dark-light border border-gold-dark" />
                </div>
                <div>
                    <textarea name="message" required placeholder="הודעה"
                        rows={4}
                        className="w-full px-3 py-2 rounded-md bg-gold-light text-dark-light placeholder-dark-light border border-gold-dark"
                    ></textarea>
                </div>
                <button type="submit" className="bg-dark text-white px-8 py-2 rounded-md hover:bg-dark-light transition duration-300">
                    שליחה
                </button>
            </form>
            {status && <p className="mt-2 text-center text-sm text-gray-600">{status}</p>}
        </div>
    );
}
