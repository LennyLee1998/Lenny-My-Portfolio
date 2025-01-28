"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender Email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  let data;
  // 想在这里发送成功以后弹出一个toast
  try {
    // 这个to必须是注册resend的
    console.log("senderEmail");

    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: process.env.EMAIL_TO_ADDRESS || "",
      subject: "Message from contact form",
      // reply_to?: string | string[];
      replyTo: senderEmail,
      // text?: string;
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
    console.log("aa");
  } catch (error: unknown) {
    console.log(error);
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
