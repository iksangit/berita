"use client";

import { useState, useCallback } from "react";
import { Send, CheckCircle, AlertCircle, Loader2, Mail, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/data/config";
import { useTranslation } from "@/providers/translation-provider";

interface FormState {
  status: "idle" | "loading" | "success" | "error";
  message: string;
}

export function Contact() {
  const { t } = useTranslation();
  const [formState, setFormState] = useState<FormState>({ status: "idle", message: "" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = useCallback(() => {
    const newErrors: Record<string, string> = {};
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name) newErrors.name = t("contact.validation.nameRequired");
    else if (name.length < 2) newErrors.name = t("contact.validation.nameMin");
    if (!email) newErrors.email = t("contact.validation.emailRequired");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = t("contact.validation.emailValid");
    if (!message) newErrors.message = t("contact.validation.messageRequired");
    else if (message.length < 10) newErrors.message = t("contact.validation.messageMin");
    else if (message.length > 500) newErrors.message = t("contact.validation.messageMax");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, t]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState({ status: "loading", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Failed to send");
      }

      setFormState({ status: "success", message: t("contact.success") });
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch {
      setFormState({ status: "error", message: t("contact.error") });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error on change
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
    // Reset status on new input
    if (formState.status === "success" || formState.status === "error") {
      setFormState({ status: "idle", message: "" });
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left info */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {t("contact.title")}{" "}
                <span className="text-gradient">{t("contact.subtitle")}</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {t("contact.paragraph")}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground/70">Email</div>
                    <div className="text-sm text-foreground">{siteConfig.email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground/70">Location</div>
                    <div className="text-sm text-foreground">Indonesia</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3">
            <ScrollReveal delay={0.1}>
              <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-6 sm:p-8" noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-foreground">
                      {t("contact.labels.name")}
                    </label>
                    <Input
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Your name"
                      maxLength={100}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="mt-1 text-xs text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-foreground">
                      {t("contact.labels.email")}
                    </label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="your@email.com"
                      maxLength={200}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="mt-1 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-6">
                  <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-foreground">
                    {t("contact.labels.message")}
                  </label>
                  <Textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    maxLength={500}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-1 text-xs text-red-500">
                      {errors.message}
                    </p>
                  )}
                  <p className="mt-1 text-right text-xs text-muted-foreground">
                    {formData.message.length}/500
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="mt-6 w-full"
                  disabled={formState.status === "loading"}
                >
                  {formState.status === "loading" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      {t("contact.button")}
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                {formState.status === "success" && (
                  <div className="mt-4 flex items-center gap-2 rounded-lg border border-green-500/20 bg-green-500/10 p-3 text-sm text-green-500">
                    <CheckCircle className="h-4 w-4 shrink-0" />
                    {formState.message}
                  </div>
                )}

                {formState.status === "error" && (
                  <div className="mt-4 flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-500">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    {formState.message}
                  </div>
                )}
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
