import React, { useRef, useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();
  const [reason, setReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!reason) {
      toast.error('Please select a reason ❌');
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("SUCCESS:", result);
      toast.success('Message sent successfully 🚀');
      form.current.reset();
      setReason('');
    } catch (error) {
      console.error("EMAILJS ERROR:", error);
      toast.error('Failed to send message ❌');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-6">

      <div>
        <Label htmlFor="user_name" className="text-muted">Name *</Label>
        <Input
          id="user_name"
          name="user_name"
          type="text"
          required
          className="mt-2 bg-input border-secondary/50 text-white focus-visible:border-secondary focus-visible:glow-cyan"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <Label htmlFor="user_email" className="text-muted">Email *</Label>
        <Input
          id="user_email"
          name="user_email"
          type="email"
          required
          className="mt-2 bg-input border-secondary/50 text-white focus-visible:border-secondary focus-visible:glow-cyan"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <Label htmlFor="user_phone" className="text-muted">Phone *</Label>
        <Input
          id="user_phone"
          name="user_phone"
          type="tel"
          required
          className="mt-2 bg-input border-secondary/50 text-white focus-visible:border-secondary focus-visible:glow-cyan"
          disabled={isSubmitting}
        />
      </div>

      <input type="hidden" name="reason" value={reason} />

      <div>
        <Label className="text-muted">Reason *</Label>
        <Select value={reason} onValueChange={setReason} disabled={isSubmitting}>
          <SelectTrigger className="mt-2 bg-input border-secondary/50 text-white focus:border-secondary focus:glow-cyan">
            <SelectValue placeholder="Select Reason" />
          </SelectTrigger>
          <SelectContent className="bg-card border-secondary text-white">
            <SelectItem value="Membership Inquiry">Membership Inquiry</SelectItem>
            <SelectItem value="Personal Training">Personal Training</SelectItem>
            <SelectItem value="General Question">General Question</SelectItem>
            <SelectItem value="Complaint">Complaint</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message" className="text-muted">Message *</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 bg-input border-secondary/50 text-white focus-visible:border-secondary focus-visible:glow-cyan"
          disabled={isSubmitting}
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-primary text-black border border-secondary hover:bg-secondary hover:text-background font-bold uppercase tracking-wider transition-all duration-300 hover:glow-cyan"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Transmitting...' : 'Send Message 🚀'}
      </Button>

    </form>
  );
}