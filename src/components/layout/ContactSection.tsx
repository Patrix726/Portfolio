import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "@/lib/constants";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

export const ContactSection = () => {
	const form = useRef<HTMLFormElement>(null);
	const [submitting, setSubmitting] = useState<boolean>(false);

	const sendEmail: React.FormEventHandler = async (e) => {
		e.preventDefault();

		if (!form.current) return;

		setSubmitting(true);
		const id = toast.loading("Sending message...", {
			style: {
				backgroundColor: "var(--color-frame)",
				color: "var(--color-foreground)",
				borderRadius: 0,
				padding: "0.5rem 1rem",
				clipPath:
					"polygon(8px 0, 0 8px,0 calc(100% - 8px), 8px 100%, calc(100% - 8px) 100%, 100% calc(100% - 8px), 100% 8px, calc(100% - 8px) 0, 8px 0)",
			},
		});

		try {
			await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
				publicKey: PUBLIC_KEY,
			});
			toast.success("Message sent", {
				id,
			});
		} catch (error) {
			console.error("Failed to send email", error);
			toast.error("Failed to send message", {
				id,
			});
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<section className="contact-section section">
			<h2 className="mb-4">Contact Me</h2>
			<form onSubmit={sendEmail} ref={form} className="flex flex-col gap-2">
				<input type="text" name="name" placeholder="name" required />
				<input type="email" name="email" placeholder="email" required />
				<textarea
					name="message"
					placeholder="your message"
					required
					rows={5}
				></textarea>
				<button className="btn max-w-24 mt-4" disabled={submitting}>
					Send
				</button>
			</form>
		</section>
	);
};
